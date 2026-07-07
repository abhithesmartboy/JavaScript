

function set() {

    let text = document.getElementById("taskInput");
    if (text.value.trim() == '') {
        alert("Please enter a task");
        return;
    }

    const ar = JSON.parse(localStorage.getItem("task")) || [];
    ar.push(text.value)
    console.log(ar);
    localStorage.setItem("task", JSON.stringify(ar))
    window.location.reload();
}
function show() {
    let a = JSON.parse(localStorage.getItem("task"))

    a.forEach((b, i) => {
        let c = document.createElement('li')
        c.innerHTML = `${b} <button onclick="del(${i})" style="background-color: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 5px;">DELETE</button>`
        console.log(c);
        document.getElementById('list').appendChild(c)
    });

}
show();

function del(d) {
    //alert(d)
    if (!confirm("Are you sure you want to delete this task?")) {
        return
    }
    let a = JSON.parse(localStorage.getItem("task"))
    a.splice(d, 1)
    localStorage.setItem("task", JSON.stringify(a))
    window.location.reload();
}