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
const sequelize = require('./utils/database')
const ProductMode = require('./modules/product.js')
const UserMode = require('./modules/user.js')
const Cart = require('./modules/cart')
const CartItem = require('./modules/cart-item')
const Order = require('./modules/order')
const OrderItem = require('./modules/order-Item')
const User = require('./modules/user.js')
app.use(bodyParser.urlencoded({ extended: false }))
// 暴露出来静态资源
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    UserMode.findByPk(1).then(user => {
        req.user = user;
        next()
    })
})

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(getErrorController)


ProductMode.belongsTo(UserMode, {
    constraints: true,
    onDelete: 'CASCADE'
});
UserMode.hasMany(ProductMode)
UserMode.hasOne(Cart)
Cart.belongsTo(UserMode);
Cart.belongsToMany(ProductMode, { through: CartItem });
ProductMode.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(ProductMode, { through: OrderItem })

sequelize.sync({ force: true })
    .then(result => {
        return UserMode.findByPk(1)
    }).then(user => {
        if (!user) {
            return UserMode.create({ name: 'hamo', email: 'hamo@a.com' })
        }
        return user;
    })
    .then(user => {
        return user.createCart()
    })
    .then(() => {
        app.listen(3000)
    })
    .catch(e => console.log(e))




