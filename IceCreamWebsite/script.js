
const items = [
  {
    // Name of the item
    name: "Honey Lavander",
    image: "https://icecreamfromscratch.com/wp-content/uploads/2023/07/Lavender-Ice-Cream-1.2-3-735x1102.jpg"
  },
  {
    name: "Basil",  // Name of the item
    image: "https://www.savorysimple.net/wp-content/uploads/2012/06/icecream_2547.jpg"
  },
  {
    name: "Penut butter and Jelly",  // Name of the item
    image: "https://www.browneyedbaker.com/wp-content/uploads/2014/07/peanut-butter-jelly-ice-cream-40-600.jpg"
  },
  {
    name: "Balsamic Strawberry Sorbet",  // Name of the item
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
    label.textContent = item.name;
    div.appendChild(img);
    div.appendChild(label);

    // When this item box is clicked:
    div.onclick = () => {
      selectedItem = item;
      highlightSelected(index);
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
