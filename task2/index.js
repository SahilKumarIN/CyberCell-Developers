import express from "express";

const server = express();

const PORT = 3000;

// Routes , Routes Handlers

// GET Methods
server.get("/", (req, res) => {
  res.send("Welcome to Task 2 of CyberCell JS.");
});

// POST Methods
server.post("/add", (req, res) => {
  const { num1, num2 } = req.query;
  let sum = Number.parseInt(num1) + Number.parseInt(num2);
  res.send(`Sum of ${num1} & ${num2} = ${sum}`);
});

server.post("/multiply", (req, res) => {
  const { num1, num2 } = req.query;
  let mult = Number.parseInt(num1) * Number.parseInt(num2);
  res.send(`Product of ${num1} & ${num2} = ${mult}`);
});

server.post("/divide", (req, res) => {
  const { num1, num2 } = req.query;
  let quo = Number.parseInt(num1) / Number.parseInt(num2);
  res.send(`Quotient of ${num1} & ${num2} = ${quo}`);
});

server.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
