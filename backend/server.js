
import express from 'express';
import cors from "cors";
import hardwares from './parserYM/pcComponents/index.js'
import { PrismaClient } from '@prisma/client';
import { async } from 'regenerator-runtime';



const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Замените на адрес вашего React-приложения
  }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const prisma = new PrismaClient();


  
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});

  app.get('/api/build/:hardware', (req, res) => {
 
    console.log('server: ', req.params.hardware)
    res.send(hardwares[req.params.hardware]);
  });


  app.get('/api/saved-builds', async (req, res) => {
    const allBuild = await prisma.build.findMany();
    res.send(allBuild)
  });

  app.get('/api/saved-builds/:id', async (req, res) => {


    const buildByID = await prisma.build.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })
    res.send(buildByID)
  });



  app.post('/api/build', async (req, res) => {
    const build = await prisma.build.create({
      data: {
        build: req.body.build,
        fullPrice: req.body.fullPrice,
        date: new Date()
      }
    })

    res.json(build)
  });



app.use((req, res) => {
    res.status(404).json({ error: 'Request error' });
});