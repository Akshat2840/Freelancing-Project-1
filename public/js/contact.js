window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll <= 100){
        document.querySelector(".nav").classList.remove("nav_bg");
    }

    else {
        document.querySelector(".nav").classList.add("nav_bg");
    }
});



document.querySelectorAll("body :not(#this)")

//   .forEach(element => element.style.filter = "blur(2px)");  










function menu_bar(){
    console.log("Asdf");
    let x = document.querySelector(".nav_phone");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}