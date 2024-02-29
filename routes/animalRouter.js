import express from 'express';
// import * as path from 'path';
import { mammals, reptiles, birds } from '../data/animals.js';

const animalRouter = express.Router();
// const __dirname = path.resolve();

animalRouter.get(`/:animalType`, (req, res) => {
    const animalType = req.params.animalType;
    res.render(
        `pages/:animalType`,
        {
            pageTitle: `${animal.name}`,
            subTitle: "Here's some more info about this little fella?",
            clasName: `${animal.group}`,
            animals: `${animal.group}`,
        }
    )
})

export default animalRouter;