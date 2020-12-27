# 一、业务分析
* 登录模块需求分析
* 登入页面、注册页面、忘记密码页面
* 图形验证码、NodeMailer邮件服务配置

# 二、登录模块-需求分析
* 功能需求，需求拆解
* 流程图以及原型图的绘制
* 形成文档
#### 登录功能需求分析：
* 用户输入验证
* 拦截非正常的登录请求
* 登录验证（验证机制）
# 三、开发记录
## 1.创建项目
* 安装完成vue模块后执行`vue create front(项目名称)`
* 在项目的public/index.html中添加layui的css链接
* 执行`npm run serve`运行服务，默认情况打开http://localhost:8080即可访问页面

## 2.写页面代码,修改app.vue的代码
* 使用上一节koa的最后的项目，做图形验证码：
  需要安装一个包`cnpm install --save svg-captcha` 
* 在front目录下安装`cnpm install axios -S`

## 3.为form表单加上验证
* 简单验证不为空
```
checkForm () {
      this.errorMsg = []
      if (!this.name) {
        this.errorMsg.push('登录名为空!')
      }
      if (!this.password) {
        this.errorMsg.push('密码为空!')
      }
      if (!this.code) {
        this.errorMsg.push('验证码为空!')
      }
    }
```
* 两个vuejs的验证包vuelidate、VeeValidate
```
cnpm install vuelidate -S
cnpm install vee-validate -S
```
* 在main.js中引用vuelidate
```
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
```
* 在main.js中引用VeeValidate
```
import Vuelidate from 'vee-validate'
Vue.use(VeeValidate)
```

* 在使用vee-validate时由于老师视频用到的是2.0版本，因此安装最新版会报错，建议安装2.0系列版本完成课程，后期再学习3.0