// Initialise une variable pour suivre l'état actif/inactif de la fonctionnalité
let isActive = false;

// Ajoute un écouteur d'événements pour le clic sur l'icône de l'extension
chrome.browserAction.onClicked.addListener(function (tab) {
  // Inverse l'état actif/inactif
  isActive = !isActive;

  if (isActive) {
    // Si l'extension est activée, injecte un script dans l'onglet actuel pour écouter les événements 'keydown'
    chrome.tabs.executeScript({
      code: `
        document.addEventListener('keydown', function(event) {
          const audio = new Audio(chrome.runtime.getURL('quack.mp3'));
          audio.play();
        });
      `
    });
  } else {
    // Si l'extension est désactivée, injecte un script pour retirer l'écouteur d'événements 'keydown'
    chrome.tabs.executeScript({
      code: 'document.removeEventListener("keydown", function(event) {});'
    });
  }
});
