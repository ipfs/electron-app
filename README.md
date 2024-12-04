# IPFS Desktop

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](https://protocol.ai/)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.tech/)
[![total download count](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/total.svg?style=flat-square&label=all%20downloads)](https://github.com/ipfs/ipfs-desktop/releases)
[![latest release download count](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/total.svg?style=flat-square)](https://github.com/ipfs/ipfs-desktop/releases/tag/v0.40.1)

**IPFS Desktop gives you all the power of [IPFS](https://ipfs.tech) in a convenient desktop app: a complete IPFS node, plus handy OS menubar/taskbar shortcuts and an all-in-one file manager, peer map, and content explorer.**

Use IPFS Desktop to get acquainted with IPFS without needing to touch the terminal — or, if you're already experienced, use the powerful menubar/taskbar shortcuts alongside the command line to make your IPFS workflow faster.

![Status screen of IPFS Desktop](https://gateway.ipfs.io/ipfs/QmYHuXitXMf5xTjiQXmXdqszvMTADvrM5zA7EqoDj3d3RH)

| Files screen | Explore screen | Peers screen | Settings screen | Menubar/taskbar |
|-------|---------|-------|----------|------|
| ![Screenshot of the Files screen](https://gateway.ipfs.io/ipfs/QmRN82RPWHKuSuBadijTQuaCjFKAGaymt3aFBoG6Du9Vi3) | ![Screenshot of the Explore screen](https://gateway.ipfs.io/ipfs/Qmaerxh9UKf9F3YPKnV2cBEnPQoJdVmkswFdz7kNQGncKt) | ![Screenshot of the Peers screen](https://gateway.ipfs.io/ipfs/QmaVbBYsEBb34HMP1YWeErrS7X3TB6Y9t1iQ4sBRnTvSwa) | ![Screenshot of the Settings screen](https://gateway.ipfs.io/ipfs/Qmby5RuN7K9s5W9RVLdrQSE8gRKQ66EX8c39iC31DLAxN6) | ![Screenshot of Mac/Windows menus](https://gateway.ipfs.io/ipfs/QmbT2YtuNo17Qaq31FJWRZgRMY4E6N9cdfBwzZTFSHUoBP) |

### Quick-install shortcuts

When in doubt, pick one of package formats with built-in automatic update mechanism:

- **Mac:** [ipfs-desktop-0.40.1-mac.dmg](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-mac.dmg)
- **Windows:** [IPFS-Desktop-Setup-0.40.1.exe](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/IPFS-Desktop-Setup-0.40.1.exe)
- **Linux:**  [ipfs-desktop-0.40.1-linux-x86_64.AppImage](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-x86_64.AppImage)
  - If you prefer to manage updates on your own, see [other package formats](#install) below.

### Table of Contents

- [IPFS Desktop](#ipfs-desktop)
    - [Quick-install shortcuts](#quick-install-shortcuts)
    - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Start your node at system startup and control it from your OS](#start-your-node-at-system-startup-and-control-it-from-your-os)
    - [Quickly import files, folders, and screenshots to IPFS](#quickly-import-files-folders-and-screenshots-to-ipfs)
    - [Easily manage the contents of your node](#easily-manage-the-contents-of-your-node)
    - [Visualize your IPFS peers worldwide](#visualize-your-ipfs-peers-worldwide)
    - [Explore the "Merkle Forest" of IPFS files](#explore-the-merkle-forest-of-ipfs-files)
    - [Enjoy OS-wide support for IPFS files and links](#enjoy-os-wide-support-for-ipfs-files-and-links)
    - [Learn IPFS commands as you go](#learn-ipfs-commands-as-you-go)
  - [Install](#install)
    - [Mac](#mac)
    - [Windows](#windows)
    - [Linux/FreeBSD](#linuxfreebsd)
    - [Install from source](#install-from-source)
  - [Contribute](#contribute)
    - [Translations](#translations)
    - [Developer notes](#developer-notes)
  - [FAQ & Troubleshooting](#faq--troubleshooting)
    - [Why am I missing the system tray menu on Linux?](#why-am-i-missing-the-system-tray-menu-on-linux)
    - [Why can't I install IPFS Desktop under Debian 11?](#why-cant-i-install-ipfs-desktop-under-debian-11)
    - [Why can't I start IPFS Desktop under Debian 10?](#why-cant-i-start-ipfs-desktop-under-debian-10)
    - [Where are my IPFS configuration and log files?](#where-are-my-ipfs-configuration-and-log-files)
    - [How does IPFS Desktop select the IPFS repo location?](#how-does-ipfs-desktop-select-the-ipfs-repo-location)
    - [Which version of IPFS does IPFS Desktop use?](#which-version-of-ipfs-does-ipfs-desktop-use)
    - [Which flags does IPFS Desktop boot with?](#which-flags-does-ipfs-desktop-boot-with)
    - [I got a `repo.lock` error. How do I resolve this?](#i-got-a-repolock-error-how-do-i-resolve-this)
    - [I got a network error (e.g. `Error fetching`). What should I do?](#i-got-a-network-error-eg-error-fetching-what-should-i-do)
    - [I need more help!](#i-need-more-help)
  - [License](#license)

## Features

IPFS Desktop combines a complete IPFS node (running [kubo](https://github.com/ipfs/kubo)) and the [IPFS Web UI](https://github.com/ipfs-shipyard/ipfs-webui) into a single, convenient desktop app — plus adds a menu to your OS menubar/system tray for easy access to a variety of common IPFS tasks.

If you already have an IPFS node on your computer, IPFS Desktop will act as a control panel and file browser for that node. If you don't have a node, it'll install one for you. And either way, IPFS Desktop will automatically check for updates.

### Start your node at system startup and control it from your OS

IPFS Desktop enables you to stop or restart your node straight from the IPFS logo menu in your OS menubar/system tray. For Mac and Windows users, IPFS Desktop can also be set to launch at system startup, ensuring that your node is running whenever your computer is on.

### Quickly import files, folders, and screenshots to IPFS

Import files and folders to your IPFS node in a variety of convenient ways:
- Drag and drop items onto IPFS Desktop's `Files` screen
- Click the `Import` button on the `Files` screen to add items from your computer or an IPFS [content ID (CID)](https://docs.ipfs.tech/concepts/content-addressing/#identifier-formats)
- (Windows) Right-click a file/folder's icon to add it to IPFS from the pop-up menu
- (Mac) Drag and drop a file/folder onto the IPFS logo in your menubar

Plus, you can use the `Take Screenshot` command under the IPFS logo menu to take a screenshot, import it to your node, and copy a shareable link to your clipboard with one click.

### Easily manage the contents of your node

IPFS Desktop's `Files` screen gives you an easy, familiar interface for working with the contents of your node:
- Easily rename, move, or remove files and folders
- Preview many common file formats directly in IPFS Desktop
- Copy a file/folder's IPFS [content ID (CID)](https://docs.ipfs.tech/concepts/content-addressing/#identifier-formats) or a shareable link to your clipboard
- ["Pin"](https://docs.ipfs.tech/concepts/persistence/) files to your IPFS node or (coming soon!) to a third-party pinning service

### Visualize your IPFS peers worldwide

Visit the `Peers` screen to see what nodes you're connected to, where they are, the connections they're using, and more.

### Explore the "Merkle Forest" of IPFS files

Use the `Explore` screen to explore some example datasets — or your own files — and see firsthand how items stored on IPFS are broken down into content-addressed pieces.

### Enjoy OS-wide support for IPFS files and links

IPFS Desktop enables most operating systems (Mac, Windows and some Linux flavors) to support protocols including `ipfs://` and `ipns://`. This means that if an app on your computer tries to open a link starting with one of those protocol identifiers (for example, if your web browser encounters a link to `ipns://en.wikipedia-on-ipfs.org`), it'll automatically open in IPFS Desktop.

For an even better experience with `ipfs://`, and `ipns://` addresses, we also recommend installing [IPFS Companion](https://github.com/ipfs-shipyard/ipfs-companion) to add support in your favorite browser!

### Learn IPFS commands as you go

If you're interested in learning how to use IPFS from the command line, IPFS Desktop's CLI Tutor Mode can show you common IPFS commands as you go. Just check the `CLI Tutor Mode` box on the `Settings` screen to switch on this feature.

## Install

Release notes and older versions of IPFS Desktop can be found on the [releases page](https://github.com/ipfs/ipfs-desktop/releases).

Don't see your favorite package manager? Visit our [package managers page](https://github.com/ipfs/ipfs-desktop/issues/691) and help us add support for it!

### Mac
- **Installer:** [ipfs-desktop-0.40.1-mac.dmg](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-mac.dmg)\
[![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/ipfs-desktop-0.40.1-mac.dmg.svg?style=flat-square&label=downloads)<br/>
![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/ipfs-desktop-0.40.1-squirrel.zip.svg?style=flat-square&label=update)](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-mac.dmg)
- **Homebrew** (community-maintained): `brew install --cask ipfs`
- ℹ️ update checks from existing users: [![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/latest-mac.yml.svg?style=flat-square&label=autoupdate)](https://github.com/ipfs/kubo/releases/latest)

### Windows
- **Installer:** [IPFS-Desktop-Setup-0.40.1.exe](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/IPFS-Desktop-Setup-0.40.1.exe)\
[![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/IPFS-Desktop-Setup-0.40.1.exe.svg?style=flat-square&label=downloads)](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/IPFS-Desktop-Setup-0.40.1.exe)
- **Chocolatey** (community-maintained): `choco install ipfs-desktop`
- **Scoop** (community-maintained): `scoop bucket add extras; scoop install extras/ipfs-desktop`
- **WinGet** (community-maintained): `winget install IPFS.IPFS-Desktop`
- ℹ️ update checks from existing users: [![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/latest.yml.svg?style=flat-square&label=autoupdate)](https://github.com/ipfs/kubo/releases/latest)

### Linux/FreeBSD
- **AppImage**: [ipfs-desktop-0.40.1-linux-x86_64.AppImage](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-x86_64.AppImage)\
[![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/ipfs-desktop-0.40.1-linux-x86_64.AppImage.svg?style=flat-square&label=downloads)](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-x86_64.AppImage)
- **Tarball (tar.gz)** (use this for building packages for distros): [ipfs-desktop-0.40.1-linux-x64.tar.xz](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-x64.tar.xz)\
[![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/ipfs-desktop-0.40.1-linux-x64.tar.xz.svg?style=flat-square&label=downloads)](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-x64.tar.xz)
- **Debian (DEB)** (experimental): [ipfs-desktop-0.40.1-linux-amd64.deb](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-amd64.deb)\
[![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/ipfs-desktop-0.40.1-linux-amd64.deb.svg?style=flat-square&label=downloads)](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-amd64.deb)
- **Red Hat (RPM)** (experimental): [ipfs-desktop-0.40.1-linux-x86_64.rpm](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-x86_64.rpm)\
[![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/ipfs-desktop-0.40.1-linux-x86_64.rpm.svg?style=flat-square&label=downloads)](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-x86_64.rpm)
- **FreeBSD** (experimental): [ipfs-desktop-0.40.1-linux-x64.freebsd](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-x64.freebsd) (requires [Linux Binary Compatibility to be enabled](https://docs.freebsd.org/en/books/handbook/linuxemu/))\
[![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/ipfs-desktop-0.40.1-linux-x64.freebsd.svg?style=flat-square&label=downloads)](https://github.com/ipfs/ipfs-desktop/releases/download/v0.40.1/ipfs-desktop-0.40.1-linux-x64.freebsd)
- **Snapcraft** support is deprecated and discouraged due to [confinement issues](https://github.com/ipfs/ipfs-desktop/issues/2031), use `.AppImage` instead
- ℹ️ update checks from existing users: [![](https://img.shields.io/github/downloads/ipfs/ipfs-desktop/v0.40.1/latest-linux.yml.svg?style=flat-square&label=autoupdate)](https://github.com/ipfs/kubo/releases/latest)

Additional third-party packages exist, but have the built-in auto-update mechanism disabled.
Instead, update cycle is maintained by respective communities:

[![Packaging status](https://repology.org/badge/vertical-allrepos/ipfs-desktop.svg)](https://repology.org/project/ipfs-desktop/versions)

### Install from source

To install and run IPFS Desktop from source, you'll also need:
- [Node.js](https://nodejs.org/en/) – pick the current LTS
- Any [platform-specific dependencies](https://github.com/nodejs/node-gyp#installation) required by [`node-gyp`](https://github.com/nodejs/node-gyp)

Then, follow the steps below to clone the source code, install dependencies, and run the app.

```bash
git clone https://github.com/ipfs/ipfs-desktop.git
cd ipfs-desktop
npm ci
npm run build
npm start
```

> **Build Note:** `npm ci` will download the webui code to run in electron from IPFS using the [ipfs-or-gateway](https://www.npmjs.com/package/ipfs-or-gateway) npm package.  For details, see the [build process](`.github/workflows/ci.yml`) and the [webui code](https://github.com/ipfs/ipfs-webui).

IPFS Desktop in itself is a simple container that makes sure Kubo and IPFS Webui can work together in a standalone fashion and has access to other os-specific features like tray and contextual integrations.
There are multiple ways to access IPFS Webui:

- https://webui.ipfs.io/#/welcome
- http://127.0.0.1:5001/webui (shipped with kubo)
- IPFS Desktop itself

All of these instances of IPFS Webui are the same but shipped slightly differently. The file you're seeing being downloaded is a specific release of IPFS Webui, i.e. v4.1.1 has content identifiers (CID) `bafybeiamycmd52xvg6k3nzr6z3n33de6a2teyhquhj4kspdtnvetnkrfim` which can be verified on the [IPFS Webui release page](https://github.com/ipfs/ipfs-webui/releases).

## Contribute

We welcome all contributions to IPFS Desktop! The best way to get started is to check the current [open issues](https://github.com/ipfs/ipfs-desktop/issues) (or drill down specifically for [issues labeled "help wanted"](https://github.com/ipfs/ipfs-desktop/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)) and find something interesting. All issues are categorized by the [standard label taxonomy](https://github.com/ipfs/community/blob/master/ISSUE_LABELS.md) used across the IPFS project, so you can also drill by topic (for example, [UX-related issues](https://github.com/ipfs/ipfs-desktop/issues?q=is%3Aissue+is%3Aopen+label%3Atopic%2Fdesign-ux)).

No matter how you contribute, please be sure you read and follow the [IPFS Contributing Guidelines](https://github.com/ipfs/community/blob/master/CONTRIBUTING.md) and the [IPFS Community Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

### Translations

Contributing translations in your language is particularly valuable! We use Transifex to manage internationalization, which means you don't need to change a single line of code to add your translations — just sign up for a Transifex account.

Because IPFS Desktop app includes text from [IPFS Web UI](https://github.com/ipfs-shipyard/ipfs-webui) and [IPLD Explorer](https://github.com/ipfs-shipyard/ipld-explorer), you'll want to join all three Transifex projects in order to see all the text:
- https://www.transifex.com/ipfs/ipfs-desktop/
- https://www.transifex.com/ipfs/ipfs-webui/
- https://www.transifex.com/ipfs/ipld-explorer/

*Note for developers: We use English as our source of truth. This means that if you add any new text, make those additions in [`./assets/locales/en.json`](./assets/locales/en.json) and they will automatically propagate in Transifex for other languages.*

### Developer notes

For more detailed information about hacking on IPFS Desktop, including a release checklist, please see the full [developer notes](DEVELOPER-NOTES.md).

## FAQ & Troubleshooting

### Why am I missing the system tray menu on Linux?

IPFS Desktop is built using Electron, and unfortunately, poor system tray support has been a [longstanding problem with Electron apps](https://github.com/electron/electron/issues/21445).

You may wish to try troubleshooting according to the [Electron v9.3.0 docs](https://github.com/electron/electron/blob/v9.3.0/docs/api/tray.md#class-tray):

- On Linux, the app indicator will be used if it is supported; otherwise `GtkStatusIcon` will be used
- On Linux distributions that only have app indicator support, you must install `libappindicator1` to make the tray icon work

If you've noticed that the old system tray is back in IPFS Desktop v0.13, this is because the Electron team [removed support for `StatusNotifier` and restored the old tray interface on Linux called `XEmbed`](https://github.com/electron/electron/issues/21445#issuecomment-634163402).

### Why can't I install IPFS Desktop under Debian 11?

Debian package depends on `libappindicator3-1` which does not exist in Debian 11 anymore.

You need to install this missing dependency [on your own](https://gist.github.com/keyle/b4536dc922bb13d7b5dce16a7db7e328), or use `.AppImage` instead.

### Why can't I start IPFS Desktop under Debian 10?

Some Linux users may see one of the following errors when trying to launch IPFS Desktop:

When launching by double-clicking the app icon:
> The SUID sandbox helper binary was found, but is not configured correctly.
Rather than run without sandboxing I'm aborting now. You need to make sure that
chrome-sandbox is owned by root and has mode 4755.

When launching from the terminal:
```console
$ ipfs-desktop
$Trace/breakpoint trap
```

This is a known issue with Electron/Chrome and some hardened kernels. More details can be found [here](https://github.com/ipfs/ipfs-desktop/issues/1362#issuecomment-596857282), but a fix is to start IPFS Desktop from the terminal with the following additional parameter:
```console
$ ipfs-desktop --no-sandbox
```

### Where are my IPFS configuration and log files?

> [!IMPORTANT]
> IPFS Desktop app configuration is separate from the configuration and repository of Kubo IPFS node.

You can open Desktop app and log files from the IPFS logo menu by selecting `Open Logs Directory` or `Open Configuration File` from the `Advanced` submenu. Or, find them in your OS as follows:
- **Mac:** `~/Library/Application Support/IPFS Desktop/`
- **Windows:** `%appdata%/IPFS Desktop/`
- **Linux:** `~/.config/IPFS Desktop/`

### How does IPFS Desktop select the IPFS repo location?

> [!IMPORTANT]
> IPFS Desktop uses [Kubo](https://github.com/ipfs/kubo) implementation of IPFS node, which has its own configuration and repository, separate from the Desktop app.

IPFS Desktop uses [ipfsd-ctl](https://github.com/ipfs/js-ipfsd-ctl) to locate Kubo repository.

1. First, it checks the `IPFS_PATH` environment variable.
2. If that isn't set, it falls back to `$HOME/.ipfs`. As soon as the first run has succeeded, repository location info is saved in the configuration file, which becomes the source of truth.

To open your Kubo repo directory from the IPFS logo menu, select `Open Repository Directory` from the `Advanced` submenu.

### Which version of IPFS does IPFS Desktop use?

IPFS Desktop includes its own embedded binary of Kubo (`kubo` version defined in `package.json`); this is the latest version of [Kubo](https://github.com/ipfs/kubo) that has passed QA for IPFS Desktop use.

You can check which version of IPFS you're running from the IPFS logo menu by looking in the `About` submenu.

### Which flags does IPFS Desktop boot with?

By default, IPFS Desktop starts the IPFS daemon with the flags `--migrate=true --enable-gc=true`.

You can change this in the IPFS Desktop config file by selecting `Open Configuration File` from the `Advanced` submenu.

### I got a `repo.lock` error. How do I resolve this?

In general, this means that a previous process was unable to remove the repository lock (indicator that file is in use) from the repository directory. This is supposed to be handled automatically, but sometimes it isn't. If you get this error, you can generally safely delete this file after shutting down any running IPFS daemon's or applications. Simple process is as follows:

1. Stop ipfs processes;
2. Manually delete lock file, located within the [repository](#how-does-ipfs-desktop-select-the-ipfs-repo-location);
3. Attempt to start ipfs desktop (or other process that received the `repo.lock` error) again.

### I got a network error (e.g. `Error fetching`). What should I do?

When upgrading, IPFS may need to perform migrations and for that we need a stable connection to download the required information for the migrations. Sometimes, the Internet connection may fail or be blocked by firewalls or antiviruses, and then you will run into a network error. Before submitting an issue, please try the following:

1. Check if you are connected to the Internet;
2. Make sure your firewall or antivirus is not blocking requests, such as P2P traffic;
3. Try again, by restarting IPFS Desktop.

### Error: Initializing daemon...

These errors pop up from [ipfsd-ctl](https://github.com/ipfs/js-ipfsd-ctl) when the Kubo daemon fails to start up. Below are some scenarios where you may run into this error.

#### Error: Your programs version (N) is lower than your repos (N+x).

This means you are attempting to run an older version of ipfs-desktop or Kubo than you have previously ran on your machine. Each Kubo version (which is included with ipfs-desktop) is tied to a specific IPFS repo version, which you can see at https://github.com/ipfs/fs-repo-migrations#when-should-i-migrate.

The ideal solution is to ensure you're running [the latest version of ipfs-desktop](https://github.com/ipfs/ipfs-desktop/releases/latest), as upward migrations happen automatically.

It is possible that your `PATH` has different kubo version than the one bundled with IPFS Desktop, in such case you should update it to [the latest kubo binary](https://github.com/ipfs/kubo/releases/latest) as well.

However, if you are an advanced user and you really need to run the older version that is emitting this error, you will need to run a migration in reverse, manually. You can follow the official instructions [here](https://github.com/ipfs/fs-repo-migrations/blob/master/run.md) but with additional parameters: `fs-repo-migrations -revert-ok -to N`. See `fs-repo-migrations --help` for more information.

#### Found outdated fs-repo, migrations need to be run. - Error fetching: context deadline exceeded

This happens when there is a problem with downloading migrations needed by [fs-repo-migrations](https://github.com/ipfs/fs-repo-migrations/blob/master/run.md). The errors usually look something like this:

```bash
Error: Initializing daemon...
Kubo version: 0.22.0
Repo version: 14
System version: amd64/darwin
Golang version: go1.19.12
Found outdated fs-repo, migrations need to be run.
Looking for suitable migration binaries.
Need 1 migrations, downloading.
Downloading migration: fs-repo-13-to-14...
Fetching with HTTP: "https://ipfs.io/ipfs/QmYerugGRCZWA8yQMKDsd9daEVXUR3C5nuw3VXuX1mggHa/fs-repo-13-to-14/versions"
Fetching with HTTP: "https://ipfs.io/ipfs/QmYerugGRCZWA8yQMKDsd9daEVXUR3C5nuw3VXuX1mggHa/fs-repo-13-to-14/versions"
Fetching with HTTP: "https://ipfs.io/ipfs/QmYerugGRCZWA8yQMKDsd9daEVXUR3C5nuw3VXuX1mggHa/fs-repo-13-to-14/versions"
Error fetching: exceeded number of retries. last error was http.DefaultClient.Do error: Get "https://ipfs.io/ipfs/QmYerugGRCZWA8yQMKDsd9daEVXUR3C5nuw3VXuX1mggHa/fs-repo-13-to-14/versions": dial tcp 199.16.156.40:443: i/o timeout
Fetching with IPFS: "fs-repo-13-to-14/versions"
Error fetching: context deadline exceeded
could not get latest version of migration fs-repo-13-to-14: 2 errors occurred:
	* exceeded number of retries. last error was http.DefaultClient.Do error: Get "https://ipfs.io/ipfs/QmYerugGRCZWA8yQMKDsd9daEVXUR3C5nuw3VXuX1mggHa/fs-repo-13-to-14/versions": dial tcp 199.16.156.40:443: i/o timeout
	*
```

You can update your Kubo config to try different sources of the migration files.

##### With IPFS-Desktop

1. Go to the Settings tab
2. Find "Migrations" in the config, and update the `DownloadSources` array to be `["IPFS", "https://dweb.link", "https://cloudflare-ipfs.com", "HTTP"]`

##### From the terminal

For this method, you have to have the `ipfs` binary available on your command line:

```bash
ipfs config --json Migration.DownloadSources '["IPFS", "https://dweb.link", "https://cloudflare-ipfs.com", "HTTP"]'
```

##### Manually in an editor (not recommended)

You can also edit the config file (`~/.ipfs/config` or `C:\Users\Username\.ipfs\config`) manually. Just make sure the json file is valid when you finish.

### I need more help!

If you need help with using IPFS Desktop, the quickest way to get answers is to post them in the [official IPFS forums](https://discuss.ipfs.tech).

If you think you've found a bug or other issue with IPFS Desktop itself, please [open an issue](https://github.com/ipfs/ipfs-desktop/issues/new/choose).

## License

[MIT — Protocol Labs, Inc.](./LICENSE)
