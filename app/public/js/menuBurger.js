// Écoute l'événement 'DOMContentLoaded', qui est déclenché lorsque le DOM est entièrement chargé et analysé.
document.addEventListener('DOMContentLoaded', () => {

  // Récupère le bouton du menu burger
  const menuButton = document.getElementById('menu-button');

  // Récupère le bouton de fermeture du menu burger
  const closeMenuButton = document.getElementById('close-menu');

  // Sélectionne l'élément du menu de navigation
  const navMenu = document.querySelector('.nav_menu');

  // Lorsque ce bouton est cliqué, la classe 'active' est ajoutée à l'élément du menu de navigation.
  menuButton.addEventListener('click', () => {
    navMenu.classList.add('active');// Affiche le menu de navigation
  });

  // Lorsque ce bouton est cliqué, la classe 'active' est retirée de l'élément du menu de navigation.
  closeMenuButton.addEventListener('click', () => {
    navMenu.classList.remove('active');// Cache le menu de navigation
  });
});

