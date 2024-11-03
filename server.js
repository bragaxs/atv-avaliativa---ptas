const express = require('express');
const loggingMiddleware = require('./middlewares/loggingMiddleware');
const routes = require('./routes/index');

const app = express();
const PORT = 3000;

app.use(loggingMiddleware);
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
