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
        res.send("it's a mammal")
    } else if (reptiles.some(animal => animal.name === animalName)) {
        res.send("it's a reptile")
    } else if (birds.some(animal => animal.name === animalName)) {
        res.send("it's a bird")


    
        // console.log("that animal exists!")
        // res.send("Animal exists!")
        // console.log(animalName);

        // res.render(
        //     'pages/animal-detailed',
        //     {
        //         pageTitle: animalName,
        //         subTitle: "Here's some more info about this little fella",
        //         className: "detailed-animal",
        //         animal: animalName
        //     }
        // );
    } else {
        res.status(404).send("Oops, animal not found");
    }
});

export default animalRouter;