import Students from "./model/student.js"
import handle from "../../utils/mongooseHandle/mongoose.js"

class InfoStudentPage {
    index(req, res) {
        return res.send("STUDENT")
    }

    async details(req, res, next) {
        await Students.findOne({slug : req.params.slug})
        .then(student => {
            return res.json({student})
        })
    }
}

export default new InfoStudentPage()