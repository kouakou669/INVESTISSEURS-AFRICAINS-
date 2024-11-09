
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
    notification.classList.add('show'); // Ajoute la classe pour afficher
    setTimeout(() => {
        notification.classList.remove('show'); // Retire la classe après 5 secondes
    }, 5000); // Affiche pendant 5 secondes
}

// Appeler cette fonction au chargement de la page
window.onload = function() {
    showPromoNotification(); // Affiche immédiatement
    setInterval(showPromoNotification, 10000); // Réaffiche toutes les 2 minutes
};
