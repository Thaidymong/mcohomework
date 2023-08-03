import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function GetAllCategory(req:Request, res: Response){
    const category = await knx("category");
    res.json(category);
};
export async function GetCategoryById(req:Request, res: Response){
    const {id} = req.params;
    const category = await knx("category").where({id}).first();
    res.json(category);
};

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
