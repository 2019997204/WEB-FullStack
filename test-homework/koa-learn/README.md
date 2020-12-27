项目笔记
# 一、热加载模块 nodemon
*作用：自动重启js文件*
### 1.安装nodemon模块
```
cnpm install -S nodemon
```
### 2.配置packge.json
```
"scripts":{
    start:"nodemon url(需要运行的js文件路径)"
}
```
这样启动时只需输入`npm run start`就可以启动路径为url的js文件了
# 二、webpack
### 1.安装webpack
```
cnpm install -D webpack webpack-cli
```
```
//clean-webpack-plugin 清理d层目录的一些文件
/* webpack-no  对nodemodules下一些文件做排除处理*/
cnpm install -D clean-webpack-plugin webpack-node-externals @babel/core @babel/node @babel/preset-env babel-loader cross-env
```
### 2.在webpack.config.js 下书写webpack 配置
注意：webpack.config.js与packge.json同级

```
const path= require("path");
const nodeExternals=require('webpack-node-externals')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')

const webpackconfig={
    target:'node',
    mode:'development',
    entry:{
        server:path.join(__dirname,'src/8-4/index.js')
    },
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,'./dist')
    },
    devtool:'eval-source-map',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:[path.join(__dirname,'/node_modules')]
            }
        ]
    },
    externals:[nodeExternals()],
    plugins:[
        new CleanWebpackPlugin()
    ],
    node:{
        console:true,
        global:true,
        process:true,
        Buffer:true,
        __filename:true,
        __dirname:true,
        setImmediate:true,
        path:true
    }
}
module.exports=webpackconfig
```
目前执行没有任何报错信息，但是老师视频中有报错，需要添加一个.babelrc的文件，与webpack.config.js同级目录的，配置如下：

```
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets":{
                    "node":"current"
                }
            }
        ]
    ]
}
```

完成后即可正常使用webpack带babel-node的命令，

```
npx babel-node src/8-4/index.js 
```

同时若要使用nodemon的babel-node,需要命令：

```
npx nodemon --exec babel-node src/8-4/index.js
```
将命令配置到packge.json
```
"scripts": {
    "build": "webpack",
    "start": "nodemon src/8-4/index.js",
    "start-es6":"npx nodemon --exec babel-node src/8-4/index.js "
  },
```
即可使用`npm run start-es6`代替上边的命令执行

### 3.如何调试webpack配置
* （1）在配置文件中打印配置：`console.log(config)`
* （2）使用node调试：`npx node --inspect-brk ./node_modlues/.bin/webpack --inline --progress`
执行后，打开Chrome,输入链接 `chrome://inspect/#devices`
点击页面中的inspect
* （3）使用vscode调试
# 三、优化koa，适应生产环境的配置
### 1.检查版本更新
`cnpm install -g npm-check-updates`
* (1) 安装完成后可以使用`ncu`查看packge.json是否有可更新的应用，
* (2) 使用`ncu -u`更新应用
* (3) 更新完成后，删除node_modules文件夹
* (4) 重新安装node_modules文件`cnpm i`





打包报错后重新安装依赖
```
cnpm install -D @babel/core @babel/node @babel/preset-env babel-loader clean-webpack-plugin cross-env css-loader terser-webpack-plugin webpack webpack-cli webpack-merge webpack-node-externals

cnpm install -S @koa/cors koa koa-body koa-combine-routers koa-compose koa-helmet koa-json koa-router koa-static nodemon

```

有三个包不能用最新的

* "terser-webpack-plugin": "^1.4.1",
* "webpack": "^4.39.1",
* "webpack-merge": "^4.2.1",

别的随意用最新的都可以。

### 2.项目最后新增安装包
* `cnpm install -D rimraf`
* `cnpm install -S koa-compress`
