import './style.css'
import './index.html'

function toggleMenu() {
    var mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.style.display === 'block') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'block';
    }
  }
  
  // If you still want to add the event listener, you can do so like this:
  document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
  
  
