let express = require('express');
let bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000,() => {
  console.log('server running');
})

module.exports = router;
