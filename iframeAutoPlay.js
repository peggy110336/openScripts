<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
   
$(document).ready(function(){
   function html(img) {
     var iframe = document.getElementById("frame");

      img.setAttribute("class", "hidden");
      iframe.setAttribute("class", "shown");
      iframe.src += "?autoplay=1";
      img.preventDefault();
  
    }
});
