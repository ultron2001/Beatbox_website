document.getElementById('createButton').addEventListener('click', function () {
    // Get the value entered by the user
    var customName = document.getElementById('songName').value;

    // Create li element
    var listItem = document.createElement('li');

    // Set innerHTML with dynamic user-entered name
    listItem.innerHTML = `
        <div class="audioBox0">
          <h2>${customName}</h2>
          <div id="audioContainer">
            <div id="audioPlayer">
              <audio controls>
                <source src="audio/song0.mp3" type="audio/mp3" />
                ${customName}
              </audio>
            </div>
          </div>
        </div>
      `;

    // Append the li to the ul
    document.getElementById('songList').appendChild(listItem);

    // Save the data to localStorage
    saveToLocalStorage();
});

// Load data from localStorage on page load
window.addEventListener('load', function () {
    loadFromLocalStorage();
});

function saveToLocalStorage() {
    // Get existing data or initialize an empty array
    var existingData = JSON.parse(localStorage.getItem('songListData')) || [];

    // Add the new data
    existingData.push({ name: document.getElementById('songName').value });

    // Save the updated data back to localStorage
    localStorage.setItem('songListData', JSON.stringify(existingData));
}

function loadFromLocalStorage() {
    // Get data from localStorage
    var existingData = JSON.parse(localStorage.getItem('songListData')) || [];

    // Create list items based on the stored data
    existingData.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
          <div class="audioBox0">
            <h2>${item.name}</h2>
            <div id="audioContainer">
              <div id="audioPlayer">
                <audio controls>
                  <source src="audio/song0.mp3" type="audio/mp3" />
                  ${item.name}
                </audio>
              </div>
            </div>
          </div>
        `;
        document.getElementById('songList').appendChild(listItem);
    });
}