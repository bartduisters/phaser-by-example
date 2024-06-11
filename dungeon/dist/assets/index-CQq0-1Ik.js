import {
  g as getDefaultExportFromCjs,
  r as requirePhaser,
} from "./phaser-zcydYi9M.js";
!(function () {
  const t = document.createElement("link").relList;
  if (!(t && t.supports && t.supports("modulepreload"))) {
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
      e(t);
    new MutationObserver((t) => {
      for (const s of t)
        if ("childList" === s.type)
          for (const t of s.addedNodes)
            "LINK" === t.tagName && "modulepreload" === t.rel && e(t);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function e(t) {
    if (t.ep) return;
    t.ep = !0;
    const e = (function (t) {
      const e = {};
      return (
        t.integrity && (e.integrity = t.integrity),
        t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        "use-credentials" === t.crossOrigin
          ? (e.credentials = "include")
          : "anonymous" === t.crossOrigin
            ? (e.credentials = "omit")
            : (e.credentials = "same-origin"),
        e
      );
    })(t);
    fetch(t.href, e);
  }
})();
var phaserExports = requirePhaser();
const Phaser$1 = getDefaultExportFromCjs(phaserExports);
class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "bootloader" });
  }
  preload() {
    this.createBars(),
      this.setLoadEvents(),
      this.loadFonts(),
      this.loadImages(),
      this.loadMaps(),
      this.loadAudios(),
      this.loadSpritesheets();
  }
  setLoadEvents() {
    this.load.on(
      "progress",
      function (t) {
        this.progressBar.clear(),
          this.progressBar.fillStyle(34986, 1),
          this.progressBar.fillRect(
            this.cameras.main.width / 4,
            this.cameras.main.height / 2 - 16,
            (this.cameras.main.width / 2) * t,
            16
          );
      },
      this
    ),
      this.load.on(
        "complete",
        () => {
          this.scene.start("splash");
        },
        this
      );
  }
  loadFonts() {
    this.load.bitmapFont(
      "default",
      "assets/fonts/pico.png",
      "assets/fonts/pico.xml"
    );
  }
  loadImages() {
    this.load.image("pello", "assets/images/pello_ok.png"),
      this.load.image("fireball", "assets/images/fireball.png"),
      this.load.image("tiles", "assets/maps/pixel-poem-tiles.png"),
      this.load.image("block", "assets/images/block.png"),
      this.load.image("seesaw", "assets/images/seesaw.png"),
      this.load.image("bubble", "assets/images/bubble.png"),
      this.load.image("platform", "assets/images/platform.png");
  }
  loadMaps() {
    this.load.tilemapTiledJSON("scene0", "assets/maps/level.json");
  }
  loadAudios() {
    Array(5)
      .fill(0)
      .forEach((t, e) => {
        this.load.audio(`climb${e}`, `assets/sounds/climb${e}.mp3`);
      }),
      this.load.audio("splash", "assets/sounds/splash.mp3"),
      this.load.audio("music", "assets/sounds/music.mp3"),
      this.load.audio("jump", "assets/sounds/jump.mp3"),
      this.load.audio("bubble", "assets/sounds/bubble.mp3"),
      this.load.audio("trap", "assets/sounds/trap.mp3"),
      this.load.audio("crash", "assets/sounds/crash.mp3"),
      this.load.audio("fireball", "assets/sounds/fireball.mp3"),
      this.load.audio("win", "assets/sounds/win.mp3"),
      this.load.audio("start", "assets/sounds/start.mp3"),
      this.load.audio("death", "assets/sounds/death.mp3");
  }
  loadSpritesheets() {
    this.load.spritesheet("player", "assets/images/player.png", {
      frameWidth: 48,
      frameHeight: 48,
    }),
      this.load.spritesheet("dust", "assets/images/dust.png", {
        frameWidth: 32,
        frameHeight: 32,
      }),
      this.load.spritesheet("coin", "assets/images/coin.png", {
        frameWidth: 32,
        frameHeight: 32,
      }),
      this.load.spritesheet("keys", "assets/images/keys.png", {
        frameWidth: 48,
        frameHeight: 48,
      }),
      this.load.spritesheet("bat", "assets/images/bat.png", {
        frameWidth: 32,
        frameHeight: 32,
      }),
      this.load.spritesheet("wizard", "assets/images/wizard.png", {
        frameWidth: 48,
        frameHeight: 48,
      });
  }
  createBars() {
    (this.loadBar = this.add.graphics()),
      this.loadBar.fillStyle(43771, 1),
      this.loadBar.fillRect(
        this.cameras.main.width / 4 - 2,
        this.cameras.main.height / 2 - 18,
        this.cameras.main.width / 2 + 4,
        20
      ),
      (this.progressBar = this.add.graphics());
  }
}
class Outro extends Phaser.Scene {
  constructor() {
    super({ key: "outro" });
  }
  init(t) {
    (this.name = t.name), (this.number = t.number), (this.next = t.next);
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.showPlayer(),
      this.sound.add("win").play(),
      (this.scoreCoins = this.add
        .bitmapText(
          this.center_width,
          50,
          "default",
          "Coins: " + this.registry.get("coins"),
          25
        )
        .setOrigin(0.5)
        .setScrollFactor(0)),
      (this.scoreSeconds = this.add
        .bitmapText(
          this.center_width,
          100,
          "default",
          "Time: " + this.registry.get("seconds"),
          25
        )
        .setOrigin(0.5)
        .setScrollFactor(0)),
      this.add
        .bitmapText(
          this.center_width,
          this.center_height - 20,
          "default",
          "YOU DID IT!!",
          40
        )
        .setOrigin(0.5),
      this.add
        .bitmapText(
          this.center_width,
          this.center_height + 40,
          "default",
          "Press space to restart",
          25
        )
        .setOrigin(0.5),
      this.input.keyboard.on("keydown-ENTER", () => this.loadNext(), this),
      this.input.keyboard.on("keydown-SPACE", () => this.loadNext(), this);
  }
  loadNext() {
    this.scene.start("splash");
  }
  showPlayer() {
    (this.player = this.add
      .sprite(this.center_width, this.center_height - 120, "player")
      .setOrigin(0.5)
      .setScale(3)),
      this.anims.create({
        key: "playeridle",
        frames: this.anims.generateFrameNumbers("player", { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
      }),
      this.player.anims.play("playeridle");
  }
}
class Splash extends Phaser.Scene {
  constructor() {
    super({ key: "splash" });
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      (this.backLayer = this.add.layer()),
      this.cameras.main.setBackgroundColor(0),
      this.showTitle(),
      this.addPlayerAndFoe(),
      this.addAnimationTweens(),
      this.time.delayedCall(1e3, () => this.showInstructions(), null, this),
      this.input.keyboard.on("keydown-SPACE", () => this.startGame(), this),
      this.input.keyboard.on("keydown-ENTER", () => this.startGame(), this),
      this.playMusic();
  }
  startGame() {
    this.theme && this.theme.stop(), this.scene.start("transition");
  }
  showTitle() {
    (this.textShadow1 = this.add
      .bitmapText(this.center_width, 100, "default", "DUNGEON", 85)
      .setTint(16742522)
      .setOrigin(0.5)),
      (this.textShadow2 = this.add
        .bitmapText(this.center_width, 250, "default", "BOBBLE", 85)
        .setTint(16742522)
        .setOrigin(0.5)),
      (this.text1 = this.add
        .bitmapText(this.center_width, 100, "default", "DUNGEON", 85)
        .setTint(3153968)
        .setOrigin(0.5)),
      (this.text2 = this.add
        .bitmapText(this.center_width, 250, "default", "BOBBLE", 85)
        .setTint(3153968)
        .setOrigin(0.5)),
      (this.text11 = this.add
        .bitmapText(this.center_width, 100, "default", "DUNGEON", 88)
        .setTint(43771)
        .setOrigin(0.5)),
      (this.text22 = this.add
        .bitmapText(this.center_width, 250, "default", "BOBBLE", 88)
        .setTint(43771)
        .setOrigin(0.5)),
      this.tweens.add({
        targets: [this.textShadow1, this.textShadow2],
        duration: 1e3,
        x: "+=10",
        y: "+=10",
        yoyo: !0,
        repeat: -1,
      });
  }
  playMusic(t = "splash") {
    (this.theme = this.sound.add(t)),
      this.theme.stop(),
      this.theme.play({
        mute: !1,
        volume: 0.3,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      });
  }
  showInstructions() {
    this.add
      .bitmapText(this.center_width, 430, "default", "WASD/Arrows: move", 30)
      .setDropShadow(1, 1, 16742522, 0.7)
      .setOrigin(0.5),
      this.add
        .sprite(this.center_width - 60, 490, "pello")
        .setOrigin(0.5)
        .setScale(0.3),
      this.add
        .bitmapText(this.center_width + 40, 490, "default", "By PELLO", 15)
        .setDropShadow(1, 1, 16742522, 0.7)
        .setOrigin(0.5),
      (this.space = this.add
        .bitmapText(
          this.center_width,
          550,
          "default",
          "Press SPACE to start",
          25
        )
        .setDropShadow(1, 1, 4007227, 0.7)
        .setOrigin(0.5)),
      this.tweens.add({
        targets: this.space,
        duration: 300,
        alpha: { from: 0, to: 1 },
        repeat: -1,
        yoyo: !0,
      });
  }
  addPlayerAndFoe() {
    (this.player = this.add
      .sprite(this.width - 100, 350, "player")
      .setScale(2)),
      this.anims.create({
        key: "playeridle",
        frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
        frameRate: 5,
        repeat: -1,
      }),
      this.player.anims.play("playeridle"),
      (this.foe = this.add.sprite(this.width, 350, "wizard").setScale(2)),
      this.anims.create({
        key: "foe",
        frames: this.anims.generateFrameNumbers("wizard", { start: 0, end: 4 }),
        frameRate: 5,
        repeat: -1,
      }),
      this.foe.anims.play("foe");
  }
  addAnimationTweens() {
    this.tweens.add({
      targets: [this.player],
      x: { from: this.player.x, to: 0 },
      duration: 2500,
      yoyo: !0,
      repeat: -1,
      onYoyo: () => {
        this.player.flipX = !this.player.flipX;
      },
      onRepeat: () => {
        this.player.flipX = !this.player.flipX;
      },
    }),
      this.tweens.add({
        targets: [this.foe],
        x: { from: this.foe.x, to: 100 },
        duration: 2500,
        yoyo: !0,
        repeat: -1,
        onYoyo: () => {
          this.foe.flipX = !this.foe.flipX;
        },
        onRepeat: () => {
          this.foe.flipX = !this.foe.flipX;
        },
      });
  }
}
class Transition extends Phaser.Scene {
  constructor() {
    super({ key: "transition" });
  }
  create() {
    this.sound.stopAll(),
      (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.sound.add("start").play(),
      this.playMusic(),
      (this.key = this.add
        .sprite(this.center_width, this.center_height - 120, "keys", 0)
        .setOrigin(0.5)
        .setScale(2)),
      this.add
        .bitmapText(
          this.center_width,
          this.center_height - 20,
          "default",
          "GET ALL KEYS",
          30
        )
        .setOrigin(0.5),
      this.add
        .bitmapText(
          this.center_width,
          this.center_height + 40,
          "default",
          "from all rooms!",
          25
        )
        .setOrigin(0.5),
      this.input.keyboard.on("keydown-ENTER", () => this.loadNext(), this),
      this.input.keyboard.on("keydown-SPACE", () => this.loadNext(), this),
      this.time.delayedCall(1e3, () => this.loadNext(), null, this);
  }
  loadNext() {
    this.scene.start("game");
  }
  playMusic(t = "music") {
    (this.theme = this.sound.add(t)),
      this.theme.stop(),
      this.theme.play({
        mute: !1,
        volume: 0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      });
  }
}
class Bat extends Phaser.Physics.Matter.Sprite {
  constructor(t, e, s, i = "bat", n) {
    super(t.matter.world, e, s, i, 0),
      (this.label = "bat"),
      (this.scene = t),
      this.scene.add.existing(this),
      (this.startX = e),
      (this.direction = Phaser.Math.RND.pick([-1, 1])),
      this.setFixedRotation(),
      this.setIgnoreGravity(!0),
      this.addCollisions(),
      this.init();
  }
  init() {
    this.scene.anims.create({
      key: this.label,
      frames: this.scene.anims.generateFrameNumbers(this.label, {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    }),
      this.scene.anims.create({
        key: this.label + "death",
        frames: this.scene.anims.generateFrameNumbers(this.label, {
          start: 2,
          end: 5,
        }),
        frameRate: 5,
      }),
      this.anims.play(this.label, !0),
      this.on("animationcomplete", this.animationComplete, this),
      this.setVelocityX(5 * this.direction),
      this.scene.events.on("update", this.update, this);
  }
  addCollisions() {
    this.unsubscribeBatCollide = this.scene.matterCollision.addOnCollideStart({
      objectA: this,
      callback: this.onBatCollide,
      context: this,
    });
  }
  onBatCollide({ gameObjectA: t, gameObjectB: e }) {
    e instanceof Bubble && (e.load("bat"), this.destroy());
  }
  update() {
    this.active && Math.abs(this.body.velocity.x) <= 0.5 && this.turn();
  }
  turn() {
    (this.direction = -this.direction),
      (this.flipX = this.direction > 0),
      this.setFlipX(this.direction > 0),
      this.setVelocityX(5 * this.direction);
  }
  death() {
    (this.dead = !0), this.anims.play(this.label + "death");
  }
  animationComplete(t, e) {
    t.key === this.label + "death" && this.destroy();
  }
}
class Fireball extends Phaser.Physics.Matter.Sprite {
  constructor(t, e, s, i) {
    super(t.matter.world, e, s, "fireball", 0),
      (this.label = "fireball"),
      (this.scene = t),
      (this.direction = i),
      t.add.existing(this),
      this.setIgnoreGravity(!0),
      this.setVelocityX(5 * this.direction),
      this.setVelocityY(Phaser.Math.Between(0, -8)),
      this.setBounce(1),
      this.init();
  }
  init() {
    this.scene.events.on("update", this.update, this),
      (this.tween = this.scene.tweens.add({
        targets: this,
        duration: 200,
        scale: { from: 0.9, to: 1 },
        repeat: -1,
      })),
      this.scene.time.delayedCall(
        3e3,
        () => {
          this.destroy();
        },
        null,
        this
      );
  }
  update() {
    var t;
    null == (t = this.scene) || t.gameOver;
  }
  destroy() {
    this.tween.destroy(), super.destroy();
  }
}
class Wizard extends Phaser.Physics.Matter.Sprite {
  constructor(t, e, s, i = "wizard", n) {
    super(t.matter.world, e, s, i, 0),
      (this.label = "wizard"),
      this.scene.add.existing(this),
      (this.startX = e),
      (this.direction = Phaser.Math.RND.pick([-1, 1])),
      this.setFixedRotation(),
      this.addCollisions(),
      this.init();
  }
  init() {
    this.scene.anims.create({
      key: this.label,
      frames: this.scene.anims.generateFrameNumbers(this.label, {
        start: 0,
        end: 5,
      }),
      frameRate: 5,
      repeat: -1,
    }),
      this.anims.play(this.label, !0),
      this.scene.events.on("update", this.update, this),
      (this.timer = this.scene.time.addEvent({
        delay: 3e3,
        callback: this.directShot,
        callbackScope: this,
        loop: !0,
      }));
  }
  addCollisions() {
    this.unsubscribeBatCollide = this.scene.matterCollision.addOnCollideStart({
      objectA: this,
      callback: this.onWizardCollide,
      context: this,
    });
  }
  onWizardCollide({ gameObjectA: t, gameObjectB: e }) {
    e instanceof Bubble && (e.load("wizard"), this.destroy());
  }
  directShot() {
    this.scene.playAudio("fireball"),
      Phaser.Math.Distance.BetweenPoints(this.scene.player, this),
      this.anims.play("wizardshot", !0),
      new Fireball(this.scene, this.x, this.y, this.direction),
      (this.delayedTurn = this.scene.time.delayedCall(
        1e3,
        () => {
          this.turn();
        },
        null,
        this
      ));
  }
  turn() {
    (this.direction = -this.direction),
      (this.flipX = this.direction > 0),
      this.setFlipX(this.direction > 0),
      this.setVelocityX(5 * this.direction);
  }
  destroy() {
    this.timer && this.timer.destroy(),
      this.delayedTurn && this.delayedTurn.destroy(),
      this.fireball && this.fireball.destroy(),
      super.destroy();
  }
}
class Bubble extends Phaser.Physics.Matter.Sprite {
  constructor(t, e, s, i, n = { isStatic: !0 }) {
    super(t.matter.world, e + i, s, "bubble", 0, n),
      (this.offset = i),
      this.setFriction(1, 0, 1 / 0),
      (this.startX = e),
      (this.startY = s),
      (this.scene = t),
      t.add.existing(this),
      this.moveVertically(),
      this.scene.events.on("update", this.update, this);
  }
  load(t) {
    this.scene.playAudio("trap"),
      (this.loaded = this.scene.add
        .sprite(this.x, this.y, t)
        .setOrigin(0.5)
        .setScale(0.6)),
      (this.loaded.name = t),
      (this.loadedTween = this.scene.tweens.add({
        targets: this.loaded,
        rotation: "+=5",
        yoyo: !0,
        repeat: -1,
      }));
  }
  moveHorizontally() {
    this.scene.tweens.add({
      targets: this,
      scaleX: { from: 1, to: 0.9 },
      yoyo: !0,
      repeat: -1,
      duration: 200,
    }),
      this.scene.tweens.addCounter({
        from: 0,
        to: Phaser.Math.Between(-400, 400),
        duration: 3500,
        ease: Phaser.Math.Easing.Sine.InOut,
        onUpdate: (t, e) => {
          const s = this.startX + e.value,
            i = s - this.x;
          (this.x = s), this.setVelocityX(i);
        },
        onComplete: () => {
          this.scene.time.delayedCall(
            1e3,
            () => {
              this.destroy();
            },
            null,
            this
          );
        },
      });
  }
  moveVertically() {
    (this.blob = this.scene.tweens.add({
      targets: this,
      scaleX: { from: 1, to: 0.9 },
      yoyo: !0,
      repeat: -1,
      duration: 200,
    })),
      this.scene.tweens.addCounter({
        from: 0,
        to: -300,
        duration: 4500,
        ease: Phaser.Math.Easing.Sine.InOut,
        onUpdate: (t, e) => {
          const s = this.startY + e.value,
            i = s - this.y;
          (this.y = s), this.setVelocityY(i);
        },
        onComplete: () => {
          this.blob.destroy(),
            this.scene.time.delayedCall(
              1e3,
              () => {
                this.destroy();
              },
              null,
              this
            );
        },
      });
  }
  respawn() {
    this.loadedTween.destroy(),
      "wizard" === this.loaded.name
        ? new Wizard(this.scene, this.x, this.y)
        : "bat" === this.loaded.name && new Bat(this.scene, this.x, this.y),
      this.loaded.destroy(),
      (this.loaded = null);
  }
  update() {
    this.active &&
      this.loaded &&
      ((this.loaded.x = this.x), (this.loaded.y = this.y));
  }
  destroy() {
    this.scene &&
      (this.scene.playAudio("crash"),
      this.loaded && this.respawn(),
      super.destroy());
  }
}
class Dust extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i = "dust", n = !1) {
    super(t, e, s, i),
      (this.scene = t),
      (this.name = i),
      this.setScale(0.5),
      this.scene.add.existing(this),
      this.init(n);
  }
  init(t) {
    t &&
      this.scene.tweens.add({
        targets: this,
        duration: Phaser.Math.Between(500, 1e3),
        alpha: { from: 1, to: 0 },
        onComplete: () => {
          this.destroy();
        },
      }),
      this.scene.anims.create({
        key: this.name,
        frames: this.scene.anims.generateFrameNumbers(this.name, {
          start: 0,
          end: 10,
        }),
        frameRate: 10,
      }),
      this.on("animationcomplete", this.animationComplete, this),
      this.anims.play(this.name, !0);
  }
  animationComplete() {
    this.destroy();
  }
}
class Player {
  constructor(t, e, s) {
    (this.scene = t),
      (this.label = "player"),
      (this.moveForce = 0.01),
      (this.invincible = !0),
      (this.isTouching = { left: !1, right: !1, ground: !1 }),
      (this.canJump = !0),
      (this.jumpCooldownTimer = null),
      (this.canShoot = !0),
      (this.shootCooldownTimer = null),
      (this.onWall = !1),
      this.init(e, s),
      this.addControls();
  }
  init(t, e) {
    this.scene.matter.world.on("beforeupdate", this.resetTouching, this),
      (this.sprite = this.scene.matter.add.sprite(0, 0, "player", 0));
    const { Body: s, Bodies: i } = Phaser.Physics.Matter.Matter,
      { width: n, height: o } = this.sprite,
      a = i.rectangle(0, 5, n - 14, o - 10, { chamfer: { radius: 10 } });
    this.sensors = {
      bottom: i.rectangle(0, 0.5 * o, 0.25 * n, 2, { isSensor: !0 }),
      left: i.rectangle(0.35 * -n, 0, 2, 0.5 * o, { isSensor: !0 }),
      right: i.rectangle(0.35 * n, 0, 2, 0.5 * o, { isSensor: !0 }),
    };
    const r = s.create({
      parts: [a, this.sensors.bottom, this.sensors.left, this.sensors.right],
      frictionStatic: 0,
      frictionAir: 0.02,
      friction: 0.1,
      render: { sprite: { xOffset: 0.5, yOffset: 0.5 } },
    });
    this.sprite.setExistingBody(r).setFixedRotation().setPosition(t, e),
      this.addEvents(),
      this.addColliders(),
      this.addAnimations(),
      this.initInvincible();
  }
  addEvents() {
    this.scene.events.on("update", this.update, this),
      this.scene.events.once("shutdown", this.destroy, this),
      this.scene.events.once("destroy", this.destroy, this);
  }
  addColliders() {
    this.scene.matterCollision.addOnCollideStart({
      objectA: [this.sensors.bottom, this.sensors.left, this.sensors.right],
      callback: this.onSensorCollide,
      context: this,
    }),
      this.scene.matterCollision.addOnCollideActive({
        objectA: [this.sensors.bottom, this.sensors.left, this.sensors.right],
        callback: this.onSensorCollide,
        context: this,
      });
  }
  addAnimations() {
    this.scene.anims.create({
      key: "playeridle",
      frames: this.scene.anims.generateFrameNumbers(this.label, {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    }),
      this.scene.anims.create({
        key: "playerwalk",
        frames: this.scene.anims.generateFrameNumbers(this.label, {
          start: 0,
          end: 3,
        }),
        frameRate: 6,
      }),
      this.scene.anims.create({
        key: "playershot",
        frames: this.scene.anims.generateFrameNumbers(this.label, {
          start: 4,
          end: 5,
        }),
        frameRate: 4,
      }),
      this.sprite.anims.play("playeridle", !0),
      this.sprite.on("animationcomplete", this.animationComplete, this);
  }
  initInvincible() {
    this.scene.tweens.add({
      targets: this.sprite,
      alpha: { from: 0.5, to: 1 },
      duration: 200,
      repeat: 10,
      onComplete: () => {
        this.invincible = !1;
      },
    });
  }
  onSensorCollide({ bodyA: t, bodyB: e, pair: s }) {
    e.isSensor ||
      (t === this.sensors.left
        ? (this.friction(),
          (this.onWall = !0),
          (this.isTouching.left = !0),
          s.separation > 0.5 && (this.sprite.x += s.separation - 0.5))
        : t === this.sensors.right
          ? (this.friction(),
            (this.onWall = !0),
            (this.isTouching.right = !0),
            s.separation > 0.5 && (this.sprite.x -= s.separation - 0.5))
          : t === this.sensors.bottom &&
            (this.land(), (this.isTouching.ground = !0)));
  }
  resetTouching() {
    (this.isTouching.left = !1),
      (this.isTouching.right = !1),
      (this.isTouching.ground = !1);
  }
  addControls() {
    (this.cursor = this.scene.input.keyboard.createCursorKeys()),
      (this.W = this.scene.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.W
      )),
      (this.A = this.scene.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.A
      )),
      (this.S = this.scene.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.S
      )),
      (this.D = this.scene.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.D
      ));
  }
  update() {
    (this.isOnGround = this.isTouching.ground),
      (this.isInAir = !this.isOnGround),
      (this.moveForce = this.isOnGround ? 0.01 : 0.005),
      this.D.isDown || this.cursor.right.isDown
        ? (this.sprite.setFlipX(!0),
          (this.isInAir && this.isTouching.right) ||
            (this.step(),
            this.sprite.anims.play("playerwalk", !0),
            this.sprite.setVelocityX(5)))
        : this.A.isDown || this.cursor.left.isDown
          ? (this.sprite.setFlipX(!1),
            (this.isInAir && this.isTouching.left) ||
              (this.step(),
              this.sprite.anims.play("playerwalk", !0),
              this.sprite.setVelocityX(-5)))
          : "playershot" !== this.sprite.anims.currentAnim.key &&
            this.sprite.anims.play("playeridle", !0),
      this.sprite.body.velocity.x > 7
        ? this.sprite.setVelocityX(7)
        : this.sprite.body.velocity.x < -7 && this.sprite.setVelocityX(-7),
      this.checkJump(),
      this.checkShoot();
  }
  checkJump() {
    ((this.canJump && this.isOnGround) || this.onWall) &&
      (this.W.isDown || this.cursor.up.isDown) &&
      (this.sprite.setVelocityY(-8),
      this.scene.playAudio("jump"),
      (this.canJump = !1),
      (this.onWall = !1),
      (this.jumpCooldownTimer = this.scene.time.addEvent({
        delay: 250,
        callback: () => (this.canJump = !0),
      })));
  }
  checkShoot() {
    if (
      this.canShoot &&
      (Phaser.Input.Keyboard.JustDown(this.cursor.down) ||
        Phaser.Input.Keyboard.JustDown(this.W))
    ) {
      const t = this.sprite.flipX ? 128 : -128;
      this.sprite.anims.play("playershot", !0),
        this.scene.playAudio("bubble"),
        (this.canShoot = !1),
        new Bubble(this.scene, this.sprite.x, this.sprite.y, t),
        (this.shootCooldownTimer = this.scene.time.addEvent({
          delay: 500,
          callback: () => (this.canShoot = !0),
        }));
    }
  }
  destroy() {
    this.scene.playAudio("death"),
      (this.destroyed = !0),
      this.scene.events.off("update", this.update, this),
      this.scene.events.off("shutdown", this.destroy, this),
      this.scene.events.off("destroy", this.destroy, this),
      this.scene.matter.world &&
        this.scene.matter.world.off("beforeupdate", this.resetTouching, this);
    const t = [this.sensors.bottom, this.sensors.left, this.sensors.right];
    this.scene.matterCollision.removeOnCollideStart({ objectA: t }),
      this.scene.matterCollision.removeOnCollideActive({ objectA: t }),
      this.jumpCooldownTimer && this.jumpCooldownTimer.destroy(),
      this.sprite.destroy();
  }
  step() {
    Phaser.Math.Between(0, 5) > 4 &&
      this.scene.trailLayer.add(
        new Dust(
          this.scene,
          this.sprite.x,
          this.sprite.y + Phaser.Math.Between(10, 16)
        )
      );
  }
  friction() {
    Array(Phaser.Math.Between(2, 4))
      .fill(0)
      .forEach((t) => {
        new Dust(
          this.scene,
          this.sprite.x + Phaser.Math.Between(-8, 8),
          this.sprite.y + Phaser.Math.Between(-32, 32)
        );
      });
  }
  land() {
    this.sprite.body.velocity.y < 1 ||
      Array(Phaser.Math.Between(3, 6))
        .fill(0)
        .forEach((t) => {
          new Dust(
            this.scene,
            this.sprite.x + Phaser.Math.Between(-32, 32),
            this.sprite.y + Phaser.Math.Between(10, 16)
          );
        });
  }
  explosion() {
    Array(Phaser.Math.Between(10, 15))
      .fill(0)
      .forEach((t) => {
        new Dust(
          this.scene,
          this.sprite.x + Phaser.Math.Between(-32, 32),
          this.sprite.y + Phaser.Math.Between(20, 36)
        );
      });
  }
  animationComplete(t, e) {
    "playershot" === t.key && this.sprite.anims.play("playeridle", !0);
  }
}
var dungeon_min = { exports: {} };
"undefined" != typeof self && self,
  (dungeon_min.exports = (function () {
    return (
      (s = {}),
      (t.m = e =
        [
          function (t, e) {
            t.exports = function () {
              throw new Error("define cannot be used indirect");
            };
          },
          function (t, e) {
            t.exports = function (t) {
              return (
                t.webpackPolyfill ||
                  ((t.deprecate = function () {}),
                  (t.paths = []),
                  t.children || (t.children = []),
                  Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function () {
                      return t.l;
                    },
                  }),
                  Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function () {
                      return t.i;
                    },
                  }),
                  (t.webpackPolyfill = 1)),
                t
              );
            };
          },
          function (t, e) {
            (function (e) {
              t.exports = e;
            }).call(this, {});
          },
          function (t, e, s) {
            var i = s(4),
              n = s(5),
              o = s(6),
              a = s(7),
              r = s(8),
              l = s(9),
              h = s(10);
            (h.alea = i),
              (h.xor128 = n),
              (h.xorwow = o),
              (h.xorshift7 = a),
              (h.xor4096 = r),
              (h.tychei = l),
              (t.exports = h);
          },
          function (t, e, s) {
            (function (t) {
              var i;
              !(function (t) {
                function n(t) {
                  var e,
                    s = this,
                    i =
                      ((e = 4022871197),
                      function (t) {
                        t = String(t);
                        for (var s = 0; s < t.length; s++) {
                          var i = 0.02519603282416938 * (e += t.charCodeAt(s));
                          (i -= e = i >>> 0),
                            (e = (i *= e) >>> 0),
                            (e += 4294967296 * (i -= e));
                        }
                        return 2.3283064365386963e-10 * (e >>> 0);
                      });
                  (s.next = function () {
                    var t = 2091639 * s.s0 + 2.3283064365386963e-10 * s.c;
                    return (
                      (s.s0 = s.s1), (s.s1 = s.s2), (s.s2 = t - (s.c = 0 | t))
                    );
                  }),
                    (s.c = 1),
                    (s.s0 = i(" ")),
                    (s.s1 = i(" ")),
                    (s.s2 = i(" ")),
                    (s.s0 -= i(t)),
                    s.s0 < 0 && (s.s0 += 1),
                    (s.s1 -= i(t)),
                    s.s1 < 0 && (s.s1 += 1),
                    (s.s2 -= i(t)),
                    s.s2 < 0 && (s.s2 += 1),
                    (i = null);
                }
                function o(t, e) {
                  return (
                    (e.c = t.c), (e.s0 = t.s0), (e.s1 = t.s1), (e.s2 = t.s2), e
                  );
                }
                function a(t, e) {
                  var s = new n(t),
                    i = e && e.state,
                    a = s.next;
                  return (
                    (a.int32 = function () {
                      return (4294967296 * s.next()) | 0;
                    }),
                    (a.double = function () {
                      return (
                        a() + 11102230246251565e-32 * ((2097152 * a()) | 0)
                      );
                    }),
                    (a.quick = a),
                    i &&
                      ("object" == typeof i && o(i, s),
                      (a.state = function () {
                        return o(s, {});
                      })),
                    a
                  );
                }
                t && t.exports
                  ? (t.exports = a)
                  : s(0) && s(2)
                    ? void 0 ===
                        (i = function () {
                          return a;
                        }.call(e, s, e, t)) || (t.exports = i)
                    : (this.alea = a);
              })(t, s(0));
            }).call(this, s(1)(t));
          },
          function (t, e, s) {
            (function (t) {
              var i;
              !(function (t) {
                function n(t) {
                  var e = this,
                    s = "";
                  (e.x = 0),
                    (e.y = 0),
                    (e.z = 0),
                    (e.w = 0),
                    (e.next = function () {
                      var t = e.x ^ (e.x << 11);
                      return (
                        (e.x = e.y),
                        (e.y = e.z),
                        (e.z = e.w),
                        (e.w ^= (e.w >>> 19) ^ t ^ (t >>> 8))
                      );
                    }),
                    t === (0 | t) ? (e.x = t) : (s += t);
                  for (var i = 0; i < s.length + 64; i++)
                    (e.x ^= 0 | s.charCodeAt(i)), e.next();
                }
                function o(t, e) {
                  return (e.x = t.x), (e.y = t.y), (e.z = t.z), (e.w = t.w), e;
                }
                function a(t, e) {
                  function s() {
                    return (i.next() >>> 0) / 4294967296;
                  }
                  var i = new n(t),
                    a = e && e.state;
                  return (
                    (s.double = function () {
                      do {
                        var t =
                          ((i.next() >>> 11) + (i.next() >>> 0) / 4294967296) /
                          (1 << 21);
                      } while (0 === t);
                      return t;
                    }),
                    (s.int32 = i.next),
                    (s.quick = s),
                    a &&
                      ("object" == typeof a && o(a, i),
                      (s.state = function () {
                        return o(i, {});
                      })),
                    s
                  );
                }
                t && t.exports
                  ? (t.exports = a)
                  : s(0) && s(2)
                    ? void 0 ===
                        (i = function () {
                          return a;
                        }.call(e, s, e, t)) || (t.exports = i)
                    : (this.xor128 = a);
              })(t, s(0));
            }).call(this, s(1)(t));
          },
          function (t, e, s) {
            (function (t) {
              var i;
              !(function (t) {
                function n(t) {
                  var e = this,
                    s = "";
                  (e.next = function () {
                    var t = e.x ^ (e.x >>> 2);
                    return (
                      (e.x = e.y),
                      (e.y = e.z),
                      (e.z = e.w),
                      (e.w = e.v),
                      ((e.d = (e.d + 362437) | 0) +
                        (e.v = e.v ^ (e.v << 4) ^ t ^ (t << 1))) |
                        0
                    );
                  }),
                    (e.x = 0),
                    (e.y = 0),
                    (e.z = 0),
                    (e.w = 0),
                    t === ((e.v = 0) | t) ? (e.x = t) : (s += t);
                  for (var i = 0; i < s.length + 64; i++)
                    (e.x ^= 0 | s.charCodeAt(i)),
                      i == s.length && (e.d = (e.x << 10) ^ (e.x >>> 4)),
                      e.next();
                }
                function o(t, e) {
                  return (
                    (e.x = t.x),
                    (e.y = t.y),
                    (e.z = t.z),
                    (e.w = t.w),
                    (e.v = t.v),
                    (e.d = t.d),
                    e
                  );
                }
                function a(t, e) {
                  function s() {
                    return (i.next() >>> 0) / 4294967296;
                  }
                  var i = new n(t),
                    a = e && e.state;
                  return (
                    (s.double = function () {
                      do {
                        var t =
                          ((i.next() >>> 11) + (i.next() >>> 0) / 4294967296) /
                          (1 << 21);
                      } while (0 === t);
                      return t;
                    }),
                    (s.int32 = i.next),
                    (s.quick = s),
                    a &&
                      ("object" == typeof a && o(a, i),
                      (s.state = function () {
                        return o(i, {});
                      })),
                    s
                  );
                }
                t && t.exports
                  ? (t.exports = a)
                  : s(0) && s(2)
                    ? void 0 ===
                        (i = function () {
                          return a;
                        }.call(e, s, e, t)) || (t.exports = i)
                    : (this.xorwow = a);
              })(t, s(0));
            }).call(this, s(1)(t));
          },
          function (t, e, s) {
            (function (t) {
              var i;
              !(function (t) {
                function n(t) {
                  var e = this;
                  (e.next = function () {
                    var t,
                      s,
                      i = e.x,
                      n = e.i;
                    return (
                      (t = i[n]),
                      (s = (t ^= t >>> 7) ^ (t << 24)),
                      (s ^= (t = i[(n + 1) & 7]) ^ (t >>> 10)),
                      (s ^= (t = i[(n + 3) & 7]) ^ (t >>> 3)),
                      (s ^= (t = i[(n + 4) & 7]) ^ (t << 7)),
                      (t = i[(n + 7) & 7]),
                      (s ^= (t ^= t << 13) ^ (t << 9)),
                      (i[n] = s),
                      (e.i = (n + 1) & 7),
                      s
                    );
                  }),
                    (function (t, e) {
                      var s,
                        i = [];
                      if (e === (0 | e)) i[0] = e;
                      else
                        for (e = "" + e, s = 0; s < e.length; ++s)
                          i[7 & s] =
                            (i[7 & s] << 15) ^
                            ((e.charCodeAt(s) + i[(s + 1) & 7]) << 13);
                      for (; i.length < 8; ) i.push(0);
                      for (s = 0; s < 8 && 0 === i[s]; ++s);
                      for (
                        8 == s ? (i[7] = -1) : i[s], t.x = i, t.i = 0, s = 256;
                        0 < s;
                        --s
                      )
                        t.next();
                    })(e, t);
                }
                function o(t, e) {
                  return (e.x = t.x.slice()), (e.i = t.i), e;
                }
                function a(t, e) {
                  function s() {
                    return (i.next() >>> 0) / 4294967296;
                  }
                  null == t && (t = +new Date());
                  var i = new n(t),
                    a = e && e.state;
                  return (
                    (s.double = function () {
                      do {
                        var t =
                          ((i.next() >>> 11) + (i.next() >>> 0) / 4294967296) /
                          (1 << 21);
                      } while (0 === t);
                      return t;
                    }),
                    (s.int32 = i.next),
                    (s.quick = s),
                    a &&
                      (a.x && o(a, i),
                      (s.state = function () {
                        return o(i, {});
                      })),
                    s
                  );
                }
                t && t.exports
                  ? (t.exports = a)
                  : s(0) && s(2)
                    ? void 0 ===
                        (i = function () {
                          return a;
                        }.call(e, s, e, t)) || (t.exports = i)
                    : (this.xorshift7 = a);
              })(t, s(0));
            }).call(this, s(1)(t));
          },
          function (t, e, s) {
            (function (t) {
              var i;
              !(function (t) {
                function n(t) {
                  var e = this;
                  (e.next = function () {
                    var t,
                      s,
                      i = e.w,
                      n = e.X,
                      o = e.i;
                    return (
                      (e.w = i = (i + 1640531527) | 0),
                      (s = n[(o + 34) & 127]),
                      (t = n[(o = (o + 1) & 127)]),
                      (s ^= s << 13),
                      (t ^= t << 17),
                      (s ^= s >>> 15),
                      (t ^= t >>> 12),
                      (s = n[o] = s ^ t),
                      (e.i = o),
                      (s + (i ^ (i >>> 16))) | 0
                    );
                  }),
                    (function (t, e) {
                      var s,
                        i,
                        n,
                        o,
                        a,
                        r = [],
                        l = 128;
                      for (
                        e === (0 | e)
                          ? ((i = e), (e = null))
                          : ((e += "\0"), (i = 0), (l = Math.max(l, e.length))),
                          n = 0,
                          o = -32;
                        o < l;
                        ++o
                      )
                        e && (i ^= e.charCodeAt((o + 32) % e.length)),
                          0 === o && (a = i),
                          (i ^= i << 10),
                          (i ^= i >>> 15),
                          (i ^= i << 4),
                          (i ^= i >>> 13),
                          0 <= o &&
                            ((a = (a + 1640531527) | 0),
                            (n = 0 == (s = r[127 & o] ^= i + a) ? n + 1 : 0));
                      for (
                        128 <= n && (r[127 & ((e && e.length) || 0)] = -1),
                          n = 127,
                          o = 512;
                        0 < o;
                        --o
                      )
                        (i = r[(n + 34) & 127]),
                          (s = r[(n = (n + 1) & 127)]),
                          (i ^= i << 13),
                          (s ^= s << 17),
                          (i ^= i >>> 15),
                          (s ^= s >>> 12),
                          (r[n] = i ^ s);
                      (t.w = a), (t.X = r), (t.i = n);
                    })(e, t);
                }
                function o(t, e) {
                  return (e.i = t.i), (e.w = t.w), (e.X = t.X.slice()), e;
                }
                function a(t, e) {
                  function s() {
                    return (i.next() >>> 0) / 4294967296;
                  }
                  null == t && (t = +new Date());
                  var i = new n(t),
                    a = e && e.state;
                  return (
                    (s.double = function () {
                      do {
                        var t =
                          ((i.next() >>> 11) + (i.next() >>> 0) / 4294967296) /
                          (1 << 21);
                      } while (0 === t);
                      return t;
                    }),
                    (s.int32 = i.next),
                    (s.quick = s),
                    a &&
                      (a.X && o(a, i),
                      (s.state = function () {
                        return o(i, {});
                      })),
                    s
                  );
                }
                t && t.exports
                  ? (t.exports = a)
                  : s(0) && s(2)
                    ? void 0 ===
                        (i = function () {
                          return a;
                        }.call(e, s, e, t)) || (t.exports = i)
                    : (this.xor4096 = a);
              })(t, s(0));
            }).call(this, s(1)(t));
          },
          function (t, e, s) {
            (function (t) {
              var i;
              !(function (t) {
                function n(t) {
                  var e = this,
                    s = "";
                  (e.next = function () {
                    var t = e.b,
                      s = e.c,
                      i = e.d,
                      n = e.a;
                    return (
                      (t = (t << 25) ^ (t >>> 7) ^ s),
                      (s = (s - i) | 0),
                      (i = (i << 24) ^ (i >>> 8) ^ n),
                      (n = (n - t) | 0),
                      (e.b = t = (t << 20) ^ (t >>> 12) ^ s),
                      (e.c = s = (s - i) | 0),
                      (e.d = (i << 16) ^ (s >>> 16) ^ n),
                      (e.a = (n - t) | 0)
                    );
                  }),
                    (e.a = 0),
                    (e.b = 0),
                    (e.c = -1640531527),
                    (e.d = 1367130551),
                    t === Math.floor(t)
                      ? ((e.a = (t / 4294967296) | 0), (e.b = 0 | t))
                      : (s += t);
                  for (var i = 0; i < s.length + 20; i++)
                    (e.b ^= 0 | s.charCodeAt(i)), e.next();
                }
                function o(t, e) {
                  return (e.a = t.a), (e.b = t.b), (e.c = t.c), (e.d = t.d), e;
                }
                function a(t, e) {
                  function s() {
                    return (i.next() >>> 0) / 4294967296;
                  }
                  var i = new n(t),
                    a = e && e.state;
                  return (
                    (s.double = function () {
                      do {
                        var t =
                          ((i.next() >>> 11) + (i.next() >>> 0) / 4294967296) /
                          (1 << 21);
                      } while (0 === t);
                      return t;
                    }),
                    (s.int32 = i.next),
                    (s.quick = s),
                    a &&
                      ("object" == typeof a && o(a, i),
                      (s.state = function () {
                        return o(i, {});
                      })),
                    s
                  );
                }
                t && t.exports
                  ? (t.exports = a)
                  : s(0) && s(2)
                    ? void 0 ===
                        (i = function () {
                          return a;
                        }.call(e, s, e, t)) || (t.exports = i)
                    : (this.tychei = a);
              })(t, s(0));
            }).call(this, s(1)(t));
          },
          function (t, e, s) {
            var i;
            !(function (n, o, a) {
              var r,
                l = 256,
                h = a.pow(l, 6),
                d = a.pow(2, 52),
                c = 2 * d,
                Q = l - 1;
              function B(t, e, s) {
                function i() {
                  for (var t = u.g(6), e = h, s = 0; t < d; )
                    (t = (t + s) * l), (e *= l), (s = u.g(1));
                  for (; c <= t; ) (t /= 2), (e /= 2), (s >>>= 1);
                  return (t + s) / e;
                }
                var Q = [],
                  B = b(
                    (function t(e, s) {
                      var i,
                        n = [],
                        o = typeof e;
                      if (s && "object" == o)
                        for (i in e)
                          try {
                            n.push(t(e[i], s - 1));
                          } catch (a) {}
                      return n.length ? n : "string" == o ? e : e + "\0";
                    })(
                      (e = 1 == e ? { entropy: !0 } : e || {}).entropy
                        ? [t, g(o)]
                        : null == t
                          ? (function () {
                              try {
                                var t;
                                return (
                                  r && (t = r.randomBytes)
                                    ? (t = t(l))
                                    : ((t = new Uint8Array(l)),
                                      (n.crypto || n.msCrypto).getRandomValues(
                                        t
                                      )),
                                  g(t)
                                );
                              } catch (i) {
                                var e = n.navigator,
                                  s = e && e.plugins;
                                return [+new Date(), n, s, n.screen, g(o)];
                              }
                            })()
                          : t,
                      3
                    ),
                    Q
                  ),
                  u = new F(Q);
                return (
                  (i.int32 = function () {
                    return 0 | u.g(4);
                  }),
                  (i.quick = function () {
                    return u.g(4) / 4294967296;
                  }),
                  (i.double = i),
                  b(g(u.S), o),
                  (
                    e.pass ||
                    s ||
                    function (t, e, s, i) {
                      return (
                        i &&
                          (i.S && U(i, u),
                          (t.state = function () {
                            return U(u, {});
                          })),
                        s ? ((a.random = t), e) : t
                      );
                    }
                  )(i, B, "global" in e ? e.global : this == a, e.state)
                );
              }
              function F(t) {
                var e,
                  s = t.length,
                  i = this,
                  n = 0,
                  o = (i.i = i.j = 0),
                  a = (i.S = []);
                for (s || (t = [s++]); n < l; ) a[n] = n++;
                for (n = 0; n < l; n++)
                  (a[n] = a[(o = Q & (o + t[n % s] + (e = a[n])))]), (a[o] = e);
                (i.g = function (t) {
                  for (var e, s = 0, n = i.i, o = i.j, a = i.S; t--; )
                    (e = a[(n = Q & (n + 1))]),
                      (s =
                        s * l +
                        a[Q & ((a[n] = a[(o = Q & (o + e))]) + (a[o] = e))]);
                  return (i.i = n), (i.j = o), s;
                })(l);
              }
              function U(t, e) {
                return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
              }
              function b(t, e) {
                for (var s, i = t + "", n = 0; n < i.length; )
                  e[Q & n] = Q & ((s ^= 19 * e[Q & n]) + i.charCodeAt(n++));
                return g(e);
              }
              function g(t) {
                return String.fromCharCode.apply(0, t);
              }
              if ((b(a.random(), o), t.exports)) {
                t.exports = B;
                try {
                  r = s(11);
                } catch (u) {}
              } else
                void 0 ===
                  (i = function () {
                    return B;
                  }.call(e, s, e, t)) || (t.exports = i);
            })("undefined" != typeof self ? self : this, [], Math);
          },
          function (t, e) {},
          function (t, e, s) {
            s.r(e);
            var i = s(3);
            function n(t) {
              this.rng = i(t);
            }
            var o,
              a,
              r =
                ((n.prototype.randomInteger = function (t, e, s) {
                  var i = void 0 === s ? {} : s,
                    n = i.onlyOdd,
                    o = void 0 !== n && n,
                    a = i.onlyEven,
                    r = void 0 !== a && a;
                  return o
                    ? this.randomOddInteger(t, e)
                    : r
                      ? this.randomEvenInteger(t, e)
                      : Math.floor(this.rng() * (e - t + 1) + t);
                }),
                (n.prototype.randomEvenInteger = function (t, e) {
                  t % 2 != 0 && t < e && t++, e % 2 != 0 && t < e && e--;
                  var s = (e - t) / 2;
                  return 2 * Math.floor(this.rng() * (1 + s)) + t;
                }),
                (n.prototype.randomOddInteger = function (t, e) {
                  t % 2 == 0 && t++, e % 2 == 0 && e--;
                  var s = (e - t) / 2;
                  return 2 * Math.floor(this.rng() * (1 + s)) + t;
                }),
                (n.prototype.randomPick = function (t) {
                  return t[this.randomInteger(0, t.length - 1)];
                }),
                n);
            ((a = o = o || {})[(a.EMPTY = 0)] = "EMPTY"),
              (a[(a.WALL = 1)] = "WALL"),
              (a[(a.FLOOR = 2)] = "FLOOR"),
              (a[(a.DOOR = 3)] = "DOOR");
            var l = o,
              h = function () {
                for (var t = 0, e = 0, s = arguments.length; e < s; e++)
                  t += arguments[e].length;
                var i = Array(t),
                  n = 0;
                for (e = 0; e < s; e++)
                  for (
                    var o = arguments[e], a = 0, r = o.length;
                    a < r;
                    a++, n++
                  )
                    i[n] = o[a];
                return i;
              };
            function d(t, e, s) {
              return h(Array(e)).map(function () {
                return Array(t).fill(s);
              });
            }
            function c(t, e) {
              (this.width = t),
                (this.height = e),
                (this.x = 0),
                (this.y = 0),
                (this.left = 0),
                (this.right = 0),
                (this.top = 0),
                (this.bottom = 0),
                (this.centerX = 0),
                (this.centerY = 0),
                (this.width = t),
                (this.height = e),
                this.setPosition(0, 0),
                (this.tiles = d(t, e, l.FLOOR));
              for (var s = 0; s < this.height; s++)
                this.setTileAt(0, s, l.WALL), this.setTileAt(t - 1, s, l.WALL);
              for (var i = 0; i < this.width; i++)
                this.setTileAt(i, 0, l.WALL), this.setTileAt(i, e - 1, l.WALL);
            }
            var Q =
                ((c.prototype.forEachTile = function (t) {
                  for (var e = 0; e < this.height; e++)
                    for (var s = 0; s < this.width; s++)
                      t({ x: s, y: e }, this.getTileAt(s, e));
                }),
                (c.prototype.setPosition = function (t, e) {
                  (this.x = t),
                    (this.y = e),
                    (this.left = t),
                    (this.right = t + (this.width - 1)),
                    (this.top = e),
                    (this.bottom = e + (this.height - 1)),
                    (this.centerX = t + Math.floor(this.width / 2)),
                    (this.centerY = e + Math.floor(this.height / 2));
                }),
                (c.prototype.getDoorLocations = function () {
                  for (var t = [], e = 0; e < this.height; e++)
                    for (var s = 0; s < this.width; s++)
                      this.getTileAt(s, e) == l.DOOR && t.push({ x: s, y: e });
                  return t;
                }),
                (c.prototype.overlaps = function (t) {
                  return !(
                    this.right < t.left ||
                    this.left > t.right ||
                    this.bottom < t.top ||
                    this.top > t.bottom
                  );
                }),
                (c.prototype.isInBounds = function (t, e) {
                  return (
                    0 <= t &&
                    t < this.width - 1 &&
                    0 <= e &&
                    e < this.height - 1
                  );
                }),
                (c.prototype.getTileAt = function (t, e) {
                  return this.tiles[e][t];
                }),
                (c.prototype.setTileAt = function (t, e, s) {
                  this.tiles[e][t] = s;
                }),
                (c.prototype.isConnectedTo = function (t) {
                  for (
                    var e = 0, s = this.getDoorLocations();
                    e < s.length;
                    e++
                  ) {
                    var i = s[e],
                      n = this.x + i.x - t.x,
                      o = this.y + i.y - t.y;
                    if (t.isInBounds(n, o) && t.getTileAt(n, o) === l.DOOR)
                      return !0;
                  }
                  return !1;
                }),
                c),
              B = function (t) {
                return Object.entries(t)
                  .map(function (t) {
                    return t[0] + '="' + t[1] + '"';
                  })
                  .join(" ");
              };
            function F(t) {
              return Number.isInteger(t) && t % 2 == 0;
            }
            function U(t) {
              return Number.isInteger(t) && t % 2 != 0;
            }
            function b(t) {
              var e, s, i, n, o, a, l;
              (this.rooms = []),
                (this.roomGrid = []),
                (this.width = t.width),
                (this.height = t.height),
                (this.doorPadding =
                  null !== (e = t.doorPadding) && void 0 !== e ? e : 1),
                (this.rooms = []),
                (this.randomSeed = t.randomSeed),
                (this.r = new r(this.randomSeed));
              var h = t.rooms,
                d = h.width,
                c = h.height,
                Q = d.max * c.max,
                B = d.min * c.min,
                F = Math.floor((this.width * this.height) / B);
              if (
                ((this.roomWidthConfig = {
                  min: d.min,
                  max: d.max,
                  onlyOdd: null !== (s = d.onlyOdd) && void 0 !== s && s,
                  onlyEven: null !== (i = d.onlyEven) && void 0 !== i && i,
                }),
                (this.roomHeightConfig = {
                  min: c.min,
                  max: c.max,
                  onlyOdd: null !== (n = c.onlyOdd) && void 0 !== n && n,
                  onlyEven: null !== (o = c.onlyEven) && void 0 !== o && o,
                }),
                (this.maxRooms =
                  null !== (a = h.maxRooms) && void 0 !== a ? a : F),
                (this.maxRoomArea =
                  null !== (l = h.maxArea) && void 0 !== l ? l : Q),
                this.adjustDimensionConfigForParity(this.roomWidthConfig),
                this.adjustDimensionConfigForParity(this.roomHeightConfig),
                this.checkDimensionConfig(this.roomWidthConfig),
                this.checkDimensionConfig(this.roomHeightConfig),
                this.roomWidthConfig.max > this.width)
              )
                throw new Error("Room max width cannot exceed dungeon width.");
              if (this.roomHeightConfig.max > this.height)
                throw new Error(
                  "Room max height cannot exceed dungeon height."
                );
              if (this.maxRoomArea < B)
                throw new Error(
                  "The minimum dimensions specified exceeds the given maxArea."
                );
              this.generate(), (this.tiles = this.getTiles());
            }
            var g =
              ((b.prototype.adjustDimensionConfigForParity = function (t) {
                t.onlyOdd
                  ? (F(t.min) &&
                      (t.min++,
                      console.log(
                        "Dungeon: warning, min dimension adjusted to match onlyOdd setting."
                      )),
                    F(t.max) &&
                      (t.max--,
                      console.log(
                        "Dungeon: warning, max dimension adjusted to match onlyOdd setting."
                      )))
                  : t.onlyEven &&
                    (U(t.min) &&
                      (t.min++,
                      console.log(
                        "Dungeon: warning, min dimension adjusted to match onlyEven setting."
                      )),
                    U(t.max) &&
                      (t.max--,
                      console.log(
                        "Dungeon: warning, max dimension adjusted to match onlyEven setting."
                      )));
              }),
              (b.prototype.checkDimensionConfig = function (t) {
                var e = t.max,
                  s = t.min,
                  i = t.onlyEven,
                  n = t.onlyOdd;
                if (i && n)
                  throw new Error(
                    "Cannot use both onlyEven and onlyOdd in room's width/height config."
                  );
                if (e < s)
                  throw new Error("Room width and height max must be >= min.");
                if (s < 3)
                  throw new Error("Room width and height must be >= 3.");
              }),
              (b.prototype.getConfig = function () {
                return {
                  width: this.width,
                  height: this.height,
                  doorPadding: this.doorPadding,
                  randomSeed: this.randomSeed,
                  rooms: {
                    width: this.roomWidthConfig,
                    height: this.roomHeightConfig,
                    maxArea: this.maxRoomArea,
                    maxRooms: this.maxRooms,
                  },
                };
              }),
              (b.prototype.drawToConsole = function (t) {
                !(function (t, e) {
                  void 0 === e && (e = {});
                  var s = Object.assign(
                      {},
                      {
                        empty: " ",
                        emptyColor: "rgb(0, 0, 0)",
                        wall: "#",
                        wallColor: "rgb(255, 0, 0)",
                        floor: "_",
                        floorColor: "rgb(210, 210, 210)",
                        door: ".",
                        doorColor: "rgb(0, 0, 255)",
                        fontSize: "15px",
                      },
                      e
                    ),
                    i = "",
                    n = [];
                  (i +=
                    "Dungeon: the console window should be big enough to see all of the guide on the next line:\n"),
                    (i += "%c|" + "=".repeat(2 * t.width - 2) + "|\n\n"),
                    n.push("font-size: " + s.fontSize);
                  for (var o = 0; o < t.height; o += 1) {
                    for (var a = 0; a < t.width; a += 1) {
                      var r = t.tiles[o][a];
                      r === l.EMPTY
                        ? ((i += "%c" + s.empty),
                          n.push(
                            "color: " +
                              s.emptyColor +
                              "; font-size: " +
                              s.fontSize
                          ))
                        : r === l.WALL
                          ? ((i += "%c" + s.wall),
                            n.push(
                              "color: " +
                                s.wallColor +
                                "; font-size: " +
                                s.fontSize
                            ))
                          : r === l.FLOOR
                            ? ((i += "%c" + s.floor),
                              n.push(
                                "color: " +
                                  s.floorColor +
                                  "; font-size: " +
                                  s.fontSize
                              ))
                            : r === l.DOOR &&
                              ((i += "%c" + s.door),
                              n.push(
                                "color: " +
                                  s.doorColor +
                                  "; font-size: " +
                                  s.fontSize
                              )),
                        (i += " ");
                    }
                    i += "\n";
                  }
                  console.log.apply(
                    console,
                    (function () {
                      for (var t = 0, e = 0, s = arguments.length; e < s; e++)
                        t += arguments[e].length;
                      var i = Array(t),
                        n = 0;
                      for (e = 0; e < s; e++)
                        for (
                          var o = arguments[e], a = 0, r = o.length;
                          a < r;
                          a++, n++
                        )
                          i[n] = o[a];
                      return i;
                    })([i], n)
                  );
                })(this, t);
              }),
              (b.prototype.drawToHtml = function (t) {
                return (function (t, e) {
                  void 0 === e && (e = {});
                  var s = (function (t, e) {
                    void 0 === e && (e = {});
                    var s = Object.assign(
                        {},
                        {
                          empty: " ",
                          emptyAttributes: { class: "dungeon__empty" },
                          wall: "#",
                          wallAttributes: { class: "dungeon__wall" },
                          floor: "_",
                          floorAttributes: { class: "dungeon__wall" },
                          door: ".",
                          doorAttributes: { class: "dungeon__door" },
                          containerAttributes: { class: "dungeon" },
                        },
                        e
                      ),
                      i = t
                        .getMappedTiles({
                          empty:
                            "<td " +
                            B(s.emptyAttributes) +
                            ">" +
                            s.empty +
                            "</td>",
                          floor:
                            "<td " +
                            B(s.floorAttributes) +
                            ">" +
                            s.floor +
                            "</td>",
                          door:
                            "<td " +
                            B(s.doorAttributes) +
                            ">" +
                            s.door +
                            "</td>",
                          wall:
                            "<td " +
                            B(s.wallAttributes) +
                            ">" +
                            s.wall +
                            "</td>",
                        })
                        .map(function (t) {
                          return "<tr>" + t.join("") + "</tr>";
                        })
                        .join("");
                    return (
                      "<pre " +
                      B(s.containerAttributes) +
                      "><table><tbody>" +
                      i +
                      "</tbody></table></pre>"
                    );
                  })(t, e);
                  return document.createRange().createContextualFragment(s);
                })(this, t);
              }),
              (b.prototype.getMappedTiles = function (t) {
                return (
                  void 0 === t && (t = {}),
                  (t = Object.assign(
                    {},
                    { empty: 0, wall: 1, floor: 2, door: 3 },
                    t
                  )),
                  this.tiles.map(function (e) {
                    return e.map(function (e) {
                      return e === l.EMPTY
                        ? t.empty
                        : e === l.WALL
                          ? t.wall
                          : e === l.FLOOR
                            ? t.floor
                            : e === l.DOOR
                              ? t.door
                              : void 0;
                    });
                  })
                );
              }),
              (b.prototype.getCenter = function () {
                return {
                  x: Math.floor(this.width / 2),
                  y: Math.floor(this.height / 2),
                };
              }),
              (b.prototype.generate = function () {
                (this.rooms = []), (this.roomGrid = []);
                for (var t = 0; t < this.height; t++) {
                  this.roomGrid.push([]);
                  for (var e = 0; e < this.width; e++)
                    this.roomGrid[t].push([]);
                }
                var s = this.getCenter(),
                  i = this.createRandomRoom();
                i.setPosition(
                  s.x - Math.floor(i.width / 2),
                  s.y - Math.floor(i.height / 2)
                ),
                  this.addRoom(i);
                for (
                  var n = 0, o = 5 * this.maxRooms;
                  this.rooms.length < this.maxRooms && n < o;

                )
                  this.generateRoom(), n++;
              }),
              (b.prototype.hasRoomAt = function (t, e) {
                return (
                  t < 0 ||
                  e < 0 ||
                  t >= this.width ||
                  e >= this.height ||
                  0 < this.roomGrid[e][t].length
                );
              }),
              (b.prototype.getRoomAt = function (t, e) {
                return this.hasRoomAt(t, e) ? this.roomGrid[e][t][0] : null;
              }),
              (b.prototype.addRoom = function (t) {
                if (!this.canFitRoom(t)) return !1;
                this.rooms.push(t);
                for (var e = t.top; e <= t.bottom; e++)
                  for (var s = t.left; s <= t.right; s++)
                    this.roomGrid[e][s].push(t);
                return !0;
              }),
              (b.prototype.canFitRoom = function (t) {
                if (t.x < 0 || t.right > this.width - 1) return !1;
                if (t.y < 0 || t.bottom > this.height - 1) return !1;
                for (var e = 0; e < this.rooms.length; e++)
                  if (t.overlaps(this.rooms[e])) return !1;
                return !0;
              }),
              (b.prototype.createRandomRoom = function () {
                for (
                  var t = 0,
                    e = 0,
                    s = this.roomWidthConfig,
                    i = this.roomHeightConfig;
                  (t = this.r.randomInteger(s.min, s.max, {
                    onlyEven: s.onlyEven,
                    onlyOdd: s.onlyOdd,
                  })) *
                    (e = this.r.randomInteger(i.min, i.max, {
                      onlyEven: i.onlyEven,
                      onlyOdd: i.onlyOdd,
                    })) >
                  this.maxRoomArea;

                );
                return new Q(t, e);
              }),
              (b.prototype.generateRoom = function () {
                for (var t = this.createRandomRoom(), e = 150; 0 < e; ) {
                  var s = this.findRoomAttachment(t);
                  if ((t.setPosition(s.x, s.y), this.addRoom(t))) {
                    var i = this.findNewDoorLocation(t, s.target),
                      n = i[0],
                      o = i[1];
                    this.addDoor(n), this.addDoor(o);
                    break;
                  }
                  --e;
                }
              }),
              (b.prototype.getTiles = function () {
                var t = d(this.width, this.height, l.EMPTY);
                return (
                  this.rooms.forEach(function (e) {
                    e.forEachTile(function (s, i) {
                      t[e.y + s.y][e.x + s.x] = i;
                    });
                  }),
                  t
                );
              }),
              (b.prototype.getPotentiallyTouchingRooms = function (t) {
                for (
                  var e = this,
                    s = [],
                    i = function (i, n) {
                      for (var o = e.roomGrid[n][i], a = 0; a < o.length; a++)
                        if (o[a] != t && -1 === s.indexOf(o[a])) {
                          var r = i - o[a].x,
                            l = n - o[a].y;
                          ((0 < r && r < o[a].width - 1) ||
                            (0 < l && l < o[a].height - 1)) &&
                            s.push(o[a]);
                        }
                    },
                    n = t.x + 1;
                  n < t.x + t.width - 1;
                  n++
                )
                  i(n, t.y), i(n, t.y + t.height - 1);
                for (var o = t.y + 1; o < t.y + t.height - 1; o++)
                  i(t.x, o), i(t.x + t.width - 1, o);
                return s;
              }),
              (b.prototype.findNewDoorLocation = function (t, e) {
                var s = { x: -1, y: -1 },
                  i = { x: -1, y: -1 };
                return (
                  t.y === e.y - t.height
                    ? ((s.x = i.x =
                        this.r.randomInteger(
                          Math.floor(
                            Math.max(e.left, t.left) + this.doorPadding
                          ),
                          Math.floor(
                            Math.min(e.right, t.right) - this.doorPadding
                          )
                        )),
                      (s.y = t.y + t.height - 1),
                      (i.y = e.y))
                    : t.x == e.x - t.width
                      ? ((s.x = t.x + t.width - 1),
                        (i.x = e.x),
                        (s.y = i.y =
                          this.r.randomInteger(
                            Math.floor(
                              Math.max(e.top, t.top) + this.doorPadding
                            ),
                            Math.floor(
                              Math.min(e.bottom, t.bottom) - this.doorPadding
                            )
                          )))
                      : t.x == e.x + e.width
                        ? ((s.x = t.x),
                          (i.x = e.x + e.width - 1),
                          (s.y = i.y =
                            this.r.randomInteger(
                              Math.floor(
                                Math.max(e.top, t.top) + this.doorPadding
                              ),
                              Math.floor(
                                Math.min(e.bottom, t.bottom) - this.doorPadding
                              )
                            )))
                        : t.y == e.y + e.height &&
                          ((s.x = i.x =
                            this.r.randomInteger(
                              Math.floor(
                                Math.max(e.left, t.left) + this.doorPadding
                              ),
                              Math.floor(
                                Math.min(e.right, t.right) - this.doorPadding
                              )
                            )),
                          (s.y = t.y),
                          (i.y = e.y + e.height - 1)),
                  [s, i]
                );
              }),
              (b.prototype.findRoomAttachment = function (t) {
                var e = this.r.randomPick(this.rooms),
                  s = 0,
                  i = 0,
                  n = 2 * this.doorPadding;
                switch (this.r.randomInteger(0, 3)) {
                  case 0:
                    (s = this.r.randomInteger(
                      e.left - (t.width - 1) + n,
                      e.right - n
                    )),
                      (i = e.top - t.height);
                    break;
                  case 1:
                    (s = e.left - t.width),
                      (i = this.r.randomInteger(
                        e.top - (t.height - 1) + n,
                        e.bottom - n
                      ));
                    break;
                  case 2:
                    (s = e.right + 1),
                      (i = this.r.randomInteger(
                        e.top - (t.height - 1) + n,
                        e.bottom - n
                      ));
                    break;
                  case 3:
                    (s = this.r.randomInteger(
                      e.left - (t.width - 1) + n,
                      e.right - n
                    )),
                      (i = e.bottom + 1);
                }
                return { x: s, y: i, target: e };
              }),
              (b.prototype.addDoor = function (t) {
                this.roomGrid[t.y][t.x].forEach(function (e) {
                  e.setTileAt(t.x - e.x, t.y - e.y, l.DOOR);
                });
              }),
              b);
            s.d(e, "Room", function () {
              return Q;
            }),
              s.d(e, "TILES", function () {
                return l;
              }),
              (e.default = g);
          },
        ]),
      (t.c = s),
      (t.d = function (e, s, i) {
        t.o(e, s) || Object.defineProperty(e, s, { enumerable: !0, get: i });
      }),
      (t.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (t.t = function (e, s) {
        if ((1 & s && (e = t(e)), 8 & s)) return e;
        if (4 & s && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (t.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: e }),
          2 & s && "string" != typeof e)
        )
          for (var n in e)
            t.d(
              i,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return i;
      }),
      (t.n = function (e) {
        var s =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(s, "a", s), s;
      }),
      (t.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (t.p = ""),
      t((t.s = 12)).default
    );
    function t(i) {
      if (s[i]) return s[i].exports;
      var n = (s[i] = { i: i, l: !1, exports: {} });
      return e[i].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
    }
    var e, s;
  })());
var dungeon_minExports = dungeon_min.exports;
const Dungeon = getDefaultExportFromCjs(dungeon_minExports);
class Coin extends Phaser.Physics.Matter.Sprite {
  constructor(t, e, s, i = "coin", n = { isStatic: !0 }) {
    super(t.matter.world, e, s, i, 0, n),
      (this.scene = t),
      (this.label = "coin"),
      t.add.existing(this),
      this.init();
  }
  init() {
    this.scene.anims.create({
      key: this.label,
      frames: this.scene.anims.generateFrameNumbers(this.label, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    }),
      this.anims.play(this.label, !0),
      (this.tween = this.scene.tweens.add({
        targets: this,
        duration: 300,
        y: "-=5",
        repeat: -1,
        yoyo: !0,
      }));
  }
  destroy() {
    this.tween.stop(), super.destroy();
  }
}
class key extends Phaser.Physics.Matter.Sprite {
  constructor(t, e, s, i = "keys", n = { isStatic: !0 }) {
    super(t.matter.world, e, s, i, Phaser.Math.RND.pick([0, 1]), n),
      (this.scene = t),
      (this.label = "keys"),
      t.add.existing(this),
      this.init();
  }
  init() {
    this.tween = this.scene.tweens.add({
      targets: this,
      duration: 300,
      y: "-=5",
      repeat: -1,
      yoyo: !0,
    });
  }
  destroy() {
    this.tween.stop(), super.destroy();
  }
}
class SeeSaw {
  constructor(t, e, s, i = 5) {
    const n = t.add.tileSprite(e, s, (32 * i) / 2, 18, "seesaw");
    t.matter.add.gameObject(n, {
      restitution: 0,
      frictionAir: 0.2,
      friction: 0.2,
      density: 5e-4,
    });
    const { Constraint: o } = Phaser.Physics.Matter.Matter,
      a = o.create({ pointA: { x: n.x, y: n.y }, bodyB: n.body, length: 0 });
    t.matter.world.add(a);
  }
}
class DungeonGenerator {
  constructor(t) {
    (this.scene = t), this.generate();
  }
  generate() {
    this.generateDungeon(),
      this.generateMap(),
      this.dungeon.rooms.forEach((t) => {
        const { x: e, y: s, width: i, height: n } = t;
        this.groundLayer.weightedRandomize(
          [
            { index: 17, weight: 9 },
            { index: [7, 8, 9, 17, 18, 19], weight: 1 },
          ],
          e + 1,
          s + 1,
          i - 2,
          n - 2
        ),
          this.placeCorners(t),
          this.placeWalls(t);
        const o = t.getDoorLocations();
        this.addDoors(t, o, e, s),
          this.addKey(t),
          this.addFoes(t),
          this.addCoins(t),
          this.addSeeSaw(t);
      });
  }
  generateDungeon() {
    this.dungeon = new Dungeon({
      width: 50,
      height: 50,
      doorPadding: 2,
      rooms: {
        width: { min: 7, max: 15 },
        height: { min: 7, max: 15 },
        maxRooms: 12,
      },
    });
  }
  generateMap() {
    this.map = this.scene.make.tilemap({
      tileWidth: 48,
      tileHeight: 48,
      width: this.dungeon.width,
      height: this.dungeon.height,
    });
    const t = this.map.addTilesetImage("tiles", null, 48, 48, 0, 0);
    (this.groundLayer = this.map.createBlankLayer("Layer 1", t)),
      (this.stuffLayer = this.map.createBlankLayer("Stuff", t));
    const e = this.dungeon.getMappedTiles({
      empty: -1,
      floor: -1,
      door: 3,
      wall: 0,
    });
    this.groundLayer.putTilesAt(e, 0, 0),
      this.groundLayer.setCollision(0),
      this.groundLayer.setCollisionByProperty({ collides: !0 }),
      this.scene.matter.world.convertTilemapLayer(this.groundLayer);
  }
  placeCorners(t) {
    const { left: e, right: s, top: i, bottom: n } = t;
    this.groundLayer.putTileAt(0, e, i),
      this.groundLayer.putTileAt(5, s, i),
      this.groundLayer.putTileAt(45, s, n),
      this.groundLayer.putTileAt(40, e, n);
  }
  placeWalls(t) {
    const { width: e, height: s, left: i, right: n, top: o, bottom: a } = t;
    this.groundLayer.weightedRandomize(
      [
        { index: 2, weight: 4 },
        { index: [1, 2, 3, 4], weight: 1 },
      ],
      i + 1,
      o,
      e - 2,
      1
    ),
      this.groundLayer.weightedRandomize(
        [
          { index: 42, weight: 4 },
          { index: [41, 42, 43, 44], weight: 1 },
        ],
        i + 1,
        a,
        e - 2,
        1
      ),
      this.groundLayer.weightedRandomize(
        [
          { index: 10, weight: 4 },
          { index: [10, 20, 30], weight: 1 },
        ],
        i,
        o + 1,
        1,
        s - 2
      ),
      this.groundLayer.weightedRandomize(
        [
          { index: 15, weight: 4 },
          { index: [15, 25, 35], weight: 1 },
        ],
        n,
        o + 1,
        1,
        s - 2
      );
  }
  addDoors(t, e, s, i) {
    for (let n = 0; n < e.length; n++) {
      const o = this.groundLayer.tileToWorldXY(s + e[n].x, i + e[n].y);
      new Coin(this.scene, o.x + 20, o.y + 20),
        0 === e[n].y || e[n].y === t.height - 1
          ? this.groundLayer.putTilesAt([[7], [7]], s + e[n].x, i + e[n].y)
          : (0 === e[n].x || e[n].x === t.width - 1) &&
            this.groundLayer.putTilesAt([[7]], s + e[n].x, i + e[n].y);
    }
  }
  addKey(t) {
    const e = Phaser.Math.Between(t.left + 2, t.right - 2),
      s = Phaser.Math.Between(t.top + 2, t.bottom - 2),
      i = this.groundLayer.tileToWorldXY(e, s);
    new key(this.scene, i.x + 22, i.y + 22);
  }
  addSeeSaw(t) {
    if (Phaser.Math.Between(0, 10) < 7) return;
    const e = this.groundLayer.tileToWorldXY(t.centerX, t.centerY);
    new SeeSaw(this.scene, e.x + 22, e.y + 22, t.width);
  }
  addCoins(t) {
    const e = Phaser.Math.RND.pick(["top", "bottom", "left", "right", "none"]),
      s = parseInt(t.width / 3) - Phaser.Math.Between(1, 2),
      i = parseInt(t.height / 3) - Phaser.Math.Between(1, 2);
    switch (e) {
      case "top":
        this.addCoinsTop(t, s, i);
        break;
      case "bottom":
        this.addCoinsdBottom(t, s, i);
        break;
      case "left":
        this.addCoinsdLeft(t, s, i);
        break;
      case "right":
        this.addCoinsdRight(t, s, i);
    }
  }
  addCoinsTop(t, e, s) {
    const i = t.top + Phaser.Math.Between(1, 2),
      n = t.left + Phaser.Math.Between(1, 2);
    Array(e)
      .fill()
      .forEach((t, e) => {
        Array(s)
          .fill()
          .forEach((t, s) => {
            const o = this.groundLayer.tileToWorldXY(n + e, i + s);
            new Coin(this.scene, o.x + 20, o.y + 20);
          });
      });
  }
  addCoinsdBottom(t, e, s) {
    const i = t.bottom - Phaser.Math.Between(1, 2),
      n = t.left + Phaser.Math.Between(1, 2);
    Array(e)
      .fill()
      .forEach((t, e) => {
        Array(s)
          .fill()
          .forEach((t, s) => {
            const o = this.groundLayer.tileToWorldXY(n + e, i - s);
            new Coin(this.scene, o.x + 20, o.y + 20);
          });
      });
  }
  addCoinsdLeft(t, e, s) {
    const i = t.top + Phaser.Math.Between(3, 4),
      n = t.left + Phaser.Math.Between(1, 2);
    Array(e)
      .fill()
      .forEach((t, e) => {
        Array(s)
          .fill()
          .forEach((t, s) => {
            const o = this.groundLayer.tileToWorldXY(n + e, i - s);
            new Coin(this.scene, o.x + 20, o.y + 20);
          });
      });
  }
  addCoinsdRight(t, e, s) {
    const i = t.top + Phaser.Math.Between(1, 2),
      n = t.right - Phaser.Math.Between(3, 4);
    Array(e)
      .fill()
      .forEach((t, e) => {
        Array(s)
          .fill()
          .forEach((t, s) => {
            const o = this.groundLayer.tileToWorldXY(n - e, i + s);
            new Coin(this.scene, o.x + 20, o.y + 20);
          });
      });
  }
  addFoes(t) {
    const e = Phaser.Math.Between(t.left + 2, t.right - 2),
      s = Phaser.Math.Between(t.top + 2, t.bottom - 2),
      i = this.groundLayer.tileToWorldXY(e, s);
    Phaser.Math.Between(0, 5) > 4
      ? new Wizard(this.scene, i.x + 22, i.y + 22, this.groundLayer)
      : new Bat(this.scene, i.x + 22, i.y + 22, this.groundLayer);
  }
  addTopTraps(t) {
    const {
      x: e,
      y: s,
      width: i,
      height: n,
      left: o,
      right: a,
      top: r,
      bottom: l,
      tiles: h,
    } = t;
    h[0].forEach((t, e) => {
      1 === t && e > 0 && e < a && this.groundLayer.putTileAt(5, e + o, r + 1);
    });
  }
}
class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" }),
      (this.player = null),
      (this.score = 0),
      (this.scoreText = null);
  }
  init(t) {
    (this.name = t.name), (this.number = t.number);
  }
  preload() {
    this.registry.set("seconds", 0),
      this.registry.set("coins", 0),
      this.registry.set("keys", 0);
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.addMap(),
      this.addPlayer(),
      this.addCollisions(),
      this.addCamera(),
      this.addScores(),
      this.loadAudios();
  }
  addMap() {
    (this.dungeon = new DungeonGenerator(this)),
      this.input.keyboard.on("keydown-ENTER", () => this.finishScene(), this);
  }
  addScores() {
    this.add
      .sprite(62, 26, "coin", 0)
      .setOrigin(0.5)
      .setScrollFactor(0)
      .setScale(0.8),
      (this.scoreCoins = this.add
        .bitmapText(100, 24, "default", "x0", 15)
        .setOrigin(0.5)
        .setScrollFactor(0)),
      (this.scoreSeconds = this.add
        .bitmapText(this.center_width, 24, "default", "0", 15)
        .setOrigin(0.5)
        .setScrollFactor(0)),
      this.add
        .sprite(this.width - 90, 24, "keys", 0)
        .setOrigin(0.5)
        .setScrollFactor(0)
        .setScale(0.8),
      (this.scoreKeys = this.add
        .bitmapText(this.width - 48, 24, "default", "x0", 15)
        .setOrigin(0.5)
        .setScrollFactor(0)),
      (this.timer = this.time.addEvent({
        delay: 1e3,
        callback: () => {
          this.updateSeconds();
        },
        callbackScope: this,
        loop: !0,
      }));
  }
  addPlayer() {
    (this.trailLayer = this.add.layer()),
      (this.player = new Player(
        this,
        this.dungeon.map.widthInPixels / 2,
        this.dungeon.map.heightInPixels / 2,
        100
      ));
  }
  addCollisions() {
    (this.unsubscribePlayerCollide = this.matterCollision.addOnCollideStart({
      objectA: this.player.sprite,
      callback: this.onPlayerCollide,
      context: this,
    })),
      this.matter.world.on("collisionstart", (t) => {
        t.pairs.forEach((t) => {
          t.bodyA, t.bodyB;
        });
      });
  }
  onPlayerCollide({ gameObjectA: t, gameObjectB: e }) {
    e &&
      ("coin" === e.label && this.playerPicksCoin(e),
      "keys" === e.label && this.playerPicksKey(e),
      "bat" === e.label && this.playerHitsFoe(e),
      "wizard" === e.label && this.playerHitsFoe(e),
      "fireball" === e.label && this.playerHitsFoe(e),
      e instanceof Phaser.Tilemaps.Tile &&
        e.properties.isLethal &&
        (this.unsubscribePlayerCollide(), this.restartScene()));
  }
  playerPicksCoin(t) {
    this.showPoints(t.x, t.y, 1, this.scoreCoins),
      t.destroy(),
      this.updateCoins(),
      this.playAudio("coin");
  }
  playerPicksKey(t) {
    this.updateKeys(),
      this.showPoints(
        t.x,
        t.y,
        this.registry.get("keys") + "/" + this.dungeon.dungeon.rooms.length,
        this.scoreKeys
      ),
      t.destroy();
  }
  playerHitsFoe(t) {
    this.player.invincible ||
      (this.player.explosion(), t.destroy(), this.restartScene());
  }
  showPoints(t, e, s, i, n = 16777215) {
    let o = this.add
      .bitmapText(t + 20, e - 80, "default", "+" + s, 10)
      .setDropShadow(2, 3, n, 0.7)
      .setOrigin(0.5);
    this.tweens.add({
      targets: o,
      duration: 1e3,
      alpha: { from: 1, to: 0 },
      x: {
        from: o.x + Phaser.Math.Between(-10, 10),
        to: o.x + Phaser.Math.Between(-40, 40),
      },
      y: { from: o.y - 10, to: o.y - 60 },
      onComplete: () => {
        o.destroy();
      },
    }),
      this.textUpdateEffect(i, n);
  }
  addCamera() {
    this.cameras.main.setBounds(
      0,
      0,
      this.dungeon.map.widthInPixels,
      this.dungeon.map.heightInPixels
    ),
      this.cameras.main.startFollow(this.player.sprite, !1, 0.5, 0.5),
      this.cameras.main.setBackgroundColor(2429722);
  }
  loadAudios() {
    this.audios = {
      jump: this.sound.add("jump"),
      bubble: this.sound.add("bubble"),
      trap: this.sound.add("trap"),
      crash: this.sound.add("crash"),
      fireball: this.sound.add("fireball"),
      death: this.sound.add("death"),
      coin: this.sound.add("start"),
    };
  }
  playAudio(t) {
    this.audios[t].play();
  }
  restartScene() {
    (this.player.sprite.visible = !1),
      this.cameras.main.shake(100),
      this.cameras.main.fade(250, 0, 0, 0),
      this.cameras.main.once("camerafadeoutcomplete", () =>
        this.scene.restart()
      );
  }
  finishScene() {
    this.cameras.main.fade(250, 0, 0, 0),
      this.cameras.main.once("camerafadeoutcomplete", () => {
        this.scene.start("outro", {
          next: "underwater",
          name: "STAGE",
          number: this.number + 1,
        });
      });
  }
  updateSeconds(t = 1) {
    const e = +this.registry.get("seconds") + t;
    this.registry.set("seconds", e), this.scoreSeconds.setText(e);
  }
  updateCoins(t = 1) {
    const e = +this.registry.get("coins") + t;
    this.registry.set("coins", e), this.scoreCoins.setText("x" + e);
  }
  updateKeys(t = 1) {
    const e = +this.registry.get("keys") + t;
    this.registry.set("keys", e),
      this.scoreKeys.setText("x" + e),
      e === this.dungeon.dungeon.rooms.length && this.finishScene();
  }
  textUpdateEffect(t, e) {
    t.setTint(e);
    const s = t.y;
    this.tweens.add({
      targets: t,
      duration: 100,
      alpha: { from: 1, to: 0.8 },
      scale: { from: 1.2, to: 1 },
      repeat: 5,
      onComplete: () => {
        t.setTint(16777215), (t.y = s);
      },
    });
  }
}
var phaserMatterCollision = { exports: {} };
(function (module, exports) {
  var factory;
  "undefined" != typeof self && self,
    (factory = function (__WEBPACK_EXTERNAL_MODULE_phaser__) {
      return (() => {
        var __webpack_modules__ = {
            "./index.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "PhaserMatterCollisionPlugin": () => (/* reexport safe */ _phaser_matter_collision_plugin__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   "getRootBody": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.getRootBody),\n/* harmony export */   "isCollidingObject": () => (/* reexport safe */ _valid_collision_object__WEBPACK_IMPORTED_MODULE_2__.isCollidingObject),\n/* harmony export */   "isMatterBody": () => (/* reexport safe */ _valid_collision_object__WEBPACK_IMPORTED_MODULE_2__.isMatterBody),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _phaser_matter_collision_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phaser-matter-collision-plugin */ "./phaser-matter-collision-plugin.ts");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./utils.ts");\n/* harmony import */ var _valid_collision_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid-collision-object */ "./valid-collision-object.ts");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_phaser_matter_collision_plugin__WEBPACK_IMPORTED_MODULE_0__.default);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGFzZXJNYXR0ZXJDb2xsaXNpb25QbHVnaW4vLi9pbmRleC50cz9hOTU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJFO0FBQ3JDO0FBTUo7QUEyQmhDO0FBRUYsaUVBQWUsb0VBQTJCLEVBQUMiLCJmaWxlIjoiLi9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaGFzZXJNYXR0ZXJDb2xsaXNpb25QbHVnaW4gZnJvbSBcIi4vcGhhc2VyLW1hdHRlci1jb2xsaXNpb24tcGx1Z2luXCI7XG5pbXBvcnQgeyBnZXRSb290Qm9keSB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQge1xuICBpc0NvbGxpZGluZ09iamVjdCxcbiAgaXNNYXR0ZXJCb2R5LFxuICBPYmplY3RXaXRoQm9keSxcbiAgQ29sbGlkaW5nT2JqZWN0LFxufSBmcm9tIFwiLi92YWxpZC1jb2xsaXNpb24tb2JqZWN0XCI7XG5pbXBvcnQge1xuICBFeHRlbmRlZE1hdHRlckNvbGxpc2lvbkRhdGEsXG4gIENvbGxpc2lvbkV2ZW50LFxuICBFdmVudERhdGEsXG4gIENvbGxpZGVDYWxsYmFjayxcbiAgQ29sbGlkZUFDb25maWcsXG4gIENvbGxpZGVBQkNvbmZpZyxcbiAgQ29sbGlkZUNvbnRleHQsXG4gIFVuc3Vic2NyaWJlLFxufSBmcm9tIFwiLi9jb2xsaXNpb24tdHlwZXNcIjtcblxuZXhwb3J0IHtcbiAgUGhhc2VyTWF0dGVyQ29sbGlzaW9uUGx1Z2luLFxuICBnZXRSb290Qm9keSxcbiAgaXNDb2xsaWRpbmdPYmplY3QsXG4gIGlzTWF0dGVyQm9keSxcbiAgT2JqZWN0V2l0aEJvZHksXG4gIENvbGxpZGluZ09iamVjdCxcbiAgRXh0ZW5kZWRNYXR0ZXJDb2xsaXNpb25EYXRhLFxuICBDb2xsaXNpb25FdmVudCxcbiAgRXZlbnREYXRhLFxuICBDb2xsaWRlQ2FsbGJhY2ssXG4gIENvbGxpZGVBQ29uZmlnLFxuICBDb2xsaWRlQUJDb25maWcsXG4gIENvbGxpZGVDb250ZXh0LFxuICBVbnN1YnNjcmliZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBoYXNlck1hdHRlckNvbGxpc2lvblBsdWdpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.ts\n'
              );
            },
            "./logger.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    log: console.log,\r\n    warn: console.warn,\r\n    error: console.error,\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGFzZXJNYXR0ZXJDb2xsaXNpb25QbHVnaW4vLi9sb2dnZXIudHM/Zjk0OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWU7SUFDYixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7SUFDaEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztDQUNyQixFQUFDIiwiZmlsZSI6Ii4vbG9nZ2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBsb2c6IGNvbnNvbGUubG9nLFxuICB3YXJuOiBjb25zb2xlLndhcm4sXG4gIGVycm9yOiBjb25zb2xlLmVycm9yLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./logger.ts\n'
              );
            },
            "./phaser-matter-collision-plugin.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ MatterCollisionPlugin)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "phaser");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./utils.ts");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./logger.ts");\n/* harmony import */ var _valid_collision_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valid-collision-object */ "./valid-collision-object.ts");\n\r\n\r\n\r\n\r\nvar Matter = phaser__WEBPACK_IMPORTED_MODULE_0__.Physics.Matter;\r\nconst { START, DESTROY, SHUTDOWN } = phaser__WEBPACK_IMPORTED_MODULE_0__.Scenes.Events;\r\nconst { COLLISION_START, COLLISION_ACTIVE, COLLISION_END } = Matter.Events;\r\n/**\r\n * @export\r\n */\r\nclass MatterCollisionPlugin extends phaser__WEBPACK_IMPORTED_MODULE_0__.Plugins.ScenePlugin {\r\n    constructor(scene, pluginManager, pluginKey) {\r\n        super(scene, pluginManager, pluginKey);\r\n        this.scene = scene;\r\n        this.pluginManager = pluginManager;\r\n        this.events = new phaser__WEBPACK_IMPORTED_MODULE_0__.Events.EventEmitter();\r\n        this.collisionStartListeners = new Map();\r\n        this.collisionEndListeners = new Map();\r\n        this.collisionActiveListeners = new Map();\r\n        this.scene = scene;\r\n        this.scene.events.once(START, this.start, this);\r\n        this.scene.events.once(DESTROY, this.destroy, this);\r\n    }\r\n    addOnCollideStart(config) {\r\n        // Note: the order of overloads is important! TS matches the first one it can, so this needs\r\n        // the most specific/constrained signature first.\r\n        this.addOnCollide(this.collisionStartListeners, config);\r\n        return () => this.removeOnCollide(this.collisionStartListeners, config);\r\n    }\r\n    addOnCollideEnd(config) {\r\n        this.addOnCollide(this.collisionEndListeners, config);\r\n        return () => this.removeOnCollide(this.collisionEndListeners, config);\r\n    }\r\n    addOnCollideActive(config) {\r\n        this.addOnCollide(this.collisionActiveListeners, config);\r\n        return () => this.removeOnCollide(this.collisionActiveListeners, config);\r\n    }\r\n    removeOnCollideStart(config) {\r\n        this.removeOnCollide(this.collisionStartListeners, config);\r\n    }\r\n    removeOnCollideEnd(config) {\r\n        this.removeOnCollide(this.collisionEndListeners, config);\r\n    }\r\n    removeOnCollideActive(config) {\r\n        this.removeOnCollide(this.collisionActiveListeners, config);\r\n    }\r\n    /** Remove any listeners that were added with addOnCollideStart. */\r\n    removeAllCollideStartListeners() {\r\n        this.collisionStartListeners.clear();\r\n    }\r\n    /** Remove any listeners that were added with addOnCollideActive. */\r\n    removeAllCollideActiveListeners() {\r\n        this.collisionActiveListeners.clear();\r\n    }\r\n    /** Remove any listeners that were added with addOnCollideEnd. */\r\n    removeAllCollideEndListeners() {\r\n        this.collisionEndListeners.clear();\r\n    }\r\n    /**\r\n     * Remove any listeners that were added with addOnCollideStart, addOnCollideActive or\r\n     * addOnCollideEnd.\r\n     */\r\n    removeAllCollideListeners() {\r\n        this.removeAllCollideStartListeners();\r\n        this.removeAllCollideActiveListeners();\r\n        this.removeAllCollideEndListeners();\r\n    }\r\n    addOnCollide(map, config) {\r\n        const { context, callback, objectA, objectB } = config;\r\n        if (!callback || typeof callback !== "function") {\r\n            _logger__WEBPACK_IMPORTED_MODULE_2__.default.warn(`No valid callback specified. Received: ${callback}`);\r\n            return;\r\n        }\r\n        const objectsA = Array.isArray(objectA) ? objectA : [objectA];\r\n        const objectsB = Array.isArray(objectB) ? objectB : [objectB];\r\n        objectsA.forEach((a) => {\r\n            objectsB.forEach((b) => {\r\n                this.addOnCollideObjectVsObject(map, a, b, callback, context);\r\n            });\r\n        });\r\n    }\r\n    removeOnCollide(map, config) {\r\n        const { context, callback, objectA, objectB } = config;\r\n        const objectsA = Array.isArray(objectA) ? objectA : [objectA];\r\n        const objectsB = Array.isArray(objectB) ? objectB : [objectB];\r\n        objectsA.forEach((a) => {\r\n            const callbacks = map.get(a) || [];\r\n            const remainingCallbacks = callbacks.filter((cb) => {\r\n                // If anything doesn\'t match a provided config value (i.e. anything other than undefined),\r\n                // we can bail and keep listener.\r\n                if (context !== undefined && cb.context !== context)\r\n                    return true;\r\n                if (callback !== undefined && cb.callback !== callback)\r\n                    return true;\r\n                if (objectB !== undefined && !objectsB.includes(cb.target))\r\n                    return true;\r\n                return false;\r\n            });\r\n            if (remainingCallbacks.length > 0)\r\n                map.set(a, remainingCallbacks);\r\n            else\r\n                map.delete(a);\r\n        });\r\n    }\r\n    addOnCollideObjectVsObject(map, objectA, objectB, callback, context) {\r\n        // Can\'t do anything if the first object is not defined or invalid.\r\n        if (!objectA || !(0,_valid_collision_object__WEBPACK_IMPORTED_MODULE_3__.isCollidingObject)(objectA)) {\r\n            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warnInvalidObject)(objectA);\r\n            return;\r\n        }\r\n        // The second object can be undefined or a valid body.\r\n        if (objectB && !(0,_valid_collision_object__WEBPACK_IMPORTED_MODULE_3__.isCollidingObject)(objectB)) {\r\n            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warnInvalidObject)(objectA);\r\n            return;\r\n        }\r\n        const callbacks = map.get(objectA) || [];\r\n        callbacks.push({ target: objectB, callback, context });\r\n        map.set(objectA, callbacks);\r\n    }\r\n    onCollisionStart(event) {\r\n        this.onCollisionEvent(this.collisionStartListeners, COLLISION_START, event);\r\n    }\r\n    onCollisionEnd(event) {\r\n        this.onCollisionEvent(this.collisionEndListeners, COLLISION_END, event);\r\n    }\r\n    onCollisionActive(event) {\r\n        this.onCollisionEvent(this.collisionActiveListeners, COLLISION_ACTIVE, event);\r\n    }\r\n    /**\r\n     * Reusable handler for collisionstart, collisionend, collisionactive.\r\n     * */\r\n    onCollisionEvent(listenerMap, eventName, event) {\r\n        const pairs = event.pairs;\r\n        const pairEventName = "pair" + eventName;\r\n        const eventData = { isReversed: false };\r\n        const eventDataReversed = { isReversed: true };\r\n        pairs.map((pair, i) => {\r\n            var _a, _b;\r\n            const { bodyA, bodyB } = pair;\r\n            const rootBodyA = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRootBody)(bodyA);\r\n            const rootBodyB = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRootBody)(bodyB);\r\n            let gameObjectA = (_a = rootBodyA.gameObject) !== null && _a !== void 0 ? _a : undefined;\r\n            let gameObjectB = (_b = rootBodyB.gameObject) !== null && _b !== void 0 ? _b : undefined;\r\n            // Special case for tiles, where it\'s more useful to have a reference to the Tile object not\r\n            // the TileBody. This is hot code, so use a property check instead of instanceof.\r\n            if (gameObjectA && gameObjectA instanceof Matter.TileBody) {\r\n                gameObjectA = gameObjectA.tile;\r\n            }\r\n            if (gameObjectB && gameObjectB instanceof Matter.TileBody) {\r\n                gameObjectB = gameObjectB.tile;\r\n            }\r\n            pairs[i].gameObjectA = gameObjectA !== null && gameObjectA !== void 0 ? gameObjectA : undefined;\r\n            pairs[i].gameObjectB = gameObjectB !== null && gameObjectB !== void 0 ? gameObjectB : undefined;\r\n            eventData.bodyA = bodyA;\r\n            eventData.bodyB = bodyB;\r\n            eventData.gameObjectA = gameObjectA !== null && gameObjectA !== void 0 ? gameObjectA : undefined;\r\n            eventData.gameObjectB = gameObjectB !== null && gameObjectB !== void 0 ? gameObjectB : undefined;\r\n            eventData.pair = pair;\r\n            this.events.emit(pairEventName, eventData);\r\n            if (listenerMap.size > 0) {\r\n                eventDataReversed.bodyB = bodyA;\r\n                eventDataReversed.bodyA = bodyB;\r\n                eventDataReversed.gameObjectB = gameObjectA;\r\n                eventDataReversed.gameObjectA = gameObjectB;\r\n                eventDataReversed.pair = pair;\r\n                const data = eventData;\r\n                const dataReversed = eventDataReversed;\r\n                this.checkPairAndEmit(listenerMap, bodyA, bodyB, gameObjectB, data);\r\n                this.checkPairAndEmit(listenerMap, bodyB, bodyA, gameObjectA, dataReversed);\r\n                if (gameObjectA) {\r\n                    this.checkPairAndEmit(listenerMap, gameObjectA, bodyB, gameObjectB, data);\r\n                }\r\n                if (gameObjectB) {\r\n                    this.checkPairAndEmit(listenerMap, gameObjectB, bodyA, gameObjectA, dataReversed);\r\n                }\r\n            }\r\n        });\r\n        this.events.emit(eventName, event);\r\n    }\r\n    checkPairAndEmit(map, objectA, bodyB, gameObjectB, eventData) {\r\n        const callbacks = map.get(objectA);\r\n        if (callbacks) {\r\n            callbacks.forEach(({ target, callback, context }) => {\r\n                if (!target || target === bodyB || target === gameObjectB) {\r\n                    callback.call(context, eventData);\r\n                }\r\n            });\r\n        }\r\n    }\r\n    subscribeMatterEvents() {\r\n        const matter = this.scene.matter;\r\n        if (!matter || !matter.world) {\r\n            _logger__WEBPACK_IMPORTED_MODULE_2__.default.warn("Plugin requires matter!");\r\n            return;\r\n        }\r\n        matter.world.on(COLLISION_START, this.onCollisionStart, this);\r\n        matter.world.on(COLLISION_ACTIVE, this.onCollisionActive, this);\r\n        matter.world.on(COLLISION_END, this.onCollisionEnd, this);\r\n    }\r\n    unsubscribeMatterEvents() {\r\n        // Don\'t unsub if matter next existing or if the game is destroyed (since the matter world will\r\n        // be already gone)\r\n        const matter = this.scene.matter;\r\n        if (!matter || !matter.world)\r\n            return;\r\n        matter.world.off(COLLISION_START, this.onCollisionStart, this);\r\n        matter.world.off(COLLISION_ACTIVE, this.onCollisionActive, this);\r\n        matter.world.off(COLLISION_END, this.onCollisionEnd, this);\r\n    }\r\n    start() {\r\n        // If restarting, unsubscribe before resubscribing to ensure only one listener is added\r\n        this.scene.events.off(SHUTDOWN, this.shutdown, this);\r\n        this.scene.events.on(SHUTDOWN, this.shutdown, this);\r\n        this.subscribeMatterEvents();\r\n    }\r\n    shutdown() {\r\n        this.removeAllCollideListeners();\r\n        this.unsubscribeMatterEvents();\r\n        // Resubscribe to start so that the plugin is started again after Matter\r\n        this.scene.events.once(START, this.start, this);\r\n    }\r\n    destroy() {\r\n        this.scene.events.off(DESTROY, this.destroy, this);\r\n        this.scene.events.off(START, this.start, this);\r\n        this.scene.events.off(SHUTDOWN, this.shutdown, this);\r\n        this.removeAllCollideListeners();\r\n        this.unsubscribeMatterEvents();\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGFzZXJNYXR0ZXJDb2xsaXNpb25QbHVnaW4vLi9waGFzZXItbWF0dGVyLWNvbGxpc2lvbi1wbHVnaW4udHM/OGI5OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkU7QUFDbEI7QUFDM0I7QUFDc0Q7QUFnQnBGLElBQU8sTUFBTSxHQUFHLGtEQUFjLENBQUM7QUFFL0IsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsaURBQWEsQ0FBQztBQUNuRCxNQUFNLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFPM0U7O0dBRUc7QUFDWSxNQUFNLHFCQUFzQixTQUFRLHVEQUFtQjtJQU9wRSxZQUNZLEtBQVksRUFDWixhQUFvQyxFQUM5QyxTQUFpQjtRQUVqQixLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUo3QixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBUnpDLFdBQU0sR0FBRyxJQUFJLHVEQUFtQixFQUFFLENBQUM7UUFFbEMsNEJBQXVCLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakQsMEJBQXFCLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDL0MsNkJBQXdCLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFReEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lB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QUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0Isd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Q0FDRiIsImZpbGUiOiIuL3BoYXNlci1tYXR0ZXItY29sbGlzaW9uLXBsdWdpbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBoeXNpY3MsIFBsdWdpbnMsIFNjZW5lLCBFdmVudHMsIFNjZW5lcywgVGlsZW1hcHMgfSBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgeyBnZXRSb290Qm9keSwgd2FybkludmFsaWRPYmplY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi9sb2dnZXJcIjtcbmltcG9ydCB7IENvbGxpZGluZ09iamVjdCBhcyBDTywgaXNDb2xsaWRpbmdPYmplY3QgfSBmcm9tIFwiLi92YWxpZC1jb2xsaXNpb24tb2JqZWN0XCI7XG5pbXBvcnQge1xuICBMaXN0ZW5lck1hcCxcbiAgQ29sbGlkZUFCQ29uZmlnIGFzIEFCQ29uZmlnLFxuICBVbnN1YnNjcmliZSxcbiAgQ29sbGlkZUNhbGxiYWNrLFxuICBDb2xsaWRlQ29udGV4dCxcbiAgRXh0ZW5kZWRNYXR0ZXJDb2xsaXNpb25EYXRhLFxuICBFdmVudERhdGEsXG4gIENvbGxpZGVBQ29uZmlnIGFzIEFDb25maWcsXG4gIEludGVybmFsQ29sbGlkZUNvbmZpZyxcbiAgUmVtb3ZlQ29sbGlkZUNvbmZpZ0EgYXMgUmVtb3ZlQUNvbmZpZyxcbiAgUmVtb3ZlQ29sbGlkZUNvbmZpZ0FCIGFzIFJlbW92ZUFCQ29uZmlnLFxuICBJbnRlcm5hbENvbGxpZGVSZW1vdmVDb25maWcsXG59IGZyb20gXCIuL2NvbGxpc2lvbi10eXBlc1wiO1xuXG5pbXBvcnQgTWF0dGVyID0gUGh5c2ljcy5NYXR0ZXI7XG5pbXBvcnQgTWF0dGVyRXZlbnRzID0gTWF0dGVyLkV2ZW50cztcbmNvbnN0IHsgU1RBUlQsIERFU1RST1ksIFNIVVRET1dOIH0gPSBTY2VuZXMuRXZlbnRzO1xuY29uc3QgeyBDT0xMSVNJT05fU1RBUlQsIENPTExJU0lPTl9BQ1RJVkUsIENPTExJU0lPTl9FTkQgfSA9IE1hdHRlci5FdmVudHM7XG5cbnR5cGUgTWF0dGVyQ29sbGlzaW9uRXZlbnQgPVxuICB8IE1hdHRlckV2ZW50cy5Db2xsaXNpb25BY3RpdmVFdmVudFxuICB8IE1hdHRlckV2ZW50cy5Db2xsaXNpb25FbmRFdmVudFxuICB8IE1hdHRlckV2ZW50cy5Db2xsaXNpb25BY3RpdmVFdmVudDtcblxuLyoqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHRlckNvbGxpc2lvblBsdWdpbiBleHRlbmRzIFBsdWdpbnMuU2NlbmVQbHVnaW4ge1xuICBwdWJsaWMgZXZlbnRzID0gbmV3IEV2ZW50cy5FdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIGNvbGxpc2lvblN0YXJ0TGlzdGVuZXJzOiBMaXN0ZW5lck1hcCA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBjb2xsaXNpb25FbmRMaXN0ZW5lcnM6IExpc3RlbmVyTWFwID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGNvbGxpc2lvbkFjdGl2ZUxpc3RlbmVyczogTGlzdGVuZXJNYXAgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNjZW5lOiBTY2VuZSxcbiAgICBwcm90ZWN0ZWQgcGx1Z2luTWFuYWdlcjogUGx1Z2lucy5QbHVnaW5NYW5hZ2VyLFxuICAgIHBsdWdpbktleTogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKHNjZW5lLCBwbHVnaW5NYW5hZ2VyLCBwbHVnaW5LZXkpO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNjZW5lLmV2ZW50cy5vbmNlKFNUQVJULCB0aGlzLnN0YXJ0LCB0aGlzKTtcbiAgICB0aGlzLnNjZW5lLmV2ZW50cy5vbmNlKERFU1RST1ksIHRoaXMuZGVzdHJveSwgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbGlzdGVuZXIgZm9yIGNvbGxpZGVzdGFydCBldmVudHMgYmV0d2VlbiBvYmplY3RBIGFuZCBvYmplY3RCLiBUaGUgY29sbGlkZXN0YXJ0IGV2ZW50IGlzXG4gICAqIGZpcmVkIGJ5IE1hdHRlciB3aGVuIHR3byBib2RpZXMgc3RhcnQgY29sbGlkaW5nIHdpdGhpbiBhIHRpY2sgb2YgdGhlIGVuZ2luZS4gSWYgb2JqZWN0QiBpc1xuICAgKiBvbWl0dGVkLCBhbnkgY29sbGlzaW9ucyB3aXRoIG9iamVjdEEgd2lsbCBiZSBwYXNzZWQgYWxvbmcgdG8gdGhlIGxpc3RlbmVyLiBTZWVcbiAgICoge0BsaW5rIHBhaXJjb2xsaXNpb25zdGFydH0gZm9yIGluZm9ybWF0aW9uIG9uIGNhbGxiYWNrIHBhcmFtZXRlcnMuXG4gICAqL1xuICBwdWJsaWMgYWRkT25Db2xsaWRlU3RhcnQ8VCBleHRlbmRzIENPLCBLIGV4dGVuZHMgQ08+KGNvbmZpZzogQUJDb25maWc8VCwgSz4pOiBVbnN1YnNjcmliZTtcbiAgcHVibGljIGFkZE9uQ29sbGlkZVN0YXJ0PFQgZXh0ZW5kcyBDTz4oY29uZmlnOiBBQ29uZmlnPFQ+KTogVW5zdWJzY3JpYmU7XG4gIHB1YmxpYyBhZGRPbkNvbGxpZGVTdGFydChjb25maWc6IEludGVybmFsQ29sbGlkZUNvbmZpZyk6IFVuc3Vic2NyaWJlIHtcbiAgICAvLyBOb3RlOiB0aGUgb3JkZXIgb2Ygb3ZlcmxvYWRzIGlzIGltcG9ydGFudCEgVFMgbWF0Y2hlcyB0aGUgZmlyc3Qgb25lIGl0IGNhbiwgc28gdGhpcyBuZWVkc1xuICAgIC8vIHRoZSBtb3N0IHNwZWNpZmljL2NvbnN0cmFpbmVkIHNpZ25hdHVyZSBmaXJzdC5cbiAgICB0aGlzLmFkZE9uQ29sbGlkZSh0aGlzLmNvbGxpc2lvblN0YXJ0TGlzdGVuZXJzLCBjb25maWcpO1xuICAgIHJldHVybiAoKSA9PiB0aGlzLnJlbW92ZU9uQ29sbGlkZSh0aGlzLmNvbGxpc2lvblN0YXJ0TGlzdGVuZXJzLCBjb25maWcpO1xuICB9XG5cbiAgLyoqIFRoaXMgbWV0aG9kIG1pcnJvcnMge0BsaW5rIE1hdHRlckNvbGxpc2lvblBsdWdpbiNhZGRPbkNvbGxpZGVTdGFydH0gKi9cbiAgcHVibGljIGFkZE9uQ29sbGlkZUVuZDxUIGV4dGVuZHMgQ08sIEsgZXh0ZW5kcyBDTz4oY29uZmlnOiBBQkNvbmZpZzxULCBLPik6IFVuc3Vic2NyaWJlO1xuICBwdWJsaWMgYWRkT25Db2xsaWRlRW5kPFQgZXh0ZW5kcyBDTz4oY29uZmlnOiBBQ29uZmlnPFQ+KTogVW5zdWJzY3JpYmU7XG4gIHB1YmxpYyBhZGRPbkNvbGxpZGVFbmQoY29uZmlnOiBJbnRlcm5hbENvbGxpZGVDb25maWcpOiBVbnN1YnNjcmliZSB7XG4gICAgdGhpcy5hZGRPbkNvbGxpZGUodGhpcy5jb2xsaXNpb25FbmRMaXN0ZW5lcnMsIGNvbmZpZyk7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlT25Db2xsaWRlKHRoaXMuY29sbGlzaW9uRW5kTGlzdGVuZXJzLCBjb25maWcpO1xuICB9XG5cbiAgLyoqIFRoaXMgbWV0aG9kIG1pcnJvcnMge0BsaW5rIE1hdHRlckNvbGxpc2lvblBsdWdpbiNhZGRPbkNvbGxpZGVTdGFydH0gKi9cbiAgcHVibGljIGFkZE9uQ29sbGlkZUFjdGl2ZTxUIGV4dGVuZHMgQ08sIEsgZXh0ZW5kcyBDTz4oY29uZmlnOiBBQkNvbmZpZzxULCBLPik6IFVuc3Vic2NyaWJlO1xuICBwdWJsaWMgYWRkT25Db2xsaWRlQWN0aXZlPFQgZXh0ZW5kcyBDTz4oY29uZmlnOiBBQ29uZmlnPFQ+KTogVW5zdWJzY3JpYmU7XG4gIHB1YmxpYyBhZGRPbkNvbGxpZGVBY3RpdmUoY29uZmlnOiBJbnRlcm5hbENvbGxpZGVDb25maWcpOiBVbnN1YnNjcmliZSB7XG4gICAgdGhpcy5hZGRPbkNvbGxpZGUodGhpcy5jb2xsaXNpb25BY3RpdmVMaXN0ZW5lcnMsIGNvbmZpZyk7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlT25Db2xsaWRlKHRoaXMuY29sbGlzaW9uQWN0aXZlTGlzdGVuZXJzLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbnkgbGlzdGVuZXJzIHRoYXQgd2VyZSBhZGRlZCB3aXRoIGFkZE9uQ29sbGlkZVN0YXJ0LiBJZiBvYmplY3RCLCBjYWxsYmFjayBvciBjb250ZXh0XG4gICAqIHBhcmFtZXRlcnMgYXJlIG9taXR0ZWQsIGFueSBsaXN0ZW5lciBtYXRjaGluZyB0aGUgcmVtYWluaW5nIHBhcmFtZXRlcnMgd2lsbCBiZSByZW1vdmVkLiBFLmcuIGlmXG4gICAqIHlvdSBvbmx5IHNwZWNpZnkgb2JqZWN0QSBhbmQgb2JqZWN0QiwgYWxsIGxpc3RlbmVycyB3aXRoIG9iamVjdEEgJiBvYmplY3RCIHdpbGwgYmUgcmVtb3ZlZFxuICAgKiByZWdhcmRsZXNzIG9mIHRoZSBjYWxsYmFjayBvciBjb250ZXh0LlxuICAgKi9cbiAgcHVibGljIHJlbW92ZU9uQ29sbGlkZVN0YXJ0PFQgZXh0ZW5kcyBDTywgSyBleHRlbmRzIENPPihjb25maWc6IFJlbW92ZUFCQ29uZmlnPFQsIEs+KTogdm9pZDtcbiAgcHVibGljIHJlbW92ZU9uQ29sbGlkZVN0YXJ0PFQgZXh0ZW5kcyBDTz4oY29uZmlnOiBSZW1vdmVBQ29uZmlnPFQ+KTogdm9pZDtcbiAgcHVibGljIHJlbW92ZU9uQ29sbGlkZVN0YXJ0KGNvbmZpZzogSW50ZXJuYWxDb2xsaWRlUmVtb3ZlQ29uZmlnKSB7XG4gICAgdGhpcy5yZW1vdmVPbkNvbGxpZGUodGhpcy5jb2xsaXNpb25TdGFydExpc3RlbmVycywgY29uZmlnKTtcbiAgfVxuXG4gIC8qKiBUaGlzIG1ldGhvZCBtaXJyb3JzIHtAbGluayBNYXR0ZXJDb2xsaXNpb25QbHVnaW4jcmVtb3ZlT25Db2xsaWRlU3RhcnR9ICovXG4gIHB1YmxpYyByZW1vdmVPbkNvbGxpZGVFbmQ8VCBleHRlbmRzIENPLCBLIGV4dGVuZHMgQ08+KGNvbmZpZzogUmVtb3ZlQUJDb25maWc8VCwgSz4pOiB2b2lkO1xuICBwdWJsaWMgcmVtb3ZlT25Db2xsaWRlRW5kPFQgZXh0ZW5kcyBDTz4oY29uZmlnOiBSZW1vdmVBQ29uZmlnPFQ+KTogdm9pZDtcbiAgcHVibGljIHJlbW92ZU9uQ29sbGlkZUVuZChjb25maWc6IEludGVybmFsQ29sbGlkZVJlbW92ZUNvbmZpZykge1xuICAgIHRoaXMucmVtb3ZlT25Db2xsaWRlKHRoaXMuY29sbGlzaW9uRW5kTGlzdGVuZXJzLCBjb25maWcpO1xuICB9XG5cbiAgLyoqIFRoaXMgbWV0aG9kIG1pcnJvcnMge0BsaW5rIE1hdHRlckNvbGxpc2lvblBsdWdpbiNyZW1vdmVPbkNvbGxpZGVTdGFydH0gKi9cbiAgcHVibGljIHJlbW92ZU9uQ29sbGlkZUFjdGl2ZTxUIGV4dGVuZHMgQ08sIEsgZXh0ZW5kcyBDTz4oY29uZmlnOiBSZW1vdmVBQkNvbmZpZzxULCBLPik6IHZvaWQ7XG4gIHB1YmxpYyByZW1vdmVPbkNvbGxpZGVBY3RpdmU8VCBleHRlbmRzIENPPihjb25maWc6IFJlbW92ZUFDb25maWc8VD4pOiB2b2lkO1xuICBwdWJsaWMgcmVtb3ZlT25Db2xsaWRlQWN0aXZlKGNvbmZpZzogSW50ZXJuYWxDb2xsaWRlUmVtb3ZlQ29uZmlnKSB7XG4gICAgdGhpcy5yZW1vdmVPbkNvbGxpZGUodGhpcy5jb2xsaXNpb25BY3RpdmVMaXN0ZW5lcnMsIGNvbmZpZyk7XG4gIH1cblxuICAvKiogUmVtb3ZlIGFueSBsaXN0ZW5lcnMgdGhhdCB3ZXJlIGFkZGVkIHdpdGggYWRkT25Db2xsaWRlU3RhcnQuICovXG4gIHB1YmxpYyByZW1vdmVBbGxDb2xsaWRlU3RhcnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jb2xsaXNpb25TdGFydExpc3RlbmVycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqIFJlbW92ZSBhbnkgbGlzdGVuZXJzIHRoYXQgd2VyZSBhZGRlZCB3aXRoIGFkZE9uQ29sbGlkZUFjdGl2ZS4gKi9cbiAgcHVibGljIHJlbW92ZUFsbENvbGxpZGVBY3RpdmVMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jb2xsaXNpb25BY3RpdmVMaXN0ZW5lcnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKiBSZW1vdmUgYW55IGxpc3RlbmVycyB0aGF0IHdlcmUgYWRkZWQgd2l0aCBhZGRPbkNvbGxpZGVFbmQuICovXG4gIHB1YmxpYyByZW1vdmVBbGxDb2xsaWRlRW5kTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuY29sbGlzaW9uRW5kTGlzdGVuZXJzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFueSBsaXN0ZW5lcnMgdGhhdCB3ZXJlIGFkZGVkIHdpdGggYWRkT25Db2xsaWRlU3RhcnQsIGFkZE9uQ29sbGlkZUFjdGl2ZSBvclxuICAgKiBhZGRPbkNvbGxpZGVFbmQuXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlQWxsQ29sbGlkZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENvbGxpZGVTdGFydExpc3RlbmVycygpO1xuICAgIHRoaXMucmVtb3ZlQWxsQ29sbGlkZUFjdGl2ZUxpc3RlbmVycygpO1xuICAgIHRoaXMucmVtb3ZlQWxsQ29sbGlkZUVuZExpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRPbkNvbGxpZGUobWFwOiBMaXN0ZW5lck1hcCwgY29uZmlnOiBJbnRlcm5hbENvbGxpZGVDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRleHQsIGNhbGxiYWNrLCBvYmplY3RBLCBvYmplY3RCIH0gPSBjb25maWc7XG4gICAgaWYgKCFjYWxsYmFjayB8fCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbG9nZ2VyLndhcm4oYE5vIHZhbGlkIGNhbGxiYWNrIHNwZWNpZmllZC4gUmVjZWl2ZWQ6ICR7Y2FsbGJhY2t9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9iamVjdHNBID0gQXJyYXkuaXNBcnJheShvYmplY3RBKSA/IG9iamVjdEEgOiBbb2JqZWN0QV07XG4gICAgY29uc3Qgb2JqZWN0c0IgPSBBcnJheS5pc0FycmF5KG9iamVjdEIpID8gb2JqZWN0QiA6IFtvYmplY3RCXTtcbiAgICBvYmplY3RzQS5mb3JFYWNoKChhKSA9PiB7XG4gICAgICBvYmplY3RzQi5mb3JFYWNoKChiKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkT25Db2xsaWRlT2JqZWN0VnNPYmplY3QobWFwLCBhLCBiLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlT25Db2xsaWRlKG1hcDogTGlzdGVuZXJNYXAsIGNvbmZpZzogSW50ZXJuYWxDb2xsaWRlUmVtb3ZlQ29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250ZXh0LCBjYWxsYmFjaywgb2JqZWN0QSwgb2JqZWN0QiB9ID0gY29uZmlnO1xuICAgIGNvbnN0IG9iamVjdHNBID0gQXJyYXkuaXNBcnJheShvYmplY3RBKSA/IG9iamVjdEEgOiBbb2JqZWN0QV07XG4gICAgY29uc3Qgb2JqZWN0c0IgPSBBcnJheS5pc0FycmF5KG9iamVjdEIpID8gb2JqZWN0QiA6IFtvYmplY3RCXTtcbiAgICBvYmplY3RzQS5mb3JFYWNoKChhKSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFja3MgPSBtYXAuZ2V0KGEpIHx8IFtdO1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2FsbGJhY2tzID0gY2FsbGJhY2tzLmZpbHRlcigoY2IpID0+IHtcbiAgICAgICAgLy8gSWYgYW55dGhpbmcgZG9lc24ndCBtYXRjaCBhIHByb3ZpZGVkIGNvbmZpZyB2YWx1ZSAoaS5lLiBhbnl0aGluZyBvdGhlciB0aGFuIHVuZGVmaW5lZCksXG4gICAgICAgIC8vIHdlIGNhbiBiYWlsIGFuZCBrZWVwIGxpc3RlbmVyLlxuICAgICAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkICYmIGNiLmNvbnRleHQgIT09IGNvbnRleHQpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiBjYi5jYWxsYmFjayAhPT0gY2FsbGJhY2spIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAob2JqZWN0QiAhPT0gdW5kZWZpbmVkICYmICFvYmplY3RzQi5pbmNsdWRlcyhjYi50YXJnZXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBpZiAocmVtYWluaW5nQ2FsbGJhY2tzLmxlbmd0aCA+IDApIG1hcC5zZXQoYSwgcmVtYWluaW5nQ2FsbGJhY2tzKTtcbiAgICAgIGVsc2UgbWFwLmRlbGV0ZShhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkT25Db2xsaWRlT2JqZWN0VnNPYmplY3QoXG4gICAgbWFwOiBMaXN0ZW5lck1hcCxcbiAgICBvYmplY3RBOiBDTyxcbiAgICBvYmplY3RCOiBDTyB8IHVuZGVmaW5lZCxcbiAgICBjYWxsYmFjazogQ29sbGlkZUNhbGxiYWNrPENPLCBDTz4sXG4gICAgY29udGV4dDogQ29sbGlkZUNvbnRleHQgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgLy8gQ2FuJ3QgZG8gYW55dGhpbmcgaWYgdGhlIGZpcnN0IG9iamVjdCBpcyBub3QgZGVmaW5lZCBvciBpbnZhbGlkLlxuICAgIGlmICghb2JqZWN0QSB8fCAhaXNDb2xsaWRpbmdPYmplY3Qob2JqZWN0QSkpIHtcbiAgICAgIHdhcm5JbnZhbGlkT2JqZWN0KG9iamVjdEEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZSBzZWNvbmQgb2JqZWN0IGNhbiBiZSB1bmRlZmluZWQgb3IgYSB2YWxpZCBib2R5LlxuICAgIGlmIChvYmplY3RCICYmICFpc0NvbGxpZGluZ09iamVjdChvYmplY3RCKSkge1xuICAgICAgd2FybkludmFsaWRPYmplY3Qob2JqZWN0QSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbGJhY2tzID0gbWFwLmdldChvYmplY3RBKSB8fCBbXTtcbiAgICBjYWxsYmFja3MucHVzaCh7IHRhcmdldDogb2JqZWN0QiwgY2FsbGJhY2ssIGNvbnRleHQgfSk7XG4gICAgbWFwLnNldChvYmplY3RBLCBjYWxsYmFja3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbGxpc2lvblN0YXJ0KGV2ZW50OiBNYXR0ZXJFdmVudHMuQ29sbGlzaW9uQWN0aXZlRXZlbnQpIHtcbiAgICB0aGlzLm9uQ29sbGlzaW9uRXZlbnQodGhpcy5jb2xsaXNpb25TdGFydExpc3RlbmVycywgQ09MTElTSU9OX1NUQVJULCBldmVudCk7XG4gIH1cblxuICBwcml2YXRlIG9uQ29sbGlzaW9uRW5kKGV2ZW50OiBNYXR0ZXJFdmVudHMuQ29sbGlzaW9uRW5kRXZlbnQpIHtcbiAgICB0aGlzLm9uQ29sbGlzaW9uRXZlbnQodGhpcy5jb2xsaXNpb25FbmRMaXN0ZW5lcnMsIENPTExJU0lPTl9FTkQsIGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Db2xsaXNpb25BY3RpdmUoZXZlbnQ6IE1hdHRlckV2ZW50cy5Db2xsaXNpb25BY3RpdmVFdmVudCkge1xuICAgIHRoaXMub25Db2xsaXNpb25FdmVudCh0aGlzLmNvbGxpc2lvbkFjdGl2ZUxpc3RlbmVycywgQ09MTElTSU9OX0FDVElWRSwgZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldXNhYmxlIGhhbmRsZXIgZm9yIGNvbGxpc2lvbnN0YXJ0LCBjb2xsaXNpb25lbmQsIGNvbGxpc2lvbmFjdGl2ZS5cbiAgICogKi9cbiAgcHJpdmF0ZSBvbkNvbGxpc2lvbkV2ZW50KFxuICAgIGxpc3RlbmVyTWFwOiBMaXN0ZW5lck1hcCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBldmVudDogTWF0dGVyQ29sbGlzaW9uRXZlbnRcbiAgKSB7XG4gICAgY29uc3QgcGFpcnMgPSBldmVudC5wYWlycyBhcyBFeHRlbmRlZE1hdHRlckNvbGxpc2lvbkRhdGFbXTtcbiAgICBjb25zdCBwYWlyRXZlbnROYW1lID0gXCJwYWlyXCIgKyBldmVudE5hbWU7XG4gICAgY29uc3QgZXZlbnREYXRhOiBQYXJ0aWFsPEV2ZW50RGF0YTxDTywgQ08+PiA9IHsgaXNSZXZlcnNlZDogZmFsc2UgfTtcbiAgICBjb25zdCBldmVudERhdGFSZXZlcnNlZDogUGFydGlhbDxFdmVudERhdGE8Q08sIENPPj4gPSB7IGlzUmV2ZXJzZWQ6IHRydWUgfTtcblxuICAgIHBhaXJzLm1hcCgocGFpciwgaSkgPT4ge1xuICAgICAgY29uc3QgeyBib2R5QSwgYm9keUIgfSA9IHBhaXI7XG4gICAgICBjb25zdCByb290Qm9keUEgPSBnZXRSb290Qm9keShib2R5QSk7XG4gICAgICBjb25zdCByb290Qm9keUIgPSBnZXRSb290Qm9keShib2R5Qik7XG4gICAgICBsZXQgZ2FtZU9iamVjdEE6IENPIHwgdW5kZWZpbmVkID0gcm9vdEJvZHlBLmdhbWVPYmplY3QgPz8gdW5kZWZpbmVkO1xuICAgICAgbGV0IGdhbWVPYmplY3RCOiBDTyB8IHVuZGVmaW5lZCA9IHJvb3RCb2R5Qi5nYW1lT2JqZWN0ID8/IHVuZGVmaW5lZDtcblxuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciB0aWxlcywgd2hlcmUgaXQncyBtb3JlIHVzZWZ1bCB0byBoYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBUaWxlIG9iamVjdCBub3RcbiAgICAgIC8vIHRoZSBUaWxlQm9keS4gVGhpcyBpcyBob3QgY29kZSwgc28gdXNlIGEgcHJvcGVydHkgY2hlY2sgaW5zdGVhZCBvZiBpbnN0YW5jZW9mLlxuICAgICAgaWYgKGdhbWVPYmplY3RBICYmIGdhbWVPYmplY3RBIGluc3RhbmNlb2YgTWF0dGVyLlRpbGVCb2R5KSB7XG4gICAgICAgIGdhbWVPYmplY3RBID0gZ2FtZU9iamVjdEEudGlsZTtcbiAgICAgIH1cbiAgICAgIGlmIChnYW1lT2JqZWN0QiAmJiBnYW1lT2JqZWN0QiBpbnN0YW5jZW9mIE1hdHRlci5UaWxlQm9keSkge1xuICAgICAgICBnYW1lT2JqZWN0QiA9IGdhbWVPYmplY3RCLnRpbGU7XG4gICAgICB9XG5cbiAgICAgIHBhaXJzW2ldLmdhbWVPYmplY3RBID0gZ2FtZU9iamVjdEEgPz8gdW5kZWZpbmVkO1xuICAgICAgcGFpcnNbaV0uZ2FtZU9iamVjdEIgPSBnYW1lT2JqZWN0QiA/PyB1bmRlZmluZWQ7XG5cbiAgICAgIGV2ZW50RGF0YS5ib2R5QSA9IGJvZHlBO1xuICAgICAgZXZlbnREYXRhLmJvZHlCID0gYm9keUI7XG4gICAgICBldmVudERhdGEuZ2FtZU9iamVjdEEgPSBnYW1lT2JqZWN0QSA/PyB1bmRlZmluZWQ7XG4gICAgICBldmVudERhdGEuZ2FtZU9iamVjdEIgPSBnYW1lT2JqZWN0QiA/PyB1bmRlZmluZWQ7XG4gICAgICBldmVudERhdGEucGFpciA9IHBhaXI7XG5cbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQocGFpckV2ZW50TmFtZSwgZXZlbnREYXRhKTtcblxuICAgICAgaWYgKGxpc3RlbmVyTWFwLnNpemUgPiAwKSB7XG4gICAgICAgIGV2ZW50RGF0YVJldmVyc2VkLmJvZHlCID0gYm9keUE7XG4gICAgICAgIGV2ZW50RGF0YVJldmVyc2VkLmJvZHlBID0gYm9keUI7XG4gICAgICAgIGV2ZW50RGF0YVJldmVyc2VkLmdhbWVPYmplY3RCID0gZ2FtZU9iamVjdEE7XG4gICAgICAgIGV2ZW50RGF0YVJldmVyc2VkLmdhbWVPYmplY3RBID0gZ2FtZU9iamVjdEI7XG4gICAgICAgIGV2ZW50RGF0YVJldmVyc2VkLnBhaXIgPSBwYWlyO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBldmVudERhdGEgYXMgRXZlbnREYXRhPENPLCBDTz47XG4gICAgICAgIGNvbnN0IGRhdGFSZXZlcnNlZCA9IGV2ZW50RGF0YVJldmVyc2VkIGFzIEV2ZW50RGF0YTxDTywgQ08+O1xuXG4gICAgICAgIHRoaXMuY2hlY2tQYWlyQW5kRW1pdChsaXN0ZW5lck1hcCwgYm9keUEsIGJvZHlCLCBnYW1lT2JqZWN0QiwgZGF0YSk7XG4gICAgICAgIHRoaXMuY2hlY2tQYWlyQW5kRW1pdChsaXN0ZW5lck1hcCwgYm9keUIsIGJvZHlBLCBnYW1lT2JqZWN0QSwgZGF0YVJldmVyc2VkKTtcblxuICAgICAgICBpZiAoZ2FtZU9iamVjdEEpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrUGFpckFuZEVtaXQobGlzdGVuZXJNYXAsIGdhbWVPYmplY3RBLCBib2R5QiwgZ2FtZU9iamVjdEIsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdhbWVPYmplY3RCKSB7XG4gICAgICAgICAgdGhpcy5jaGVja1BhaXJBbmRFbWl0KGxpc3RlbmVyTWFwLCBnYW1lT2JqZWN0QiwgYm9keUEsIGdhbWVPYmplY3RBLCBkYXRhUmV2ZXJzZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50cy5lbWl0KGV2ZW50TmFtZSwgZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1BhaXJBbmRFbWl0KFxuICAgIG1hcDogTGlzdGVuZXJNYXAsXG4gICAgb2JqZWN0QTogQ08sXG4gICAgYm9keUI6IE1hdHRlckpTLkJvZHksXG4gICAgZ2FtZU9iamVjdEI6IENPIHwgdW5kZWZpbmVkLFxuICAgIGV2ZW50RGF0YTogRXZlbnREYXRhPENPLCBDTz5cbiAgKSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gbWFwLmdldChvYmplY3RBKTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICBjYWxsYmFja3MuZm9yRWFjaCgoeyB0YXJnZXQsIGNhbGxiYWNrLCBjb250ZXh0IH0pID0+IHtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgdGFyZ2V0ID09PSBib2R5QiB8fCB0YXJnZXQgPT09IGdhbWVPYmplY3RCKSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbChjb250ZXh0LCBldmVudERhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdWJzY3JpYmVNYXR0ZXJFdmVudHMoKSB7XG4gICAgY29uc3QgbWF0dGVyID0gdGhpcy5zY2VuZS5tYXR0ZXI7XG4gICAgaWYgKCFtYXR0ZXIgfHwgIW1hdHRlci53b3JsZCkge1xuICAgICAgbG9nZ2VyLndhcm4oXCJQbHVnaW4gcmVxdWlyZXMgbWF0dGVyIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbWF0dGVyLndvcmxkLm9uKENPTExJU0lPTl9TVEFSVCwgdGhpcy5vbkNvbGxpc2lvblN0YXJ0LCB0aGlzKTtcbiAgICBtYXR0ZXIud29ybGQub24oQ09MTElTSU9OX0FDVElWRSwgdGhpcy5vbkNvbGxpc2lvbkFjdGl2ZSwgdGhpcyk7XG4gICAgbWF0dGVyLndvcmxkLm9uKENPTExJU0lPTl9FTkQsIHRoaXMub25Db2xsaXNpb25FbmQsIHRoaXMpO1xuICB9XG5cbiAgdW5zdWJzY3JpYmVNYXR0ZXJFdmVudHMoKSB7XG4gICAgLy8gRG9uJ3QgdW5zdWIgaWYgbWF0dGVyIG5leHQgZXhpc3Rpbmcgb3IgaWYgdGhlIGdhbWUgaXMgZGVzdHJveWVkIChzaW5jZSB0aGUgbWF0dGVyIHdvcmxkIHdpbGxcbiAgICAvLyBiZSBhbHJlYWR5IGdvbmUpXG4gICAgY29uc3QgbWF0dGVyID0gdGhpcy5zY2VuZS5tYXR0ZXI7XG4gICAgaWYgKCFtYXR0ZXIgfHwgIW1hdHRlci53b3JsZCkgcmV0dXJuO1xuICAgIG1hdHRlci53b3JsZC5vZmYoQ09MTElTSU9OX1NUQVJULCB0aGlzLm9uQ29sbGlzaW9uU3RhcnQsIHRoaXMpO1xuICAgIG1hdHRlci53b3JsZC5vZmYoQ09MTElTSU9OX0FDVElWRSwgdGhpcy5vbkNvbGxpc2lvbkFjdGl2ZSwgdGhpcyk7XG4gICAgbWF0dGVyLndvcmxkLm9mZihDT0xMSVNJT05fRU5ELCB0aGlzLm9uQ29sbGlzaW9uRW5kLCB0aGlzKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIC8vIElmIHJlc3RhcnRpbmcsIHVuc3Vic2NyaWJlIGJlZm9yZSByZXN1YnNjcmliaW5nIHRvIGVuc3VyZSBvbmx5IG9uZSBsaXN0ZW5lciBpcyBhZGRlZFxuICAgIHRoaXMuc2NlbmUuZXZlbnRzLm9mZihTSFVURE9XTiwgdGhpcy5zaHV0ZG93biwgdGhpcyk7XG4gICAgdGhpcy5zY2VuZS5ldmVudHMub24oU0hVVERPV04sIHRoaXMuc2h1dGRvd24sIHRoaXMpO1xuICAgIHRoaXMuc3Vic2NyaWJlTWF0dGVyRXZlbnRzKCk7XG4gIH1cblxuICBzaHV0ZG93bigpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENvbGxpZGVMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlTWF0dGVyRXZlbnRzKCk7XG4gICAgLy8gUmVzdWJzY3JpYmUgdG8gc3RhcnQgc28gdGhhdCB0aGUgcGx1Z2luIGlzIHN0YXJ0ZWQgYWdhaW4gYWZ0ZXIgTWF0dGVyXG4gICAgdGhpcy5zY2VuZS5ldmVudHMub25jZShTVEFSVCwgdGhpcy5zdGFydCwgdGhpcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUuZXZlbnRzLm9mZihERVNUUk9ZLCB0aGlzLmRlc3Ryb3ksIHRoaXMpO1xuICAgIHRoaXMuc2NlbmUuZXZlbnRzLm9mZihTVEFSVCwgdGhpcy5zdGFydCwgdGhpcyk7XG4gICAgdGhpcy5zY2VuZS5ldmVudHMub2ZmKFNIVVRET1dOLCB0aGlzLnNodXRkb3duLCB0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUFsbENvbGxpZGVMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlTWF0dGVyRXZlbnRzKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./phaser-matter-collision-plugin.ts\n'
              );
            },
            "./utils.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getRootBody": () => (/* binding */ getRootBody),\n/* harmony export */   "warnInvalidObject": () => (/* binding */ warnInvalidObject)\n/* harmony export */ });\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./logger.ts");\n\r\n/**\r\n * Get the root body of a compound Matter body.\r\n */\r\nfunction getRootBody(body) {\r\n    while (body.parent !== body)\r\n        body = body.parent;\r\n    return body;\r\n}\r\n/**\r\n * @param obj\r\n */\r\nfunction warnInvalidObject(obj) {\r\n    _logger__WEBPACK_IMPORTED_MODULE_0__.default.warn(`Expected a Matter body, a Tile, a GameObject, a Sprite, an Image, a TileBody, or an object with a body property, but instead, received: ${obj}`);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGFzZXJNYXR0ZXJDb2xsaXNpb25QbHVnaW4vLi91dGlscy50cz84ODEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QjtBQUU5Qjs7R0FFRztBQUNJLFNBQVMsV0FBVyxDQUFDLElBQXVCO0lBQ2pELE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJO1FBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDaEQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQ7O0dBRUc7QUFDSSxTQUFTLGlCQUFpQixDQUFDLEdBQVE7SUFDeEMsaURBQVcsQ0FDVCwySUFBMkksR0FBRyxFQUFFLENBQ2pKLENBQUM7QUFDSixDQUFDIiwiZmlsZSI6Ii4vdXRpbHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nZ2VyIGZyb20gXCIuL2xvZ2dlclwiO1xuXG4vKipcbiAqIEdldCB0aGUgcm9vdCBib2R5IG9mIGEgY29tcG91bmQgTWF0dGVyIGJvZHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290Qm9keShib2R5OiBNYXR0ZXJKUy5Cb2R5VHlwZSkge1xuICB3aGlsZSAoYm9keS5wYXJlbnQgIT09IGJvZHkpIGJvZHkgPSBib2R5LnBhcmVudDtcbiAgcmV0dXJuIGJvZHk7XG59XG5cbi8qKlxuICogQHBhcmFtIG9ialxuICovXG5leHBvcnQgZnVuY3Rpb24gd2FybkludmFsaWRPYmplY3Qob2JqOiBhbnkpIHtcbiAgbG9nZ2VyLndhcm4oXG4gICAgYEV4cGVjdGVkIGEgTWF0dGVyIGJvZHksIGEgVGlsZSwgYSBHYW1lT2JqZWN0LCBhIFNwcml0ZSwgYW4gSW1hZ2UsIGEgVGlsZUJvZHksIG9yIGFuIG9iamVjdCB3aXRoIGEgYm9keSBwcm9wZXJ0eSwgYnV0IGluc3RlYWQsIHJlY2VpdmVkOiAke29ian1gXG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils.ts\n'
              );
            },
            "./valid-collision-object.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "isMatterBody": () => (/* binding */ isMatterBody),\n/* harmony export */   "isCollidingObject": () => (/* binding */ isCollidingObject)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "phaser");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar Tile = phaser__WEBPACK_IMPORTED_MODULE_0__.Tilemaps.Tile;\r\n/** Duck type to check if the given object is a Matter body (because there isn\'t a prototype). */\r\nfunction isMatterBody(obj) {\r\n    return (obj.hasOwnProperty("parts") && obj.hasOwnProperty("slop") && obj.hasOwnProperty("gameObject"));\r\n}\r\n/**\r\n * Check if object is an acceptable physical object for this plugin - a Matter Body, a tile, or an\r\n * object with a body property.\r\n */\r\nfunction isCollidingObject(obj) {\r\n    // GameObjects, images, sprites and tile bodies should all have a body property.\r\n    return isMatterBody(obj) || obj.body || obj instanceof Tile;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGFzZXJNYXR0ZXJDb2xsaXNpb25QbHVnaW4vLi92YWxpZC1jb2xsaXNpb24tb2JqZWN0LnRzP2QxM2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUV6QyxJQUFPLElBQUksR0FBRyxpREFBYSxDQUFDO0FBYzVCLGlHQUFpRztBQUMxRixTQUFTLFlBQVksQ0FBQyxHQUFRO0lBQ25DLE9BQU8sQ0FDTCxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FDOUYsQ0FBQztBQUNKLENBQUM7QUFFRDs7O0dBR0c7QUFDSSxTQUFTLGlCQUFpQixDQUFDLEdBQVE7SUFDeEMsZ0ZBQWdGO0lBQ2hGLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxZQUFZLElBQUksQ0FBQztBQUM5RCxDQUFDIiwiZmlsZSI6Ii4vdmFsaWQtY29sbGlzaW9uLW9iamVjdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbGVtYXBzLCBUeXBlcyB9IGZyb20gXCJwaGFzZXJcIjtcblxuaW1wb3J0IFRpbGUgPSBUaWxlbWFwcy5UaWxlO1xuaW1wb3J0IE1hdHRlckJvZHkgPSBUeXBlcy5QaHlzaWNzLk1hdHRlci5NYXR0ZXJCb2R5O1xuXG4vKiogQSB2YWxpZCBwaHlzaWNzLWVuYWJsZWQgZ2FtZSBvYmplY3QsIG9yIGp1c3QgYW4gb2JqZWN0IHRoYXQgaGFzIFwiYm9keVwiIHByb3BlcnR5ICovXG5leHBvcnQgdHlwZSBPYmplY3RXaXRoQm9keSA9IHtcbiAgYm9keTogTWF0dGVySlMuQm9keVR5cGU7XG59O1xuXG4vKipcbiAqIEEgdW5pb24gb2YgYWxsIHRoZSB0eXBlcyBvZiBwaHlzaWNzIG9iamVjdHMgd2UgY291bGQgaGF2ZSBpbiB0aGUgc2ltdWxhdGlvbiAtIGZyb20gcmF3IE1hdHRlci5qc1xuICogYm9kaWVzIHRvIHRpbGVzIGFuZCBwaHlzaWNzLWVuYWJsZWQgUGhhc2VyIEdhbWVPYmplY3RzLlxuICovXG5leHBvcnQgdHlwZSBDb2xsaWRpbmdPYmplY3QgPSBNYXR0ZXJCb2R5IHwgTWF0dGVySlMuQm9keVR5cGUgfCBUaWxlIHwgT2JqZWN0V2l0aEJvZHk7XG5cbi8qKiBEdWNrIHR5cGUgdG8gY2hlY2sgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhIE1hdHRlciBib2R5IChiZWNhdXNlIHRoZXJlIGlzbid0IGEgcHJvdG90eXBlKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01hdHRlckJvZHkob2JqOiBhbnkpOiBvYmogaXMgTWF0dGVyQm9keSB7XG4gIHJldHVybiAoXG4gICAgb2JqLmhhc093blByb3BlcnR5KFwicGFydHNcIikgJiYgb2JqLmhhc093blByb3BlcnR5KFwic2xvcFwiKSAmJiBvYmouaGFzT3duUHJvcGVydHkoXCJnYW1lT2JqZWN0XCIpXG4gICk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgb2JqZWN0IGlzIGFuIGFjY2VwdGFibGUgcGh5c2ljYWwgb2JqZWN0IGZvciB0aGlzIHBsdWdpbiAtIGEgTWF0dGVyIEJvZHksIGEgdGlsZSwgb3IgYW5cbiAqIG9iamVjdCB3aXRoIGEgYm9keSBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ29sbGlkaW5nT2JqZWN0KG9iajogYW55KTogb2JqIGlzIENvbGxpZGluZ09iamVjdCB7XG4gIC8vIEdhbWVPYmplY3RzLCBpbWFnZXMsIHNwcml0ZXMgYW5kIHRpbGUgYm9kaWVzIHNob3VsZCBhbGwgaGF2ZSBhIGJvZHkgcHJvcGVydHkuXG4gIHJldHVybiBpc01hdHRlckJvZHkob2JqKSB8fCBvYmouYm9keSB8fCBvYmogaW5zdGFuY2VvZiBUaWxlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./valid-collision-object.ts\n'
              );
            },
            phaser: (t) => {
              t.exports = __WEBPACK_EXTERNAL_MODULE_phaser__;
            },
          },
          __webpack_module_cache__ = {};
        function __webpack_require__(t) {
          var e = __webpack_module_cache__[t];
          if (void 0 !== e) return e.exports;
          var s = (__webpack_module_cache__[t] = { exports: {} });
          return (
            __webpack_modules__[t](s, s.exports, __webpack_require__), s.exports
          );
        }
        (__webpack_require__.n = (t) => {
          var e = t && t.__esModule ? () => t.default : () => t;
          return __webpack_require__.d(e, { a: e }), e;
        }),
          (__webpack_require__.d = (t, e) => {
            for (var s in e)
              __webpack_require__.o(e, s) &&
                !__webpack_require__.o(t, s) &&
                Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
          }),
          (__webpack_require__.o = (t, e) =>
            Object.prototype.hasOwnProperty.call(t, e)),
          (__webpack_require__.r = (t) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "__esModule", { value: !0 });
          });
        var __webpack_exports__ = __webpack_require__("./index.ts");
        return __webpack_exports__;
      })();
    }),
    (module.exports = factory(requirePhaser()));
})(phaserMatterCollision);
var phaserMatterCollisionExports = phaserMatterCollision.exports;
const PhaserMatterCollisionPlugin = getDefaultExportFromCjs(
  phaserMatterCollisionExports
);
class MatterGravityFixPlugin extends Phaser.Plugins.ScenePlugin {
  constructor(t, e) {
    super(t, e);
  }
  boot() {
    const t = Phaser.Physics.Matter.Matter;
    this.applyGravityFix(t);
  }
  applyGravityFix(t) {
    t.Engine._bodiesApplyGravity = function (t, e) {
      var s = void 0 !== e.scale ? e.scale : 0.001,
        i = t.length;
      if ((0 !== e.x || 0 !== e.y) && 0 !== s)
        for (var n = 0; n < i; n++) {
          var o = t[n];
          o.ignoreGravity ||
            o.isStatic ||
            o.isSleeping ||
            ((o.force.y += o.mass * e.y * s), (o.force.x += o.mass * e.x * s));
        }
    };
  }
}
const config = {
  width: 600,
  height: 600,
  scale: { mode: Phaser$1.Scale.FIT, autoCenter: Phaser$1.Scale.CENTER_BOTH },
  autoRound: !1,
  parent: "game-container",
  physics: { default: "matter", matter: { debug: !1 } },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: "matterCollision",
        mapping: "matterCollision",
      },
      {
        key: "MatterGravityFixPlugin",
        plugin: MatterGravityFixPlugin,
        mapping: "matterGravityFix",
        start: !0,
      },
    ],
  },
  scene: [Bootloader, Splash, Transition, Game, Outro],
};
new Phaser$1.Game(config);
