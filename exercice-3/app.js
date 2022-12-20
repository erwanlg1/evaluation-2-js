const image = document.querySelector("img");
image.src = "assets/rick.webp";
image.alt = "rick";

const text = document.querySelector("#mon-premier-paragraphe");
text.innerText = " Bonjour Riri";

const button = document.querySelector("#bonjour");
button.addEventListener("click", () => {

  const para = document.querySelector("#mon-second-paragraphe");
  para.innerText = "Bonjour fifi";

});

const valider = document.querySelector("#valider");
valider.addEventListener("click", () => {

  const statues = document.querySelector("input");
  const paragraphe = document.querySelector("#mon-troisième-paragraphe");
  paragraphe.innerText = "Bonjour " + statues.value;

});



