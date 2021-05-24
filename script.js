"use strict";
exports.__esModule = true;
var m1 = {
    name: "Kilimanjaro",
    height: 19341
};
var m2 = {
    name: "Everest",
    height: 29029
};
var m3 = {
    name: "Denali",
    height: 20310
};
var mountains = [
    m1,
    m2,
    m3
];
function findNameOfTallestMountain(mountains) {
    var result = {
        name: "",
        height: 0
    };
    mountains.forEach(function (mts) {
        if (mts.height > result.height) {
            result = mts;
        }
    });
    return result.name;
}
console.log(findNameOfTallestMountain(mountains));
var i1 = {
    name: "Tourtiere",
    price: 7.95
};
var i2 = {
    name: "Soondubu",
    price: 12.00
};
var i3 = {
    name: "Palak Paneer",
    price: 9.99
};
var i4 = {
    name: "Panang Curry",
    price: 8.00
};
var i5 = {
    name: "Patatas Bravas",
    price: 6.50
};
var i6 = {
    name: "Yemisir Kik Wat",
    price: 7.50
};
var items = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6
];
function calcAverageProductPrice(items) {
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += items[i].price / items.length;
    }
    return result;
}
console.log(calcAverageProductPrice(items).toFixed(2));
var p1 = {
    product: {
        name: "motor",
        price: 10.00
    },
    quantity: 10
};
var p2 = {
    product: {
        name: "sensor",
        price: 12.5
    },
    quantity: 4
};
var p3 = {
    product: {
        name: "LED",
        price: 1.00
    },
    quantity: 20
};
var inventory = [
    p1,
    p2,
    p3,
];
function calcInventoryValue(inventory) {
    var result = 0;
    inventory.forEach(function (inv) {
        result += (inv.product.price * inv.quantity);
    });
    return result;
}
console.log(calcInventoryValue(inventory));
