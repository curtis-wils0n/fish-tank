class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bitefish.png';
    this.height = 50;
    this.width = 100;
    this.isTasty = false;
  }

  onClick(event) {
    setTimeout(() => {
      this.kill();
    }, 500)
    this.makeNewVelocity(0);
    this.imageUri = '/images/explosion.png';
  }

  update(t) {
    let nearby = this.tank.getProximateDenizens(this.position, this.height / 2);
    //Combined solution w/ jaxson
    let biteThis = this;
    $(".denizen").each(function() {
      if (nearby.length > 1) {
        for (const n of nearby) {
          if (n.id === this.id && n.isTasty && n.immune !== true) {
            n.kill();
            biteThis.height += biteThis.height * 0.1;
            biteThis.width += biteThis.width * 0.1;
          }
        }
      }
    })
    if (this.outOfBounds(this.tank.getBounds())) {
      this.kill();
    } else {
      for (var i = 0; i < this.calcPhysicsTicks(t); i++) {
        this.updateOneTick();
      }
    }
  }
}
