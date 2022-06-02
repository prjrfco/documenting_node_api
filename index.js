const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');

const mainRoutes = require('./routes/main');

const app = express();

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRoutes);

app.listen(5000, () => console.log("listening to 5000"));