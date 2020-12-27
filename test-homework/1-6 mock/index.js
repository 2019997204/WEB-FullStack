const Koa=require('koa')
const Router=require('koa-router')
const KoaBody=require('koa-body')

const app=new Koa()
const router=new Router()

router.post('/api/user',async(ctx)=>{
    let { body,header }=ctx.request
    let { name, email }=body
    let {role}=header
    const ADMIN='admin'
    
    if(!name||!email){
        ctx.body={
            code:404,
            msg:'name与email不得为空'
        }
    }else if(!role||role!=ADMIN){
        ctx.body={
            code:401,
            msg:'unauthorized post'
        }
    }else{
        ctx.body={
            code:200,
            data:body,
            msg:'上传成功'
        }
    }
    
})
app.use(KoaBody())
app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)