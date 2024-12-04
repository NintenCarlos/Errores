import mongoose from "mongoose";
import cors from "cars"; 
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/Controllers/Tacos.Controller.js";

dotenv.config();

mongoose
  .connect(process.env.url)
  .then(() => {
    console.log("La base de datos está funcionando.");
  })
  .catch((error) => {
    console.log("La base de datos no está funcionando.", error);
  });

const app = express;
app.use(cors());
app.listen(400, ()=> { 
    console.log("Se escucha el servidor.")
})

test();