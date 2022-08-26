let section_1 = document.querySelector(".section_1");

const arr = [
    {
        left: "2.png",
        center: "./img/2.png",
        malumot: "Get ready for Ourstylist chair",
        right: "./img/Vector(55).png"
    } 
]

arr.forEach(item => {
    section_1.innerHTML = `
    <div class="icon">
    <img src=${item.left}>
    <img src=${item.center}>
    </div>
    `
});