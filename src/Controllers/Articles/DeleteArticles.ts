import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function DeleteArticles(req:Request, res: Response){
    const {id} = req.params;
    const removeArticles = await knx("articles")
        .del()
        .where({id});
    if(removeArticles){
        res.status(200).send("Article Deleted Successfully");
    }
    else{
        res.status(400).send("Article Cannot Deleted");
    }
};
