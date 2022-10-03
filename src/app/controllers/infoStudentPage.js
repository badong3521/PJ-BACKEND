import Students from "./model/student.js"
import handle from "../../utils/mongooseHandle/mongoose.js"

class InfoStudentPage {
    index(req, res) {
        console.log("REQ" + req)
        console.log("RES" + res)
        res.send("STUDENT")
    }

    details(req, res, next) {
        res.send("MOTHAINA")
        console.log("REQ" + req)
        console.log("RES" + res)
        // Students.findById({
        //         id: req.params.id
        //     })
        //     .then(student => 
        //          res.json(student)
        //     )
        //     .catch(error => 
        //         next(error)
        //     )
    }
}

export default new InfoStudentPage()