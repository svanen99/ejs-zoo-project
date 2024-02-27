import express from "express"
import { reptiles } from "../data/animals.js"

const reptileRouter = express.Router();

reptileRouter.get('/',(req, res) => 
    res.render(
        "pages/reptiles",
        {
            pageTitle: "Reptiles",
            subTitle: "We are a little scared of these things",
            className: "reptiles",
            animals: reptiles
        }
    )
)

export default reptileRouter;