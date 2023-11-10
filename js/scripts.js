window.onload = function () {
    const h1 = document.querySelector("h1");
    h1.remove();
    const p = document.createElement("p");
    const img = document.createElement("img");
    const secondH1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    const click = document.getElementById("click");

    h1.append("Webpage Recreation Practice");
    p.append("The HTML of this webpage was created with JavaScript.");
    img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
    img.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
    img.style.width = "50%";
    secondH1.append("Fact about the Multicolored Tanager");
    li1.append("It is endemic to the mountains of Colombia.");
    li2.append("It usually searches for insects on the underside of leaves of outer limbs while clingning to leaves with its feet.");
    ul.prepend(li1);
    ul.append(li2);
    h2.append("Source");
    a.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
    a.append("Wikipedia");

    function finalStep() {
        document.body.append(p);
        document.body.append(img);
        document.body.append(secondH1);
        document.body.append(ul);
        document.body.append(li1);
        document.body.append(li2);
        document.body.append(h2);
        document.body.append(a);
    }

    click.addEventListener("click", function () {
        finalStep();
        click.setAttribute("class", "hidden");
    });

}