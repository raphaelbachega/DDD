import Product from "./product";

describe("Product unit tests", () => {

    it("should throw error when id is empty", () => {

        expect(() =>{
            let product = new Product("","Podruto 1",2);
        }).toThrowError("Id is required");

    });

    it("should throw error when name is empty", () => {

        expect(() =>{
            let product = new Product("123","",2);
        }).toThrowError("Name is required");

    });

    it("should throw error when price is less than zero", () => {
        expect(() => {
          const product = new Product("123", "Name", -1);
        }).toThrowError("Price must be greater than zero");
    });

    it("should change name", () => {
        const product = new Product("123", "Product 1", 100);
        product.changeName("Bing chinglin");
        expect(product.name).toBe("Bing chinglin");
    });

    it("should change price", () => {
        const product = new Product("123", "Product 1", 150);
        product.changePrice(150);
        expect(product.price).toBe(150);
    });
});