const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

const views = `${__dirname}/views/`;

app.get("/", (req,res)=>{
  res.sendFile(views + 'index.html');
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
