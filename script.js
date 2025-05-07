// Change Text Content Dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("text").textContent =
    "The text has been changed dynamically!";
});

// Modify CSS Styles via JavaScript
document
  .getElementById("changeStyleBtn")
  .addEventListener("click", function () {
    document.getElementById("styled-text").style.color = "blue";
    document.getElementById("styled-text").style.fontSize = "20px";
  });

// Add or Remove an Element
document.getElementById("addElementBtn").addEventListener("click", function () {
  const newElement = document.createElement("p");
  newElement.textContent = "New added paragraph line.";
  document.getElementById("dynamic-elements").appendChild(newElement);
});

document
  .getElementById("removeElementBtn")
  .addEventListener("click", function () {
    const dynamicElementsDiv = document.getElementById("dynamic-elements");
    if (dynamicElementsDiv.lastElementChild) {
      dynamicElementsDiv.removeChild(dynamicElementsDiv.lastElementChild);
    }
  });
