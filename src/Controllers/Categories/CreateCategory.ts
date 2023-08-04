import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function CreateCategory(req:Request, res: Response){
    const {category_name} = req.body;
    const [createCategory] = await knx("category").insert({
        category_name
    });
   
    if(createCategory>0){
        res.status(200).send("Category Created Successfully");
    }
    else{
        res.status(400).send("Cannot Create Category");
    }
};