const express = require('express');
const path  = require('path');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
;

const router = require('./router');
app.use('/public', express.static(__dirname + '/public'));
app.use('/data', express.static(__dirname + '/data'));
const PORT = process.env.PORT || 8000;
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
app.use('/', router);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
