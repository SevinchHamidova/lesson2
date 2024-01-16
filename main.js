var num = prompt("son kiriting");

if(num % 3 == 0 && num % 5 == 0){
    console.log("FizzBizz");
}else if(num % 3 == 0){
    console.log("Fizz");
}else if (num % 5 == 0){
    console.log("Bizz");
}else{
    console.log("siz bergan raqam notogri");
}
