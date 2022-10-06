const express = require("express");
const app = express();
const sheetRoutes = require("./src/routes/sheet.route")
app.use(express.json());
app.use(sheetRoutes);

app.listen(3000, () => console.log("server started"))