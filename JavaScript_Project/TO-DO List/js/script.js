

function set(){
    
    // alert("Hello, World!");
    // console.log("Hello, World!");
    let text = document.getElementById("taskInput");
    const ar = JSON.parse(localStorage.getItem("task")) || []
    ar.push(text.value)
    console.log(ar);

    localStorage.setItem("task",JSON.stringify(ar))
}