import Vue from 'vue'

const ToastConstructor = Vue.extend(require('./toast.vue').default)

const toastPool = []

const getAnInstance = () => {
  if (toastPool.length > 0) {
    const instance = toastPool[0]
    toastPool.splice(0, 1)
    return instance
  }
  return new ToastConstructor({
    el: document.createElement('div'),
  })
}

const returnAnInstance = (instance) => {
  if (instance) {
    toastPool.push(instance)
  }
}

const removeDom = (event) => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
  this.closed = true
  returnAnInstance(this)
}

const Toast = (options = {}) => {
  const duration = options.duration || 2000

  const instance = getAnInstance()
  instance.closed = false
  clearTimeout(instance.timer)
  instance.message = typeof options === 'string' ? options : options.message
  instance.iconType = options.iconType || ''
  instance.position = options.position || 'middle'
  instance.onFinsish = options.onFinsish
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
    instance.$el.removeEventListener('transitionend', removeDom)
    duration && (instance.timer = setTimeout(() => {
      if (instance.closed) { return }
      instance.close()
      instance.onFinsish && instance.onFinsish()
    }, duration))
  })
  return instance
}

export default Toast
