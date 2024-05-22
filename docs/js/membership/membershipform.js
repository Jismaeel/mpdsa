document.getElementById("membership-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
     // Log the form data
     console.log(formData);
  
    // Send data to server
    fetch("https://serverforms.glitch.me/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.get("name"),
        surname: formData.get("surname"),
        email: formData.get("email"),
        drivingSchool: formData.get("school1"),
        phoneNumber: formData.get("number1"),
        area: formData.get("area")
      })
    })
      .then(response => {
        if (response.ok) {
          document.getElementById("response").innerText = "Message sent successfully!";
        } else {
          throw new Error("Failed to send message");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("response").innerText = "An error occurred while sending the message";
      });
  });
  
  
  
      // Alert
      document.addEventListener('DOMContentLoaded', function () {
        // Select the contact form
        const contactForm = document.getElementById('membership-form');
  
        // Add submit event listener
        contactForm.addEventListener('submit', function (event) {
          // Prevent the default form submission
          event.preventDefault();
  
          // Perform form validation or submission via AJAX to your server
          // For this example, let's assume the form submission fails
          const isError = false;
          const isCorrect = true;
  
          if (isCorrect) {
            // Show the correct alert
            const correctAlert = document.getElementById('correct');
            correctAlert.classList.remove('hidden'); // Remove the 'hidden' class to display the alert
          } else if (isError) {
            // Show the error alert
            const errorAlert = document.getElementById('wrong');
            errorAlert.classList.remove('hidden');
          }
        });
      });