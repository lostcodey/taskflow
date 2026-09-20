import express from 'express';
import cors from 'cors';
import { register } from './controllers/register.js';
import mongoose from 'mongoose';
import { login } from './controllers/login.js';
import upload from './middlewares/multer_ware.js';
import { profile } from './controllers/profile.js';
import auth_ware from './middlewares/auth_ware.js';
import { taskadd } from './controllers/taskadd.js';
import { taskcheck } from './controllers/taskcheck.js';
import { taskupdate } from './controllers/taskupdate.js';
import { taskdelete } from './controllers/taskdelete.js';

const app = express();
app.use(express.json());

mongoose.connect(process.env.mongodb_url);

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.post('/api/register',register);

app.post('/api/login',login);

app.post('/api/profile',upload.single('image'),auth_ware,profile);

app.post('/api/task/add',auth_ware,taskadd);

app.post('/api/task/taskcheck',auth_ware,taskcheck)

app.put('/api/task/update',auth_ware,taskupdate)
app.delete('/api/task/delete',auth_ware,taskdelete)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});