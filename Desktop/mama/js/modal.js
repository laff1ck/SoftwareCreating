(function(){
    var modal = document.querySelector('.modal-container');
    var closeButton = document.querySelector('.close');
    var modalTriggers = document.querySelectorAll('[data-trigger]');
  
    var isModalOpen = false;
    var pageYOffset = 0;
  
    var openModal = function() {
      pageYOffset = window.pageYOffset;
      modal.classList.add('is-open');
      isModalOpen = true;
    }
  
    var closeModal = function() {
      modal.classList.remove('is-open');
      isModalOpen = false;
    }
  
    var onScroll = function(e) {
      if (isModalOpen) {
        e.preventDefault();
        window.scrollTo(0, pageYOffset);
      }
    }
  
    modalTriggers.forEach(function(item) { 
      item.addEventListener('click', openModal);
    })
  
    document.addEventListener('scroll', onScroll);
  
    closeButton.addEventListener('click', closeModal);
  })();


(function(){
    var modal = document.querySelector('#modal-container-2');
    var closeButton = document.querySelector('#close-2');
    var modalTriggers = document.querySelectorAll('[data-trigger-2]');
  
    var isModalOpen = false;
    var pageYOffset = 0;
  
    var openModal = function() {
      pageYOffset = window.pageYOffset;
      modal.classList.add('is-open');
      isModalOpen = true;
    }
  
    var closeModal = function() {
      modal.classList.remove('is-open');
      isModalOpen = false;
    }
  
    var onScroll = function(e) {
      if (isModalOpen) {
        e.preventDefault();
        window.scrollTo(0, pageYOffset);
      }
    }
  
    modalTriggers.forEach(function(item) { 
      item.addEventListener('click', openModal);
    })
  
    document.addEventListener('scroll', onScroll);
  
    closeButton.addEventListener('click', closeModal);
  })();


(function(){
    var modal = document.querySelector('#modal-container-3');
    var closeButton = document.querySelector('#close-3');
    var modalTriggers = document.querySelectorAll('[data-trigger-3]');
  
    var isModalOpen = false;
    var pageYOffset = 0;
  
    var openModal = function() {
      pageYOffset = window.pageYOffset;
      modal.classList.add('is-open');
      isModalOpen = true;
    }
  
    var closeModal = function() {
      modal.classList.remove('is-open');
      isModalOpen = false;
    }
  
    var onScroll = function(e) {
      if (isModalOpen) {
        e.preventDefault();
        window.scrollTo(0, pageYOffset);
      }
    }
  
    modalTriggers.forEach(function(item) { 
      item.addEventListener('click', openModal);
    })
  
    document.addEventListener('scroll', onScroll);
  
    closeButton.addEventListener('click', closeModal);
  })();

(function(){
  var modal = document.querySelector('.navigation-1');
  var closeButton = document.querySelector('#close-5');
  var closeModal = function() {
    modal.classList.add('close-3');
  }
  closeButton.addEventListener('click', closeModal);
})();
(function(){
  var modal = document.querySelector('.navigation-1');
  var closeButton = document.querySelector('#close-4');
  var closeModal = function() {
    modal.classList.add('close-3');
  }
  closeButton.addEventListener('click', closeModal);
})();




const tab = document.querySelectorAll(".tab");
const toggleTab = function (element) {
  const tabBtn = element.querySelectorAll(".tab-btn");
  const tabContent = element.querySelectorAll(".tab-content");
  tabBtn[0].classList.add("tab-open");
  tabContent[0].classList.add("tab-open");

  const removeTab = function (element) {
    for (const i of element) {
      i.classList.remove("tab-open");
    }
  };
  const openTab = function (index) {
    removeTab(tabBtn);
    removeTab(tabContent);
    tabBtn[index].classList.add("tab-open");
    tabContent[index].classList.add("tab-open");
  };
  tabBtn.forEach((el, i) => (el.onclick = () => openTab(i)));
};
[...tab].forEach((el) => toggleTab(el));





var acc = document.getElementsByClassName("acc-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


function myapp() {
  const buttons = document.querySelectorAll(".button");
  const cards = document.querySelectorAll(".card");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
    });
  });
}

myapp();




var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}



const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


