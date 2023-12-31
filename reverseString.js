
function reverString(input){
   return input.split("").reverse().join(""); // first make character of string then reverse 
                                              //character and then join each reversed character.
}
 
function output(input){
 setTimeout(()=>{
    let newStr = reverString(input);
    console.log("reverse string is : " + newStr);
}, 2000);
};
let str = "My name is Afroj";
output(str);