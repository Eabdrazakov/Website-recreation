window.onload = function () {
    const h1 = document.querySelector("h1");
    h1.remove();

    const h2element1 = document.createElement("h2");
    h2element1.append("Webpage Recreation Practice");

    const p = document.createElement("p");
    p.append("The HTML of this webpage was created with JavaScript.");

    const img = document.createElement("img");
    img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
    img.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
    img.style.width = "50%";

    const h2element2 = document.createElement("h2");
    h2element2.append("Facts about the Multicolored Tanager");

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    li1.append("It is endemic to the mountains of Colombia.");
    li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
    const ul = document.createElement("ul");
    ul.prepend(li1);
    ul.prepend(li2);

    const h3 = document.createElement("h3");
    h3.append("Source");

    const a = document.createElement("a");
    a.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
    a.append("Wikipedia");

    //Append the element to the document's body

    document.body.appendChild(h2element1);
    document.body.appendChild(h2element2);
    document.body.appendChild(p);
    document.body.appendChild(img);
    document.body.appendChild(ul);
    document.body.appendChild(a);

}

