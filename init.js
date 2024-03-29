(function() {
  // Accordion
  var acc = document.getElementsByClassName("category");
  var i;

  let grid = document.querySelector(".grid");
  if (grid) {
    var msnry = new Masonry( '.grid', {
      columnWidth: '.grid-item',
      itemSelector: '.grid-item',
    });
    imagesLoaded( grid ).on( 'progress', function() {
      // layout Masonry after each image loads
      msnry.layout();
    });
  }

  for (i = 0; i < acc.length; i++) {
    if (acc[i].classList.contains('active')) {
      acc[i].classList.toggle('active');
      toggleList(acc[i]);
    }
    if (!acc[i].classList.contains('italics')) {
      acc[i].addEventListener("click", function() {
        let siblings = Array.prototype.filter.call(this.parentNode.children, function(child){
          return child !== this && child.classList.contains('category');
        });
        console.log( siblings);
        for (var j = 0; j < siblings.length; j++) {
          if (siblings[j].classList.contains('active') &&
              siblings[j] !== this) {
            toggleList(siblings[j]);
          }
        }
        toggleList(this);
      });
    }
  }
  function toggleList(el) {
    el.classList.toggle("active");
    var panel = el.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  // Menu dropdown
  let dropdownTrigger = document.querySelector('.menu-dropdown-trigger');
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', () => {
      let dropdown = document.querySelector('.menu-dropdown');
      let rect = dropdown.getBoundingClientRect();
      dropdown.classList.toggle("active");
      if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
      } else {
        dropdown.style.maxHeight = (window.innerHeight - rect.top) + "px";
      }
    })
  }

  // Paintings lightbox
  let paintings = document.querySelectorAll('.painting');
  if (paintings.length) {
    Array.prototype.forEach.call(paintings, function(el, i) {
      el.addEventListener("click", function() {
        console.log(el.clientWidth, el.clientHeight);
        if (el.clientWidth > el.clientHeight) {
          this.classList.add('landscape');
        }
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
          document.querySelector('.painting-overlay').classList.add('active');
        } else {
          document.querySelector('.painting-overlay').classList.remove('active');
        }
      });
    });

    document.querySelector('.painting-overlay').addEventListener("click", function() {
      Array.prototype.forEach.call(paintings, function(el, i) {
        el.classList.remove('active');
        document.querySelector('.painting-overlay').classList.remove('active');
      });
    });
  }

  // Carousel
  let carouselItems = document.querySelectorAll('.carousel-item');
  let watchVideo = document.querySelector('.watch-video');

  if (carouselItems.length) {
    let hoverWrapperFirst = document.querySelector('.hover-wrapper.first');
    let hoverWrapperSecond = document.querySelector('.hover-wrapper.second');
    let textFirst = document.querySelector('.text-box.first');
    let textSecond = document.querySelector('.text-box.second');
    let carouselActive;
    let activeIndex;
    Array.prototype.forEach.call(carouselItems, function(el, i) {
      if (el.classList.contains('active')) {
        carouselActive = el;
        activeIndex = i;
      }
    });

    watchVideo.addEventListener('click', function() {
      hoverWrapperFirst.classList.add('inactive');
      textFirst.classList.add('inactive');
      hoverWrapperSecond.classList.add('active');
      this.style.display = 'none';
    });

    document.getElementById('prev-btn').addEventListener("click", function() {
      carouselItems[activeIndex].classList.remove('active');
      activeIndex--;
      if (activeIndex < 0) {
        activeIndex = carouselItems.length - 1;
      }
      carouselItems[activeIndex].classList.add('active');
      hoverWrapperFirst.classList.remove('inactive');
      hoverWrapperSecond.classList.remove('active');
      textFirst.classList.remove('inactive');
      watchVideo.style.display = 'block';
    });

    document.getElementById('next-btn').addEventListener("click", function() {
      carouselItems[activeIndex].classList.remove('active');
      activeIndex++;
      if (activeIndex >= carouselItems.length) {
        activeIndex = 0;
      }
      carouselItems[activeIndex].classList.add('active');
      hoverWrapperFirst.classList.remove('inactive');
      hoverWrapperSecond.classList.remove('active');
      textFirst.classList.remove('inactive');
      watchVideo.style.display = 'block';
    });

    hoverWrapperFirst.addEventListener('click', function() {
      hoverWrapperFirst.classList.add('inactive');
      textFirst.classList.add('inactive');
      watchVideo.style.display = 'none';
    });
    hoverWrapperSecond.addEventListener('click', function() {
      hoverWrapperSecond.classList.add('active');
    });
  }


  // Album
  let albumWrapper = document.querySelector('.album-wrapper');
  if (albumWrapper) {
    let albumTape = document.querySelector('.album-tape');
    let albumInsert = document.querySelector('.album-insert');
    let albumRecord = document.querySelector('.album-record');
    let albumBackdrop = document.querySelector('.album-backdrop');

    function findCenter(el) {
      let albumWrapperRect = albumWrapper.getBoundingClientRect();
      let elRect = el.getBoundingClientRect();
      let windowWidth = window.innerWidth;
      let left = -elRect.left + windowWidth / 2 - elRect.width / 2;
      let top = (albumWrapperRect.top - elRect.top) + albumWrapperRect.height / 2 - elRect.height / 2;
      let scale = (window.innerHeight - 100) / elRect.height;

      return 'translate(' + left + 'px,' + top + 'px) scale('+ scale +')';
    }
    function resetTape() {
      albumTape.classList.remove('stage-1');
      albumTape.classList.remove('active');
      albumTape.querySelector('.back').classList.remove('active');
      albumTape.querySelector('.front').classList.remove('active');
      albumTape.querySelector('.inside-front').classList.remove('active');
      albumTape.querySelector('.inside-back').classList.remove('active');
    }
    albumTape.querySelector('.front').addEventListener('click', function() {
      let back = albumTape.querySelector('.back');
      let front = albumTape.querySelector('.front');
      if (front.classList.contains('active')) {
        front.classList.remove('active');
        back.classList.remove('active');
      } else {
        front.classList.add('active');
        back.classList.add('active');
      }
    });
    albumTape.querySelector('.inside-front').addEventListener('click', function() {
      let back = albumTape.querySelector('.inside-back');
      let front = albumTape.querySelector('.inside-front');
      if (front.classList.contains('active')) {
        front.classList.remove('active');
        back.classList.remove('active');
      } else {
        front.classList.add('active');
        back.classList.add('active');
      }
    });
    albumTape.addEventListener("click", function() {
      if (this.classList.contains('active')) {
        this.classList.add('stage-1');

      } else {
        this.classList.add('active');
        this.style.transform = findCenter(this);
      }
      albumInsert.style.opacity = 0;
      albumRecord.style.opacity = 0;
      albumBackdrop.classList.add('active');
    });


    function resetInsert() {
      albumInsert.classList.remove('stage-1');
      albumInsert.classList.remove('stage-2');
      albumInsert.classList.remove('stage-3');
      albumInsert.classList.remove('stage-4');
      albumInsert.querySelector('.front').classList.remove('inactive');
      albumInsert.querySelector('.back').classList.remove('active');
      albumInsert.querySelector('.inside-top').classList.remove('active');
    }
    albumInsert.addEventListener("click", function() {
      if (this.classList.contains('stage-3')) {
        setTimeout(() => {
          resetInsert();
        }, 300);
        this.classList.remove('stage-3');
        this.classList.add('stage-4');
        // this.querySelector('.front').classList.remove('inactive');

      } else if (this.classList.contains('stage-2')) {
        this.classList.remove('stage-2');
        this.classList.add('stage-3');
        this.querySelector('.inside-top').classList.add('active');

      } else if (this.classList.contains('stage-1')) {
        this.classList.remove('stage-1');
        this.classList.add('stage-2');
        this.querySelector('.front').classList.add('inactive');

      } else if (this.classList.contains('active')) {
        this.classList.add('stage-1');
        this.querySelector('.back').classList.add('active');

      } else {
        this.classList.add('active');
        this.style.transform = findCenter(this);
      }
      albumTape.style.opacity = 0;
      albumRecord.style.opacity = 0;
      albumBackdrop.classList.add('active');
    });

    function resetRecord() {
      albumRecord.classList.remove('stage-1');
      albumRecord.classList.remove('active');
      albumRecord.querySelector('.back').classList.remove('active');
      albumRecord.querySelector('.front').classList.remove('active');
      albumRecord.querySelector('.inside-front').classList.remove('active');
      albumRecord.querySelector('.inside-back').classList.remove('active');
    }
    albumRecord.querySelector('.front').addEventListener('click', function() {
      let back = albumRecord.querySelector('.back');
      let front = albumRecord.querySelector('.front');
      if (front.classList.contains('active')) {
        front.classList.remove('active');
        back.classList.remove('active');
      } else {
        front.classList.add('active');
        back.classList.add('active');
      }
    });
    albumRecord.querySelector('.inside-front').addEventListener('click', function() {
      let back = albumRecord.querySelector('.inside-back');
      let front = albumRecord.querySelector('.inside-front');
      if (front.classList.contains('active')) {
        front.classList.remove('active');
        back.classList.remove('active');
      } else {
        front.classList.add('active');
        back.classList.add('active');
      }
    });
    albumRecord.addEventListener("click", function() {
      if (this.classList.contains('active')) {
        this.classList.add('stage-1');

      } else {
        this.classList.add('active');
        this.style.transform = findCenter(this);
      }
      albumTape.style.opacity = 0;
      albumInsert.style.opacity = 0;
      albumBackdrop.classList.add('active');
    });

    albumBackdrop.addEventListener("click", function() {
      albumTape.style = '';
      albumTape.classList.remove('active');
      albumTape.classList.remove('flip');
      albumInsert.style = '';
      albumInsert.classList.remove('active');
      albumInsert.classList.remove('flip');
      albumRecord.style = '';
      albumRecord.classList.remove('active');
      albumRecord.classList.remove('flip');
      albumBackdrop.classList.remove('active');
      resetTape();
      resetRecord();
      resetInsert();
    });
  }


  // Modal
  let modal = document.querySelector('.modal');
  if (modal) {
    let modalTriggers = document.querySelectorAll('.modal-trigger');
    if (modalTriggers.length) {
      Array.prototype.forEach.call(modalTriggers, function(el, i) {
        el.addEventListener('click', function() {
          modal.classList.add('active');
        });
      });

    }
    modal.addEventListener('click', function() {
      modal.classList.remove('active');
    });
  }

})();