import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function UpadteArticles(req:Request, res: Response){
    const {title,summary, description,image} = req?.body;
    const {id} = req.params;
    const upadteArticles = await knx("articles")
        .update({
            title,
            summary,
            description,
            image
        })
        .where({id});
                
    if(upadteArticles>0){
        res.status(200).send("Article Updated Successfully");
    }
    else{
        res.status(400).send("Cannot Updated Articles");
    }
};