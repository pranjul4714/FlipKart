import express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv";

import { v4 as uuid } from 'uuid';

import cors from "cors";

import DefaultData from "./default.js";

import  connection  from "./database/db.js";

import Routes from "./routes/route.js";


const app=express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();



app.use('/', Routes);

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'agrawalabhishek@gmail.com'
paytmParams['MOBILE_NO'] = '8290741580'





const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
connection(username,password);




app.listen(8000,()=>{
    console.log("server is running on port 8000");
})

DefaultData();