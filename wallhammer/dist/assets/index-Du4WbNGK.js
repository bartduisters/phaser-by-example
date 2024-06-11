import { P as t } from "./phaser-CmFXOKba.js";
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
class e extends Phaser.Scene {
  constructor() {
    super({ key: "bootloader" });
  }
  preload() {
    this.createBars(),
      this.load.on(
        "progress",
        function (t) {
          this.progressBar.clear(),
            this.progressBar.fillStyle(15767863, 1),
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
      ),
      Array(5)
        .fill(0)
        .forEach((t, e) => {
          this.load.audio(`music${e}`, `assets/sounds/music${e}.mp3`);
        }),
      this.load.image("pello", "assets/images/pello.png"),
      this.load.image("landscape", "assets/images/landscape.png"),
      this.load.audio("build", "assets/sounds/build.mp3"),
      this.load.audio("coin", "assets/sounds/coin.mp3"),
      this.load.audio("death", "assets/sounds/death.mp3"),
      this.load.audio("jump", "assets/sounds/jump.mp3"),
      this.load.audio("kill", "assets/sounds/kill.mp3"),
      this.load.audio("land", "assets/sounds/land.mp3"),
      this.load.audio("lunchbox", "assets/sounds/lunchbox.mp3"),
      this.load.audio("prize", "assets/sounds/prize.mp3"),
      this.load.audio("stone_fail", "assets/sounds/stone_fail.mp3"),
      this.load.audio("stone", "assets/sounds/stone.mp3"),
      this.load.audio("foedeath", "assets/sounds/foedeath.mp3"),
      this.load.audio("stage", "assets/sounds/stage.mp3"),
      this.load.audio("splash", "assets/sounds/splash.mp3"),
      Array(2)
        .fill(0)
        .forEach((t, e) => {
          this.load.image(`brick${e}`, `assets/images/brick${e}.png`);
        }),
      Array(5)
        .fill(0)
        .forEach((t, e) => {
          this.load.image(
            `platform${e + 2}`,
            `assets/images/platform${e + 2}.png`
          );
        }),
      this.load.bitmapFont(
        "pixelFont",
        "assets/fonts/mario.png",
        "assets/fonts/mario.xml"
      ),
      this.load.spritesheet("walt", "assets/images/walt.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      Array(5)
        .fill(0)
        .forEach((t, e) => {
          this.load.tilemapTiledJSON(`scene${e}`, `assets/maps/scene${e}.json`);
        }),
      this.load.image("softbricks", "assets/maps/softbricks.png"),
      this.load.image("bricks", "assets/maps/bricks.png"),
      this.load.image("background", "assets/maps/background.png"),
      this.load.image("chain", "assets/images/chain.png"),
      this.load.spritesheet("bat", "assets/images/bat.png", {
        frameWidth: 32,
        frameHeight: 32,
      }),
      this.load.spritesheet("zombie", "assets/images/zombie.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("coin", "assets/images/coin.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("lunchbox", "assets/images/lunchbox.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("hammer", "assets/images/hammer.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("speed", "assets/images/speed.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("boots", "assets/images/boots.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("star", "assets/images/star.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.bitmapFont(
        "hammerfont",
        "assets/fonts/hammer.png",
        "assets/fonts/hammer.xml"
      ),
      this.registry.set("score", 0),
      this.registry.set("coins", 0);
  }
  createBars() {
    (this.loadBar = this.add.graphics()),
      this.loadBar.fillStyle(13264642, 1),
      this.loadBar.fillRect(
        this.cameras.main.width / 4 - 2,
        this.cameras.main.height / 2 - 18,
        this.cameras.main.width / 2 + 4,
        20
      ),
      (this.progressBar = this.add.graphics());
  }
}
class s extends Phaser.Scene {
  constructor() {
    super({ key: "outro" });
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      (this.introLayer = this.add.layer()),
      (this.splashLayer = this.add.layer()),
      (this.text = [
        "You did it!!",
        "Thanks to your building skills",
        "and your mighty hammer,",
        "you saved the earth.",
        "Made in 3 days for Minijam",
        "by Pello",
        "",
        "Press SPACE",
      ]),
      this.showHistory(),
      this.input.keyboard.on("keydown-SPACE", this.startSplash, this),
      this.input.keyboard.on("keydown-ENTER", this.startSplash, this);
  }
  startSplash() {
    this.scene.start("splash");
  }
  showHistory() {
    this.text.forEach((t, e) => {
      this.time.delayedCall(
        2e3 * (e + 1),
        () => this.showLine(t, 70 * (e + 1)),
        null,
        this
      );
    });
  }
  showLine(t, e) {
    let s = this.introLayer.add(
      this.add
        .bitmapText(this.center_width, e, "pixelFont", t, 25)
        .setOrigin(0.5)
        .setAlpha(0)
    );
    this.tweens.add({ targets: s, duration: 2e3, alpha: 1 });
  }
}
Phaser.GameObjects.Rectangle, Phaser.GameObjects.Rectangle;
class i extends Phaser.GameObjects.Rectangle {
  constructor(t, e, s, i, a, h = 16771755, r = !1) {
    super(
      t,
      e,
      s,
      (i = i || Phaser.Math.Between(10, 25)),
      (a = a || Phaser.Math.Between(10, 25)),
      h
    ),
      t.add.existing(this),
      t.physics.add.existing(this),
      this.body.setAllowGravity(!1),
      this.body.setVelocityX(Phaser.Math.Between(-20, 20)),
      this.init();
  }
  init() {
    this.scene.tweens.add({
      targets: this,
      duration: 800,
      scale: { from: 1, to: 0 },
      onComplete: () => {
        this.destroy();
      },
    });
  }
}
class a extends Phaser.GameObjects.Rectangle {
  constructor(t, e, s, i = 11550208, a, h, r = !1) {
    super(
      t,
      e,
      s + 5,
      (a = a || Phaser.Math.Between(15, 30)),
      (h = h || Phaser.Math.Between(15, 30)),
      i
    ),
      t.add.existing(this),
      t.physics.add.existing(this),
      this.body.setAllowGravity(!0),
      this.body.setVelocityX(Phaser.Math.Between(-50, 50)),
      this.body.setVelocityY(a * h);
  }
}
class h extends Phaser.Scene {
  constructor() {
    super({ key: "splash" });
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.cameras.main.setBackgroundColor(0),
      this.time.delayedCall(1e3, () => this.showInstructions(), null, this),
      this.input.keyboard.on("keydown-SPACE", () => this.startGame(), this),
      this.input.keyboard.on("keydown-ENTER", () => this.startGame(), this),
      this.playMusic(),
      this.showTitle(),
      this.playAudioRandomly("stone");
  }
  startGame() {
    this.theme && this.theme.stop(),
      this.scene.start("transition", {
        next: "game",
        name: "STAGE",
        number: 0,
        time: 30,
      });
  }
  showTitle() {
    "WALL".split("").forEach((t, e) => {
      this.time.delayedCall(
        200 * (e + 1),
        () => {
          this.playAudioRandomly("stone_fail"),
            Phaser.Math.Between(0, 5) > 2 && this.playAudioRandomly("stone");
          let s = this.add
            .bitmapText(130 * (e + 1) + 140, 200, "hammerfont", t, 170)
            .setTint(13264642)
            .setOrigin(0.5)
            .setDropShadow(4, 6, 15767863, 0.9);
          Array(Phaser.Math.Between(4, 6))
            .fill(0)
            .forEach((t) => new a(this, s.x, s.y, 13264642));
        },
        null,
        this
      );
    }),
      "HAMMER".split("").forEach((t, e) => {
        this.time.delayedCall(
          200 * (e + 1) + 800,
          () => {
            this.playAudioRandomly("stone_fail"),
              Phaser.Math.Between(0, 5) > 2 && this.playAudioRandomly("stone");
            let s = this.add
              .bitmapText(130 * (e + 1), 350, "hammerfont", t, 170)
              .setTint(13264642)
              .setOrigin(0.5)
              .setDropShadow(4, 6, 15767863, 0.9);
            Array(Phaser.Math.Between(4, 6))
              .fill(0)
              .forEach((t) => new a(this, s.x, s.y, 13264642));
          },
          null,
          this
        );
      });
  }
  playAudioRandomly(t) {
    const e = Phaser.Math.Between(0.8, 1);
    this.sound.add(t).play({ volume: e, rate: 1 });
  }
  playMusic(t = "splash") {
    (this.theme = this.sound.add(t)),
      this.theme.stop(),
      this.theme.play({
        mute: !1,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      });
  }
  showInstructions() {
    this.add
      .bitmapText(this.center_width, 450, "pixelFont", "WASD/Arrows: move", 30)
      .setOrigin(0.5),
      this.add
        .bitmapText(
          this.center_width,
          500,
          "pixelFont",
          "S/DOWN: BUILD WALL",
          30
        )
        .setOrigin(0.5),
      this.add
        .bitmapText(this.center_width, 550, "pixelFont", "SPACE: HAMMER", 30)
        .setOrigin(0.5),
      this.add
        .sprite(this.center_width - 120, 620, "pello")
        .setOrigin(0.5)
        .setScale(0.3),
      this.add
        .bitmapText(this.center_width + 40, 620, "pixelFont", "By PELLO", 15)
        .setOrigin(0.5),
      (this.space = this.add
        .bitmapText(
          this.center_width,
          670,
          "pixelFont",
          "Press SPACE to start",
          30
        )
        .setOrigin(0.5)),
      this.tweens.add({
        targets: this.space,
        duration: 300,
        alpha: { from: 0, to: 1 },
        repeat: -1,
        yoyo: !0,
      });
  }
}
class r extends Phaser.Scene {
  constructor() {
    super({ key: "transition" });
  }
  init(t) {
    (this.name = t.name), (this.number = t.number), (this.next = t.next);
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      5 === this.number && this.loadOutro(),
      this.addScore(),
      this.add.sprite(this.center_width, this.center_height - 170, "walt"),
      this.add
        .bitmapText(
          this.center_width,
          this.center_height - 20,
          "pixelFont",
          ["TUTORIAL", "STAGE 1", "STAGE 2", "STAGE 3", "STAGE 4"][this.number],
          40
        )
        .setOrigin(0.5),
      this.add
        .bitmapText(
          this.center_width,
          this.center_height + 20,
          "pixelFont",
          "Ready?",
          30
        )
        .setOrigin(0.5),
      this.input.keyboard.on("keydown-ENTER", () => this.loadNext(), this),
      this.input.keyboard.on("keydown-SPACE", () => this.loadNext(), this),
      this.time.delayedCall(
        3e3,
        () => {
          this.loadNext();
        },
        null,
        this
      );
  }
  loadNext() {
    this.scene.start("game", { name: this.name, number: this.number });
  }
  loadOutro() {
    this.scene.start("outro", { name: this.name, number: this.number });
  }
  addScore() {
    (this.scoreCoins = this.add
      .bitmapText(
        this.center_width + 32,
        this.center_height - 100,
        "pixelFont",
        "x" + this.registry.get("coins"),
        30
      )
      .setDropShadow(0, 4, 2236962, 0.9)
      .setOrigin(0.5)
      .setScrollFactor(0)),
      (this.scoreCoinsLogo = this.add
        .sprite(this.center_width - 32, this.center_height - 100, "coin")
        .setScale(0.7)
        .setOrigin(0.5)
        .setScrollFactor(0)),
      this.anims.create({
        key: "coinscore",
        frames: this.anims.generateFrameNumbers("coin", { start: 0, end: 7 }),
        frameRate: 8,
      }),
      this.scoreCoinsLogo.play({ key: "coinscore", repeat: -1 });
  }
}
class o extends Phaser.GameObjects.Rectangle {
  constructor(t, e, s, i = 32, a = 32, h = "") {
    super(t, e, s, i, a, 16777215),
      (this.type = h),
      (this.y = s),
      t.add.existing(this),
      t.physics.add.existing(this),
      this.body.setAllowGravity(!1),
      this.scene.tweens.add({
        targets: this,
        duration: 300,
        scale: { from: 1, to: 0 },
        onComplete: () => {
          this.destroy();
        },
      });
  }
}
class n extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i = "brick0") {
    super(t, e, s, i),
      (this.name = i),
      this.scene.add.existing(this),
      this.scene.physics.add.existing(this),
      (this.body.immovable = !0),
      (this.body.moves = !1),
      this.scene.tweens.add({
        targets: this,
        duration: 50,
        x: { from: this.x, to: this.x + Phaser.Math.Between(-7, 7) },
        y: { from: this.y, to: this.y + Phaser.Math.Between(-7, 7) },
        repeat: 5,
      });
  }
}
class d extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i = 10) {
    super(t, e, s, "walt"),
      this.setOrigin(0.5),
      this.scene.add.existing(this),
      this.scene.physics.add.existing(this),
      (this.cursor = this.scene.input.keyboard.createCursorKeys()),
      (this.spaceBar = this.scene.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.SPACE
      )),
      (this.down = this.scene.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.DOWN
      )),
      (this.right = !0),
      this.body.setGravityY(100),
      this.body.setSize(48, 60),
      this.init(),
      (this.jumping = !1),
      (this.building = !1),
      (this.falling = !1),
      (this.mjolnir = !1),
      (this.walkVelocity = 200),
      (this.jumpVelocity = -400),
      (this.invincible = !1),
      (this.health = i),
      (this.dead = !1),
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
  init() {
    this.scene.anims.create({
      key: "startidle",
      frames: this.scene.anims.generateFrameNumbers("walt", {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    }),
      this.scene.anims.create({
        key: "playeridle",
        frames: this.scene.anims.generateFrameNumbers("walt", {
          start: 2,
          end: 3,
        }),
        frameRate: 3,
        repeat: -1,
      }),
      this.scene.anims.create({
        key: "playerwalk",
        frames: this.scene.anims.generateFrameNumbers("walt", {
          start: 4,
          end: 6,
        }),
        frameRate: 10,
        repeat: -1,
      }),
      this.scene.anims.create({
        key: "playerjump",
        frames: this.scene.anims.generateFrameNumbers("walt", {
          start: 4,
          end: 4,
        }),
        frameRate: 1,
      }),
      this.scene.anims.create({
        key: "playerhammer",
        frames: this.scene.anims.generateFrameNumbers("walt", {
          start: 7,
          end: 8,
        }),
        frameRate: 10,
      }),
      this.scene.anims.create({
        key: "playerbuild",
        frames: this.scene.anims.generateFrameNumbers("walt", {
          start: 9,
          end: 10,
        }),
        frameRate: 10,
        repeat: 2,
      }),
      this.scene.anims.create({
        key: "playerdead",
        frames: this.scene.anims.generateFrameNumbers("walt", {
          start: 11,
          end: 16,
        }),
        frameRate: 5,
      }),
      this.anims.play("startidle", !0),
      this.on("animationcomplete", this.animationComplete, this);
  }
  update() {
    this.dead ||
      (this.jumping &&
        this.body.velocity.y >= 0 &&
        (this.body.setGravityY(700), (this.falling = !0)),
      (Phaser.Input.Keyboard.JustDown(this.cursor.up) ||
        Phaser.Input.Keyboard.JustDown(this.W)) &&
      this.body.blocked.down
        ? ((this.building = !1),
          this.body.setVelocityY(this.jumpVelocity),
          this.body.setGravityY(400),
          this.anims.play("playerjump", !0),
          this.scene.playAudio("jump"),
          (this.jumping = !0),
          this.jumpSmoke())
        : this.cursor.right.isDown || this.D.isDown
          ? ((this.building = !1),
            this.body.blocked.down && this.anims.play("playerwalk", !0),
            (this.right = !0),
            (this.flipX = this.body.velocity.x < 0),
            this.body.setVelocityX(this.walkVelocity))
          : this.cursor.left.isDown || this.A.isDown
            ? ((this.building = !1),
              this.body.blocked.down && this.anims.play("playerwalk", !0),
              (this.right = !1),
              (this.flipX = !0),
              this.body.setVelocityX(-this.walkVelocity))
            : (this.body.blocked.down &&
                (this.jumping &&
                  (this.scene.playAudio("land"), this.landSmoke()),
                (this.jumping = !1),
                (this.falling = !1),
                this.building || this.anims.play("playeridle", !0)),
              this.body.setVelocityX(0)),
      Phaser.Input.Keyboard.JustDown(this.spaceBar) && this.hammerBlow(),
      (Phaser.Input.Keyboard.JustDown(this.cursor.down) ||
        Phaser.Input.Keyboard.JustDown(this.S)) &&
        this.buildBlock());
  }
  landSmoke() {
    this.jumpSmoke(20);
  }
  jumpSmoke(t = 10, e) {
    Array(Phaser.Math.Between(3, 6))
      .fill(0)
      .forEach((s) => {
        const a = e || Phaser.Math.Between(-1, 1) > 0 ? 1 : -1;
        (e = e || Phaser.Math.Between(0, 20)),
          new i(this.scene, this.x + a * e, this.y + t);
      });
  }
  buildBlock() {
    (this.building = !0),
      this.anims.play("playerbuild", !0),
      this.scene.playAudio("build");
    const t = this.right ? 64 : -64,
      e = -400 === this.jumpVelocity ? 0 : -128;
    this.buildSmoke(32, t),
      this.scene.bricks.add(new n(this.scene, this.x + t, this.y + e));
  }
  buildSmoke(t = 10, e) {
    Array(Phaser.Math.Between(8, 14))
      .fill(0)
      .forEach((s) => {
        const a = Phaser.Math.Between(-20, 20);
        new i(this.scene, this.x + (e + a), this.y + t);
      });
  }
  hammerBlow() {
    (this.building = !0), this.anims.play("playerhammer", !0);
    const t = this.right ? 32 : -32,
      e = this.mjolnir ? 128 : 32;
    this.scene.blows.add(new o(this.scene, this.x + t, this.y, e, e));
  }
  turn() {
    this.right = !this.right;
  }
  animationComplete(t, e) {
    "playerground" === t.key && this.anims.play("playeridle", !0),
      ("playerhammer" !== t.key && "playerbuild" !== t.key) ||
        ((this.building = !1),
        this.anims.play(this.jumping ? "playerjump" : "playeridle", !0));
  }
  hit() {
    this.health--,
      this.anims.play("playerdead", !0),
      (this.body.enable = !1),
      0 === this.health && this.die();
  }
  die() {
    (this.dead = !0),
      this.anims.play("playerdead", !0),
      (this.body.immovable = !0),
      (this.body.moves = !1),
      this.scene.restartScene();
  }
  applyPrize(t) {
    switch (t) {
      case "speed":
        (this.walkVelocity = 330), this.flashPlayer();
        break;
      case "hammer":
        (this.mjolnir = !0), this.flashPlayer();
        break;
      case "boots":
        (this.jumpVelocity = -600), this.flashPlayer();
        break;
      case "coin":
        this.scene.updateCoins();
        break;
      case "star":
        (this.invincible = !0),
          this.scene.tweens.add({
            targets: this,
            duration: 300,
            alpha: { from: 0.7, to: 1 },
            repeat: -1,
          });
    }
  }
  flashPlayer() {
    this.scene.tweens.add({
      targets: this,
      duration: 50,
      scale: { from: 1.2, to: 1 },
      repeat: 10,
    });
  }
}
class l extends Phaser.Physics.Arcade.Sprite {
  constructor(t, e, s, i = "right") {
    super(t, e, s, "bat"),
      (this.name = "bat"),
      this.scene.physics.add.existing(this),
      this.scene.physics.world.enable(this),
      this.body.setAllowGravity(!1),
      this.scene.add.existing(this),
      (this.direction = "right" === i ? 1 : -1),
      this.init();
  }
  init() {
    this.scene.anims.create({
      key: this.name,
      frames: this.scene.anims.generateFrameNumbers(this.name, {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    }),
      this.scene.anims.create({
        key: this.name + "death",
        frames: this.scene.anims.generateFrameNumbers(this.name, {
          start: 2,
          end: 5,
        }),
        frameRate: 5,
      }),
      this.anims.play(this.name, !0),
      this.body.setVelocityX(150 * this.direction),
      (this.flipX = this.direction > 0),
      this.on("animationcomplete", this.animationComplete, this);
  }
  update() {}
  turn() {
    (this.direction = -this.direction),
      (this.flipX = this.direction > 0),
      this.body.setVelocityX(150 * this.direction);
  }
  death() {
    (this.dead = !0),
      (this.body.enable = !1),
      (this.body.rotation = 0),
      this.anims.play(this.name + "death");
  }
  animationComplete(t, e) {
    t.key === this.name + "death" && this.destroy();
  }
}
class c extends Phaser.Physics.Arcade.Sprite {
  constructor(t, e, s, i = "right") {
    super(t, e, s, "zombie"),
      (this.name = "zombie"),
      (this.scene = t),
      this.scene.physics.add.existing(this),
      this.scene.physics.world.enable(this),
      this.body.setAllowGravity(!0),
      this.scene.add.existing(this),
      (this.direction = "right" === i ? -1 : 1),
      this.init();
  }
  init() {
    this.scene.anims.create({
      key: this.name,
      frames: this.scene.anims.generateFrameNumbers(this.name, {
        start: 0,
        end: 2,
      }),
      frameRate: 5,
      repeat: -1,
    }),
      this.scene.anims.create({
        key: this.name + "death",
        frames: this.scene.anims.generateFrameNumbers(this.name, {
          start: 3,
          end: 5,
        }),
        frameRate: 5,
      }),
      this.anims.play(this.name, !0),
      this.body.setVelocityX(100 * this.direction),
      (this.flipX = this.direction < 0),
      this.on("animationcomplete", this.animationComplete, this);
  }
  turn() {
    (this.direction = -this.direction),
      (this.flipX = this.direction < 0),
      this.body.setVelocityX(100 * this.direction);
  }
  death() {
    (this.dead = !0),
      (this.body.enable = !1),
      (this.body.rotation = 0),
      this.anims.play(this.name + "death");
  }
  animationComplete(t, e) {
    t.key === this.name + "death" && this.destroy();
  }
}
class m extends Phaser.GameObjects.Rectangle {
  constructor(t, e, s, i = 32, a = 32, h = "") {
    super(t, e, s, i, a, 16777215),
      (this.type = h),
      this.setAlpha(0),
      (this.x = e),
      (this.y = s),
      t.add.existing(this),
      t.physics.add.existing(this),
      (this.body.immovable = !0),
      (this.body.moves = !1);
  }
  disable() {
    (this.visible = !1), this.destroy();
  }
  destroy() {
    super.destroy();
  }
}
class p extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i = "coin") {
    super(t, e, s, i),
      (this.name = i),
      this.setScale(0.7),
      this.setOrigin(0.5),
      t.add.existing(this),
      t.physics.add.existing(this),
      (this.body.immovable = !0),
      (this.body.moves = !1),
      (this.disabled = !1),
      this.init();
  }
  init() {
    this.scene.anims.create({
      key: this.name,
      frames: this.scene.anims.generateFrameNumbers(this.name, {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    }),
      this.anims.play(this.name, !0),
      this.scene.tweens.add({
        targets: this,
        duration: 500,
        y: this.y - 20,
        repeat: -1,
        yoyo: !0,
      });
  }
  pick() {
    const { x: t, y: e } = this.scene.cameras.main.getWorldPoint(
      this.scene.scoreCoinsLogo.x,
      this.scene.scoreCoinsLogo.y
    );
    (this.disabled = !0),
      this.scene.tweens.add({
        targets: this,
        duration: 500,
        x: { from: this.x, to: t },
        y: { from: this.y, to: e },
        scale: { from: 0.7, to: 0.5 },
        onComplete: () => {
          this.destroy();
        },
      });
  }
}
class y extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i = "lunchbox") {
    super(t, e, s, i),
      (this.scene = t),
      (this.name = i),
      this.setScale(1),
      this.setOrigin(0.5),
      t.add.existing(this),
      t.physics.add.existing(this),
      (this.body.immovable = !0),
      (this.body.moves = !1),
      (this.disabled = !1),
      this.init();
  }
  init() {
    this.scene.anims.create({
      key: this.name,
      frames: this.scene.anims.generateFrameNumbers(this.name, {
        start: 0,
        end: 0,
      }),
      frameRate: 1,
    }),
      this.scene.anims.create({
        key: this.name + "opened",
        frames: this.scene.anims.generateFrameNumbers(this.name, {
          start: 1,
          end: 1,
        }),
        frameRate: 1,
      }),
      this.anims.play(this.name, !0),
      this.scene.tweens.add({
        targets: this,
        duration: 500,
        y: this.y - 20,
        repeat: -1,
        yoyo: !0,
      });
  }
  pick() {
    this.anims.play(this.name + "opened", !0),
      this.showPrize(),
      (this.disabled = !0),
      this.scene.time.delayedCall(
        1e3,
        () => {
          this.destroy(), this.prizeSprite.destroy();
        },
        null,
        this
      );
  }
  showPrize() {
    const t = Phaser.Math.RND.pick([
      "boots",
      "hammer",
      "coin",
      "star",
      "speed",
    ]);
    this.scene.player.applyPrize(t),
      (this.prizeSprite = this.scene.add
        .sprite(this.x, this.y, t)
        .setOrigin(0.5)
        .setScale(0.8)),
      this.scene.tweens.add({
        targets: this.prizeSprite,
        duration: 500,
        y: { from: this.y, to: this.y - 64 },
        onComplete: () => {
          this.scene.playAudio("prize");
        },
      });
  }
}
class u extends Phaser.GameObjects.Container {
  constructor(t, e, s, i = 4, a = !1) {
    super(t, e, s),
      (this.x = e),
      (this.y = s),
      this.scene.add.existing(this),
      this.scene.physics.add.existing(this),
      this.body.setAllowGravity(!1),
      this.body.setBounce(1),
      this.body.setSize(64 * i, 64),
      this.body.setOffset(-2, -2),
      (this.body.immovable = !0),
      (this.body.moves = !1),
      (this.chain = new Phaser.GameObjects.Sprite(
        this.scene,
        32 * i - 32,
        -2048,
        "chain"
      ).setOrigin(0)),
      this.add(this.chain),
      (this.platform = new Phaser.GameObjects.Sprite(
        this.scene,
        0,
        0,
        "platform" + i
      ).setOrigin(0)),
      this.add(this.platform),
      this.init();
  }
  init() {
    const t = Phaser.Math.Between(0, 7);
    let e = this.x,
      s = this.y;
    switch (t) {
      case 0:
        e = Phaser.Math.Between(-50, 50);
        break;
      case 1:
        s = Phaser.Math.Between(-50, 50);
        break;
      case 2:
        (e = Phaser.Math.Between(-100, 100)),
          (s = Phaser.Math.Between(-100, 100));
    }
    this.scene.tweens.add({
      targets: this,
      duration: Phaser.Math.Between(4e3, 6e3),
      x: { from: this.x, to: e },
      y: { from: this.y, to: s },
      repeat: -1,
      yoyo: !0,
    });
  }
}
class b extends t.Scene {
  constructor() {
    super({ key: "game" }),
      (this.player = null),
      (this.score = 0),
      (this.scoreText = null);
  }
  init(t) {
    (this.name = t.name), (this.number = t.number);
  }
  preload() {}
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.cameras.main.setBackgroundColor(6464191),
      this.add.tileSprite(0, 1e3, 10240, 512, "landscape").setOrigin(0.5),
      this.createMap(),
      this.cameras.main.setBounds(0, 0, 41840, 40160),
      this.physics.world.setBounds(0, 0, 41840, 40160),
      this.addPlayer(),
      this.cameras.main.startFollow(this.player, !0, 0.05, 0.05, 0, 240),
      this.physics.world.enable([this.player]),
      this.addScore(),
      this.loadAudios(),
      this.playMusic();
  }
  addScore() {
    (this.scoreCoins = this.add
      .bitmapText(75, 10, "pixelFont", "x0", 30)
      .setDropShadow(0, 4, 2236962, 0.9)
      .setOrigin(0)
      .setScrollFactor(0)),
      (this.scoreCoinsLogo = this.add
        .sprite(50, 25, "coin")
        .setScale(1)
        .setOrigin(0.5)
        .setScrollFactor(0)),
      this.anims.create({
        key: "coinscore",
        frames: this.anims.generateFrameNumbers("coin", { start: 0, end: 7 }),
        frameRate: 8,
      }),
      this.scoreCoinsLogo.play({ key: "coinscore", repeat: -1 });
  }
  createMap() {
    (this.tileMap = this.make.tilemap({
      key: "scene" + this.number,
      tileWidth: 64,
      tileHeight: 64,
    })),
      (this.tileSetBg = this.tileMap.addTilesetImage("background")),
      console.log(this.tileMap),
      this.tileMap.createLayer("background", this.tileSetBg),
      (this.tileSet = this.tileMap.addTilesetImage("softbricks")),
      (this.platform = this.tileMap.createLayer(
        "scene" + this.number,
        this.tileSet
      )),
      (this.objectsLayer = this.tileMap.getObjectLayer("objects")),
      this.platform.setCollisionByExclusion([-1]),
      (this.batGroup = this.add.group()),
      (this.zombieGroup = this.add.group()),
      (this.foesGroup = this.add.group()),
      (this.turnGroup = this.add.group()),
      (this.exitGroup = this.add.group()),
      (this.platformGroup = this.add.group()),
      (this.lunchBoxGroup = this.add.group()),
      (this.bricks = this.add.group()),
      this.addsObjects(),
      this.addColliders();
  }
  addsObjects() {
    this.objectsLayer.objects.forEach((t) => {
      if ("bat" === t.name) {
        let e = new l(this, t.x, t.y, t.type);
        this.batGroup.add(e), this.foesGroup.add(e);
      }
      if ("zombie" === t.name) {
        let e = new c(this, t.x, t.y, t.type);
        this.zombieGroup.add(e), this.foesGroup.add(e);
      }
      "platform" === t.name &&
        this.platformGroup.add(new u(this, t.x, t.y, t.type)),
        "turn" === t.name && this.turnGroup.add(new m(this, t.x, t.y)),
        "lunchbox" === t.name && this.lunchBoxGroup.add(new y(this, t.x, t.y)),
        "text" === t.name &&
          this.add
            .bitmapText(t.x, t.y, "pixelFont", t.text.text, 30)
            .setDropShadow(2, 4, 2236962, 0.9)
            .setOrigin(0),
        "exit" === t.name &&
          this.exitGroup.add(
            new m(this, t.x, t.y, t.width, t.height, t.type).setOrigin(0.5)
          );
    });
  }
  addColliders() {
    this.physics.add.collider(
      this.batGroup,
      this.platform,
      this.turnFoe,
      () => !0,
      this
    ),
      this.physics.add.collider(
        this.zombieGroup,
        this.bricks,
        this.turnFoe,
        () => !0,
        this
      ),
      this.physics.add.collider(
        this.batGroup,
        this.bricks,
        this.turnFoe,
        () => !0,
        this
      ),
      this.physics.add.collider(
        this.zombieGroup,
        this.turnGroup,
        this.turnFoe,
        () => !0,
        this
      ),
      this.physics.add.collider(
        this.zombieGroup,
        this.platform,
        this.hitFloor,
        () => !0,
        this
      );
  }
  turnFoe(t, e) {
    t.turn();
  }
  hitFloor() {}
  addPlayer() {
    (this.elements = this.add.group()), (this.coins = this.add.group());
    const t = this.objectsLayer.objects.find((t) => "player" === t.name);
    (this.player = new d(this, t.x, t.y, 0)),
      this.physics.add.collider(
        this.player,
        this.platform,
        this.hitFloor,
        () => !0,
        this
      ),
      this.physics.add.collider(
        this.player,
        this.platformGroup,
        this.hitFloor,
        () => !0,
        this
      ),
      this.physics.add.collider(
        this.player,
        this.bricks,
        this.hitFloor,
        () => !0,
        this
      ),
      this.physics.add.overlap(
        this.player,
        this.coins,
        this.pickCoin,
        () => !0,
        this
      ),
      this.physics.add.overlap(
        this.player,
        this.lunchBoxGroup,
        this.pickLunchBox,
        () => !0,
        this
      ),
      this.physics.add.overlap(
        this.player,
        this.exitGroup,
        () => {
          this.playAudio("stage"),
            this.time.delayedCall(1e3, () => this.finishScene(), null, this);
        },
        () => !0,
        this
      ),
      (this.blows = this.add.group()),
      this.physics.add.overlap(
        this.blows,
        this.platform,
        this.blowPlatform,
        () => !0,
        this
      ),
      this.physics.add.overlap(
        this.blows,
        this.bricks,
        this.blowBrick,
        () => !0,
        this
      ),
      this.physics.add.overlap(
        this.blows,
        this.foesGroup,
        this.blowFoe,
        () => !0,
        this
      ),
      this.physics.add.overlap(
        this.bricks,
        this.foesGroup,
        this.foeBlowBrick,
        () => !0,
        this
      ),
      this.physics.add.collider(
        this.player,
        this.batGroup,
        this.hitPlayer,
        () => !0,
        this
      ),
      this.physics.add.collider(
        this.player,
        this.zombieGroup,
        this.hitPlayer,
        () => !0,
        this
      );
  }
  pickCoin(t, e) {
    e.disabled || (e.pick(), this.playAudio("coin"), this.updateCoins());
  }
  pickLunchBox(t, e) {
    e.disabled || (this.playAudio("lunchbox"), e.pick());
  }
  hitPlayer(t, e) {
    t.invincible
      ? (e.death(), this.playAudio("foedeath"))
      : !t.dead && this.number > 0 && (t.die(), this.playAudio("death"));
  }
  blowFoe(t, e) {
    this.playAudio("kill"), this.playAudio("foedeath"), e.death();
  }
  foeBlowBrick(e, s) {
    s.turn(),
      Array(t.Math.Between(4, 6))
        .fill(0)
        .forEach((t) => new a(this, e.x, e.y)),
      e.destroy();
  }
  blowPlatform(e, s) {
    const i = this.getTile(s);
    this.isBreakable(i) &&
      (this.playAudioRandomly("stone_fail"),
      this.playAudioRandomly("stone"),
      this.player.mjolnir && this.cameras.main.shake(30),
      e.destroy(),
      Array(t.Math.Between(4, 6))
        .fill(0)
        .forEach((t) => new a(this, i.pixelX, i.pixelY)),
      this.platform.removeTileAt(i.x, i.y),
      this.spawnCoin(i));
  }
  getTile(t) {
    const { x: e, y: s } = t;
    return this.platform.getTileAt(e, s);
  }
  isBreakable(t) {
    return "break" === (null == t ? void 0 : t.properties.element);
  }
  spawnCoin(e) {
    t.Math.Between(0, 11) > 5 &&
      this.time.delayedCall(
        500,
        () => {
          this.coins.add(new p(this, e.pixelX, e.pixelY));
        },
        null,
        this
      );
  }
  blowBrick(e, s) {
    this.player.mjolnir && this.cameras.main.shake(30),
      this.playAudio("stone_fail"),
      this.playAudioRandomly("stone"),
      e.destroy(),
      Array(t.Math.Between(4, 6))
        .fill(0)
        .forEach((t) => new a(this, s.x, s.y)),
      s.destroy();
  }
  hitFloor(e, s) {
    if (
      this.player.jumping &&
      !this.player.falling &&
      0 === this.player.body.velocity.y
    ) {
      const e = this.getTile(s);
      this.isBreakable(e)
        ? (this.playAudioRandomly("stone"),
          Array(t.Math.Between(4, 6))
            .fill(0)
            .forEach((t) => new a(this, e.pixelX, e.pixelY)),
          this.platform.removeTileAt(e.x, e.y))
        : "brick0" === (null == s ? void 0 : s.name) &&
          (this.playAudioRandomly("stone"),
          Array(t.Math.Between(4, 6))
            .fill(0)
            .forEach((t) => new a(this, s.x, s.y)),
          s.destroy());
    }
  }
  loadAudios() {
    this.audios = {
      build: this.sound.add("build"),
      coin: this.sound.add("coin"),
      death: this.sound.add("death"),
      jump: this.sound.add("jump"),
      kill: this.sound.add("kill"),
      land: this.sound.add("land"),
      lunchbox: this.sound.add("lunchbox"),
      prize: this.sound.add("prize"),
      stone_fail: this.sound.add("stone_fail"),
      stone: this.sound.add("stone"),
      foedeath: this.sound.add("foedeath"),
      stage: this.sound.add("stage"),
    };
  }
  playAudio(t) {
    this.audios[t].play();
  }
  playAudioRandomly(e) {
    const s = t.Math.Between(0.8, 1),
      i = t.Math.Between(0.8, 1);
    this.audios[e].play({ volume: s, rate: i });
  }
  playMusic(t = "game") {
    (this.theme = this.sound.add("music" + this.number)),
      this.theme.stop(),
      this.theme.play({
        mute: !1,
        volume: 0.7,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      });
  }
  update() {
    this.player.update(),
      3 === this.number && this.player.y > 1500 && this.restartScene();
  }
  finishScene() {
    this.theme && this.theme.stop(),
      this.scene.start("transition", {
        name: "STAGE",
        number: this.number + 1,
      });
  }
  restartScene() {
    this.time.delayedCall(
      1e3,
      () => {
        this.theme && this.theme.stop(),
          this.scene.start("transition", {
            name: "STAGE",
            number: this.number,
          });
      },
      null,
      this
    );
  }
  updateCoins() {
    const t = +this.registry.get("coins") + 1;
    this.registry.set("coins", t),
      this.scoreCoins.setText("x" + t),
      this.tweens.add({
        targets: [this.scoreCoins, this.scoreCoinsLogo],
        scale: { from: 1.4, to: 1 },
        duration: 50,
        repeat: 10,
      });
  }
}
const g = {
  width: 1e3,
  height: 800,
  scale: { mode: t.Scale.FIT, autoCenter: t.Scale.CENTER_BOTH },
  autoRound: !1,
  parent: "game-container",
  physics: { default: "arcade", arcade: { gravity: { y: 300 }, debug: !0 } },
  scene: [e, h, r, b, s],
};
new t.Game(g);
