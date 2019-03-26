const urlDev = '/api'
const urlQa = ''
let baseUrl = process.env.NODE_ENV === 'development' ?  urlDev : urlQa
module.exports ={
  baseUrl
}

