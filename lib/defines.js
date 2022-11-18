import { getCurrentInstance } from 'vue'

export function defineAction (actions) {
  return (name, ...args) => {
    if (!Object.keys(actions).includes(name)) {
      throw new Error(`Called action "${name}" is not defined`)
    }
    return actions[name](...args)
  }
}

export function defineEmit (validators) {
  return () => {
    const instance = getCurrentInstance()
    return (event, ...args) => {
      if (!Object.keys(validators).includes(event)) {
        throw new Error(`Called event "${event}" is not defined`)
      }
      Object.values(validators).forEach(validator => {
        if (!validator(...args)) {
          throw new Error(`Emitted event "${event}" is not valid`)
        }
      })
      instance.emit(event, ...args)
    }
  }
}
