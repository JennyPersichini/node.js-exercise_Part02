import "dotenv/config";
import app from "./app";

const port = process.env.PORT;


app.listen(port, () => {
    console.log(`[server]: Server is running at port https://localhost:${port}`);
})


