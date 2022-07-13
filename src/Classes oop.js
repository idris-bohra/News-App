class idris
{
    constructor(name , age , language)
    {
        this.myname = name;
        this.myage = age;
        this.mylanguage = language;
        
        console.log(this.myname);
        console.log("i am parent constructor.");
    }

    name3 = "rangwala";

    bio(name2)
    {

        console.log("my age is phoktiaf " + this.myage);
        console.log("my language is " + this.mylanguage);

        return `hello this is ${this.myname} ${name2} ${this.name3} `
        
    }
}

class bohra extends idris
{
    constructor(name, age , language , game)
    {
        super(name, age , language)
        this.mygame = game;

        console.log("I am a child constructor");
        console.log(this.mygame); 
        console.log(this.myage); 
        
        
    }
}

let obj1 = new idris("kabir" , 23 , "spanish")

let obj = new bohra("idris" , 20 , "c++" , "gta");

console.log(obj.bio("bohra"));