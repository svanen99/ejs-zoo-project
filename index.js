import express from 'express';
import mammalRouter from './routes/mammals.js';
import reptileRouter from './routes/reptiles.js';
import birdRouter from './routes/birds.js';

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(
        'pages/home',
        {
            pageTitle: 'Zooniverse',
            subTitle: 'Welcome to our magical Zooniverse',
        }
    )
})

app.use('/mammals', mammalRouter)
app.use('/reptiles', reptileRouter)
app.use('/birds', birdRouter)
app.use(`/${animal.name}`, animalRouter)


app.use(express.static('public'));
app.listen(port, () => console.log(`Listening on port: ${port}`));
