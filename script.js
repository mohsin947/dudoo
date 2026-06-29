const services=[
"Foods & Groceries","Fruits & Vegetables","Stationery","Medicines","Chicken & Meat",
"Laundry","Gifts & Flowers","Household Cleaning","Cosmetics","Package Pickup",
"Local Couriers","Dresses","Shoes","Handbags","Bakery","Ice Cream"
];
const cart=[];
const p=document.getElementById("products");
services.forEach(s=>{
 let d=document.createElement("div");
 d.className="card";
 d.innerHTML=`<h3>${s}</h3><button>Add to Cart</button>`;
 d.querySelector("button").onclick=()=>{cart.push(s);render();};
 p.appendChild(d);
});
function render(){
 document.getElementById("cartItems").innerHTML=cart.map(i=>`<li>${i}</li>`).join("");
}
function placeOrder(){
 const msg=encodeURIComponent("Hello Dudoo!%0AItems:%0A"+cart.join("\n"));
 window.open("https://wa.me/916374598221?text="+msg,"_blank");
}
