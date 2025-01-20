let scope="iam global i will be access anything anywere"
function testFunction(){
    let iamFunction="iam a function i will access inside"
    console.log(scope)// it can access global
    console.log(iamFunction)// it can access its own 
}
// block scope
if(true){
    let blockVariable="iam a block variable"
    const alsoInBlock=" iam also a block "
    var notActuallyBlocked="I can escapel";
    console.log(blockVariable);// it will access here because let contains the block scope
}
console.log(blockVariable)// here it will gives error because let will not work outside of block 
console.log(notActuallyBlocked)// it will work here beacuse var contains global scope we can access value or data anywere ." avoid this"




