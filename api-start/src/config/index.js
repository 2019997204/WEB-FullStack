/* const DB_URL = 'mongodb://test:123456@47.105.212.161:15000/testdb'
const REDIS = {
  host: '47.105.212.161',
  port: 15001,
  password: '123456'
} */
/* const MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '27017',
  database: 'BookStore'
}; */
const REDIS = {
  port: 6379,
  host: '127.0.0.1'
}
const DB_URL = 'mongodb://127.0.0.1:27017/WebBlog'
// const DB_URL = 'mongodb' + MYSQL_CONF.user + ':' + MYSQL_CONF.password + '@' + MYSQL_CONF.host + ':' + MYSQL_CONF.port + '/' + MYSQL_CONF.database
const JWT_SECRET = 'a&*38QthAKuiRwISGLotgq^3%^$zvA3A6Hfr8MF$jM*HY4*dWcwAW&9NGp7*b53!'

export default {
  DB_URL,
  REDIS,
  JWT_SECRET
}