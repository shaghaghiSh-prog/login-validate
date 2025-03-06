// admin.js
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to dashboard content
    const dashboardContent = document.querySelector('.dashboard-content');
    if (dashboardContent) {
        dashboardContent.classList.add('fade--in');
    }

    // Animate dashboard cards
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('slide-in'); // Ensure this class is defined in your CSS
    });

    // Create Sales Chart
    const salesChartElement = document.getElementById('salesChart');
    if (salesChartElement) {
        const salesCtx = salesChartElement.getContext('2d');
        new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Sales',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: '#00bcd4',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Create Products Chart
    const productsChartElement = document.getElementById('productsChart');
    if (productsChartElement) {
        const productsCtx = productsChartElement.getContext('2d');
        new Chart(productsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Running Shoes', 'Hiking Boots', 'Sneakers', 'Sports Socks'],
                datasets: [{
                    data: [300, 50, 100, 80],
                    backgroundColor: ['#00bcd4', '#ff4081', '#4caf50', '#ffc107']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }

    // Add hover effect to table rows
    const tableRows = document.querySelectorAll('.orders-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = 'rgba(0, 188, 212, 0.1)';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });

    // Simulate loading new notifications
    setInterval(() => {
        const notificationCount = document.querySelector('.notification-count');
        if (notificationCount) {
            let count = parseInt(notificationCount.textContent);
            count = (count % 5) + 1; // Cycle between 1 and 5
            notificationCount.textContent = count;
            notificationCount.classList.add('pulse');
            setTimeout(() => {
                notificationCount.classList.remove('pulse');
            }, 1000);
        }
    }, 5000);
});


window.onload = function() {
    const loggedInAdmin = localStorage.getItem("LoggedInAdmin");
    if (loggedInAdmin) {
        console.log("Admin");
        document.getElementById("Admin-name-top").textContent = loggedInAdmin; 
        document.getElementById("Admin-name-down").textContent = loggedInAdmin; // Set the username
    }
};