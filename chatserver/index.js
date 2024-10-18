const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { Authenticate } = require("./configs/Authenticate");
const ConnectToDatabase = require("./configs/DatabaseConfig");

//Routes
const userRouter = require("./routes/user");
const chatBot = require("./routes/chatBot");
const responseRouter = require("./routes/response");

const app = express();

//Connecting Application to Database
ConnectToDatabase(
  "mongodb+srv://prasaddurga:1234@cluster0.wyydp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

//Middlewares for Application
app.use(
  cors({
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

//mapping different url to specific route
app.use("/user", userRouter);
app.use("/api", Authenticate, chatBot);
app.use("/response", Authenticate, responseRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server Started at http://localhost:${PORT}`)
);
