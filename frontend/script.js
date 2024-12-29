async function submitForm() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const mobno = document.getElementById('mobno').value;
  const description = document.getElementById('description').value;

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        mobno,
        description
      })
    });

    if (response.ok) {
      // Redirect to confirmation page
      window.location.href = 'confirmation.html';
    } else {
      // Display error message on the same page
      alert('There was an error with your submission.');
    }
  } catch (error) {
    alert('There was an error: ' + error.message);
  }
}
// navbar
function myMenu() {
	var navItems = document.getElementById("nav-items-ul");
	var togglerBtn = document.querySelector(".navbar-toggler-btn");
	  navItems.classList.toggle("nav-items-height");
	  togglerBtn.classList.toggle("navbar-toggler-btn-x");
  }