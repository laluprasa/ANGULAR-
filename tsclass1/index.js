var a;
a = 200;
console.log(a);
var d;
d = "lalu";
console.log(d);
var ab;
ab = "sr";
console.log(ab);
var ab;
ab = 234;
console.log(ab);
var arr;
arr = [1, 3, 4, 3, 4,];
console.log(arr);
var b;
b = ["lalu", "rohit", "balu",];
console.log(b);
//this is the class with out constructer
var user = /** @class */ (function () {
    function user() {
        this.firstname = "a";
    }
    user.prototype.dispaly = function () {
        console.log("inside dispaly function");
    };
    return user;
}());
var obj = new user();
console.log(obj.dispaly);
console.log(obj.firstname);
var nme = /** @class */ (function () {
    function nme() {
        this.fname = "lalu";
        this.lname = "v";
        this.id = 220;
    }
    nme.prototype.dispaly = function () {
        console.log(this.fname);
    };
    return nme;
}());
var ob = new nme();
console.log(ob.dispaly());
console.log(ob.fname);
//class with constructor
//use constructor insalized value
var person = /** @class */ (function () {
    function person(name, id) {
        this.name = name;
        this.id = id;
    }
    return person;
}());
var p = new person("lalu", 21);
console.log(p.name);
var pe = /** @class */ (function () {
    function pe(name, id) {
        this.name = name;
        this.id = id;
    }
    return pe;
}());
var v = new pe("lalu", 21);
console.log(v.name);
//tendarization 
var honda = /** @class */ (function () {
    function honda() {
    }
    honda.prototype.result = function () {
        return "lalwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
    };
    return honda;
}());
var c = new honda();
var x = c.result();
console.log(x);
var c2 = {
    brand: "honda",
    price: 40,
    result: function () {
        return "la";
    }
};
//enum
console.log('---------------enum----------------');
var books;
(function (books) {
    books["book1"] = "se";
    books[books["book2"] = 20] = "book2";
    books[books["book3"] = 30] = "book3";
    books[books["book4"] = 40] = "book4";
})(books || (books = {}));
function dispaly() {
    if (true) {
        return books.book1;
    }
}
console.log(dispaly());
console.log('-------------generic----------');
//Generic
function display(lalu) {
    return lalu;
}
console.log(display(true));
function da(b) {
    return b;
}
console.log(da(9));
function val(kkk, kkk1, kkk2) {
    return kkk;
}
console.log(val(45, 64, 89));
var ar;
ar = ["lalu", "rohit", 4, true, null];
console.log(ar);
