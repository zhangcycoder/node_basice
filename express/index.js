const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')// 解析body 
const expressHBS = require('express-handlebars')
const app = express()
// app.engine('hbs', expressHBS({ layoutsDir: 'views/layout', defaultLayout: "main-layout.hbs" }))
//设置的hbs是作为解析的后缀名  设置handlebars后缀就是  .handlebars
app.set('view engine', 'ejs',);
app.set('views', 'views');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const { getErrorController } = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }))
// 暴露出来静态资源
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(getErrorController)

app.listen(3000)






