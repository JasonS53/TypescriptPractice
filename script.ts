export{}
interface Mountain {
    name: string;
    height: number;
}

let m1: Mountain = {
    name: "Kilimanjaro",
    height: 19341
}

let m2: Mountain = {
    name: "Everest",
    height: 29029
}

let m3 : Mountain = {
    name: "Denali",
    height: 20310
}

let mountains : Mountain [] = [
    m1,
    m2,
    m3
] 

function findNameOfTallestMountain(mountains:Mountain[]):string {
    let result: Mountain = {
        name:"",
        height: 0,
        
    };
    mountains.forEach(function(mts: Mountain){
        if(mts.height > result.height){
            result = mts;
        }
    });

    return result.name;
}

console.log(findNameOfTallestMountain(mountains));

interface Product {
    name: string;
    price: number 
}

let i1: Product = {
    name: "Tourtiere",
    price: 7.95
}

let i2: Product = {
    name: "Soondubu",
    price: 12.00
}

let i3: Product = {
    name: "Palak Paneer",
    price: 9.99
}

let i4: Product = {
    name: "Panang Curry",
    price: 8.00
}

let i5: Product = {
    name: "Patatas Bravas",
    price: 6.50
}

let i6: Product = {
    name: "Yemisir Kik Wat",
    price: 7.50
}

let items : Product [] = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6
]

 function calcAverageProductPrice(items:Product[]): number { 
    let result = 0;
     for (let i = 0; i < items.length; i++)
     {
        result += items[i].price / items.length
     }
      
     return result;
 }

 console.log(calcAverageProductPrice(items).toFixed(2));

interface InventoryItem{
    product: Product,
    quantity: number
}

let p1: InventoryItem = {
    product: {
        name: "motor",
        price: 10.00
    },
    quantity: 10
}

let p2: InventoryItem = {
    product: {
        name: "sensor",
        price: 12.5
    },
    quantity: 4
}

let p3: InventoryItem = {
    product: {
        name: "LED",
        price: 1.00
    },
    quantity: 20
}

let inventory : InventoryItem [] = [
    p1,
    p2,
    p3,
]

function calcInventoryValue(inventory: InventoryItem[]): number{

    let result: number = 0;
    inventory.forEach(function(inv : InventoryItem){
        result += (inv.product.price * inv.quantity);
    });

    return result;
}

console.log(calcInventoryValue(inventory));