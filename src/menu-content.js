

export default function loadMenu() {
    
    const content = document.querySelector("#content");
    const menuDiv = document.createElement("div");

    content.style.backgroundColor = "#D3D3D3"
    content.style.height = "100vh";
    content.style.cssText = "display: flex; gap: 20px; flex-wrap: wrap;"

    
    for (let i=0; i<12; i++) {
        const foodItem = document.createElement("div");
        foodItem.className = `food ${i}`;
        foodItem.style.width = "150px";
        foodItem.style.height = "150px";
        foodItem.style.backgroundColor = "white"
        foodItem.style.csstext = "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"


        content.appendChild(foodItem);
    }



}