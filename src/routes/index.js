import bagCollections from "./bags.js"
import AuthRouter from "./authRoute.js"

function routesAll(app) {
  // app.use('/login', newRouter)
  app.use('/cart',bagCollections)
  app.use(AuthRouter);
}

export default routesAll