import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function CreateArticles(req:Request, res: Response){
    const {title,summary, description,image} = req.body;
    const [createArticles] = await knx("articles").insert({
        title,
        summary,
        description,
        image
    });
   
    if(createArticles>0){
        res.status(200).send("Article Created Successfully");
    }
    else{
        res.status(400).send("Cannot Create Articles");
    }
};