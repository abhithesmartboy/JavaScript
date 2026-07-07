let isEdit;
let editId = null;
function save() {
    // alert("hii")
    if (isEdit) {
        let title = document.getElementById("title");
        let blog = document.getElementById("blog");
        let tag = document.getElementById("tag");
        let ar = JSON.parse(localStorage.getItem('blog'));
        console.log(ar[editId]);
        ar[editId].title = title.value
        ar[editId].blog = title.value
        ar[editId].tag = title.value
        ar[editId].date = Date.value
       localStorage.setItem("blog", JSON.stringify(ar));
       let al =`<div class ="alert alert-seccess alert-dismissible fade show" role ="alert">
       Post Updated Successfully
       <button type ="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
       </div>`;

        document.getElementById("al").innerHTML = al;
        title.value = "";
        blog.value = "";
        tag.value ="";
        console.log(editId);
        
        isEdit = false;
        editId =null;

    }
    else {
        //window.alert("heyy")
        let title = document.getElementById("title");
        let blog = document.getElementById("blog");
        let tag = document.getElementById("tags");
        // console.log(title,blog,tag);
        const ar = JSON.parse(localStorage.getItem('blog')) || [];
        const obj = {
            title: title.value,
            blog: blog.value,
            tag: tag.value,
            date: Date.now()
        }
        ar.push(obj);
        localStorage.setItem("blog", JSON.stringify(ar));
        title.value = "";
        blog.value = "";
        tag.value = "";
        let al = `<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Post Genrated Successfully!</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
        document.getElementById(al).innerHTML = al;
    }


}
function show() {
    let ar = JSON.parse(localStorage.getItem("blog"))
    ar.forEach((p, i) => {
        let a = `<div class="col-sm-3 mt-5">
        <div class="card">
        
        <div class="card-body">
        <h3>${p.title}</h3>
        <div class="card-title">
        ${p.blog}
        </div>
        <span class="badge text-bg-primary">${p.tag}</span>
        </br>
        <button class="btn btn-danger mt-3" onclick="del(${i})">Delet</button>
        <button class="btn btn-success mt-3" onclick="edit(${i})" data-bs-toggle="offcanvas"
        href="#offcanvasExample" role="button" aria-control="offcanvasExample">Edit</button>
        </div>
        </div>
        </div>`;
        document.getElementById('post').innerHTML += a
    });
}
show();
function del(a) {
    if (!confirm("Are you sure to Delet this post")) {
        return;
    }
    //alert(a)
    let ar = JSON.parse(localStorage.getItem("blog"))
    ar.splice(a, 1)
    localStorage.setItem("blog", JSON.stringify(ar));
    window.location.reload();
}
function edit(a) {
    // alert(a)
    let ar = JSON.parse(localStorage.getItem("blog"));
    console.log(ar[a]);
    let title = document.getElementById("title");
    let blog = document.getElementById("blog");
    let tag = document.getElementById("tags");
    title.value = ar[a].title;
    blog.value = ar[a].blog;
    tag.value = ar[a].tag

}

function edit(a){
    isEdit =true;
    let ar = JSON.parse(localStorage.getItem("blog"));
    //console.log(ar[a]);
    let title = document.getElementById("title");
    let blog = document.getElementById("blog");
    let tag = document.getElementById("tag");
    title.value = ar[a].title;
    blog.value = ar[a].blog;
    tag.value = ar[a].tag
    editId = a;
}