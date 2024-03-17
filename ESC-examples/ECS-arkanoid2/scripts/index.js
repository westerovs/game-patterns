// index.js
import Entity from './entities/Entity.js';
import PositionComponent from './components/PositionComponent.js';
import RenderComponent from './components/RenderComponent.js';
import MovementComponent from './components/MovementComponent.js';
import RenderSystem from './systems/RenderSystem.js';
import MovementSystem from './systems/MovementSystem.js';
import InputSystem from './systems/InputSystem.js';
import { PreloadState } from './states/PreloadState.js';

// Получаем контекст канваса для рендеринга
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Инициализация состояний игры
const preloadState = new PreloadState();

// Загрузка ресурсов и начало игры
preloadState.preload(() => {
  // После загрузки ресурсов, настроим и отрисуем сущности
  const paddle = new Entity();
  paddle.addComponent('PositionComponent', new PositionComponent(100, canvas.height - 50));
  const paddleImage = preloadState.getImage('paddle');
  paddle.addComponent('RenderComponent', new RenderComponent(paddleImage));

  const ball = new Entity();
  ball.addComponent('PositionComponent', new PositionComponent(120, canvas.height - 70));
  const ballImage = preloadState.getImage('ball');
  ball.addComponent('RenderComponent', new RenderComponent(ballImage));

  const entities = [paddle, ball];

  // Создаем системы
  const renderSystem = new RenderSystem(context);
  const movementSystem = new MovementSystem();
  const inputSystem = new InputSystem();

  // Игровой цикл
  function gameLoop() {
    // Очистка канваса
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Рендеринг фона
    const background = preloadState.getImage('background');
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Обновление сущностей на основе ввода
    inputSystem.run(entities);

    // Обновление положений сущностей
    movementSystem.run(entities);

    // Рендеринг сущностей
    renderSystem.run(entities);

    // Запуск следующего кадра
    requestAnimationFrame(gameLoop);
  }

  // Запуск игрового цикла
  gameLoop();
});
