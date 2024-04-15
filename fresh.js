const menu = document.querySelector(".menu")
const sidebar = document.querySelector(".sidebar")
(const hidemenu = document.querySelector(".hidemenu")

menu.addEventListener("click", ()=>{
    // sidebar.style.display = "flex"
    sidebar.classlist.add("show")
})

hidemenu.addEventListener("click" , ()=>{
    // sidebar.style.display = "flex"
    sidebar.classlist.remove("show")
}