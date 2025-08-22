document.addEventListener('DOMContentLoaded', function() {
    // Données des utilisateurs
    const usersData = {
        ARYAN: { name: "ARYAN BHOTEY", role: "Développeur Full-Stack" },
        SELIM: { name: "SELIM AISSA", role: "Développeur Full-Stack" }
    };

    // Gestion des boutons Connexion
    const portfolioButtons = document.querySelectorAll('.retro-button');
    portfolioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const userOption = this.closest('.user-option');
            const userId = userOption.getAttribute('data-user');
            const user = usersData[userId];
            
            if (!user) return; // sécurité

            // Animation du bouton
            this.textContent = 'Connexion...';
            this.disabled = true;
            
            // Simuler le chargement
            setTimeout(() => {
                alert(`Ouverture du portfolio de ${user.name}\n${user.role}`);
                this.textContent = 'Connexion';
                this.disabled = false;
            }, 1000);
        });
    });

    // Gestion des contrôles de fenêtre
    const mainWindow = document.querySelector('.main-window');
    const mainTaskbar = document.querySelector('taskbar');
    const maximizeBtn = document.querySelector('.maximize-btn');
    let isMaximized = false; // état du plein écran

    // Fermer
    document.querySelector('.close-btn').addEventListener('click', function() {
        if(confirm('Fermer l\'application ?')) {
            mainWindow.style.display = 'none';
        }
    });

    // Minimiser
    document.querySelector('.minimize-btn').addEventListener('click', function() {
        mainWindow.style.transform = 'translate(-50%, 100%)';
        setTimeout(() => {
            mainWindow.style.transform = 'translate(-50%, -50%)';
        }, 500);
    });

    // Maximiser / restaurer
    maximizeBtn.addEventListener('click', function() {
        if (!isMaximized) {
            // Passer en plein écran
            mainWindow.style.width = '100vw';
            mainWindow.style.height = '100vh';
            mainWindow.style.top = '0';
            mainWindow.style.left = '0';
            mainWindow.style.transform = 'none';
            isMaximized = true;
            if (isMaximized == true) {
                mainTaskbar.style.visibility = 'hidden';
            }
        } else {
            // Revenir à la taille normale
            mainWindow.style.width = '800px';
            mainWindow.style.height = 'auto';
            mainWindow.style.top = '50%';
            mainWindow.style.left = '50%';
            mainWindow.style.transform = 'translate(-50%, -50%)';
            mainWindow.style
            isMaximized = false;
        }
    });

    // Effet sonore simulé pour les clics
    document.addEventListener('click', function(e) {
        if(e.target.matches('button, .dock-icon, .desktop-icon')) {
            console.log('*click sound*');
        }
    });

    // Gestion de l'heure
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleDateString('fr-FR', { 
            weekday: 'short', 
            day: '2-digit', 
            month: 'short', 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        document.querySelector('.time').textContent = timeString;
    }
    
    updateTime();
    setInterval(updateTime, 60000);
});
