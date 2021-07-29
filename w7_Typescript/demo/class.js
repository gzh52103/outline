/**
 * @类class
 * 修饰符
    public：公有属性，可以在任何地方被访问到
        > 默认所有的属性和方法都是 public 的
    
    private：私有属性，只能在当前类内部访问
    protected：受保护的属性，它和 private 类似，区别是它在子类中也是允许被访问的
    readonly：只读属性关键字，只允许属性声明（与其他修饰符一起使用时必须写在最后）
    static: 静态属性，只能通过类属性
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.type = 'Person';
        // let name,age
        this.name = name;
        this.age = age;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var tt = new Person('tt', 28);
// tt.age;
tt.getAge();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'student';
        return _this;
    }
    Student.prototype.getType = function () {
        return this.type;
    };
    return Student;
}(Person));
var lx = new Student('laoxie', 18);
lx.name;
lx.getType();
