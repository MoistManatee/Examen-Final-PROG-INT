

//fonction pour la validation javascript
function Verif() {

    //assigner les variable javascript a partir du ID de chaque variable du form HTML
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var dateNaissance = document.getElementById('dateNaissance').value;
    var mail = document.getElementById('mail').value;
    var siteWeb = document.getElementById('siteWeb').value;
    var motDePasse = document.getElementById('motDePasse').value;
    var sexeHomme = document.getElementById('homme').checked;
    var sexeFemme = document.getElementById('femme').checked;
    var pays = document.getElementById('pays').value;
    var formation1 = document.getElementById('formation1').checked;
    var formation2 = document.getElementById('formation2').checked;
    var formation3 = document.getElementById('formation3').checked;
    var besoinFormation = document.getElementById('besoinFormation').value;
    var photo = document.getElementById('photo').value;

    //valudation des variables NULL/vides
    if (nom === '')
    {
        alert('Veuillez remplir le nom du formulaire.');
        return false;
    }
    if (prenom === '')
    {
        alert('Veuillez remplir le prenom du formulaire.');
        return false;
    }
    if (dateNaissance === '')
    {
        alert('Veuillez remplir la date de naissance du formulaire.');
        return false;
    }
    if (mail === '')
    {
        alert('Veuillez remplir le mail du formulaire.');
        return false;
    }
    if (siteWeb === '')
    {
        alert('Veuillez remplir le site web du formulaire.');
        return false;
    }
    if (motDePasse === '')
    {
        alert('Veuillez remplir le mot de passe du formulaire.');
        return false;
    }
    if ((!sexeHomme && !sexeFemme))
    {
        alert('Veuillez remplir le sexe du formulaire.');
        return false;
    }
    if (pays === '')
    {
        alert('Veuillez remplir le pays du formulaire.');
        return false;
    }
    if ((!formation1 && !formation2 && !formation3))
    {
        alert('Veuillez remplir au moins une formation dans le formulaire.');
        return false;
    }
    if (besoinFormation === '')
    {
        alert('Veuillez remplir le champ des besoins en formation du formulaire.');
        return false;
    }
    if (photo === '')
    {
        alert('Veuillez remplir le champ de photo du formulaire.');
        return false;
    }
    
    //validation de la longeur du password
    if (motDePasse.length !== 8) 
    {
      alert('Le mot de passe doit contenir exactement 8 caractères.');
      return false;
    }

    return true;
  }
