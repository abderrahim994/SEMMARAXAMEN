// Attend que le document HTML soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
  
    // Sélectionne le bouton
    var button = document.querySelector('button');
  
    // Ajoute un écouteur d'événement au clic sur le bouton
    button.addEventListener('click', function() {
      // Code à exécuter lorsque le bouton est cliqué
      console.log('Le bouton a été cliqué');
    });
  
    // Sélectionne le formulaire
    var form = document.querySelector('form');
  
    // Ajoute un écouteur d'événement à la soumission du formulaire
    form.addEventListener('submit', function(event) {
      // Empêche l'envoi du formulaire par défaut
      event.preventDefault();
  
      // Code à exécuter lorsque le formulaire est soumis
      console.log('Le formulaire a été soumis');
    });
    
  });
  