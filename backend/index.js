const express = require('express');
const cors = require("cors");
const pincode = require('./api/pincode');
const connectdb = require('./db/config');
const User = require("./db/User")
const app = express();
const cookieParser = require("cookie-parser");

// const auth = require('./middleware/auth')

const categoryrouter = require('./router/category_router');
const pincoderouter = require('./router/pincode_router');
const subcategoryrouter = require('./router/subcategory_router');
const login = require('./router/login_router');
const product = require('./router/product_router');
const register = require('./router/register_router');
const cart = require('./router/cart_router');
const feedback = require('./router/feedback_router');
const order = require('./router/order_router');
const coman = require('./router/comman_router');
//connect database
connectdb();

app.use("/img", express.static("img"));

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//define router
app.use('/api/registration', require('./api/Registration'));
app.use('/api/user', require('./api/users'));
app.use('/', require('./api/users'))

app.use('/', login);
app.use('/', categoryrouter);
app.use('/', pincoderouter);
app.use('/', subcategoryrouter);
app.use('/', product);
app.use('/', register);
app.use('/', cart);
app.use('/', feedback);
app.use('/', order);
app.use('/', coman);

/////
const img = require('./api/imgdemo');
app.use('/', img);


app.listen(8000);