document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    alert(`Thank you for your message, ${name}! We will respond to ${email} shortly.`);
    
    // Reset the form
    document.getElementById("contactForm").reset();
  });
  