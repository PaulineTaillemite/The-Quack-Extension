
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keydown', function() {
      const audio = new Audio('quack.mp3');
      audio.play();
  });
});

// 1. Créer un événement qui s'éxecute lorsque le document est chargé
// 2. Intégrer une fonction liée à un event listener (ici le keydown)
// 3. Créer un objet avec l'audio et activer le play de l'aucio

