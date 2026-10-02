// Abstract (Lớp trừu tượng) : có thuộc tính, constructor và method, đơn kế thừa 

abstract class Person {
    constructor(private id: number,private firstName: string,private lastName: string,private birth: Date,private hometown: string) {
    }
    
    get getId(): number {
        return this.id;
    }
    set setId(id: number) {
        this.id = id;
    }

    get getFullname(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    set setFirstname(firstName: string) {
        this.firstName = firstName;
    }
    set setLastname(lastName: string) {
        this.lastName = lastName;
    }

    get getBirth(): Date {
        return this.birth;
    }
    set setBirth(birth: Date) {
        this.birth = birth;
    }

    get getHometown(): string {
        return this.hometown;
    }
    set setHometown(hometown: string) {
        this.hometown = hometown;
    }

    abstract introduce(): string;
}

// Kế thừa
class FulltimeEmployee extends Person {

    constructor(id: number,firstName: string,lastName: string,birth: Date,hometown: string,private salary: number,private salaryIdx: number) {
        super(id,firstName,lastName,birth,hometown);
        this.salary = salary;
        this.salaryIdx = salaryIdx;
    }

    getSalaryPerMonth(): number {
        return this.salary * this.salaryIdx * 20;
    }

    introduce(): string {
        return `${this.getId};${this.getFullname};${this.getBirth};${this.getHometown};${this.getSalaryPerMonth()}`;
    }
}

const ft1 = new FulltimeEmployee(1,"Messi","Lionel",new Date("1987-06-24"),"Argentina",3600,4);
console.log(ft1.introduce());