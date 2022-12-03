import newRouter from '../new.js'
import sitePage from '../site.js'
import studentDetails from '../studentDetails.js'
import topRoute from '../topRoute.js'
import postStudent from '../postStudent.js'
import bagCollections from "../bags.js"

function routes(app) {
  app.use("/student" , studentDetails)
  app.use('/new', newRouter)
  app.use('/top_pages', topRoute)
  app.use('/post',postStudent)
  app.use('/cart',bagCollections)
  app.use('/', sitePage)
}

export default routes