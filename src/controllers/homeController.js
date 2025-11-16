const homeController = {
  index: (req, res) => {
    // Render della view home
    return res.render("pages/home");
  },
};

export default homeController;
