* ns 纳秒 10e-9
* CPU密集：压缩 解压 文件加密 解密（图形计算 以前是CPU）
* I/O （不会卡死node主进程） 密集： 文件操作；http的网络操作； 数据库操作场景；

1. web层  和用户交互的 （权限校验，封装，用户提示）controller
2. 业务逻辑层（server层，LoginService）
3. DAO（data access object  数据进入对象）进入数据库 做数据操作；
4. 持久层；也就是数据库  mySQL，Oracle，DB2  MogoDB,redis,HBase


### CommonJs 规范
1. 一个文件就是一个模块，拥有单独的作用域；
    可以简单理解为每个文件都是一个function
2. 普通方式定义的变量，函数 ，对象 都属于模块内部
3. exports,   module.exports

### 全剧对象  
* global全局对象，当程序启动的时候他就存在 
* 文件模块require('./index')  核心模块 require('fs')不需要 加路径都可以访问到
* require特征   加载后会被缓存
*  
    ```
     main.js 
        require('./modeA)
        require('./modeB)

        modeA.js
        module.exports.test ='a'
        const modeB = require('./modeB')
        console.log(modeB)
        module.exports.test ='aa'

        modeB.js
        module.exports.test ='b'
        const modeA = require('./modeA')
        console.log(modeA)
        module.exports.test ='bb'

        //输出结果  a bb
        原因：// 只输出已经加载的部分，还未执行的部分不会输出；也就是说A模块导出 test = a后加载B模块  在b模块输出a后重新到处bb然后再次回到a文件进行打印
    ```

* npm i chalk  -D