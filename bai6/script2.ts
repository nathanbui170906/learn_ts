// Interface : tạo khuôn mẫu, định nghĩa cho class/object

interface Person {
    get getId(): number;
    set setId(id: number);

    get getFullname(): string;
    set setFirstname(firstName: string);
    set setLastname(lastName: string);

    get getBirth(): Date;
    set setBirth(birth: Date);

    get getHometown(): string;
    set setHometown(hometown: string);
}

class FulltimeEmployee implements Person {
    constructor(private id: number,private firstName: string,private lastName: string,private birth: Date,private hometown: string) {
    }

    get getId(): number {
        return this.id;
    }
    set setId(id: number) {
        this.id = id;
    }

    get getFullname(): string {
        return this.firstName + this.lastName;
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
}