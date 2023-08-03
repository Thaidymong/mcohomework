import { knx } from "src/connections/CreateKnexConnections";
import {Request, Response} from "express";

export async function GetAllArticle(req:Request, res: Response){
    const articles = await knx("articles");
    res.json(articles);
};
export async function GetArticleById(req:Request, res: Response){
    const {id} = req.params;
    const articles = await knx("articles").where({id}).first();
    res.json(articles);
};

export async function CreateArticles(req:Request, res: Response){
    const {title,summary, description,image} = req.body;
    const [createArticles] = await knx("articles").insert({
        title,
        summary,
        description,
        image
    });
   
    if(createArticles>0){
        res.status(200).send("Article Created Successfully");
    }
    else{
        res.status(400).send("Cannot Create Articles");
    }
};
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
