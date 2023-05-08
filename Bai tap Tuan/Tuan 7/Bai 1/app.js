const toggleButton = document.getElementById("toggle");

function toggleDarkMode() {
  const bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.classList.toggle("dark");
}

toggleButton.addEventListener("click", toggleDarkMode);