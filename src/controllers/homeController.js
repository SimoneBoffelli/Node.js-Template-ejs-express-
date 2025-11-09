const homeController = {
  index: (req, res) => {
    // Render della view home
    return res.render("pages/home", { title: "Home" });
  },
};

export default homeController;
