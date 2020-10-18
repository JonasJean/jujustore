
 
function reinitialisation(){
    var temps = 1000; // rafraîchissement en millisecondes
    setTimeout('afficherDate()',temps)
}
         
function afficherDate() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    var time = h + ':' + m + ':' + s
    document.getElementById('heure').innerHTML = time;
    reinitialisation();
}

let total = document.querySelector('.total');
const cartItem = document.querySelector('.cart-item');
const produit = document.querySelectorAll('.product');

// Recuperation des infos de l'overlay cart
const cart = document.getElementById('cart');
const overlay = document.querySelector('.total-cart');

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove')){
        const prixHt = e.target.previousElementSibling.textContent;
        const nomItemCart = e.target.previousElementSibling.previousElementSibling.textContent;
        e.target.parentElement.parentElement.remove();
        // const ajout = document.querySelectorAll('#ajout');
        produit.forEach(p => {
            const nomProduit = p.childNodes[1].nextElementSibling.nextElementSibling;
            if(nomProduit.textContent === nomItemCart){
                nomProduit.parentElement.childNodes[1].childNodes[1].classList.remove('hidden');
            }
        });
        const prix = prixHt.split("ht")[1].split(".").join("");
        const montantBrg = e.target.parentElement.nextElementSibling.childNodes[1].nextElementSibling.nextElementSibling.textContent;
        const prixTotal = parseInt(prix * parseInt(montantBrg));
        let temp = parseInt(total.innerHTML.split(".").join(""));
        let tempTotal = temp - prixTotal;
        total.innerHTML = tempTotal.toLocaleString('id-ID');

        let temp3 = parseInt(cartItem.textContent);
        temp3 -= parseInt(montantBrg);
        cartItem.innerHTML = temp3;
    }
    // ajouter / diminuer montant des biens
    if(e.target.classList.contains('up')){
        let tempmontant = parseInt(e.target.nextElementSibling.nextElementSibling.textContent);
        tempmontant++;
        let temp = parseInt(cartItem.textContent);
        temp++;
        cartItem.innerHTML = temp;
        e.target.nextElementSibling.nextElementSibling.innerHTML = tempmontant;

        let temp2 = parseInt(total.innerHTML.split(".").join(""));
        let prixInitial = parseInt(e.target.parentElement.previousElementSibling.childNodes[1].nextElementSibling.textContent.split("ht")[1].split(".").join(""));
        temp2 += prixInitial;
        total.innerHTML = temp2.toLocaleString('id-ID');
    }
    if(e.target.classList.contains('down')){
        let tempmontant = parseInt(e.target.previousElementSibling.previousElementSibling.textContent);
        if(tempmontant != 1){
            tempmontant--;        
            let temp = parseInt(cartItem.textContent);
            temp--;
            cartItem.innerHTML = temp;
    
            let temp2 = parseInt(total.innerHTML.split(".").join(""));
            let prixInitial = parseInt(e.target.parentElement.previousElementSibling.childNodes[1].nextElementSibling.textContent.split("ht")[1].split(".").join(""));
            temp2 -= prixInitial;
            total.innerHTML = temp2.toLocaleString('id-ID');
        }
        e.target.previousElementSibling.previousElementSibling.innerHTML = tempmontant;
    }
    if(e.target.classList.contains("reset")){
        cartContent.innerHTML = "";
        total.innerHTML = 0;
        cartItem.innerHTML = 0;
        const ajout = document.querySelectorAll('#ajout');
        ajout.forEach(e => {
            e.classList.remove("hidden");
        });
    }
});

cart.addEventListener('click', function() {
    overlay.classList.toggle('show-cart');   
});

// Menu-top cart
const x = document.querySelector('.x');
x.addEventListener('click', function() {
    overlay.classList.remove('show-cart');
});

// lorsque le bouton 'ajout' est selectionné
// economiser le prix
const cartContent = document.querySelector('.cart-content');
const ajout = document.querySelectorAll('#ajout');
ajout.forEach(function(e) {
    e.addEventListener('click', function(t) {
        t.target.classList.add("hidden");
        const prixHt = t.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        const nom = t.target.parentElement.nextElementSibling.nextElementSibling.textContent;
        const image = t.target.nextElementSibling.getAttribute('src');
        const prix = prixHt.split("ht")[1].split(".").join("");
        
        // t.target.textContent == "+" ? t.target.textContent = "✓" : t.target.textContent = "+";
        

        cartContent.innerHTML += `<div class="cart-overlay-item">
        <img src="${image}">
        <div>
            <h4>${nom}</h4>
            <h4>${prixHt}</h4>
            <h5 class="remove">retirer</h5>
        </div>
        <div>
            <span class="up">&uarr;</span>
            <br><span class="cart-number">${montant = 1}</span><br>
            <span class="down">&darr;</span>
        </div>
        </div>`;
        let tempCount = parseInt(cartItem.textContent);
        tempCount++;
        cartItem.innerHTML = tempCount;
        

        let temp = parseInt(total.innerHTML.split(".").join(""));
        let tempTotal = temp + parseInt(prix);
        total.innerHTML = tempTotal.toLocaleString('id-ID');
    });
});


//script for scrilling to top button
mybutton = document.getElementById("scrollBtn");

function goToTop() {
    document.documentElement.scrollTop = 0;
}

