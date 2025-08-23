 $('#counter-section').waypoint(function() {
    $('.counter').each(function () {
      var $this = $(this);
      $({ Counter: 0 }).animate({ Counter: $this.data('target') }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $this.text(Math.ceil(now));
        }
      });
    });
    this.destroy(); // trigger only once
  }, { offset: '80%' });

//   swiper js code
   var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
      
      mousewheel: true,
      keyboard: true,
    });

     var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      }
    }
  });

    var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 20,
             loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  });

//   left button
  function toggleBar(side) {
  const bar = document.getElementById(side + "Bar");

  // Toggle buttons
  bar.querySelectorAll(".btn-box").forEach(btn => {
    btn.classList.toggle("d-none");
  });

  // Toggle arrow icon
  const icon = bar.querySelector(".toggle-btn i");
  if (side === "left") {
    icon.classList.toggle("fa-arrow-left");
    icon.classList.toggle("fa-arrow-right");
  } else {
    icon.classList.toggle("fa-arrow-right");
    icon.classList.toggle("fa-arrow-left");
  }
}

// ===== Call Form Handling =====
const getCallBtn = document.getElementById("getCallBtn");
const callForm   = document.getElementById("callForm");
const closeForm  = document.getElementById("closeForm");
const leftBar    = document.getElementById("leftBar");
const rightBar   = document.getElementById("rightBar");

// Show form on hover Get Call
getCallBtn.addEventListener("mouseenter", () => {
  callForm.classList.add("active");
});

// Keep open when hovering inside form
callForm.addEventListener("mouseenter", () => {
  callForm.classList.add("active");
});

// Hide if mouse moves to any other left bar button
leftBar.querySelectorAll(".btn-box").forEach(btn => {
  if (btn.id !== "getCallBtn") {
    btn.addEventListener("mouseenter", () => {
      callForm.classList.remove("active");
    });
  }
});

// Hide if mouse moves to right bar buttons
rightBar.querySelectorAll(".btn-box").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    callForm.classList.remove("active");
  });
});

// Hide if mouse leaves the form area
callForm.addEventListener("mouseleave", () => {
  if (!getCallBtn.matches(":hover")) {
    callForm.classList.remove("active");
  }
});

// Close button
closeForm.addEventListener("click", () => {
  callForm.classList.remove("active");
});