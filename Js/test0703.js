var nb1 = window.prompt("ecrire un premier nombre");
var nb2 = window.prompt("ecrire un deuxieme nombre");
var nb1 = parseInt(nb1);
var nb2 = parseInt(nb2);

console.log (typeof nb1);
console.log (typeof nb2);

var saisir = window.prompt("saisir un opérateur");

// if(saisir =="+" || saisir =="-" || saisir =="*" || saisir == "/")


switch (saisir)

{
case "+" :
    alert (nb1 + nb2);
break;
case "-" : 
    alert (nb1 - nb2);
break;
case "*" :
    alert (nb1 * nb2);
break;
case "/" :
    alert (nb1 / nb2);
break;

    
//     console.log("entrez votre premier nombre");
//     console.log("entrez votre deuxieme nombre");

//     if (operation == "add")

//     {
//         resultat = nombre1 + nombre2;

//     }
default:
    alert ("operation incorrect");
}



// Numérique => 6543212434 => Int ou integer
// var nombre = 1;
// nombre + nombre = 2;
// Caractére => "gegfekg" => string ou var(char)
// var lettre = "fefe"; 
// lettre + lettre = "fefefefe"
// Booléen => 0 ou 1 => true ou false