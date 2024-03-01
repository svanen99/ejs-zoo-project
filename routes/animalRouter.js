import express from 'express';
import { animals } from '../data/animals.js';
import { mammals, reptiles, birds } from '../data/animals.js';

const animalRouter = express.Router();
let animalName = "echidna";

// console.log(animals),
// console.log (mammals, reptiles, birds)


animalRouter.get('/:animalType', (req, res) => {
    const animalName = req.params.animalType;
    if (mammals.some(animal => animal.name === animalName)) { 
        
        res.render(
            'pages/animal-detailed',
            {
                pageTitle: animalName,
                subTitle: "Here's some more info about this little fella",
                className: "detailed-animal",
                animal: animalName,
                animalGroup: mammals
            }
        );

    } else if (reptiles.some(animal => animal.name === animalName)) {
        console.log("it's a reptile");

        res.render(
            'pages/animal-detailed',
            {
                pageTitle: animalName,
                subTitle: "Here's some more info about this little fella",
                className: "detailed-animal",
                animal: animalName,
                animalGroup: mammals,
            }
        );

    } else if (birds.some(animal => animal.name === animalName)) {
        console.log("it's a bird")

        res.render(
            'pages/animal-detailed',
            {
                pageTitle: animalName,
                subTitle: "Here's some more info about this little fella",
                className: "detailed-animal",
                animal: animalName,
                animalGroup: mammals,
            }
        );
    } else {
        res.status(404).send("Oops, animal not found");
    }
});

export default animalRouter;