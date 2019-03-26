import * as types from './mutation-types'
import{login} from '@/api'
const actions = {
  async userInformation ({commit, state}, params) {
    let res=await login()
    commit("setToken",res)
  }
}
export default actions
