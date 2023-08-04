import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function DeleteCategory(req:Request, res: Response){
    const {id} = req.params;
    const removeCategory = await knx("category")
        .del()
        .where({id});
    if(removeCategory){
        res.status(200).send("Category Deleted Successfully");
    }
    else{
        res.status(400).send("Category Cannot Deleted");
    }
};
