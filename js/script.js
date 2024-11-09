let promoInterval; // Variable pour stocker l'intervalle de la notification

function openModal(type) {
    if (type === 'signup') {
        document.getElementById('signupModal').style.display = 'block';
    } else if (type === 'login') {
        document.getElementById('loginModal').style.display = 'block';
    }
}

function closeModal(type) {
    if (type === 'signup') {
        document.getElementById('signupModal').style.display = 'none';
    } else if (type === 'login') {
        document.getElementById('loginModal').style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target === document.getElementById('signupModal')) {
        closeModal('signup');
    }
    if (event.target === document.getElementById('loginModal')) {
        closeModal('login');
    }
}

function showPromoNotification() {
    const notification = document.getElementById('promoNotification');
    notification.style.display = 'block'; // Affiche la notification
}

function closePromoNotification() {
    const notification = document.getElementById('promoNotification');
    notification.style.display = 'none'; // Cache la notification
}

// Fonction pour gérer l'affichage de la notification
function managePromoNotification() {
    showPromoNotification(); // Affiche la notification

    // Cache la notification après 5 secondes
    setTimeout(() => {
        closePromoNotification();
        // Redémarre l'intervalle pour afficher la notification après 10 secondes
        setTimeout(managePromoNotification, 20000); // Réaffiche après 10 secondes
    }, 10000); // Affiche pendant 5 secondes

    // Réaffiche la notification toutes les 10 secondes
    promoInterval = setInterval(() => {
        showPromoNotification();
    }, 20000);
}

// Appeler cette fonction au chargement de la page
window.onload = function() {
    managePromoNotification(); // Gère l'affichage de la notification
};

// Assurez-vous que le bouton de fermeture fonctionne correctement
document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close-btn');
    closeButton.onclick = function() {
        closePromoNotification(); // Ferme la notification
        clearInterval(promoInterval); // Arrête l'intervalle
        // Redémarre la gestion après 2 minutes (120 secondes)
        setTimeout(managePromoNotification, 720000); // Réaffiche après 2 minutes
    };
});
