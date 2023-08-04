import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function GetCategoryById(req:Request, res: Response){
    const {id} = req.params;
    const category = await knx("category").where({id}).first();
    res.json(category);
};