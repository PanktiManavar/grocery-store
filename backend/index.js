const express = require('express');
const cors = require("cors");
const pincode = require('./api/pincode');
const connectdb = require('./db/config');
require('./db/config');
const User = require("./db/User")
const app = express();

const categoryrouter = require('./router/category_router');
const pincoderouter = require('./router/pincode_router');
const subcategoryrouter = require('./router/subcategory_router');
const login = require('./router/login_router');
const messurement = require('./router/messurement_router');
const brand = require('./router/brand_router');
const product = require('./api/product');
const register = require('./router/register_router')

//connect database
connectdb();

app.use(express.json());
app.use(cors());

//define router
app.use('/api/registration', require('./api/Registration'));
app.use('/api/user', require('./api/users'));
app.use('/', login);
app.use('/', categoryrouter);
app.use('/', pincoderouter);
app.use('/', subcategoryrouter);
app.use('/', messurement);
app.use('/', brand);
app.use('/', product);
app.use('/', register);

/////
const img = require('./api/imgdemo');
app.use('/', img);

// app.post("/se", async (req, resp) => {
//     // let user = new User(req.body);
//     // let result = await user.save();
//     resp.send(req.body);
// });
app.listen(8000);