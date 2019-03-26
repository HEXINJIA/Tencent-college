import * as types from './mutation-types'

const mutations = {
  setToken(state,params){
    state.token=params.token
    localStorage.setItem("token",state.token)
  }
}

export default mutations
