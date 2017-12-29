import React, {Component} from 'react'
import {ipcRenderer} from 'electron'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import PaneContainer from '../components/view/pane-container'
import Pane from '../components/view/pane'
import MenuOption from '../components/view/menu-option'

import Loader from '../panes/loader'
import Files from '../panes/files'
import Peers from '../panes/peers'
import NodeInfo from '../panes/node-info'
import Settings from '../panes/settings'

const UNINITIALIZED = 'uninitialized'
const RUNNING = 'running'
const STARTING = 'starting'
const STOPPING = 'stopping'

const panes = [
  {
    id: 'info',
    title: 'Node',
    icon: 'info'
  },
  {
    id: 'files',
    title: 'Files',
    icon: 'files'
  },
  {
    id: 'peers',
    title: 'Peers',
    icon: 'pulse'
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: 'settings'
  }
]

class Menu extends Component {
  state = {
    status: UNINITIALIZED,
    route: panes[0].id,
    stats: {},
    settings: {}
  }

  listeners = {}

  _onSomething = (key) => {
    if (this.listeners[key]) {
      return this.listeners[key]
    }

    this.listeners[key] = (event, value) => {
      const obj = {}
      obj[key] = value
      this.setState(obj)
    }

    return this.listeners[key]
  }

  _changeRoute = (route) => {
    this.setState({route: route})
  }

  componentDidMount () {
    // -- Listen to control events
    ipcRenderer.on('node-status', this._onSomething('status'))
    ipcRenderer.on('stats', this._onSomething('stats'))
    ipcRenderer.on('files', this._onSomething('files'))
    ipcRenderer.on('settings', this._onSomething('settings'))

    ipcRenderer.send('request-state')
    ipcRenderer.send('request-files')
    ipcRenderer.send('request-settings')
  }

  componentWillUnmount () {
    // -- Remove control events
    ipcRenderer.removeListener('node-status', this._onSomething('status'))
    ipcRenderer.removeListener('stats', this._onSomething('stats'))
    ipcRenderer.removeListeneron('files', this._onSomething('files'))
    ipcRenderer.removeListener('settings', this._onSomething('settings'))
  }

  _getRouteScreen () {
    if (this.state.status === STARTING || this.state.status === STOPPING) {
      return <Loader key='loader-screen' />
    }

    switch (this.state.route) {
      case 'files':
        return <Files files={this.state.files} />
      case 'settings':
        return <Settings settings={this.state.settings} />
      case 'peers':
        var location = 'Unknown'
        if (this.state.stats.node) {
          location = this.state.stats.node.location
        }

        return <Peers peers={this.state.stats.peers} location={location} />
      case 'info':
        return (
          <NodeInfo
            {...this.state.stats.node}
            running={this.state.status === RUNNING}
            bandwidth={this.state.stats.bw}
            repo={this.state.stats.repo} />
        )
      default:
        return (
          <Pane class='left-pane'>
            <p className='notice'>
              Hmmm... Something strange happened and you should not be here.
            </p>
          </Pane>
        )
    }
  }

  _getMenu () {
    const menu = []

    panes.forEach((pane) => {
      menu.push((
        <MenuOption
          key={pane.id}
          title={pane.title}
          icon={pane.icon}
          active={this.state.route === pane.id}
          onClick={() => this._changeRoute(pane.id)} />
      ))
    })

    return (
      <div className='menu'>{menu}</div>
    )
  }

  render () {
    let className = ''
    if (this.state.settings.lightTheme) {
      className = 'light'
    }

    return (
      <PaneContainer className={className}>
        {this._getMenu()}
        {this._getRouteScreen()}
      </PaneContainer>
    )
  }
}

export default DragDropContext(HTML5Backend)(Menu)
