let backGround;
let app;

window.onload = () => {
  app = new PIXI.Application({
    width: 1200,
    height: 780,
    backgroundColor: 0xaaaaaa,
  });

  document.querySelector('#gameDiv').appendChild(app.view);

  // app.loader.baseUrl = 'images';
  // app.loader.add('background', 'nature.png')
  // app.loader.onComplete.add(init);
  // app.loader.load();
  init();
};

function init() {
  backGround = new PIXI.TilingSprite.from('./images/nature.png', {
    width: 1200,
    height: 780,
  });
  app.stage.addChild(backGround);
  app.ticker.add(gameLoop);
}

function gameLoop(delta) {
  backGround.tilePosition.x -= 1;
}
