document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    if (!form) {
      console.error("Form element not found.");
      return;
    }

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
          courseOption: formData.get("course-option"),
          packageOption: formData.get("packageOption"),
          carHire: {
            north: document.getElementById('car-hire-checkbox-north')?.checked,
            south: document.getElementById('car-hire-checkbox-south')?.checked
          },
          selectdate: formData.get("selectdate")
        };
      }

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .catch(error => {
        if (error.ok) {
          alert('Form was successfully sent');
        } else {
          alert('Form was successfully sent');
        }
      })
    });
  });
});
