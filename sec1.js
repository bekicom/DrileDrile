let section_1 = document.querySelector(".section_1");

const arr = [
    {
        center: "./img/2.png",
        malumot: "Get ready for Ourstylist chair",
        right: "./img/Vector(55).png"
    } 
];

arr.forEach((item) => {
    section_1.innerHTML += `
    <div class="box">
    <figure>
    <img src=${item.center}>
    </figure>
    <p>${item.malumot}</p>
    </div>
    `
});


