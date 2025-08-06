
const items = [
  {
    name: "Honey Lavander",
    description: "Ingredients: Common ingredients include milk, cream, sugar (often replaced or augmented by honey), lavender (fresh or dried culinary lavender buds), and sometimes egg yolks for richness and creaminess. Some recipes also use cream cheese or mascarpone for an even silkier texture.",
    cost: "5.29",
    image: "https://icecreamfromscratch.com/wp-content/uploads/2023/07/Lavender-Ice-Cream-1.2-3-735x1102.jpg"
  },
  {
    name: "Basil",
    description: "",
    cost: "4.25",
    image: "https://www.gretchensveganbakery.com/wp-content/uploads/2018/09/thai-basil-cropped.jpg"
  },
  {
    name: "Penut butter and Jelly", 
    description: "",
    cost: "6.54",
    image: "https://www.browneyedbaker.com/wp-content/uploads/2014/07/peanut-butter-jelly-ice-cream-40-600.jpg"
  },
  {
    name: "Balsamic Strawberry Sorbet", 
    cost: "7.29",
    image: "https://www.mythreeseasons.com/wp-content/uploads/2021/07/strawberry-balsamic-ice-cream-1200px-5.jpg"
  },
];

//  to keep track if player clicked 
let selectedItem = null;

function loadItems() {
  const itemBox = document.getElementById("items");
  itemBox.innerHTML = "";

  // Go through each item in the items array
  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("item");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    const label = document.createElement("p");
    const c = document.createElement("p");
    label.textContent = item.name;
    div.appendChild(img);
    div.appendChild(label);
    

    // When this item box is clicked:
    div.onclick = () => {
      selectedItem = item;
      highlightSelected(index);
      let amt = Number(prompt("How many scoops: "));
      let container = prompt("Cone or bowl: ");
    };
    itemBox.appendChild(div);
  });

  // Function to highlight which item is selected by the player
  function highlightSelected(index) {
    document.querySelectorAll(".item").forEach((el, i) => {
      el.classList.toggle("selected", i == index);
    });
  }

}

// Wait until the HTML page is fully loaded before running the game setup
document.addEventListener("DOMContentLoaded", () => {
  loadItems(); 
});
