import i18n from 'i18next'
import path from 'path'
import fs from 'fs-extra'
import store from './common/store'
import logger from './common/logger'
import { showDialog, recoverableErrorDialog, selectDirectory } from './dialogs'
import dock from './dock'
import { IS_WIN } from './common/consts'

export default function ({ stopIpfs, startIpfs }) {
  dock.run(async () => {
    logger.info('[move repository] user prompted about effects')

    const opt = showDialog({
      title: i18n.t('moveRepositoryWarnDialog.title'),
      message: i18n.t('moveRepositoryWarnDialog.message'),
      type: 'warning',
      buttons: [
        i18n.t('moveRepositoryWarnDialog.action'),
        i18n.t('cancel')
      ],
      showDock: false
    })

    if (opt !== 0) {
      logger.info('[move repository] user canceled')
      return
    }

    logger.info('[move repository] user will pick directory')
    const dir = await selectDirectory()

    if (!dir) {
      logger.info('[move repository] user canceled')
      return
    }

    const config = store.get('ipfsConfig')

    const currDir = config.path
    const currName = path.basename(currDir)
    const newDir = path.join(dir, currName)

    if (currDir === newDir) {
      logger.info('[move repository] new dir is the same as old dir')

      return showDialog({
        title: i18n.t('moveRepositorySameDirDialog.title'),
        message: i18n.t('moveRepositorySameDirDialog.message', { location: newDir }),
        type: 'warning',
        showDock: false
      })
    }

    await stopIpfs()

    try {
      await fs.move(currDir, newDir)
      logger.info(`[move repository] moved from ${currDir} to ${newDir}`)
    } catch (err) {
      logger.error(`[move repository] ${err.toString()}`)
      return recoverableErrorDialog(err)
    }

    config.path = newDir
    store.set('ipfsConfig', config)
    logger.info('[move repository] configuration updated')
    updateIpfsPath(newDir)

    showDialog({
      title: i18n.t('moveRepositorySuccessDialog.title'),
      message: i18n.t('moveRepositorySuccessDialog.message', { location: newDir }),
      showDock: false
    })

    await startIpfs()
  })
}

function updateIpfsPath (repoPath) {
  let scriptPath = null

  if (IS_WIN) {
    scriptPath = path.join(__dirname, './ipfs-on-path/scripts/bin-win/ipfs.cmd')
  } else {
    scriptPath = path.join(__dirname, './ipfs-on-path/scripts/ipfs.sh')
  }

  const script = fs.readFileSync(scriptPath).toString()
  let newScript

  if (IS_WIN) {
    newScript = script.replace(/set IPFS_PATH=(.)*/, `set IPFS_PATH=${repoPath}`)
  } else {
    newScript = script.replace(/export IPFS_PATH=(.)*/, `export IPFS_PATH="${repoPath}"`)
  }

  fs.writeFileSync(scriptPath, newScript)
}
