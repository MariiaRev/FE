/* HEADER */
document.body.insertBefore(document.createElement("header"), document.querySelector("body script"));
document.querySelector("header").appendChild(document.createElement("h1"));
document.querySelector("h1").appendChild(document.createTextNode("CSS1K"));

document.querySelector("header").appendChild(document.createElement("nav"));
document.querySelector("nav").appendChild(document.createElement("h2"));
document.querySelector("h2").appendChild(document.createTextNode("Select a design"));


document.querySelector("nav").appendChild(document.createElement("ul"));
document.querySelector("ul").appendChild(document.createElement("li"));
document.querySelectorAll("li")[0].appendChild(document.createElement("a"));
document.querySelectorAll("a")[0].href = "./";
document.querySelectorAll("a")[0].appendChild(document.createTextNode("Default"));
document.querySelectorAll("li")[0].appendChild(document.createElement("a"));
document.querySelectorAll("a")[1].href = "http://twitter.com/jacobrask";
document.querySelectorAll("a")[1].appendChild(document.createTextNode("Jacob Rask"));

// обернути у ф-ю та зробити по всіх посиланнях
document.querySelector("nav").appendChild(document.createElement("ul"));
document.querySelector("ul").appendChild(document.createElement("li"));
document.querySelectorAll("li")[1].appendChild(document.createElement("a"));
document.querySelectorAll("li")[1].querySelectorAll("a")[0].href = "#stripes";
document.querySelectorAll("li")[1].querySelectorAll("a")[0].appendChild(document.createTextNode("Stripes"));
document.querySelectorAll("li")[1].appendChild(document.createElement("a"));
document.querySelectorAll("li")[1].querySelectorAll("a")[1].href = "http://vasilis.nl";
document.querySelectorAll("li")[1].querySelectorAll("a")[1].appendChild(document.createTextNode("Vasilis van Gemert"));
// обернути у ф-ю та зробити по всіх посиланнях


/*HEADER END */



/* ARTICLE */

	/* HEADER */

document.body.insertBefore(document.createElement("article"), document.querySelector("body script"));
document.querySelector("article").role = "main";

document.querySelector("article").appendChild(document.createElement("header"));
document.querySelector("article").querySelector("header").appendChild(document.createElement("h2"));
document.querySelector("h2").appendChild(document.createTextNode("The Beauty in "));
document.querySelector("h2").appendChild(document.createElement("abbr"));
document.querySelector("abbr").appendChild(document.createTextNode("CSS"));
document.querySelector("h2").appendChild(document.createTextNode(" Design"));

document.querySelector("article").querySelector("header").appendChild(document.createElement("p"));
document.querySelector("article").querySelector("header").querySelector("p").appendChild(document.createTextNode("A demonstration of what can be accomplished with only 1 "));
document.querySelectorAll("p")[0].appendChild(document.createElement("abbr"));
document.querySelectorAll("abbr")[1].title = "Kibibyte";
document.querySelectorAll("abbr")[1].appendChild(document.createTextNode("K"));
document.querySelectorAll("p")[0].appendChild(document.createTextNode(" ("));
document.querySelectorAll("p")[0].appendChild(document.createElement("dfn"));
document.querySelectorAll("dfn")[0].title = "1024 bytes";
document.querySelectorAll("dfn")[0].appendChild(document.createTextNode("Kibibyte"));
document.querySelectorAll("p")[0].appendChild(document.createTextNode(") of "));
document.querySelectorAll("p")[0].appendChild(document.createElement("abbr"));
document.querySelectorAll("abbr")[2].appendChild(document.createTextNode("CSS"));
document.querySelectorAll("p")[0].appendChild(document.createTextNode(". Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys."));
		/* HEADER END */


		/* SECTION 1 */
document.querySelector("article").appendChild(document.createElement("section"));
let section1 = document.querySelectorAll("section")[0]
section1.appendChild(document.createElement("h2"));
section1.querySelector("h2").appendChild(document.createTextNode("So What is This About?"));
section1.appendChild(document.createElement("p"));
let par1 = section1.querySelector("p");

par1.appendChild(document.createTextNode("Back in 2003 (that's "));
par1.appendChild(document.createElement("span"));
par1.querySelector("span").id = "zengarden-age";
par1.querySelector("span").appendChild(document.createTextNode("a lot of"));
par1.appendChild(document.createTextNode(" years ago! "));
par1.appendChild(document.createElement("a"));
par1.querySelector("a").href = "http://mezzoblue.com";
par1.querySelector("a").appendChild(document.createTextNode("Dave Shea"));

par1.appendChild(document.createTextNode(" launched the "));
par1.appendChild(document.createElement("a"));
let par1_link1 = par1.querySelectorAll("a")[1];
par1_link1.href = "http://www.csszengarden.com";
par1_link1.appendChild(document.createElement("cite"));
par1_link1.querySelector("cite").appendChild(document.createElement("abbr"));
par1_link1.querySelector("abbr").appendChild(document.createTextNode("CSS"));
par1_link1.querySelector("cite").appendChild(document.createTextNode(" Zen Garden"));
par1.appendChild(document.createTextNode(". It showcased what was possible with "));
par1.appendChild(document.createElement("abbr"));




section1.appendChild(document.createElement("p"));
section1.appendChild(document.createElement("p"));



		/* SECTION 1 END */

		/* SECTION 2 */
document.querySelector("article").appendChild(document.createElement("section"));


		/* SECTION 2 END */
/* ARTICLE END */