export default function loadAbout() {
  const content = document.querySelector("#content");
  const aboutDiv = document.createElement("div");
  const aboutP = document.createElement("p");
  const titleDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "About Us";

  aboutDiv.className = "our-mission-text";
  aboutP.textContent = `This is Riley's Steakhouse, where we pride ourselves on
            offering the finest, hand-selected prime cuts of steak. 
            Each cut is sourced from the highest quality, responsibly raised cattle
            to ensure exceptional marbling, tenderness, and rich flavor.
            Our expert butchers meticulously prepare each steak,
            ensuring that every bite delivers an unparalleled 
            dining experience.`;
  titleDiv.appendChild(h1);
  content.appendChild(titleDiv);
  aboutDiv.appendChild(aboutP);
  content.appendChild(aboutDiv);
}
