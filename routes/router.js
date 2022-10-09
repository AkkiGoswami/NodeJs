import RepoManager from '../models/product.js';
import ProductController from '../Controllers/productcontroller.js';


export default function(app){
    let mgr=new RepoManager();
   
   // constructor dependency injection
    let controller=new ProductController(mgr);  
    
    //Map controller callback functions for rest API routes
    app.get("/api/products",controller.get);
    app.get("/api/products/:Id",controller.getById);
    app.post("/api/products",controller.post);
    app.put("/api/products",controller.put);
    app.delete("/api/products",controller.delete);
}