(function(){
  var button = document.getElementById("change");
  var page = document.getElementById('change-grid-container');

	button.addEventListener("click", changeColor);
  // Random colour changer
	/*
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
   */

  // Sequential colour changer
  console.log('before function fired');
  function changeColor() {
    if (!(page.classList.contains('color-change') || page.classList.contains('color-change1') || page.classList.contains('color-change2'))) {
      page.classList.add('color-change');
    } else {
        if (page.classList.contains('color-change')) {
          page.classList.remove('color-change');
          page.classList.add('color-change1');
        } else if (page.classList.contains('color-change1')) {
          page.classList.remove('color-change1');
          page.classList.add('color-change2');
        } else {
          page.classList.remove('color-change2');
        }
      }
    }
})();
