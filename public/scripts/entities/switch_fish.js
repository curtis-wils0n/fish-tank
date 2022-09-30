class SwitchFish extends Fish {

  onClick(event) {
    this.makeNewVelocity(50);
    this.imageUri = '/images/switchfish.png';
  }
}
