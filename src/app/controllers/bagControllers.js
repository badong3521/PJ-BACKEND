import Bags from "./model/collectionBag.js"
// import handle from "../../utils/mongooseHandle/mongoose.js"

class BagCollections {
  async index(req, res, next) {
    console.log("RES" , res)
   await Bags.find({})
      .then(bag => {
        console.log("itemBag" , bag)
        return res.json({bag})
      })
      .catch(error => {
        next(error);
      })
  }
}

export default new BagCollections()