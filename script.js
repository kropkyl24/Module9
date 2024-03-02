document.addEventListener("DOMContentLoaded", function() {
  var clearButton = document.getElementById("clearButton");
  var colorSelect = document.getElementById("colorSelect");
  var sizeRange = document.getElementById("sizeRange");

  clearButton.addEventListener("click", function(event) {
    clearDots();
    event.stopPropagation();
  });

  document.addEventListener("click", function(event) {
    drawDot(event);
  });

  function drawDot(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.width = sizeRange.value + "px";
    dot.style.height = sizeRange.value + "px";
    dot.style.background = colorSelect.value;
    dot.style.left = (event.pageX - sizeRange.value / 2) + "px";
    dot.style.top = (event.pageY - sizeRange.value / 2) + "px";
    document.body.appendChild(dot);
  }

  function clearDots() {
    var dots = document.querySelectorAll(".dot");
    dots.forEach(function(dot) {
      dot.parentNode.removeChild(dot);
    });
  }
});
