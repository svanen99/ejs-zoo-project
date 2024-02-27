import express from "express"
import { mammals } from "../data/animals.js"

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

export default mammalRouter;