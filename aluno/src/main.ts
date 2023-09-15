import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123","Raphael Bachega");
const address = new Address("Rua dois",2,"São Paulo","03380-000");
customer.address = address;
customer.activate();

const item1 = new OrderItem("i1", "Item 1",100,"p1",2);
const item2 = new OrderItem("i2", "Item 2",200,"p2",2);

const order = new Order("1","123", [item1, item2]);

