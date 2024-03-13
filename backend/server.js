
import express from 'express';
import cors from "cors";
import hardwares from './parserYM/pcComponents/index.js'
import { Prisma, PrismaClient } from '@prisma/client';
import cookieParser from 'cookie-parser';

import UserController from './controllers/user-controller.js';

import {body} from 'express-validator';


import authMiddleware from './middlewares/auth-middleware.js';
import { env } from 'process';

const app = express();



app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

const prisma = new PrismaClient();


  
const port = process.env.PORT || 5000;


app.get('/api/build/:hardware', authMiddleware, (req, res) => {
  console.log('server: ', req.params.hardware)
  res.send(hardwares[req.params.hardware]);
});


app.post('/api/saved-builds', authMiddleware, async (req, res) => {

  const {userId} = req.body;

  const buildsUser = await prisma.build.findMany({
    where: {
      userId: Number(userId),
    }
  });
  res.send(buildsUser)
});


app.get('/api/all-builds', authMiddleware, async (req, res) => {
  const builds = await prisma.build.findMany();
  res.send(builds)
});






app.get('/api/saved-builds/:id', authMiddleware, async (req, res) => {
  
  const buildByID = await prisma.build.findUnique({
    where: {
      id: Number(req.params.id)
    }
  })
  res.send(buildByID)
});



app.post('/api/registration', body('email').isEmail(), body('password').isLength({min: 3, max: 32}), UserController.registration)
app.post('/api/login', UserController.login)
app.post('/api/logout', UserController.logout)
app.get('/api/refresh', UserController.refresh)


app.post('/api/build', authMiddleware, async (req, res) => {

  const {build, fullPrice, userId} = req.body;


 try {
     await prisma.build.create({
      data: {
        build: build,
        fullPrice: Number(fullPrice),
        userId: Number(userId),
        date: new Date()
      }
    })
    
 } catch (e) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (e.code === 'P2002') {
      console.log(
        'There is a unique constraint violation, a new build cannot be created with this data build'
      )
    }
 }

}});



app.use((req, res) => {
  res.status(404).json({ error: 'Request error' });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});