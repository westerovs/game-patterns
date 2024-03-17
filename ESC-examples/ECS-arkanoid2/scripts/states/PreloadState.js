// PreloadState.js
export class PreloadState {
  constructor() {
    this.assets = {
      images: new Map()
    };
  }

  preload(callback) {
    console.log('Preloading resources...');

    // Пример загрузки изображения для фона
    const backgroundImage = new Image();
    backgroundImage.src = 'img/background.png';
    backgroundImage.onload = () => {
      this.assets.images.set('background', backgroundImage);

      // Загрузка спрайтов для платформы и шарика
      const paddleImage = new Image();
      paddleImage.src = 'img/platform.png';
      paddleImage.onload = () => {
        this.assets.images.set('paddle', paddleImage);

        const ballImage = new Image();
        ballImage.src = 'img/ball.png';
        ballImage.onload = () => {
          this.assets.images.set('ball', ballImage);
          // После загрузки всех ресурсов вызываем callback
          callback();
        };
      };
    };
  }

  // Метод для получения загруженного изображения
  getImage(key) {
    return this.assets.images.get(key);
  }
}
