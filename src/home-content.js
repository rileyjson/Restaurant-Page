import steak1 from "./images/table2.jpg"

export default function loadHome(){

    const content = document.querySelector("#content")

    const image = document.createElement("img");
    const aboutDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    image.src = steak1;
    image.className = "steak1"
    aboutDiv.className = "about-card"
    h1.textContent = "Riley's Steakhouse"
    p.className = "intro-text"
    p.textContent = "Enjoy a dining experience full of \n "
    p.textContent += "luxury, memories, and fulfillment"


    content.appendChild(image);
    content.appendChild(aboutDiv)
    aboutDiv.append(h1, p)

}

