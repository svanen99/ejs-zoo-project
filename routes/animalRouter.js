import express from 'express';
import { animals } from '../data/animals.js';
import { mammals } from '../data/animals.js';
import { reptiles } from '../data/animals.js';
import { birds } from '../data/animals.js';

const animalRouter = express.Router();


animalRouter.get('/:animalType', (req, res) => {
    const animalType = req.params.animalType;
    let animal;

    if (animal) {
        res.render(
            'pages/animal-detailed',
            {
                pageTitle: animalType,
                subTitle: "Here's some more info about this little fella",
                className: "detailed-animal",
                animals: {
                    mammals: mammals,
                    reptiles: reptiles,
                    birds: birds,
                    }
            }
        )
    } else {
        res.status(404).send("Oops, animal not found");
    }
});

export default animalRouter;
