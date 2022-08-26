let section_1 = document.querySelector(".section_1");

const arr = [
    {
        left: "./img/Vector(54).png",
        center: "./img/2.png",
        malumot: "Get ready for Ourstylist chair",
        right: "./img/Vector(55).png",
    } 
]

arr.forEach(item => {
    section_1.innerHTML += `
    <div class="left">
    <img src=${item.left}>
    </div>
    `
});