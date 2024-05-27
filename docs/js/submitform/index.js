document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formId = form.getAttribute("id");
      let url = "";
      let data = {};

      const formData = new FormData(form);

      if (formId === "contact-form") {
        url = "https://node-server-c9zt.onrender.com/submit-contact";
        data = {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        };
      } else if (formId === "membership-form") {
        url = "https://node-server-c9zt.onrender.com/submit-membership";
        data = {
          name: formData.get("name"),
          surname: formData.get("surname"),
          email: formData.get("email"),
          school1: formData.get("school1"),
          number1: formData.get("number1"),
          area: formData.get("area")
        };
      } else if (formId === "Bookingsform1") {
        url = "https://node-server-c9zt.onrender.com/submit-bookingskylas";
        data = {
          name: formData.get("name"),
          surname: formData.get("surname"),
          email: formData.get("email"),
          number1: formData.get("number1"),
          courseOption: form.querySelector('input[name="course-option"]:checked') ? form.querySelector('input[name="course-option"]:checked').value : null,
          packageOption: formData.get("package-list"),
          carHire: {
            north: document.getElementById('car-hire-checkbox-north').checked,
            south: document.getElementById('car-hire-checkbox-south').checked
          },
          selectedDate: formData.get('selected-date')
        };
      }

      console.log("Form ID:", formId);
      console.log("URL:", url);
      console.log("Data:", data);

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          document.getElementById("response").innerText = "Form submitted successfully!";
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("response").innerText = "An error occurred while submitting the form";
      });
    });
  });
});
