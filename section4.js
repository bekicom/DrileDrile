const section4 = document.querySelector(".section4");
const title = document.createElement("p");
const carousel = document.createElement("div");
title.classList.add("s4-title");
carousel.classList.add("carousel");
section4.append(title);
section4.append(carousel);
title.innerHTML = "TRENDING CATEGORIES";
const data = [
    {
        id: 1,
        img: "./assets/icons/lessthan-operator.svg"
    },
    {
        id: 2,
        img: "./assets/images/dressing-table.svg"
    },
    {
        id: 3,
        img: "./assets/images/lamp.svg"
    },
    {
        id: 4,
        img: "./assets/images/cabinet.svg"
    },
    {
        id: 5,
        img: "./assets/images/sofa.svg"
    },
    {
        id: 6,
        img: "./assets/images/chair.svg"
    },
    {
        id: 7,
        img: "./assets/images/bed.svg"
    },
    {
        id: 8,
        img: "./assets/icons/morethan-operator.svg"
    },
]
data.forEach((item) =>{
    carousel.innerHTML += `
    <figure>
    <img src="${item.img}" alt="">
    </figure> 
    `
});