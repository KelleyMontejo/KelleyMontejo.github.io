
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
let quantity =0;
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

    let price =0;
    // When this item box is clicked:
    div.onclick = () => {
      selectedItem = item;
      highlightSelected(index);
      if(selectedItem.name ==="Honey Lavander"){
        alert("\t\t\t\t\tCost: 5.29");
        price+=selectedItem.cost;
        document.getElementById("price").innerText = price;
      }
      if(selectedItem.name ==="Basil"){
        alert("\t\t\t\t\tCost: 4.25");
        price+=selectedItem.cost;
        document.getElementById("price").innerText = price;
      }
      if(selectedItem.name ==="Penut butter and Jelly"){
        alert("\t\t\t\t\tCost: 6.54");
        price+=selectedItem.cost;
        document.getElementById("price").innerText = price;
      }
      if(selectedItem.name ==="Balsamic Strawberry Sorbet"){
        alert("\t\t\t\t\tCost: 7.29");
        price+=selectedItem.cost;
        document.getElementById("price").innerText = price;
      }
      let amt = Number(prompt("How many scoops (Note: Max is 5 scoops): "));
      while(amt> 5){
        alert('Exceded the maximum amount of scoops per quantity 😢');
        amt = Number(prompt("How many scoops (Note: Max is 5 scoops): "));
      }
      let scoopAmt = (selectedItem.cost * amt);
      let bowl = (selectedItem.cost + 3.00);
      let container = prompt("Cone or bowl (Note: bowl: + $3 extra dollars) :").toLowerCase();
      if(container === "cone"){
        alert('Cone selected 🍦');
        quantity++;
        document.getElementById("quantity").innerText = quantity;
        price=+(selectedItem.cost *scoopAmt);
      }
       else if(container ==="bowl"){
        alert('Bowl selected 🍨');
         quantity++;
         document.getElementById("quantity").innerText = quantity;
         //document.getElementById("price").innerText = price;

      }
      else{
        alert('Not an option');
      }
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

const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
  alert('LinkedIn: https://www.linkedin.com/in/kelley-montejo-a87996369/');
});

document.addEventListener('DOMContentLoaded', () => {
    const colorRadios = document.querySelectorAll('input[name="choice"]');
    const displayElement = document.getElementById('selectedColorDisplay');

    colorRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                displayElement.textContent = `You selected: ${radio.value}`;
            }
        });
    });
});

const SubBtn = document.getElementById('SubBtn');
      SubBtn.addEventListener('click', () => {
  alert('Information submitted 😊');
});
