var cpt = 0;
var somme = 0.0;

do
{
    nb = parseFloat(prompt("nombre (0) : "));
    cpt= cpt + 1;
    somme = somme + parseFloat (nb);
}

while (nb !=0)

moyenne = somme / (cpt - 1);
document.write("moyenne :" +moyenne+ "la somme est:" + somme)