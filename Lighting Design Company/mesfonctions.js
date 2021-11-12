function visiteur() {
    var numero = Math.floor(Math.random() * 1000);
    var text = "Tu es le visiteur numero :";
    alert(text + numero);
    console.log("Test de la fonction :" + numero);
}
var p_footer = document.getElementById("p_footer");
p_footer.addEventListener('dblclick', visiteur);


document.getElementById("txt").addEventListener("mouseover", ChangerTitre);
function ChangerTitre() {
    var txt = document.getElementById("txt").innerHTML;
    if (txt == "Console Spot Lumineux") {
        document.getElementById("txt").innerHTML = "Par Lighting Design Company";
        setTimeout(ChangerTitre, 1000);
    }
    else {
        document.getElementById("txt").innerHTML = "Console Spot Lumineux";
    }
}
/*function theme_bleu(){
console.log("changement de couleur");//changement de couleur en bleu
document.getElementById("txt").style.backgroundColor='blue';
document.getElementById("nav").style.backgroundColor='blue';
document.getElementById("p_footer").style.backgroundColor='blue';


}*/
/*  function theme_orange(){
    console.log("changement de couleur");//changement de couleur en orange
    document.getElementById("txt").style.backgroundColor="#cc5500";
    document.getElementById("nav").style.backgroundColor="#cc5500";
    document.getElementById("p_footer").style.backgroundColor="#cc5500";

 }

 function theme_bleu_violet(){
    console.log("changement de couleur"); //changement de couleur en bleu violet
    document.getElementById("txt").style.backgroundColor="#150485";
    document.getElementById("nav").style.backgroundColor="#150485";
    document.getElementById("p_footer").style.backgroundColor="#150485";
 }

var p_footer = document .getElementById("p_footer");
p_footer.addEventListener('dbclick',visiteur);

document.getElementById("txt").addEventListener('mouseover',ChangerTitre);
document.getElementById("theme_bleu").addEventListener('click',theme_bleu);
document.getElementById("theme_orange").addEventListener('click',theme_orange);
document.getElementById("theme_bleu_violet").addEventListener('click',theme_bleu_violet);
*/
function ChangerSection ()
{    console.debug(this.id)
    if(this.id=="nav_Acceuil")
    {
        document.getElementById("Acceuil").style.display = "block";
        document.getElementById("A_Propos").style.display = "none";
        document.getElementById("Console").style.display = "none";
    }

    else if(this.id=="nav_A_propos")
    {
        document.getElementById("Acceuil").style.display = "none";
        document.getElementById("A_Propos").style.display = "block";
        document.getElementById("Console").style.display = "none";
    }
    else if(this.id=="nav_Console")
    {
        document.getElementById("Acceuil").style.display = "none";
        document.getElementById("A_Propos").style.display = "none";
        document.getElementById("Console").style.display = "block";
    }
}


document.getElementById('nav_Acceuil').addEventListener('click',ChangerSection);
document.getElementById('nav_A_propos').addEventListener('click',ChangerSection);
document.getElementById('nav_Console').addEventListener('click',ChangerSection);

/*var mdp1=document.getElementById("mdp1").value;
var mdp2=document.getElementById("mdp2").value;
var maj=0; var min=0; var num=0;

document.getElementById("form").addEventListener("submit",VerifierFormulaireInscription)
document.getElementById("mdp1").addEventListener("submit",VerifierFormulaireInscription)
document.getElementById("mdp2").addEventListener("submit",VerifierFormulaireInscription)

 function VerifierFormulaireInscription (event)
 {
   if ("mdp1" != "mdp2")
     {
        alert("Les mots de passe sont différents");
        event.preventDefault();
      }
  }

 function VerifierMotDePasse() {
     if (document.getElementById("mdp1").value.length > 7)
     {
         document.getElementById("mdp_longueur").classList.remove("rouge");
         document.getElementById("mdp_longueur").classList.add("vert");
     }
     else
      {
         document.getElementById("mdp_longueur").classList.add("rouge");
         document.getElementById("mdp_longueur").classList.remove("vert");
     }

   var nbMajuscules = 0;
   var nbMinuscules = 0;
   var nbChiffres = 0;
   var nbSpecial = 0;
   for(var tour = 0; tour < document.getElementById("mdp1").value.length; tour++) {
       var charTour = document.getElementById("mdp1").value.charAt(tour);
       if(MajusculeBool(charTour)) {
           nbMajuscules = nbMajuscules + 1;
       }
       else if(MinusculeBool(charTour)) {
           nbMinuscules = nbMinuscules + 1;
       }
       else if(SpecialBool(charTour)) {
           nbSpecial = nbSpecial + 1;
       }
       else if(ChiffreBool(charTour)) {
           nbChiffres = nbChiffres + 1;
       }
   }
   if(nbMajuscules > 0) {
       document.getElementById("mdp_majuscule").classList.remove("rouge");
       document.getElementById("mdp_majuscule").classList.add("vert");
   }
   else {
       document.getElementById("mdp_majuscule").classList.add("rouge");
       document.getElementById("mdp_majuscule").classList.remove("vert");
   }
   if(nbMinuscules > 0) {
       document.getElementById("mdp_minuscule").classList.remove("rouge");
       document.getElementById("mdp_minuscule").classList.add("vert");
   }
   else {
       document.getElementById("mdp_minuscule").classList.add("rouge");
       document.getElementById("mdp_minuscule").classList.remove("vert");
   }
   if(nbChiffres > 0) {
       document.getElementById("mdp_chiffre").classList.remove("rouge");
       document.getElementById("mdp_chiffre").classList.add("vert");
   }
   else {
       document.getElementById("mdp_chiffre").classList.add("rouge");
       document.getElementById("mdp_chiffre").classList.remove("vert");
   }
   if(nbSpecial > 0) {
       document.getElementById("mdp_special").classList.remove("rouge");
       document.getElementById("mdp_special").classList.add("vert");
   }
   else {
       document.getElementById("mdp_special").classList.add("rouge");
       document.getElementById("mdp_special").classList.remove("vert");
   }

   if(document.getElementById("mdp1").value.length > 7 && nbMajuscules > 0 && nbMinuscules > 0 && nbChiffres > 0 && nbSpecial > 0) {
       return true;
   }
   else {
       return false;
   }
}

function MajusculeBool(caractère) {
    var listedescaractères = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(var tour = 0; tour < listedescaractères.length; tour++) {
        if(listedescaractères[tour] == caractère) {
            return true;
        }
    }
    return false;
}

function MinusculeBool(caractère) {
    var listedescaractères = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(var tour = 0; tour < listedescaractères.length; tour++) {
        if(listedescaractères[tour].toLowerCase() == caractère) {
            return true;
        }
    }
    return false;
}

function SpecialBool(caractère) {
    var listedescaractères = [" ", "`", "!", "@", "#", "$", "%", "*", "(", ")", "_", "+", "\\", "-", "=", "[", "]", "{", "}", ";", "'", ":", "\"", "|", ",", ".", "<", ">", "/", "?", "~"];
    for(var tour = 0; tour < listedescaractères.length; tour++) {
        if(listedescaractères[tour] == caractère) {
            return true;
        }
    }
    return false;
}

function ChiffreBool(caractère) {
    var listedescaractères = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(var tour = 0; tour < listedescaractères.length; tour++) {
        if(listedescaractères[tour] == caractère) {
            return true;
        }
    }
    return false;
}
document.getElementsByTagName("form")[0].addEventListener("submit", VerifierFormulaireInscription);
document.getElementById("mdp1").addEventListener("input", VerifierMotDePasse);
*/