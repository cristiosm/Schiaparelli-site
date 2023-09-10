function openEmailSection() {
    var emailSection = document.getElementById("email-section");
    emailSection.style.display = "block";
  }
  function closeEmailSection() {
    var emailSection = document.getElementById("email-section");
    emailSection.style.display = "none";
  }


  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var emailInput = document.getElementById("email-input");
    var email = emailInput.value;
  
    if (validateEmail(email)) {
      alert("Adresa de email introdusă este: " + email);
  
    } else {
      alert("Adresa de email introdusă NU este validă. Vă rugăm să verificați formatul.");
    }
  });
  
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
