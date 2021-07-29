import tools,{Utils} from './utils'
// tools.formatDate('2021-7-29')
// Utils.request('/api/class')
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

class Person {
    // 共有属性
    name:string;

    // 私有属性
    private age:number;

    private readonly type:string = 'Person'

    constructor(name:string,age:number){
        // let name,age
        this.name = name;
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}

const tt = new Person('tt',28);
// tt.age;
tt.getAge();

class Student extends Person{
    // 静态属性
    static contextType = 'mycontext';
    static defaultProps = {

    }

    private readonly types:string = 'student';

    getType(){
        // this.types = 'xxxx'
        return this.types;
    }
}

const lx = new Student('laoxie',18)
lx.name;
lx.getType();

// 静态属性读取
Student.contextType;


// const obj = {
//     _type:'student',
// }

// obj._type;

const utils = {
    formatDate(){},
    formatPramas(){

    }
}

