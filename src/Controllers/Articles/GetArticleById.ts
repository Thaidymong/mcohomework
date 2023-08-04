import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function GetArticleById(req:Request, res: Response){
    const {id} = req.params;
    const articles = await knx("articles").where({id}).first();
    res.json(articles);
};