import newRouter from '../new.js'
import sitePage from '../site.js'
import studentDetails from '../studentDetails.js'
function route(app) {
  app.use("/student/" , studentDetails)
  app.use('/new', newRouter)
  app.use('/', sitePage)
}

export default route