(function(){

  //works
  function onScroll(){
    window.addEventListener("scroll",function(){
      document.body.classList[
        window.scrollY > 50 ? "add" : "remove"
      ]('on-scroll');
    //  console.log("scrolled");
    });
  };



//ok
  function smoothScrolling(element,position,time){
    if (time<= 0) {
      console.log(element,position,time);
      return;}
    let distance = position - element.scrollTop;

    let step = distance / time *10;
    setTimeout(function(){
      element.scrollTop += step;
      smoothScrolling(element,position,time-10);
    },10);
  };



// aaaaa the click events trigger all 4 options why...???
  function addScrollingToNavLinks(){
       document.querySelector(".navbar__list").addEventListener("click", (e)=> {
         event.preventDefault();
         if(e.target && e.target.nodeName == "A" && e.target.id!=="hamburger") {
           let link = e.target;
           let target =  document.getElementById(link.getAttribute("href").slice(1));
     //      console.log(target);
           let element = navigator.userAgent.indexOf("Firefox") > -1 ? document.documentElement : document.body;
   //        console.log(element);
           smoothScrolling(element, target.offsetTop, 800);
         }
       });
};



  window.onload = function(){
    /*Change the opacity of the header on scrolling*/
    onScroll();
    /*Scrolling effect for navbar links*/
    addScrollingToNavLinks();
  }
})()
function responsiveNav() {
    var x = document.getElementById("myTopnav");
    console.log(x);
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
