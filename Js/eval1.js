var j =0;
var a =0;
var v =0;
var personnes =0;

    while (personnes<=100)
{
    
    personnes = window.prompt("Entrez votre age");

    if (personnes <20)

        {
            j++;
        }

    else if (personnes >=20 && personnes<=40)

        {
            a++;
        }

    else if (personnes >40 && personnes <=100);

        {
            v++;
        }

}

        console.log ("les personnes de moins de 20 ans" +j);
        console.log ("les personnes entre 20 et 40 ans" +a);
        console.log ("les personnes entre 40 et 100 ans" +v);

