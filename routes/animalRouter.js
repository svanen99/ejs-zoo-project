import express from 'express';
import * as path from 'path';

const animalRouter = express.Router({mergeParams: true});
const __dirname = path.resolve();

animalRouter.get(`/:animalType`, (req, res) => {
    const animalType = req.params.animalType;
    res.render(
        `pages/${animalType}`,
        {
            pageTitle: `${animal.name}`,
            subTitle: "So you wanna know more about this little fella?",
            clasName: `${animal.group}`,
            animals: `${animal.group}`,
        }
    )
)

export default animalRouter;