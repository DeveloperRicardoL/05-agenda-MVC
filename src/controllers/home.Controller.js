homeViewController = (req, res) => {
  if (req.session.visitas) req.session.visitas++;
  else req.session.visitas = 1;
  res.render("home/index", { title: "Home 🏠​", visitas: req.session.visitas });
};

saludoViewController = (req, res) => {
  res.render("home/saludo", { title: "saludo👋" });
};

logoutController = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports = {
  homeViewController,
  saludoViewController,
  logoutController,
};
