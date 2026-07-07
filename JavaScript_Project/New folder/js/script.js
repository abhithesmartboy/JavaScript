//Callback function 

function ch(){
    console.log("hii");
}
function fun(a){
    a()
    console.log("Higher Order Function");
}
fun(ch);