import Students from "./model/student.js"
class PostController {
    async index(req, res, next) {
        await Students.find({})
           .then(student => {
             return res.json({student})
           })
           .catch(error => {
             next(error);
           })
       }
    async store(req, res, next) {
        console.log("RES" , res)
        const student= new Students(req.body)
        student.save()
    }
  }
  
  export default new PostController();
  