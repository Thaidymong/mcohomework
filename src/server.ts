import  express,{Request, Response} from "express";
import * as pgk from "package.json";
import { knx } from "./connections/CreateKnexConnections";
import {GetAllArticle,GetArticleById,CreateArticles,DeleteArticles,UpadteArticles} from "./Controllers/GetAllArticles";
import bodyParser from "body-parser";
import { CreateCategory, DeleteCategory, GetAllCategory, GetCategoryById, UpadteCategory } from "./Controllers/GetAllcategory";

const app = express();
app.use("/server",(_req: Request, res: Response)=>{
    res.json({
        version : pgk.version,
        name : pgk.name,
    })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get("/articles",GetAllArticle);
app.get("/articles/:id",GetArticleById);
app.post("/articles/create",CreateArticles);
app.patch("/articles/edit/:id",UpadteArticles);
app.delete("/articles/remove/:id",DeleteArticles)

app.get("/category",GetAllCategory);
app.get("/category/:id",GetCategoryById);
app.post("/category/create",CreateCategory);
app.patch("/category/edit/:id",UpadteCategory);
app.delete("/category/remove/:id",DeleteCategory)


app.listen({port : 7070}, ()=>{
    console.log("Server run at port 7070");
});