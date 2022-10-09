import Product from '../models/product.js';

export default class ProductController{
    //Constructor Dependency Injection
    constructor(mgr){
        this.repoManager=mgr;
    }
    get=async(req,res)=>{
        let allProducts=await this.repoManager.getAll();
        console.log(allProducts);
        res.send(allProducts);
    }
    getById=async(req,res)=>{
        let productId=req.params.Id;
        let product =await this.repoManager.getById(productId);
        res.send(product);
    }
    post=async(req,res)=>{
        let result = await this.repoManager.insert(req);
        res.send(result);
        console.log(result);
    }

    put=(id, product)=>{
        this.repoManager.update(id,product);
        res.send("Product inserted successfully");
    }

    delete(id){
        this.repoManager.remove(id);
        res.send("Product inserted successfully");
    }
}
