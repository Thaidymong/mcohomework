import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function UpadteCategory(req:Request, res: Response){
    const {category_name} = req.body;
    const {id} = req.params;
    const upadteCategory = await knx("category")
        .update({
            category_name
        })
        .where({id});
                
    if(upadteCategory>0){
        res.status(200).send("Category Updated Successfully");
    }
    else{
        res.status(400).send("Cannot Updated Category");
    }
};