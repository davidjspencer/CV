(function(){
  var button = document.getElementById("change");
  var page = document.getElementById('change-grid-container');
  
	button.addEventListener("click", changeColor);

	function changeColor() {
    if (page.classList.contains('color-change')) {
      console.log('contains color-change')
      page.classList.remove('color-change');
    } else {
      page.classList.add('color-change');
    }
	}
})();
