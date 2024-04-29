document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  
     // Function to show the spinner
 function showSpinner() {
    document.getElementById('spinner').classList.remove('hidden');
  }
  
  // Function to hide the spinner and show the content
  function hideSpinnerAndShowContent() {
    document.getElementById('spinner').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
  }
  
  // Simulate an asynchronous operation (e.g., fetching data)
  function simulateAsyncOperation() {
    showSpinner();
  
    // Simulate a delay (replace this with your actual async operation)
    setTimeout(function () {
        hideSpinnerAndShowContent();
    }, 2000); // Change 2000 to your desired delay in milliseconds
  }
  
  // Call the function to start the process
  simulateAsyncOperation();





// search bar 
const searchInput = document.getElementById('searchInput');
const clearButton = document.getElementById('clearButton');
const searchButton = document.getElementById('searchButton');
const searchSuggestions = document.getElementById('searchSuggestions');

function showSuggestions() {
    const searchText = searchInput.value.toLowerCase();
    const filteredSuggestions = Array.from(document.querySelectorAll('h2'))
        .map(section => section.textContent)
        .filter(sectionText => sectionText.toLowerCase().includes(searchText));

    searchSuggestions.innerHTML = ''; // Clear previous suggestions

    filteredSuggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.classList.add('px-4', 'py-2', 'cursor-pointer', 'hover:bg-gray-100');
        li.addEventListener('click', () => {
            searchInput.value = suggestion;
            hideSuggestions();
        });
        searchSuggestions.appendChild(li);
    });

    if (filteredSuggestions.length > 0) {
        searchSuggestions.classList.remove('hidden');
    } else {
        searchSuggestions.classList.add('hidden');
    }
}

function hideSuggestions() {
    searchSuggestions.classList.add('hidden');
}

function navigateToh2() {
    const searchText = searchInput.value.toLowerCase(); // Get the search input text
    const h2Elements = document.querySelectorAll('h2'); // Select all <h2> elements on the page

    // Loop through each <h2> element
    h2Elements.forEach(h2 => {
        // Check if the text content of the <h2> element matches the search input text
        if (h2.textContent.toLowerCase().includes(searchText)) {
            h2.scrollIntoView({ behavior: 'smooth' }); // If found, scroll to that <h2> element
        }
    });
}



searchInput.addEventListener('input', () => {
    showSuggestions();
});

clearButton.addEventListener('click', () => {
    searchInput.value = '';
    hideSuggestions();
});

searchButton.addEventListener('click', () => {
    navigateToh2();
    hideSuggestions();
});



// linked with server.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const requestData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    fetch('https://msdsa-sever.glitch.me//send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});