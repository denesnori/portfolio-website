(function(){

  function onScroll(){
    window.addEventListener("scroll",function(){
      document.body.classList[
        window.scrollY > 50 ? "add" : "remove"
      ]('on-scroll');
      console.log("scrolled");
    });
  };

  function visitNavLinks(){

  };

  window.onload = function(){
    /*Change the opacity of the header on scrolling*/
    onScroll();
    /*Scrolling effect for navbar links*/
  //  visitNavLinks();
  }
})()
