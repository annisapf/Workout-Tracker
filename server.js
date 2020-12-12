require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const PWD = process.env.DB_PWD;
const databaseUrl = `mongodb+srv://annisa:${encodeURIComponent(PWD)}@cluster0.l77tg.mongodb.net/workout`;
mongoose.connect(process.env.MONGODB_URI || databaseUrl, { useNewUrlParser: true, useFindAndModify: false });

app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});