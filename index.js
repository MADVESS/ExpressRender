const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("hihi this is render test");
});

app.get("/hello", (req,res) =>{
   res.status(200);
   res.send("hello world")
})


app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  } else console.log("Error occurred, server can't start", error);
});
