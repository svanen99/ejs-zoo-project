import express, { application } from "express"
import { mammals } from "../data/animals.js"
import animalRouter from './animalRouter.js'

const mammalRouter = express.Router();

mammalRouter.get('/',(req, res) => 
    res.render(
        "pages/mammals",
        {
            pageTitle: "Mammals",
            subTitle: "We adore these things",
            className: "mammals",
            animals: mammals
        }
    )
)

mammalRouter.use(`/:animalType`, animalRouter);

export default mammalRouter;