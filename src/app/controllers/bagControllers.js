import Bags from "./model/collectionBag.js"
// import handle from "../../utils/mongooseHandle/mongoose.js"

class BagCollections {
  async index(req, res, next) {
    await Bags.find({})
      .then(bag => {
        console.log("itemBag", bag)
        return res.json({
          test: "test123456"
        })
      })
      .catch(error => {
        next(error);
      })
  }

  async postTest(req, res, next) {
    console.log("RES", res)
    console.log("REQ", req)
    await Bags.find({})
      .then(bag => {
        // console.log("itemBag", bag)
        return res.json({
          test: "test123456"
        })
      })
      .catch(error => {
        next(error);
      })
  }
}

export default new BagCollections()