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


  function dropDown() {
    document.querySelector('#submenu').classList.toggle('hidden')
    document.querySelector('#arrow').classList.toggle('rotate-0')
  }
  dropDown()

  function Openbar() {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
  }



  function search() {
    const input = document.getElementById('searchbar').value.trim().toLowerCase();
    const sections = document.querySelectorAll('h2');
    const suggestionsContainer = document.getElementById('searchSuggestions');
    suggestionsContainer.innerHTML = '';

    sections.forEach(section => {
      const sectionText = section.textContent.trim().toLowerCase();
      if (sectionText.includes(input)) {
        const suggestion = document.createElement('div');
        suggestion.classList.add('search-suggestion');
        suggestion.textContent = section.textContent;
        suggestion.addEventListener('click', () => {
          section.scrollIntoView({ behavior: 'smooth' });
          suggestionsContainer.classList.add('hidden');
        });
        suggestionsContainer.appendChild(suggestion);
      }
    });

    if (input === '') {
      suggestionsContainer.classList.add('hidden');
    } else {
      suggestionsContainer.classList.remove('hidden');
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      search();
    }
  }