import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function GetAllArticles(req:Request, res: Response){
    const articles = await knx("category");
    res.json(articles);
};