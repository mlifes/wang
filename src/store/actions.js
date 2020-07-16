import { DISPATCH_APP, DISPATCH_USER, DISPATCH_HOME, COMMIT_APP, COMMIT_USER, COMMIT_HOME } from './constant'

export default {
  [DISPATCH_APP] ({ commit }, payload) {
    // TODO other somthing
    commit(COMMIT_APP, payload)
  },
  [DISPATCH_USER] ({ commit }, payload) {
    // TODO other somthing
    commit(COMMIT_USER, payload)
  },
  [DISPATCH_HOME] ({ commit }, payload) {
    // TODO other somthing
    commit(COMMIT_HOME, payload)
  }
}
