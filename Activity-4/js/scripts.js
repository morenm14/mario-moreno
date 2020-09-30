//welcome message
var user = "Mike! ";
var salutation = "Hello, ";
var greeting = salutation + user + "Here are the latest camera reviews.";

var greetingElement = document.getElementById("greeting");
greetingElement.textContent = greeting;

//product price
var price = 200;
var studentDiscount = 0.10;
var studentPrice = price - (price *studentDiscount);
var priceElement = document.getElementById("price");
var studentPriceElement = document.getElementById("student-price");

priceElement.textContent = price.toFixed(2);
studentPriceElement.textContent = studentPrice.toFixed(2);
