const http = require('http');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./src/app');
const server = http.createServer(app);
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
