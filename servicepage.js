import './servicepagecss.css'
import './servicepage.html'

function toggleMenu() {
    var mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.style.display === 'block') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'block';
    }
  }
  