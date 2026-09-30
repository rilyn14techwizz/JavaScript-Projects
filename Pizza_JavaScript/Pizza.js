// Function to calculate the total price of the pizza
function getReceipt() {
	// This initializes our string and running total price  
	// function to function, growing line by line into a full receipt
	let text1 = "<h3>You Ordered:</h3>";
	let runningTotal = 0;
	let sizeTotal = 0;

    //SIZE CALCULATION
	let selectedSize =""; //✅Added here
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			 selectedSize = sizeArray[i].value;//✅ Changes to just selectedSize
			text1 = text1 + selectedSize + "<br>";
		}
	}

    //Assign base prices depending on the selected size
	if (selectedSize === "Custom Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Small Pizza") {
		sizeTotal = 8;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;

    //Pass the current total forward to calculate meat toppings 

	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getTopping(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getTopping(runningTotal,text1) {
	var toppingTotal = 0;
	var selectedTopping = [];
	// 1.Initialize text1 if it wasn't passed in as an empty string initially
	if (!text1) text1="";

	var toppingArray = document.getElementsByClassName("toppings");
	for (var j = 0; j < toppingArray.length; j++) {
		if (toppingArray[j].checked) {
			selectedTopping.push(toppingArray[j].value);
			console.log("selected topping item: ("+toppingArray[j].value+")");
			/// 2. Fixed: Corrected assignment operator here
			text1 = text1 + toppingArray[j].value + "<br>";
		}
	}
	var toppingCount = selectedTopping.length;
	if (toppingCount > 1) {
		toppingTotal = (toppingCount - 1);
	} else {
		toppingTotal = 0;
	}
	runningTotal = (runningTotal + toppingTotal);
	console.log("total selected topping items: "+toppingCount);
	console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
	console.log("topping text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    //INSERT THE TIMESTAMP CODE HERE:
    const exactTime = new Date();
    document.getElementById("showText").innerHTML += "<br><h3>Order Placed;" + exactTime.toLocaleString() + "</h3>";

	// 1.Grab the modal elements from your HTML
	const lightbox = document.getElementById("lightbox");
	const modalImg = document.getElementById("modal-img");
	const closeBtn = document.querySelector(".close-btn");

	// 2. Add a click event to all pizza gallery images
	// (Make sure your pizza <img> tags in Pizza.html have class="gallery-img")
	document.querySelectorAll(".gallery-img").forEach(img => {
		img.addEventListener("click", () => {
		lightbox.style.display = "flex"; //Changes display from 'none' to show it
		modalImg.src = img.src;   //Puts the clicked image inside the modal
		});
	});

	// 3. Hide the modal when clicking the close button
	closeBtn.addEventListener("click", () => {
		lightbox.style.display ="none"; // Hides the modal again
	});
}