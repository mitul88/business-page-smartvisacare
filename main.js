const menuBtn = document.getElementById("menu-btn");
const sideNav = document.getElementById("side-nav");

sideNav.style.right = "-250px";

menuBtn.addEventListener("click", function(){
    if(sideNav.style.right === "-250px") {
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-250px";
    }
})

// jQuery smoothScroll
$('#side-nav a').on('click',function(e){
    if('this.hash' !== ''){
      e.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },
      800
      );
    }
  });