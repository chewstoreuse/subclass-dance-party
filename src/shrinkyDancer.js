var shrinkyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="shrinkyDancer shrink"></span>');
  this.setPosition(this.top, this.left);

  // this.oldShrink = this.shrink;

  // this.shrink = function () {
  //   this.oldShrink();

  //   var
  // };

  // this.shrink = function () {
  //   this.$node.add
  // };
};

shrinkyDancer.prototype = Object.create(makeDancer.prototype);

shrinkyDancer.prototype.constructor = shrinkyDancer;