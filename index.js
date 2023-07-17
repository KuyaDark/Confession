function f1() {
  var name = prompt("Ano gusto mong tawag ko sayo?");
  if (name === "" || name === null) {
    alert("Ayusin mo :(");
  } else {
    var yesbtn = document.getElementById('yesbtn');
    var nobtn = document.getElementById('nobtn');
    var cont = document.getElementById('container');
    var sure = document.getElementById("sure");

    yesbtn.style.display = "none";
    nobtn.style.display = "none";
    cont.style.display = "block";
    sure.innerHTML = "Hello, " + name + "!";
  }
}

const buttonHeight = 100; 
const buttonWidth = 100; 

let maxHeight, maxWidth;

function updateMaxDimensions() {
  maxHeight = window.innerHeight - buttonHeight;
  maxWidth = window.innerWidth - buttonWidth;
}

window.addEventListener('resize', updateMaxDimensions);

window.addEventListener('DOMContentLoaded', () => {
  updateMaxDimensions();

  const button = document.getElementById('nobtn');
  button.style.position = 'absolute';
  button.style.cursor = 'pointer';

  button.addEventListener('click', () => {
    button.style.left = Math.floor(Math.random() * maxWidth) + 'px';
    button.style.top = Math.floor(Math.random() * maxHeight) + 'px';
  });
});

window.history.replaceState(null, null, '/');
