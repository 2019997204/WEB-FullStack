/* const Koa=require('koa')
const path=require('path')
 */
import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routers/routers'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'


const app=new Koa()

const isDevMode=process.env.NODE_ENV==='production'?false:true
/* const helmet=require('koa-helmet')
const statics=require('koa-static')

const router=require('./routers/router')
 */
// app.use()
/* app.use(helmet())
app.use(statics(path.join(__dirname,'../public')))
app.use(router()) */
// 使用koa-compose 集成中间件
const middleware=compose([
    koaBody(),
    statics(path.join(__dirname,'../public')),
    cors(),
    jsonutil({pretty:false,param:'pretty'}),
    helmet()
])
if(!isDevMode){
    app.use(compress())
}
app.use(middleware)
app.use(router())
app.listen(3000)