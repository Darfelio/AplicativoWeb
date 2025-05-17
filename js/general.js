document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  const btnCart = document.querySelector('.containerCart-icon');
  const containerCartProducts = document.querySelector('.containerCart-product');
  containerCartProducts.classList.add('hidden-cart');
  btnCart.addEventListener('click', ()=> {
    containerCartProducts.classList.toggle('hidden-cart');
  });
});