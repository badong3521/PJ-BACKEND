import Students from "./model/student.js"
import handle from "../../utils/mongooseHandle/mongoose.js"

class SitePage {
  async index(req, res, next) {
    console.log("RES" , res)
   await Students.find({})
      .then(student => {
        return res.json({student})
      })
      .catch(error => {
        next(error);
      })
  }
}

export default new SitePage()