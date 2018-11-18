/**
 * axios基本配置
 */
import axiso from 'axios'
import QS from 'qs'

axiso.defaults.baseURL = "";
axiso.defaults.withCredentials = true
axiso.defaults.transformRequest = (data = {}) => QS.stringify()
axiso.interceptors.response.use(result => result.data)

export default axios





