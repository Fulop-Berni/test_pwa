const container = document.querySelector(".container")
const coffees = [
  { name: "Angel Hair Pasta", image: "images/pasta1.jpg" },
  { name: "Bow Tie Pasta (Farfalle)", image: "images//pasta2.jpg" },
  { name: "Bucatini Pasta", image: "images/pasta3.jpg" },
  { name: "Ditalini Pasta", image: "images/pasta4.jpg" },
  { name: "Egg Noodles", image: "images/pasta5.jpg" },
  { name: "Linguine", image: "images/pasta6.jpg" },
  { name: "Macaroni", image: "images/pasta7.jpg" },
  { name: "Manicotti", image: "images/pasta8.jpg" },
  { name: "Orecchiette Pasta", image: "images/pasta9.jpg" },
]

const showPastas = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
}
  
document.addEventListener("DOMContentLoaded", showPastas)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

let deferredPrompt; 

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
                            
    deferredPrompt = e;	
    let infoBar = document.querySelector('#custom-info-bar');
    if (infoBar) {
        infoBar.style.display = '';
        let installBtn = document.querySelector('#custom-install-button');
                            
        installBtn.addEventListener('click', (e) => {
  
        deferredPrompt.prompt();
      
        deferredPrompt.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    let infoBar = document.querySelector('#custom-info-bar');
                    infoBar.style.display = 'none'; 
                    deferredPrompt = null;
                }
            });
        });
    }
});