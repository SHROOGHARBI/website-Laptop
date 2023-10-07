
/******************************************************* */
const products = document.querySelectorAll(".product-inner");

products.forEach((product) => {
    product.addEventListener("click", () => {
        product.classList.toggle("flip");
    });
});
/**************************************************** */
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
  });
  /******************************************************************* */
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Perform form submission logic here
    // You can use AJAX or fetch to send the form data to your server
  
    // Example alert to indicate form submission
    alert('Form submitted!');
  });
  