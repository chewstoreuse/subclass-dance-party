var shrinkyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="shrinkyDancer"><img class="shrink" src="img/timmy.png"></span>');
  this.setPosition(this.top, this.left);

  this.oldShrink = this.shrink;

  this.shrink = function () {
    this.oldShrink();

    //if animation-name is grow, then shrink
    if (this.$node.css('animation-name') === 'grow') {
      this.$node.css('animation-name', 'shrink');
    } else {
      //if animation-name is shrink, then grow
      this.$node.css('animation-name', 'grow');
    }
  };

  this.shrink();
};

shrinkyDancer.prototype = Object.create(makeDancer.prototype);

shrinkyDancer.prototype.constructor = shrinkyDancer;