class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    setInterval ((callback) => {
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  
  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    if (num <= 10) {
      return "0" + num;
    }  
    else {
      return num;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`
  }
}
