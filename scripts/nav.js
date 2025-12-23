// Navigation JavaScript
function toggleNav() {
    const nav = document.querySelector('.off-canvas-nav');
    const overlay = document.querySelector('.overlay');
    const menuIcon = document.querySelector('.menu-icon');

    // Debugging: Log elements to ensure they exist
    console.log('Nav:', nav);
    console.log('Overlay:', overlay);
    console.log('Menu Icon:', menuIcon);

    // Verify elements exist before manipulating
    if (nav && overlay && menuIcon) {
        // Toggle navigation open/closed
        nav.classList.toggle('open');
        overlay.classList.toggle('active');
        menuIcon.classList.toggle('active');

        // Update accessibility attributes
        const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
        menuIcon.setAttribute('aria-expanded', (!isExpanded).toString());
    } else {
        console.error('One or more navigation elements are missing');
    }
}

// Optional: Close navigation when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.off-canvas-nav');
    const overlay = document.querySelector('.overlay');
    const menuIcon = document.querySelector('.menu-icon');

    // Check if click is outside navigation and menu icon
    if (nav && overlay && menuIcon) {
        if (!nav.contains(event.target) &&
            !menuIcon.contains(event.target) &&
            nav.classList.contains('open')) {

            nav.classList.remove('open');
            overlay.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    }
});

// Keyboard Accessibility
document.addEventListener('keydown', function(event) {
    // Close navigation with Escape key
    if (event.key === 'Escape') {
        const nav = document.querySelector('.off-canvas-nav');
        const overlay = document.querySelector('.overlay');
        const menuIcon = document.querySelector('.menu-icon');

        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            overlay.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    }
});

// Optional: Swipe Detection for Mobile

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const nav = document.querySelector('.off-canvas-nav');
    const overlay = document.querySelector('.overlay');
    const menuIcon = document.querySelector('.menu-icon');
    const swipeThreshold = 50; // Minimum pixels to trigger swipe

    // Determine swipe direction and current navigation state
    const swipeDistance = touchEndX - touchStartX;
    const isNavClosed = !nav.classList.contains('open');

    // Swipe from left to right to open navigation
    if (swipeDistance > swipeThreshold && isNavClosed) {
        nav.classList.add('open');
        overlay.classList.add('active');
        menuIcon.classList.add('active');
    }

    // Swipe from right to left to close navigation
    if (swipeDistance < -swipeThreshold && !isNavClosed) {
        nav.classList.remove('open');
        overlay.classList.remove('active');
        menuIcon.classList.remove('active');
    }
}

// Performance and Accessibility Enhancements
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Responsive Navigation Adjustment
function adjustNavForScreenSize() {
    const nav = document.querySelector('.off-canvas-nav');
    const menuIcon = document.querySelector('.menu-icon');

    // Hide menu icon on larger screens
    if (window.innerWidth > 768) {
        menuIcon.style.display = 'none';
        nav.classList.remove('open');
    } else {
        menuIcon.style.display = 'flex';
    }
}

// Analytics and Tracking (Optional)
function trackNavigation(destination) {
    // Placeholder for analytics tracking
    // Replace with your preferred analytics method
    console.log(`Navigated to: ${destination}`);

    // Example of potential Google Analytics tracking
    if (window.gtag) {
        gtag('event', 'page_view', {
            'page_path': destination
        });
    }
}

// Event Listeners for Navigation Links
document.querySelectorAll('.off-canvas-nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        const destination = this.getAttribute('href');

        // Track navigation
        trackNavigation(destination);

        // Close navigation after link click
        const nav = document.querySelector('.off-canvas-nav');
        const overlay = document.querySelector('.overlay');
        const menuIcon = document.querySelector('.menu-icon');

        nav.classList.remove('open');
        overlay.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});

// Responsive Initialization
const debouncedResize = debounce(adjustNavForScreenSize, 250);
window.addEventListener('resize', debouncedResize);


// Ensure DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Init setup
    adjustNavForScreenSize();

    const menuIcon = document.querySelector('.menu-icon');

    if (menuIcon) {
        menuIcon.addEventListener('click', toggleNav);
    } else {
        console.error('Menu icon not found');
    }
});


// Performance Monitoring (Optional)
if (window.performance) {
    window.addEventListener('load', function() {
        const loadTime = window.performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)} milliseconds`);
    });
}


// Wrap the entire functionality in a self-invoking function
(function() {
    // Define toggleNav in the global scope
    window.toggleNav = function() {
        const nav = document.querySelector('.off-canvas-nav');
        const overlay = document.querySelector('.overlay');
        const menuIcon = document.querySelector('.menu-icon');

        // Debugging logs
        console.log('Toggle Nav Called');
        console.log('Nav element:', nav);
        console.log('Overlay element:', overlay);
        console.log('Menu Icon:', menuIcon);

        // Verify elements exist before manipulating
        if (nav && overlay && menuIcon) {
            // Toggle navigation open/closed
            nav.classList.toggle('open');
            overlay.classList.toggle('active');
            menuIcon.classList.toggle('active');

            // Update accessibility attributes
            const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
            menuIcon.setAttribute('aria-expanded', (!isExpanded).toString());
        } else {
            console.error('One or more navigation elements are missing');
        }
    };

    // Ensure DOM is fully loaded before adding event listeners
    document.addEventListener('DOMContentLoaded', function() {
        const menuIcon = document.querySelector('.menu-icon');

        if (menuIcon) {
            // Ensure the onclick attribute works
            menuIcon.setAttribute('onclick', 'toggleNav()');

            // Also add a click event listener as a backup
            menuIcon.addEventListener('click', toggleNav);
        } else {
            console.error('Menu icon not found');
        }
    });
})();
