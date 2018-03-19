import Alert from './components/alert'
import Dialog from './components/dialog'
import Button from './components/button'
let VueComponentsLib = [
  Alert,
  Dialog,
  Button
]

const install = function (Vue, opts = {}) {
  VueComponentsLib.map(component => {
    component.install(Vue)
  })
  /* Object.keys(VueComponentsLib).forEach((key) => {
    console.log(key)
    Vue.component(key, VueComponentsLib[key])
  }) */
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(VueComponentsLib, {install})
