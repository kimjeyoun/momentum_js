const images = ["imges1.jpg", "imgs2.jpg", "imgs3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage); //  append는 맨 뒤에 요소 추가 prepend는 맨 앞에 추가

document.body.style = `background-image:url(img/${chosenImage});  background-size: cover`;

bgimage.className = "hidden";
