import { register_model } from "../config/register_model.js"
import fs from 'fs/promises';

export const profile = async(req,res,next)=>{
    const {name,dob,organisation} = req.body;
    console.log(name,req.user.id)

    try {
        const data = await register_model.findById(req.user.id)
        console.log(data)
        data.Username = name;
        data.Dateofbirth = dob;
        data.Organisation = organisation;
        data.Imageloc = (req.user.id + ".png");
        const he = await data.save()
        if(he){
            const file = req.file.buffer;
            const file_path = "profile_pic/" + req.user.id + ".png";
            await fs.writeFile(file_path,file);
        }

    }catch(error){
        console.log(error)
    }
    // console.log(req.file.buffer);
}