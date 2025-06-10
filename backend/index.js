import express from "express";
import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";


const port = process.env.PORT || 8000;


const app = express();
const __dirname = path.resolve();
const allowedOrigins = [
  'http://localhost:5173',              // local dev

];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

mongoose.connect(process.env.MONGO_URI).then(() => {
	console.log("Connected to the database");
});

app.listen(port, "0.0.0.0", () => {
	console.log(`Server is running on port ${port} `);
});
