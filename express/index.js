const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')// 解析body 
const expressHBS = require('express-handlebars')
const app = express()
app.engine('hbs', expressHBS({ layoutsDir: 'views/layout', defaultLayout: "main-layout.hbs" }))
//设置的hbs是作为解析的后缀名  设置handlebars后缀就是  .handlebars
app.set('view engine', 'hbs', 'pug',);
app.set('views', 'views');

const { adminRoutes, products } = require('./routes/admin')
const shopRoutes = require('./routes/shop')
app.use(bodyParser.urlencoded({ extended: false }))
// 暴露出来静态资源
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, '/views', '404.html'))
    res.status(404).render('404', { pageTitle: "页面丢失..." })
})

app.listen(3000)






