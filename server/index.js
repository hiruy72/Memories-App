import express from 'express'
import bodyParser from 'bodyParser'
import mongoose from 'mongoose'
import core from 'cors';

const app = express();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

// mongo db 
const CONNECTION_URL = 'mongodb+srv://admin:

