import express from 'express';
import cors from 'cors';
// import {videocards, processors, moutherboards, cases, hdd, ssd, power, coolers, ram} from './parserYM/pcComponents/index.js'
import hardwares from './parserYM/pcComponents/index.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Замените на адрес вашего React-приложения
  }));
  
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});

  app.get('/api/:hardware', (req, res) => {
 
    console.log('server: ', req.params.hardware)
    res.send(hardwares[req.params.hardware]);
  });
  // app.get('/api/processors', (req, res) => {
  //   res.send(processors);
  // });
  // app.get('/api/cases', (req, res) => {
  //   res.send(cases);
  // });
  // app.get('/api/coolers', (req, res) => {
  //   res.send(coolers);
  // });
  // app.get('/api/hdd', (req, res) => {
  //   res.send(hdd);
  // });
  // app.get('/api/moutherboards', (req, res) => {
  //   res.send(moutherboards);
  // });
  // app.get('/api/power', (req, res) => {
  //   res.send(power);
  // });
  // app.get('/api/ram', (req, res) => {
  //   res.send(ram);
  // });
  // app.get('/api/ssd', (req, res) => {
  //   res.send(ssd);
  // });

// app.get('http://localhost:5000/api', (req, res) => {
//     console.log(1);
//     res.send(videocards);
// });


app.use((req, res) => {
    res.status(404).json({ error: 'FASFSAFSASFF' });
});