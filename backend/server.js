
import express from 'express';
import cors from "cors";
import hardwares from './parserYM/pcComponents/index.js'
import { Prisma, PrismaClient } from '@prisma/client';
import cookieParser from 'cookie-parser';

import UserController from './controllers/user-controller.js';

import {body} from 'express-validator';


import authMiddleware from './middlewares/auth-middleware.js';
import isAdminMiddleware from './middlewares/isAdmin-middleware.js';


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





app.post('/api/admin/partner-article/create', authMiddleware, isAdminMiddleware, async (req, res) => {

  const article = req.body;

   try {
     const partnerArticle = await prisma.partnerArticle.create({
        data: {
          ...article,
          date: new Date(),
        }
      })
      return res.status(200).send(partnerArticle);
   } catch (error) {
      return res.status(400).json({name: error.name, message: error.message})
   }
})


app.get('/api/admin/partner-acticle/:id', authMiddleware,  async (req, res) => {

  try {
    const partnerArticle = await prisma.partnerArticle.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })
    res.send(partnerArticle)
  } catch (error) {
    return res.status(400).json({name: error.name, message: error.message})
  }

})


app.post('/api/admin/partner-acticle/edit/:id', authMiddleware, isAdminMiddleware, async (req, res) => {

  const partnerArticle  = req.body;

  const {id, ...data} = partnerArticle;
 try {
   const updatedPartnerArticle = await prisma.partnerArticle.update({
      where: {
        id: Number(id),
      },
      data: {
        ...data
      }
    })

    return res.status(200).send(updatedPartnerArticle);
 } catch (error) {
    return res.status(500).json({name: error.name, message: error.message})
 }

})

app.get('/api/admin/partner-acticles', authMiddleware, async (req, res) => {
 try {
   const partnerArticlesAll = await prisma.partnerArticle.findMany();
    res.send(partnerArticlesAll);
 } catch (error) {
    res.status(400).json({name: error.name, message: error.message})
 }

})



app.post('/api/admin/partner-article/delete/:id', authMiddleware, isAdminMiddleware, async (req, res) => {

  const {id}  = req.params;

 try {
   const deletedPartnerArticle = await prisma.partnerArticle.delete({
      where: {
        id: Number(id)
      }
    })


    return res.status(200).json(deletedPartnerArticle);
 } catch (error) {
    return res.status(400).json({name: error.name, message: error.message})
 }

})


app.post('/api/registration', body('email').isEmail(), body('password').isLength({min: 3, max: 32}), UserController.registration)
app.post('/api/login', UserController.login)
app.post('/api/logout', UserController.logout)
app.get('/api/refresh', UserController.refresh)


app.post('/api/build', authMiddleware, async (req, res) => {

  const {build, fullPrice, userId} = req.body;


 try {
   const createdBuild = await prisma.build.create({
      data: {
        build: build,
        fullPrice: Number(fullPrice),
        userId: Number(userId),
        date: new Date()
      }
    })

    res.status(200).json(createdBuild);
    
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