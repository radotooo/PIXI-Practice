let app;
let player;
let enemy;
let speed = 1;

window.onload = () => {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.querySelector('#gameDiv').appendChild(app.view);
  player = new PIXI.Sprite.from('./images/rocket.png');
  player.anchor.set(0.5);
  player.x = 100;
  player.y = app.view.height / 2;

  enemy = new PIXI.Sprite.from('./images/rocket.png');
  enemy.anchor.set(0.5);
  enemy.x = app.view.width - 100;
  enemy.y = app.view.height / 2;
  app.stage.addChild(player, enemy);

  app.ticker.add(gameLoop);
};

function gameLoop(delta) {
  player.x += speed;
  enemy.x -= speed;

  if (rectIntersect(player, enemy)) {
    speed = 0;
  }
}

function rectIntersect(a, b) {
  let aBox = a.getBounds();
  let bBox = b.getBounds();

  return (
    aBox.x + aBox.width > bBox.x &&
    aBox.x < bBox.x + bBox.width &&
    aBox.y + aBox.height > bBox.y &&
    aBox.y < bBox.y + bBox.height
  );
}
