    // Contact
    let user = {
        name: 'nonmle',
        contact: {
          email: 'nonmle@duck.com'
        }
      }
      console.log(user)

    // Console Messeage
    console.log('%cERROR', errorStyles);
    const errorStyles = 'background-color: #b10000; color: #ffd8d8; font-size: 100px; padding: 10px; font-Weight: 900; font-family: noto Sans, Helvetica, sans-serif;';

    // Stop Click
    document.addEventListener('contextmenu', e => e.preventDefault());

    const elements = document.querySelectorAll('.disable-left-click');
    elements.forEach(element => element.addEventListener('click', e => e.preventDefault()));
  
    // Switch Tabs Messeage
    function titleModified() {
        window.alert("Title modifed");
    }

    var title = document.title;
    var blurMessage = [
      "Please come back!", 
      "Bitte komm zurück!"
    ];

    var intervalTimer = null;
    var timeoutTimer = null;

    window.addEventListener("blur", function () { 
       intervalTimer = setInterval(function() {
         var rand = Math.floor((Math.random() * blurMessage.length));
         document.title = blurMessage[rand];
         timeoutTimer = setTimeout(function() {
           document.title = title;
         },4000);
       },12000);
    });

    window.addEventListener("focus", function(){ 
      clearInterval(intervalTimer);
      clearTimeout(timeoutTimer);
      document.title = title; 
    });


    // Drag Mouse
    //https://stackoverflow.com/questions/28576636/mouse-click-and-drag-instead-of-horizontal-scroll-bar-to-view-full-content-of-c
    document.addEventListener("DOMContentLoaded", function() {
        let mouseDown = false;
        let startX, scrollLeft;
        const slider = document.querySelector('#sec2');

        const startDragging = (e) => {
          mouseDown = true;
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        }

        const stopDragging = (e) => {
          mouseDown = false;
        }

        const move = (e) => {
          e.preventDefault();
          if(!mouseDown) { return; }
          const x = e.pageX - slider.offsetLeft;
          const scroll = x - startX;
          slider.scrollLeft = scrollLeft - scroll;
        }

        slider.addEventListener('mousemove', move, false);
        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    });

    // Toggle Menu
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('mobile-menu-icon-open').addEventListener('click', toggleMobileMenu);
        document.getElementById('mobile-menu-icon-close').addEventListener('click', toggleMobileMenu);
        document.getElementById('mobile-menu').addEventListener('click', toggleMobileMenu);

        function toggleMobileMenu() {
            var mobileMenu = document.getElementById('mobile-menu');
            var isOpen = mobileMenu.style.display === 'block';

            mobileMenu.style.display = isOpen ? 'none' : 'block';
            document.getElementById('mobile-menu-icon-open').style.display = isOpen ? 'block' : 'none';
            document.getElementById('mobile-menu-icon-close').style.display = isOpen ? 'none' : 'block';
            document.getElementById('mobile-menu').style.display = isOpen ? 'none' : 'block';
        

            if (isOpen) {
            document.body.classList.remove('no-scroll');
            } else {
            document.body.classList.add('no-scroll');
            }
        }
    });