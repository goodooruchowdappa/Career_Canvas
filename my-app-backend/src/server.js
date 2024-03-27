import express from "express";
import { db, contectToDb } from "./db.js";

const app = express();
app.use(express.json());

app.get("/api/login/:name", async (req, res) => {
  const { name } = req.params;
  // console.log(name);
  const username = await db.collection("login_details").findOne({ name });
  if (username) {
    res.send("Success");
  } else {
    res.send(`${name} Not Found`);
  }
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
