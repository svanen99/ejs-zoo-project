import express from 'express';

import { mammals, reptiles, birds } from '../data/animals.js';

const animalRouter = express.Router();

animalRouter.get(`/echidna`, (req, res) => 
    res.render(
        `pages/${animal.group}`,
        {
            pageTitle: `${animal.name}`,
            subTitle: "So you wanna know more about this little fella?",
            clasName: `${animal.group}`,
            animals: `${animal.group}`,
        }
    )
)

export default animalRouter;