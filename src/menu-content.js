import steakSelection from "./images/tomahawk.jpg";

export default function loadMenu() {
  const content = document.querySelector("#content");
  const menuDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Our Selection";
  titleDiv.className = "title-container";

  titleDiv.appendChild(h1);
  content.appendChild(titleDiv);
  content.appendChild(menuDiv);
  menuDiv.style.cssText =
    "display: flex; gap: 50px; flex-wrap: wrap; background-color: #D3D3D3; height: 100vh; justify-content: center; padding-top: 30px";

  for (let i = 0; i < 9; i++) {
    const foodItem = document.createElement("div");
    const foodImageDiv = document.createElement("div");
    const foodInfoDiv = document.createElement("div");
    const foodPriceDiv = document.createElement("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    foodPriceDiv.style.cssText = "display: block";
    p.style.cssText = "font-size: 18px; color: gray;";
    h1.style.cssText = "margin: 0;";
    foodInfoDiv.style.cssText = "padding-top: 15px;";
    h1.textContent = "New York Strip";
    p.textContent =
      "Juicy, tender New York Strip steak, grilled to perfection and served with your choice of two sides.";

    img.className = "steak-img";
    foodImageDiv.className = "image-container";
    foodInfoDiv.className = "food-info";

    foodItem.className = `food ${i}`;
    foodItem.style.cssText =
      "display: flex; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; width:550px; height: 250px; background-color: white; border-radius: 8px;";
    foodInfoDiv.appendChild(h1);
    foodInfoDiv.appendChild(p);
    foodImageDiv.appendChild(img);
    foodItem.appendChild(foodImageDiv);
    foodItem.appendChild(foodInfoDiv);
    foodItem.appendChild(foodPriceDiv);
    menuDiv.appendChild(foodItem);
  }

  addImages();
}

function addFoodInfo() {
  const foodInfoDiv = document.createElement("div");
}

function addImages() {
  const img = document.querySelectorAll(".steak-img");

  img.forEach((myImage) => {
    myImage.src = steakSelection;
    myImage.style.cssText = "height: 18vh; width: 12vw; border-radius: 8px";
  });
}
