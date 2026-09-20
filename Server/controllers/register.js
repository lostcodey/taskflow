import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { register_model } from '../config/register_model.js';

dotenv.config({
    'path': 'C:/Users/Aryan sinha/Desktop/Work/Coding/taskflow/.env'
});


export const register = async (req, res, next) => {
    const { name, Email, Password } = req.body;
    const password = await bcrypt.hash(Password, Number(process.env.secret_key));
    try {
        const user = new register_model({
            Username: name,
            Email: Email,
            Password: password
        })
        await user.save();
        res.status(201).send({
            error_status:false,
            message:"Registered"
        })

    } catch (error) {
        if (error.errorResponse.code == 11000) {
            return res.status(409).json({
                error_status: true,
                message: "Email already registered"
            });
        }
    }

    console.log(password);

}
