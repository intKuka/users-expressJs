import express from 'express';
import { expressMiddleware } from 'cls-rtracer';
import apiRouter from './routes/api/apiRouter.js';
import logRequest from './middleware/logRequest.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressMiddleware());

// hangaling logging 
app.use(logRequest);

// handling api requests
app.use('/api', apiRouter);

// handling non-existing routes
app.use((req, res) => {
  res.status(404).json({ message: "Resource Not Found" })
});

// handling errors
app.use(errorHandler);


app.listen(PORT, () => {
  console.log("Running on port " + PORT)
});