import Product from "../../domain/entity/product";
import PromiseroductRepositoryInterface from "../../domain/repository/product-repository.interface";

export default class ProductRepository implements PromiseroductRepositoryInterface{

    async create(entity: Product): Promise<void>{
        
    }

    async update(entity: Product): Promise<void>{
        throw new Error("Method not implemented");
    }

    async find(id: string): Promise<Product>{
        throw new Error("Method not implemented");
    }

    async findAll(): Promise<Product[]>{
        throw new Error("Method not implemented");
    }

}