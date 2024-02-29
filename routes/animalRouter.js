import express from 'express';
import { animals } from '../data/animals.js';

const animalRouter = express.Router();

animalRouter.get('/?animalType=animalType', (req, res) => {
    const animalType = req.params.animalType;

    const animal = animals.find(animal => animal.name.toLowerCase() === animalType.toLowerCase());

    if (animal) {
        // res.render(
        //     'pages/animal-details',
        //     {
        //         pageTitle: animalType,
        //         subTitle: "Here's some more info about this little fella",
        //         animal: animal
        //     }
        // )
        res.send("animal found!")
    } else {
        res.status(404).send("Oops, animal not found");
    }
});

export default animalRouter;
console.log(animals);

