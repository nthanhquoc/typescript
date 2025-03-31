var Person = /** @class */ (function () {
    function Person(id, name, phone) {
        var _this = this;
        this.getFullName = function () {
            return "FullName ".concat(_this.name);
        };
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
    return Person;
}());
var person1 = new Person("C01", "Nguyễn Thanh Quốc", 905385243);
console.log(person1);
