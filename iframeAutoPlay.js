
   function html(img) {
     var iframe = document.getElementById("frame");

      img.setAttribute("class", "hidden");
      iframe.setAttribute("class", "shown");
      //iframe.src += "?autoplay=1";
      iframe.trigger('click');
      //img.preventDefault();
  
    }

