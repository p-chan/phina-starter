const phina = require('phina.js');

phina.globalize();

// Main scene
phina.define('MainScene', {
  superClass: 'CanvasScene',
  init: function() {
    this.superInit();
    this.backgroundColor = '#444';
    this.label = Label(`Hello, phina.js v.${phina.VERSION}`).addChildTo(this);
    this.label.x = this.gridX.center();
    this.label.y = this.gridY.center();
    this.label.fill = 'white';
  }
});

// Main
phina.main(function() {
  const app = GameApp({
    startLabel: 'main'
  });
  app.run();
});