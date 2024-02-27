import express from "express"
import { birds } from "../data/animals.js"

const birdRouter = express.Router();

birdRouter.get('/',(req, res) => 
    res.render(
        "pages/birds",
        {
            pageTitle: "Birds",
            subTitle: "We like these little things",
            className: "birds",
            animals: birds
        }
    )
)

export default birdRouter;