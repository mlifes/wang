import { COMMIT_APP, COMMIT_USER, COMMIT_HOME } from './constant'

export default {
  [COMMIT_APP] (state, payload) {
    state.app = payload.app
  },
  [COMMIT_USER] (state, payload) {
    state.user = payload.user
  },
  [COMMIT_HOME] (state, payload) {
    state.home = payload.home
  }
}
