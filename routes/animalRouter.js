import express from 'express';
import { animals } from '../data/animals.js';
import { mammals, reptiles, birds } from '../data/animals.js';

const animalRouter = express.Router();

animalRouter.get('/:animalType', (req, res) => {
    const animalName = req.params.animalType;
    let animal;

    animal = mammals.find(animal => animal.name === animalName);
    if (!animal) {
        animal = reptiles.find(animal => animal.name === animalName);
    }
    if (!animal) {
        animal = birds.find(animal => animal.name === animalName);
    }

    if (animal) {
        res.render(
            'pages/animal-detailed',
            {
                pageTitle: animalName,
                subTitle: "Here's some more info about this little fella",
                className: "detailed-animal",
                animals: animal
            }
        );
    } else {
        res.status(404).send("Oops, animal not found");
    }
});

export default animalRouter;