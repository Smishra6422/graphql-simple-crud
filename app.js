require("dotenv").config();

const express = require("express");
const app = express();
const grpahqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

//DB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((Err) => console.log(Err));

app.use(
  "/graphql",
  grpahqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`server is up and running at ${port}`);
});
