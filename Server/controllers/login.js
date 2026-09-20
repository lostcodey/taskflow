
import { register_model } from '../config/register_model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({
    'path': 'C:/Users/Aryan sinha/Desktop/Work/Coding/taskflow/.env'
});

export const login = async (req, res, next) => {
    try {
        const existance = await register_model.findOne({ 'Email': req.body.Email });
        if (existance) {
            console.log(existance); 
            const validity = await bcrypt.compare(req.body.Password, existance.Password);
            if (validity) {
                const payload = { id: existance._id.toString() }
                const token = await jwt.sign(payload, process.env.secret, { expiresIn: '1h' })
                res.status(200).json({
                    error_status: false,
                    message: "Login successful",
                    token: token
                });
            }
        }

    } catch (error) {
        res.status(404).send({
            message: "Not found"
        })
    }



}