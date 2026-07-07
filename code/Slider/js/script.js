const ar = ["./images/sl3.png","./images/sl2.png","./images/sl1.jpg"]

let img = document.querySelector('.box img');
//console.log("img");
let i = 0;


let a = document.getElementById('pre');
a.addEventListener('click',()=>{
        //window.alert('hi')
        i = i-1;
        if(i<0){
            i = ar.length-1;
        }
        img.src=ar[i];
});
let b = document.getElementById('nxt');
b.addEventListener('click',()=>{
    //window.alert("Hello")
    i = i+1;
    if(ar.length==i){
        i = 0;
    }
    img.src=ar[i];
});