import express from 'express';
import { animals } from '../data/animals.js';

const animalRouter = express.Router();

animalRouter.get('/:animalType', (req, res) => {
    const animalType = req.params.animalType;

    // const animal = animals.find(animal === animalType);

    if (animals.animalType) {
        console.log("animal found!")
        res.render(
            'pages/animal-detailed',
            {
                pageTitle: animalType,
                subTitle: "Here's some more info about this little fella",
                className: "detailed-animal",
                animal: animal
            }
        )
    } else {
        res.status(404).send("Oops, animal not found");
    }
});

export default animalRouter;

