import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

let users = [];

// GET -> to fetch all the users from the memory
app.get("/users", (req, res) => {
  if (users.length === 0) {
    return res.status(404).send({ status: "error", data: "No user found" });
  }
  return res.status(200).send({ status: "success", data: users });
});

// POST -> to add the user to the memory
app.post("/add-user", (req, res) => {
  const { name, email, contact, age, gender, profession } = req.body;
  const chkUser = users.find((user) => user.email === email);
  if (chkUser) {
    return res.status(404).send({
      status: "error",
      data: `User already exists with the email: ${email}`,
    });
  }

  users.push({
    name,
    email,
    contact,
    gender,
    profession,
    age,
  });
  return res.status(200).send({ status: "success", data: `User added` });
});

// PUT -> to update user info
app.put("/update-user/:email", (req, res) => {
  const { email } = req.params;
  const details = req.body;

  const userIndex = users.findIndex((user) => user.email === email);

  if (userIndex === -1) {
    return res
      .status(404)
      .send({ status: "error", data: `User with email ${email} not found` });
  }

  users[userIndex] = { ...users[userIndex], ...details };

  return res.status(200).send({
    status: "success",
    data: `User with email ${email} updated successfully`,
  });
});

// DELETE -> delete a particular user
app.delete("/delete-user/:email", (req, res) => {
  const { email } = req.params;
  const userIndex = users.findIndex((user) => user.email === email);

  if (userIndex === -1) {
    return res
      .status(404)
      .send({ status: "error", data: `User with email ${email} not found` });
  }

  users = users.filter((user) => user.email !== email);

  return res.status(200).send({
    status: "success",
    data: `User with email ${email} deleted successfully`,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at PORT:${PORT}`);
});
