window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll <= 100){
        document.querySelector(".nav").classList.remove("nav_bg");
    }

    else {
        document.querySelector(".nav").classList.add("nav_bg");
    }
});

function menu_bar(){
    console.log("Asdf");
    let x = document.querySelector(".nav_phone");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

const hide = (elm) => {
    document.getElementById(elm.id).children[2].children[0].classList.add("hidden");
    document.getElementById(elm.id).children[2].children[1].classList.add("hidden");

    document.getElementById(elm.id).children[1].classList.remove("hidden");
}

const show = (elm) => {
    document.getElementById(elm.id).children[2].children[0].classList.remove("hidden");
    document.getElementById(elm.id).children[2].children[1].classList.remove("hidden");

    document.getElementById(elm.id).children[1].classList.add("hidden");
}

const filter_on = (ele) => {
    document.getElementById(ele.id).parentElement.children[0].classList.add("img_add");
}

const filter_off = (ele) => {
    document.getElementById(ele.id).parentElement.children[0].classList.remove("img_add");
}

gsap.from(".reveal" , {
    scrollTrigger:{
        trigger:".reveal",
        start:"top 85%",
        // toggleActions:"restart none none none"
    },
    // opacity:0,
    y:80,
    // delay:0.5,
    duration:0.8
})

gsap.from(".adventure" , {
    scrollTrigger:{
        trigger:".adventure",
        start:"top 90%",
    },
    y:80,
    duration:0.8
})

gsap.from(".reveal_items" , {
    scrollTrigger:{
        trigger:".reveal_items",
        start:"top bottom"
        // markers:true
        // toggleActions:"restart none none none"
    },
    y:150,
    opacity:0
})
