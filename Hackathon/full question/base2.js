const pageHome = document.getElementById("ava");

// Add a click event listener to the button
pageHome.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "../profile/profile.html"; // Replace "newpage.html" with the desired destination
});

//collection
const toggleButton = document.getElementById('toggleButton');
  const list = document.getElementById('list');
  toggleButton.addEventListener('click', () => {
      if (list.style.display === 'none' || list.style.display === '') {
          list.style.display = 'block';
      } else {
          list.style.display = 'none';
      }
});

