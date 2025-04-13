const my_hello_message: string = "Bonjour, TypeScript!";

// create a new div element with id "app"
const my_div: HTMLDivElement = document.createElement("div");
my_div.id = "app";

// create a new heading 1 element
const my_title: HTMLHeadingElement = document.createElement("h1");
my_title.textContent = my_hello_message;

// add the heading to the div
my_div.appendChild(my_title);

// add the div to the document body
document.body.appendChild(my_div);