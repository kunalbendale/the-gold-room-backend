import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import { connectDatabase, initCollections } from 'config';
import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  try{
  await connectDatabase();
  await initCollections();
  app.use("/signUp", userRoutes);
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

startServer();

app.post('/signUp', (req, res) => {

});

app.post('/login', (req, res) => {

});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




