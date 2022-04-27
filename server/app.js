const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({origin:true, credentials:true}));

app.use("/test",require("./routes/test"));

const port = process.env.PORT || 8080;

const server = app.listen(port, ()=>
    console.log(`Server is running on port ${port}`)
);