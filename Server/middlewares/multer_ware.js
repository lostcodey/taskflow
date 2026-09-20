import multer from 'multer';

// const storage = multer.diskStorage({
//     destination:"temp",
//     filename : (req,file,cb)=>{
//             cb(null,req.body.name+".jpg");
//     }
// })

const storage = multer.memoryStorage()

const upload = multer({
    storage: storage
})

export default upload;