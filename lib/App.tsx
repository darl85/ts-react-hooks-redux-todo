import * as React from 'react'
import * as ReactDOM from 'react-dom'

import ContainerPopup from './container/ContainerPopup'

// TODO remove if statement when problem with calling functions twice will be fix
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('react-root-ts')) {
    ReactDOM.render(<ContainerPopup />, document.getElementById('react-root-ts'))
  }
})
