var slidingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="slidingDancer"><img class="slide" src="img/kim.png"></span>');
  this.setPosition(this.top, this.left);

  this.oldSlide = this.slide;

  this.slide = function () {
    this.oldSlide();

    //if animation-name is right, then slide left
    if (this.$node.css('animation-name') === 'right') {
      this.$node.css('animation-name', 'left');
    } else {
      //if animation-name is left, then slide right
      this.$node.css('animation-name', 'right');
    }
  };

  this.slide();
};

slidingDancer.prototype = Object.create(makeDancer.prototype);
slidingDancer.prototype.constructor = slidingDancer;