(function () {
  'use strict';

  // Année courante dans le pied de page
  var elAnnee = document.getElementById('annee-courante');
  if (elAnnee) {
    elAnnee.textContent = new Date().getFullYear();
  }

  // Ombre plus marquée sur l'en-tête au défilement
  var entete = document.querySelector('.entete');
  if (entete) {
    var basculerOmbre = function () {
      if (window.scrollY > 8) {
        entete.style.boxShadow = '0 4px 18px rgba(22,21,26,0.08)';
      } else {
        entete.style.boxShadow = 'none';
      }
    };
    basculerOmbre();
    window.addEventListener('scroll', basculerOmbre, { passive: true });
  }

})();
