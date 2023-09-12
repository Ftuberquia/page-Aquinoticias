const video = document.getElementById("video-fondo");

// Reproducir el video cuando el usuario entra en la sección
document.querySelector(".perfil-container").addEventListener("mouseenter", function () {
  video.play();
});

