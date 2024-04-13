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



  document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsList = document.getElementById('results');
    const datasetItems = document.getElementById('dataset').getElementsByTagName('li');

    // Function to perform search
    function search(query) {
        // Clear previous results
        resultsList.innerHTML = '';

        // Filter dataset based on search query
        for (let i = 0; i < datasetItems.length; i++) {
            const item = datasetItems[i].textContent.toLowerCase();
            if (item.includes(query)) {
                resultsList.appendChild(datasetItems[i].cloneNode(true));
            }
        }
    }

    // Event listener for input changes
    searchInput.addEventListener('input', handleSearchInputChange);

    // Event listener for button click
    searchButton.addEventListener('click', handleSearchButtonClick);

    // Event listener for dataset item click
    for (let i = 0; i < datasetItems.length; i++) {
        datasetItems[i].addEventListener('click', handleDatasetItemClick);
    }

    // Function to handle search input change
    function handleSearchInputChange() {
        search(searchInput.value.toLowerCase());
    }

    // Function to handle search button click
    function handleSearchButtonClick() {
        search(searchInput.value.toLowerCase());
    }

    // Function to handle dataset item click
    function handleDatasetItemClick(event) {
        const clickedItemText = event.target.textContent.toLowerCase();
        search(clickedItemText);
    }
});
