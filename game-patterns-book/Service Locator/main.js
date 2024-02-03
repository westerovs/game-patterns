// Сначала определим класс для нашего Service Locator
class ServiceLocator {
  constructor() {
    this.services = new Map();
  }

  // Метод для регистрации сервисов
  register(name, service) {
    this.services.set(name, service);
  }

  // Метод для получения сервисов
  get(name) {
    if (!this.services.has(name)) {
      throw new Error(`Service ${name} not found.`);
    }
    return this.services.get(name);
  }
}

// Пример использования
// Предположим, у нас есть некий AudioService для работы со звуком
class AudioService {
  playSound(soundId) {
    console.log(`Playing sound ${soundId}`);
    // Здесь будет логика воспроизведения звука
  }
}

// Создаем экземпляр ServiceLocator и регистрируем в нем наши сервисы
const locator = new ServiceLocator();
locator.register('audio', new AudioService());

// Теперь в любом месте нашей игры мы можем получить доступ к AudioService так:
const audio = locator.get('audio');
audio.playSound('soundtrack.mp3');
