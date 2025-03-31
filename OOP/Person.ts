class Person{
    id:string
    name:string
    phone:number

    constructor(id:string,name:string,phone:number){
        this.id=id;
        this.name=name;
        this.phone=phone;
    }

    getFullName=():string=>{
        return `FullName ${this.name}`;
    }
}

const person1 = new Person("C01","Nguyễn Thanh Quốc",905385243);

console.log(person1);