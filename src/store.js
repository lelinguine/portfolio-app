let project = null
const listeners = new Set()

export function setProject(v) {
  project = v
  listeners.forEach((fn) => fn(project))
}

export function subscribe(fn) {
  listeners.add(fn)
  fn(project)
  return () => listeners.delete(fn)
}
