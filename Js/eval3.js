var tab = ["Leila", "Pablo", "Cid", "Dams", "Mick", "Souley", "Salem", "Clem", "Marion"];
var prenom = window.prompt ("entrez un prenom");

if(tab.indexOf(prenom)!== -1)

{
    tab.splice(tab.indexOf(prenom), 1);
    tab.push("");
}

else

{
    alert("prenom non trouvé:");

}

console.log(tab);



