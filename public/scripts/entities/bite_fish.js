class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bitefish.png';
    this.height = 50;
    this.width = 100;
  }
  update(t) {
    let nearby = this.tank.getProximateDenizens(this.position, 20);
    //Combined solution w/ jaxson
    let biteThis = this;
    $(".denizen").each(function() {
      if (nearby.length > 1) {
        for (const n of nearby) {
          if (n.id === this.id && n.id !== biteThis.id && n.immune !== true) {
            n.kill();
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
