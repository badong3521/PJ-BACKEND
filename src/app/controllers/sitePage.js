import Students from "./model/student.js"
import handle from "../../utils/mongooseHandle/mongoose.js"

class SitePage {
  index(req, res, next) {
    Students.find({})
      .then(student => {
        return res.render('home',
          handle.multipleHandleMongoose(student)
        )
      })
      .catch(error => {
        next(error);
      })
  }
}

export default new SitePage()