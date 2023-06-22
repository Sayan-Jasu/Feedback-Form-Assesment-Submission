const btn = document.querySelector("button");
const post = document.querySelector(".container");
const form = document.querySelector(".bg-text");
const editBtn = document.querySelector(".edit");
btn.onclick = () => {
    form.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () => {
        form.style.display = "block";
        post.style.display = "none";
    }
    return false;
}