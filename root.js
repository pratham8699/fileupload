import express from "express";
console.log(express);
const app = express();
console.log(express.json());
app.use(express.json());
app.listen(3000, () => {
  console.log("App is up and running on the port ", 3000);
});
// app.get("/hello", (req, res) => {
//   console.log("hello");
//   res.status(200).json({
//     message: "this is just a test api route to check if app is running or not",
//   });
// });
