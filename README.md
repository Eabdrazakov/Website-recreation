window.onload = function () {
    const h1 = document.querySelector("h1");
    h1.remove();

    const h2element1 = document.createElement("h2");
    h2element1.append("Webpage Recreation Practice");

    const p = document.createElement("p");
    p.append("The HTML of this webpage was created with JavaScript.");

    const h2element2 = document.createElement("h2");
    h2element2.append("Facts about the Multicolored Tanager");

    const li1 = documnet.createElement("li");
    const li2 = documnet.createElement("li");
    li1.append("It is endemic to the mountains of Colombia.");
    li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
    const ul = documnet.querySelector("ul");
    ul.append(li1);
    ul.prepend(li2);

    const h3 = document.createElement("h3");
    h3.append("Source");

    const a = document.createElement("a href=https://en.wikipedia.org/wiki/Multicoloured_tanager");
    a.append("Wikipedia");
}
