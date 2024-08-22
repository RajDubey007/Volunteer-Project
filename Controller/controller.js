let localStorage = [];
const localServer = (req, res) => {
  res.render("index", { localStorage });
};

const formSubmit = (req, res) => {
  let obj = {
    id: Math.floor(Math.random() * 100),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    subject: req.body.subject,
    msg: req.body.msg,
  };
  console.log("Obj Is", obj);

  localStorage = [...localStorage, obj];

  res.redirect("/");
};
const editPage = (req, res) => {
  let { id } = req.params;

  const recod = localStorage.find((rec) => {
    return rec.id == id;
  });

  //   console.log("rec", recod);
  res.render("editPage", { recod });
};

const updateTodo = (req, res) => {
  let { id } = req.params;

  const update = localStorage.find((rec) => {
    return rec.id == id;
  });

  update.name = req.body.name;
  update.email = req.body.email;
  update.phone = req.body.phone;
  update.subject = req.body.subject;
  update.msg = req.body.msg;

  console.log("Update", update);

  res.redirect("/");
};

const deleteUser = (req, res) => {
  let { id } = req.params;
  const dltUser = localStorage.filter((rec) => {
    return rec.id != id;
  });

  localStorage = dltUser;

  res.redirect("/");
};
module.exports = { localServer, formSubmit, editPage, updateTodo, deleteUser };
