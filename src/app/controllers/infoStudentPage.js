import Students from "./model/student.js"
import handle from "../../utils/mongooseHandle/mongoose.js"

class InfoStudentPage {
    index(req, res) {
        console.log("req", req)
        return res.send("asdjbkjadsbfjsbdfaljsbljfslbfjasbf")
    }

    async details(req, res, next) {
        await Students.findOne({
                slug: req.params.slug
            })
            .then(student => {
                return res.json({
                    student
                })
            })
    }

    async getToken(req, res, next) {
        await Students.findOne({
                slug: req.params.slug
            })
            .then(student => {
                return res.json({
                    test: "test"
                })
            })
    }
}

export default new InfoStudentPage()