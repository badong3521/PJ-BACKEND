import Students from "./model/student.js"
import handle from "../../utils/mongooseHandle/mongoose.js"

class routerController {
    index(req, res) {
        return res.json({message: "Top Page"})
    }

    async details(req, res, next) {
        await Students.findOne({slug : req.params.slug})
        .then(student => {
            return res.render("students/student" , handle.singleHandleMongoose(student))
        }) 
    }
}

export default new routerController()