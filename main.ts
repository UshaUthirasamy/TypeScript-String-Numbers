import { StringManipulationService } from "./app-service";
import { NumberManipulationService } from "./app-service";

export class StringManipulations implements StringManipulationService {

    constructor(){}

    public print(word:string) : void {
        let newword: any = "My Dear World";
        console.log("word = ",word);
        console.log("word in upperCase = ",word.toUpperCase());
        console.log("word in LowerCase = ",word.toLowerCase());
        console.log("word in Particular Position in a given String = ",word.charAt(0),",",word.charAt(4),",",word.charAt(6));
        var conword = word.concat(newword);
        console.log("Concatenate two strings = ",conword);
        conword = word.slice(3,-2);
        console.log("Slice Strings = ",conword);
        console.log("Length of strings = ",word.length);
    }
    public printWithSpace(sentence:string) : void {
        console.log("PrintWithSpace = ",sentence.split('').join(' '));
    }
    public findVowel(str:string) : void {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        var i=0,c=0;
        for (i=0;i<str.length;i++) {
            if (vowels.includes(str[i])) {
                c=c+1;
            }
        }
        console.log("Vowel count = ",c);
    }
}

let word = "Hello World";
let obj:StringManipulations = new StringManipulations();
console.log("Task 1 : ",obj.print(word));
console.log("Task 2 : ",obj.printWithSpace(word));
console.log("Task 3 : ",obj.findVowel(word));

export class NumbersManipulations implements NumberManipulationService {
    public findPrime(num:number) : void {
        let i = 2;
        if (num === 1) {
            console.log("It is neither prime nor not a prime");
        } else {
            for (i=2;i<num;i++) {
                if (num%i === 0) {
                    console.log ("It is not a prime number");
                } else {
                    console.log ("It is a prime number");
                }
            }
        }
         
    }

    public findMagic(num:number) : void {
        let temp = 0;
        let result = 0;
        while (num > 9) {
            temp = num%10;
            result = result + temp;
            num = num/10;
        }
        if (result === 1) {
            console.log("It is magic number");
        } else {
            console.log("It is not a magic number");
        }
    }
}

let num = 199;
let ob:NumbersManipulations = new NumbersManipulations();
console.log("Task 3 : ",ob.findPrime(num));
console.log("Task 4 : ",ob.findMagic(num));
