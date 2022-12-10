import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { dirname } from 'path'
import { fileURLToPath } from 'url';
import routes from './routes/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();


//Path to Client Build
const pathToClientBuild = path.join(__dirname, '..' , 'build');

//App will see this folder for static files
app.use(express.static(pathToClientBuild));

// middleware
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// route

app.use('/', routes)

//port 
const port = process.env.PORT || 8000; 

//for testing
app.get('/express_server', (req, res) => {
    res.send({ express: 'your express server is working' });
});

//it will run index file for client
app.get('/', function (req, res) {
  res.sendFile(pathToClientBuild + 'index.html');
});

app.listen(port, () => console.log(`listening on port ${port}`)); 
