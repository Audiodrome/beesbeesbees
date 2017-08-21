var Bee = function() {
  
  Grub.call(this);
  // console.log(Bee.prototype);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

  // this = Object.setPrototype(Grub, eat);
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
console.log(Bee.prototype);
