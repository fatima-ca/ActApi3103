const express = require('express');
const app = express();

import tweetsRoutes from './src/routes/tweets';
import usersRoutes from './src/routes/user';

app.use(express.json());
app.use('/api/tweet', tweetsRoutes);
app.use('/api/user', usersRoutes);


const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));