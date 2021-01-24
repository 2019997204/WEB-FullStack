import axios from '@/utils/request'
import qs from 'qs'

/*
 *读取文章接口列表
 *@param {object} options 读取文章列表接口参数
 */
const getList = (options) => {
  return axios.get('/public/list?' + qs.stringify(options))
}
/*
 *温馨提醒
 */
const getTips = (options) => {
  return axios.get('/public/tips' + qs.stringify(options))
}
/*
 *本周热议
 */
const getTop = (options) => {
  return axios.get('/public/topWeek' + qs.stringify(options))
}
/*
 *友情链接
 */
const getLinks = (options) => {
  return axios.get('/public/links' + qs.stringify(options))
}

export {
  getList,
  getTips,
  getLinks,
  getTop
}
