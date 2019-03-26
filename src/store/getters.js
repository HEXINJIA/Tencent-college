
const getters = {
  token:state => localStorage.getItem("tabIndex")||state.token
}
export default getters
