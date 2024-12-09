import express from "express";
import { db, contectToDb } from "./db.js";

const app = express();
app.use(express.json());

// app.get("/api/login/:name", async (req, res) => {
//   const { name } = req.params;
//   // console.log(name);
//   const username = await db.collection("login_details").findOne({ name });
//   if (username) {
//     res.send("Success");
//   } else {
//     res.send(`${name} Not Found`);
//   }
// });

app.post("/api/contact/messages", async (req, res) => {
  const { name, email, message } = req.body;
  await db.collection("contact_us").insertOne({ name, email, message });
  res.send("success");
});

app.get("/api/contact/messages", async (req, res) => {
  const messages = await db.collection("contact_us").find().toArray();
  if (messages) {
    res.json(messages);
  } else {
    res.send(404);
  }
});

app.post("/api/portfolio/create", async (req, res) => {
  const { name, email, skills, experience, projects } = req.body;
  await db
    .collection("resume_data")
    .insertOne({ name, email, skills, experience, projects });
  res.send("success");
});

app.get("/api/portfolio/get", async (req, res) => {
  // i want to create the ........
});

// app.post("/api/signup/newuser", (req, res) => {
//   const { name, email, password } = req.body;
// });

contectToDb(() => {
  console.log("Data Base Connected...");
  app.listen(8000, () => {
    console.log("Server Running at 8000 Port Number............");
  });
});
