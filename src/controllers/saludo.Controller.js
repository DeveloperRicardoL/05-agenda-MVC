saludoViewController = (req, res) => {
  res.render("/saludo", { title: "Saludo 👌 " });
};

module.exports = saludoViewController;
