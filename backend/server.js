const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/db')
const userRouter = require('./router/userRouter')
require('./schema/createUserTable')

// middleware to parse JSON
app.use(express.json());
app.use("/api/users", userRouter);

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
