(function() {

  // Carousel
  let carouselItems = document.querySelectorAll('.carousel-item');
  if (carouselItems.length) {
    let carouselActive;
    let activeIndex;
    Array.prototype.forEach.call(carouselItems, function(el, i) {
      if (el.classList.contains('active')) {
        carouselActive = el;
        activeIndex = i;
      }
    });

    document.getElementById('prev-btn').addEventListener("click", function() {
      carouselItems[activeIndex].classList.remove('active');
      activeIndex--;
      if (activeIndex < 0) {
        activeIndex = carouselItems.length - 1;
      }
      carouselItems[activeIndex].classList.add('active');
    });

    document.getElementById('next-btn').addEventListener("click", function() {
      carouselItems[activeIndex].classList.remove('active');
      activeIndex++;
      if (activeIndex >= carouselItems.length) {
        activeIndex = 0;
      }
      carouselItems[activeIndex].classList.add('active');
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
      let left = (albumWrapperRect.left - elRect.left) + albumWrapperRect.width / 2 - elRect.width / 2;
      let top = (albumWrapperRect.top - elRect.top) + albumWrapperRect.height / 2 - elRect.height / 2;
      let scale = window.innerHeight / elRect.height;

      return 'translate(' + left + 'px,' + top + 'px) scale('+ scale +')';
    }
    function resetTape() {
      albumTape.classList.remove('stage-1');
      albumTape.classList.remove('stage-2');
      albumTape.classList.remove('stage-3');
      albumTape.classList.remove('active');
    }
    albumTape.addEventListener("click", function() {
      if (this.classList.contains('stage-3')) {
        this.classList.remove('stage-3');

      } else if (this.classList.contains('stage-2')) {
        this.classList.remove('stage-2');
        this.classList.add('stage-3');

      } else if (this.classList.contains('stage-1')) {
        this.classList.remove('stage-1');
        this.classList.add('stage-2');

      } else if (this.classList.contains('active')) {
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
      albumRecord.classList.remove('stage-2');
      albumRecord.classList.remove('stage-3');
      albumRecord.classList.remove('active');
    }
    albumRecord.addEventListener("click", function() {
      if (this.classList.contains('stage-3')) {
        this.classList.remove('stage-3');

      } else if (this.classList.contains('stage-2')) {
        this.classList.remove('stage-2');
        this.classList.add('stage-3');

      } else if (this.classList.contains('stage-1')) {
        this.classList.remove('stage-1');
        this.classList.add('stage-2');

      } else if (this.classList.contains('active')) {
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