function setCssValues(ele, values) {
    Object.assign(ele.style, values)
}
const header = document.createElement("div");
setCssValues(header, { width: '100%',height: '80px', backgroundColor: "green", padding: "20px", display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: "border-box"});
document.body.appendChild(header);

let headertext = document.createElement("div");
headertext.innerHTML = "Wildlife World";
setCssValues(headertext, { color: "white", fontSize: "40px"});
header.appendChild(headertext);

//menu
let list = document.createElement("ul");
setCssValues(list, { display: "flex", justifyContent: "right", listStyleType: "none", marginRight: "20px"});
header.appendChild(list);

let items = ["Home", "About", "Contact", "Safari"];
items.forEach(function(menu, index) {
var itm = document.createElement("li");
itm.innerHTML = items[index];
setCssValues(itm, { padding: "20px", margin: "10px", fontSize: "30px", color: "white" });
list.appendChild(itm);
});

//  first Section
const foremost = document.createElement("div");
setCssValues(foremost, { backgroundImage: "url('https://lotusarise.com/wp-content/uploads/2021/01/Wildlife-Problems-of-Wildlife-Wildlife-Conservation.jpg')",nbackgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" });
document.body.appendChild(foremost);

let firstDiv = document.createElement("div");
setCssValues(firstDiv, { width: "100", backgroundColor: "rgba(97, 188, 223, 0.6)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" });

let firstintro = document.createElement("div");
firstintro.innerHTML = "Welcome to The World of Wildlife";
setCssValues(firstintro, { fontSize: "50px", color: "white", padding: "50px" });
firstDiv.appendChild(firstintro);

let firstcontent = document.createElement("div");
firstcontent.innerHTML = "Wildlife refers to the collection animals and other all living things that live in the wild or simply , all living things (except human) that are undomesticated. With the loss of trees and by deforestation, there has been an immense loss of natural habitat of the wild animals. Many of the species are standing on the verge of being extinct. Poaching and hunting of the wild animals have also led to the destruction. 'If having a soul means being able to feel love and loyalty and gratitude, then animals are better off than a lot of humans.'";
setCssValues(firstcontent, { width: "80%", fontSize: "25px", color: "white", padding: "50px" });
firstDiv.appendChild(firstcontent);
foremost.appendChild(firstDiv);

// second section
let secondDiv = document.createElement("div");
setCssValues(secondDiv, { width: "100%", backgroundColor: "rgba(161, 159, 159)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"});
document.body.appendChild(secondDiv);

let imagess = [1, 2, 3, 4, 5, 6, 7, 8];
imagess.forEach(function(path) { 
let pic = document.createElement("img");
pic.src = "./images/image"+(path)+".jpeg";
setCssValues(pic, { marginRight: "50px", width: "300px", height: "200px", margin: "20px" });
secondDiv.appendChild(pic);
});

//footer
let footer = document.createElement("footer");
setCssValues(footer, { boxSizing: "border-box", width: "100%", fontSize: "40px", color: "white", padding: "30px", backgroundColor: "black", textAlign: "center" });
footer.innerHTML = "&copy; Copyright. All Right Reserved"
document.body.appendChild(footer);