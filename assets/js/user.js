document.addEventListener('DOMContentLoaded', () => {
    // Animate user cards
    const cards = document.querySelectorAll('.user-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('slide-in');
    });

    // Add hover effect to table rows
    const tableRows = document.querySelectorAll('.orders-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = 'hsl(5, 100%, 95%)';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });

    // Simulate loading new notifications
    setInterval(() => {
        const notificationCount = document.querySelector('.notification-count');
        let count = parseInt(notificationCount.textContent);
        count = (count % 3) + 1; // Cycle between 1 and 3
        notificationCount.textContent = count;
        notificationCount.classList.add('pulse');
        setTimeout(() => {
            notificationCount.classList.remove('pulse');
        }, 1000);
    }, 5000);

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.product-item .btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cartCount = document.querySelector('.cart-count');
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;
            cartCount.classList.add('pulse');
            setTimeout(() => {
                cartCount.classList.remove('pulse');
            }, 1000);

            // Change button text temporarily
            const originalText = button.textContent;
            button.textContent = 'Added to Cart';
            button.disabled = true;
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });
    });
});
console.log(1);



window.onload = function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        console.log("user");
        
        document.getElementById("user-name-top").textContent = loggedInUser; 
        document.getElementById("user-name-down").textContent = loggedInUser; // Set the username

    }
};