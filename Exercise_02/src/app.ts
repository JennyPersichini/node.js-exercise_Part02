import express from "express";
import "express-async-errors";
import prisma from "./lib/prisma/client";

const app = express();

app.get("/planets", async (request, response) => {
   const planets = await prisma.planets.findMany();

   response.json(planets);
});


export default app;