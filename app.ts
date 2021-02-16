import dotenv from 'dotenv';
import Server from './models/server';

// Configurar dot.env
dotenv.config();

const server = new Server();


server.listen();