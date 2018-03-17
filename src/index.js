import Hello from './components/hello'
let VueComponentsLib = {
  Hello
}

const install = function (Vue, opts = {}) {
  Object.keys(VueComponentsLib).forEach((key) => {
    Vue.component(key, VueComponentsLib[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(VueComponentsLib, {install})
