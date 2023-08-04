import  express,{Request, Response} from "express";
import * as pgk from "package.json";
import bodyParser from "body-parser";
import { DeleteCategory } from "./Controllers/Categories/DeleteCategory";
import { UpadteCategory } from "./Controllers/Categories/UpadteCategory";
import { CreateCategory } from "./Controllers/Categories/CreateCategory";
import { GetCategoryById } from "./Controllers/Categories/GetCategoryById";
import { GetAllCategory } from "./Controllers/Categories/GetAllCategory";
import { DeleteArticles } from "./Controllers/Articles/DeleteArticles";
import { UpadteArticles } from "./Controllers/Articles/UpadteArticles";
import { GetArticleById } from "./Controllers/Articles/GetArticleById";
import { CreateArticles } from "./Controllers/Articles/CreateArticles";
import { GetAllArticles } from "./Controllers/Articles/GetAllArticles";

const app = express();
app.use("/server",(_req: Request, res: Response)=>{
    res.json({
        version : pgk.version,
        name : pgk.name,
    })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get("/articles",GetAllArticles);
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