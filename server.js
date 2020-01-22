const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./server/routes/exam.route');

require('./server/config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

routes(app)

app.listen(9999, () => {
    console.log("9999 is active")
})