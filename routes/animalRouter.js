import express from 'express';
import { animals } from '../data/animals.js';

const animalRouter = express.Router();

animalRouter.get('/:animalType', (req, res) => {
    const animalType = req.params.animalType;

    if (animals.animalType) {
        res.render(
            'pages/animal-details',
            {
                pageTitle: animalType,
                subTitle: "Here's some more info about this little fella?",
            }
        )
    }
});

export default animalRouter;