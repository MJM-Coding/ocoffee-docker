// Initialise EmailJS avec la clé publique
(function () {
    emailjs.init("EaN6pw6n5070PK_Iz");
})();

// Fonction pour envoyer l'email
function sendMail(event) {
    event.preventDefault(); // Empêche le rechargement immédiat au clic

    const form = event.target; // Récupère l'élément du formulaire HTML
    emailjs.sendForm('service_hk3bj7n', 'template_l3gwbni', form)
        .then(function (response) {
            alert("Email envoyé avec succès !");

            // Rafraîchit la page après une courte pause
            setTimeout(function() {
                form.reset(); // Réinitialise le formulaire
                location.reload(); // Rafraîchit la page
            }, 500); //  = 1/2 seconde

        }, function (error) {
            alert("Erreur lors de l'envoi de l'email. Veuillez réessayer.");
            // Rafraîchit la page après une courte pause
            setTimeout(function() {
                location.reload(); // Rafraîchit la page
            }, 500); // = 1/2 seconde
        });

}

// Lie la fonction sendMail à l'événement de soumission du formulaire
document.getElementById('contact-form').addEventListener('submit', sendMail);
