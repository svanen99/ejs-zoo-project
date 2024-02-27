import express from 'express';

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

app.use(express.static('public'));
app.listen(port, () => console.log(`Listening on port: ${port}`));
