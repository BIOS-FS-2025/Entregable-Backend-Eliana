import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mainRoutes from './routes/main.routes.js';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

morgan.token('body', (req) => JSON.stringify(req.body));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
}

app.use(mainRoutes);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');
} )