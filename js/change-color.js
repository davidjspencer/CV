(function(){
  var button = document.getElementById("change");
  var page = document.getElementById('change-grid-container');

	button.addEventListener("click", changeColor);

	function changeColor() {
    if (page.classList.contains('color-change') || page.classList.contains('color-change1')) {
      page.classList.remove('color-change');
      page.classList.remove('color-change1');
    } else {
        if (Math.random() >= 0.5) {
        page.classList.add('color-change');
      } else {
        page.classList.add('color-change1');
      }
    }
	}
})();
