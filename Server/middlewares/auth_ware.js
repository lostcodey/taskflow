import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const auth_ware = async (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];
    

    try {
        const decode = await jwt.verify(token, process.env.secret);
        if (decode) {
            req.user = decode;

            console.log(decode)
            next()
        } else {
            res.status(401)
        }
    }catch(error){
        console.log(error)
        res.status(401)
    }
    
}


export default auth_ware;