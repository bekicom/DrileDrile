const wrapper = document.querySelector(".wrapper");
const section4 = document.createElement("section");
const title = document.createElement("p");
const carousel = document.createElement("div");
section4.classList.add("section4");
title.classList.add("s4-title")
wrapper.append(section4);
section4.append(title);
section4.append(carousel);
title.innerHTML = "TRENDING CATEGORIES";