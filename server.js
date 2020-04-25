const app = require('./app');
const dotenv = require('dotenv');


const port = 3000;
app.listen(process.env.PORT||port, () => {
  console.log(`App running on port ${port}...`);
});
