import Students from "./model/student.js"
import handle from "../../utils/mongooseHandle/mongoose.js"

class InfoStudentPage {
    index(req, res) {
        res.send("STUDENT")
    }

    async details(req, res, next) {
        await Students.findOne({slug : req.params.slug})
        .then(student => {
            console.log("DATAA",handle.singleHandleMongoose(student))
            return res.render("students/student" , handle.singleHandleMongoose(student))
        })
    }
}

export default new InfoStudentPage()