
// donner une valeur numérique au choix
var Pierre = 1;
var Feuille = 2;
var Ciseaux = 3;


var ChoixPierre = document.getElementById("Pierre");
var ChoixFeuille = document.getElementById("Feuille");
var ChoixCiseaux = document.getElementById("Ciseaux");

var ChoixRestart = document.getElementById("BoutonRestart");

var ZoneChoixUtil = document.getElementById("ChoixUtilisateur");
var ZoneChoixMachine = document.getElementById("ChoixMachine");

var ZoneResultat = document.getElementById("BoutonResultat");

var NbChoixUtil = 0;

var NBChoixMachine;

var Arret = true;


// fonction qui affiche le choix de l'utilisateur en fonction du click
ChoixPierre.addEventListener("click", function(){
    if (Arret == true) {
    NbChoixUtil = 1;
    ZoneChoixUtil.setAttribute("src", "Images/Chi.png");
    FctChoixMachine ();
    setTimeout(Verif, 1000);
    Arret = false;
    };
});

ChoixFeuille.addEventListener("click", function(){
    if (Arret == true) {
    NbChoixUtil = 2;
    ZoneChoixUtil.setAttribute("src", "Images/Fu.png"); 
    FctChoixMachine ();
    setTimeout(Verif, 1000);
    Arret = false;
    };
});
ChoixCiseaux.addEventListener("click", function(){
    if (Arret == true) {
    NbChoixUtil= 3;
    ZoneChoixUtil.setAttribute("src", "Images/Mi.png"); 
    FctChoixMachine ();
    setTimeout(Verif, 1000);
    Arret = false;
    }
}); 

ChoixRestart.addEventListener("click", function(){
    Reset ();
}); 

// fonction qui affiche le choix de la machine en fonction du résultat du random
function FctChoixMachine () {
    NbChoixMachine = Math.floor(Math.random() * 3) + 1;
    switch (NbChoixMachine) {
    case 1:
        ZoneChoixMachine.setAttribute("src", "Images/Chi.png");
        break;
    case 2:
        ZoneChoixMachine.setAttribute("src", "Images/Fu.png");
        break;
    case 3:
        ZoneChoixMachine.setAttribute("src", "Images/Mi.png");
        break;
    default:
        break;
}
}

// fonction qui compare choix utilisateur et choix machine et affiche le résultat
function Verif() {
    if (NbChoixUtil == 1 && NbChoixMachine == 3){
        ZoneResultat.setAttribute("src", "Images/Win.png");
    } else if (NbChoixUtil == 2 && NbChoixMachine == 1){
        ZoneResultat.setAttribute("src", "Images/Win.png");    
    } else if (NbChoixUtil == 3 && NbChoixMachine == 2){
        ZoneResultat.setAttribute("src", "Images/Win.png"); 
    } else if (NbChoixUtil == NbChoixMachine){
        ZoneResultat.setAttribute("src", "Images/Egalite.png");        
    } else {
    ZoneResultat.setAttribute("src", "Images/Lost.png");
    }
}

// fonction qui réinitialise le jeux pour nouvelle partie sur click sur BoutonRestart
function Reset() {
    ZoneChoixUtil.setAttribute("src", "Images/ImageVide.png");
    ZoneChoixMachine.setAttribute("src", "Images/ImageVide.png");
    ZoneResultat.setAttribute("src", "Images/Vide.png");
    Arret = true;
}
