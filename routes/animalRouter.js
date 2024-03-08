import express from 'express';
import { animals } from '../data/animals.js';
import { mammals, reptiles, birds } from '../data/animals.js';

const animalRouter = express.Router();
let animalName = "echidna";

animalRouter.get('/:animalType', (req, res) => {
    const animalName = req.params.animalType;

    const animal = animals.filter(item => item.name === animalName)
    console.log(animal + animalName)
        
        res.render(
            'pages/animal-detailed',
            {
                pageTitle: animalName,
                subTitle: "Here's some more info about this little fella",
                className: "detailed-animal",
                animal: animal[0],
                animalGroup: mammals
            }
        );

});

export default animalRouter;