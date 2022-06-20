var PU = parseInt (prompt("entrez le prix unitaire"));
var QTC = parseInt (prompt("entrez la quantite commande"));
var REM = 0;
var FPT = 0;    
var TTC = 0;
var PAP = 0;

TTC = ( PU*QTC )

if ( TTC >=100 && TTC <=200 ) 

{
    REM = TTC* 5/100;
}
else if (TTC >200)

{
    REM = TTC* 10/100;
}

if ( (TTC - REM) <500 )

{
    FPT = (TTC - REM) *2/100;
} 

else

{
    FPT = 0;
}


if (FPT != 0 && FPT <6)

{
    FPT = 6
}

PAP = (TTC - REM) + FPT;

console.log (PAP)