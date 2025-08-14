const items = [
  {
    name: "Honey Lavander",
    description: "Ingredients: Common ingredients include milk, cream, sugar (often replaced or augmented by honey), lavender (fresh or dried culinary lavender buds), and sometimes egg yolks for richness and creaminess. Some recipes also use cream cheese or mascarpone for an even silkier texture.",
    cost: "2.29",
    image: "https://icecreamfromscratch.com/wp-content/uploads/2023/07/Lavender-Ice-Cream-1.2-3-735x1102.jpg"
  },
  {
    name: "Basil",
    description: "",
    cost: "3.25",
    image: "https://www.gretchensveganbakery.com/wp-content/uploads/2018/09/thai-basil-cropped.jpg"
  },
  {
    name: "Penut butter and Jelly", 
    description: "",
    cost: "4.54",
    image: "https://www.browneyedbaker.com/wp-content/uploads/2014/07/peanut-butter-jelly-ice-cream-40-600.jpg"
  },
  {
    name: "Balsamic Strawberry Sorbet", 
    cost: "5.29",
    image: "https://www.mythreeseasons.com/wp-content/uploads/2021/07/strawberry-balsamic-ice-cream-1200px-5.jpg"
  },
];
const purchasedItems = [];


//  to keep track if player clicked 
let price=0;
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
    div.appendChild(c);


    // When this item box is clicked:

    div.onclick = () => {
      selectedItem = item;
      highlightSelected(index);
      if(selectedItem.name ==="Honey Lavander"){
        alert("\t\t\t\t\tCost: 2.29");
      }
      if(selectedItem.name ==="Basil"){
        alert("\t\t\t\t\tCost: 3.25");
      }
      if(selectedItem.name ==="Penut butter and Jelly"){
        alert("\t\t\t\t\tCost: 4.54");
      }
      if(selectedItem.name ==="Balsamic Strawberry Sorbet"){
        alert("\t\t\t\t\tCost: 5.29");
      }
      let amt = Number(prompt("How many scoops (Note: Max is 5 scoops): "));
      while(amt> 5){
        alert('Exceded the maximum amount of scoops per quantity 😢');
        amt = Number(prompt("How many scoops (Note: Max is 5 scoops): "));
      }
      let container = prompt("Cone or bowl (Note: bowl: + $3 extra dollars) :").toLowerCase();
      if(container === "cone"){
        alert('Cone selected 🍦');
        quantity++;
        document.getElementById("quantity").innerText = quantity;
        price = price + (amt * selectedItem.cost);
        document.getElementById("price").innerText = price;
        if(price>0){
          const speech = document.getElementById("speech");                 // Div where Homer could "speak"
          const homerLaugh = document.getElementById("moneySound");         // Audio file for Homer
              speech.textContent = ""; // Clear any previous text
              homerLaugh.play(); // Play Homer’s sound
              // After 2 seconds, clear the speech area
              setTimeout(() => {
                speech.textContent = "";
              }, 2000); // 2,000 milliseconds, which equals 2 seconds
        }

        let p = price;
        let added = "+ ";
        let message = added +p;
        document.getElementById("price").innerHTML = message;

        const tax = (price +8.875/100);
        document.getElementById("Tax").innerText = tax;
        purchasedItems.push(selectedItem.name, selectedItem.amt, selectedItem.cost);
      }
       else if(container ==="bowl"){
        alert('Bowl selected 🍨');
         quantity++;
         document.getElementById("quantity").innerText = quantity;
         price = price + (amt * selectedItem.cost + 3);
         if(price>0){
           const speech = document.getElementById("speech");                 
           const homerLaugh = document.getElementById("moneySound");         
               speech.textContent = ""; 
               homerLaugh.play(); // Play  sound
               
               setTimeout(() => {
                 speech.textContent = "";
               }, 2000); // 2,000 milliseconds, which equals 2 seconds
         }
         document.getElementById("price").innerText = price;
         let p = price;
         let added = "+ ";
         let message = added +p;
         document.getElementById("price").innerHTML = message;
         const tax = (price +0.8875);
         document.getElementById("Tax").innerText = tax;
         purchasedItems.push(selectedItem.name, selectedItem.amt, selectedItem.cost);
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
  alert('LinkedIn:\nhttps://www.linkedin.com/in/kelley-montejo-a87996369/ \n\n\t\t\t\t\t\tOR\n\nEmail:\nmontejokelley@gmail.com');
});







