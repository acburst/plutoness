(function() {

  // Carousel
  let carouselItems = document.querySelectorAll('.carousel-item');
  if (carouselItems.length) {
    let carouselActive;
    let activeIndex;
    Array.prototype.forEach.call(carouselItems, function(el, i) {
      console.log(el.classList.contains('active'), i);
      if (el.classList.contains('active')) {
        carouselActive = el;
        activeIndex = i;
      }
    });
    console.log(carouselItems, activeIndex);

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
    let albumTapeCenter, albumInsertCenter, albumRecordCenter;

    function findCenter(el) {
      let albumWrapperRect = albumWrapper.getBoundingClientRect();
      let elRect = el.getBoundingClientRect();
      let left = (albumWrapperRect.left - elRect.left) + albumWrapperRect.width / 2 - elRect.width / 2;

      return 'translate(' + left + 'px, 0)';
      console.log(albumWrapperRect, elRect, left);
    }
    albumTape.addEventListener("click", function() {
      let opacity = 0;
      if (this.classList.contains('flip')) {
        this.classList.remove('flip');
        this.style.transform = albumTapeCenter;

      } else if (this.classList.contains('active')) {
        // this.classList.remove('active');
        this.classList.add('flip');
        this.style.transform = albumTapeCenter + ' rotateY(180deg)';
        // opacity = 1;

      } else {
        this.classList.add('active');
        albumTapeCenter = findCenter(this);
        this.style.transform = albumTapeCenter;
      }
      albumInsert.style.opacity = opacity;
      albumRecord.style.opacity = opacity;
      albumBackdrop.classList.add('active');
    });

    albumInsert.addEventListener("click", function() {
      let opacity = 0;
      if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.style.transform = '';
        opacity = 1;
      } else {
        this.classList.add('active');
        findCenter(this);
      }
      albumTape.style.opacity = opacity;
      albumRecord.style.opacity = opacity;
      albumBackdrop.classList.add('active');
    });

    albumRecord.addEventListener("click", function() {
      let opacity = 0;
      if (this.classList.contains('flip')) {
        this.classList.remove('flip');
        this.style.transform = albumRecordCenter;

      } else if (this.classList.contains('active')) {
        // this.classList.remove('active');
        this.classList.add('flip');
        this.style.transform = albumRecordCenter + ' rotateY(180deg)';
        // opacity = 1;

      } else {
        this.classList.add('active');
        albumRecordCenter = findCenter(this);
        this.style.transform = albumRecordCenter;
      }
      albumTape.style.opacity = opacity;
      albumInsert.style.opacity = opacity;
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
    });
  }

})();