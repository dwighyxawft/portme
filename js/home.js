$(document).ready(function(){
  function carousel(){
    var arr = ["images/andras-vas-Bd7gNnWJBkU-unsplash.jpg", "images/carlos-muza-hpjSkU2UYSU-unsplash.jpg", "images/christian-wiediger-WkfDrhxDMC8-unsplash.jpg", "images/daniel-korpai-8GDCzWrcE3M-unsplash.jpg"];
    var carousels = document.querySelectorAll(".carousel-item");
  for(i=0; i<carousels.length; i++){
      if(carousels.length==arr.length){
        carousels[i].style.backgroundImage = `url(${arr[i]})`;
      }
    }
  }
  carousel();


  


})