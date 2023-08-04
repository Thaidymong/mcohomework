import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function GetAllCategory(req:Request, res: Response){
    const category = await knx("category");
    res.json(category);
};