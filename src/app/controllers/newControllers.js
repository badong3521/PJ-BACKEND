class NewController {
  index(req, res) {
    res.render("new");
  }

  details(req, res) {
    res.send("NEW DETAILS");
  }
}

export default new NewController();
