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
      this.setLoadEvents(),
      this.loadFonts(),
      this.loadAudios(),
      this.loadImages(),
      this.loadSpritesheets(),
      this.loadMaps(),
      this.setRegistry();
  }
  setLoadEvents() {
    this.load.on(
      "progress",
      function (t) {
        this.progressBar.clear(),
          this.progressBar.fillStyle(10941206, 1),
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
      "mario",
      "assets/fonts/mario.png",
      "assets/fonts/mario.xml"
    );
  }
  loadImages() {
    this.load.image("pello", "assets/images/pello.png"),
      this.load.image("background", "assets/images/background.png"),
      this.load.image("tileset_fg", "assets/maps/tileset_fg.png"),
      this.load.image("block_red", "assets/images/block_red.png"),
      this.load.image("block_green", "assets/images/block_green.png"),
      this.load.image("block_blue", "assets/images/block_blue.png"),
      this.load.image("block_yellow", "assets/images/block_yellow.png"),
      this.load.image("star", "assets/images/star.png");
  }
  loadMaps() {
    Array(9)
      .fill(0)
      .forEach((t, e) => {
        this.load.tilemapTiledJSON(`scene${e}`, `assets/maps/scene${e}.json`);
      });
  }
  loadAudios() {
    this.load.audio("music", "assets/sounds/music.mp3"),
      this.load.audio("splash", "assets/sounds/splash.mp3"),
      this.load.audio("win", "assets/sounds/win.mp3"),
      this.load.audio("hover", "assets/sounds/hover.mp3"),
      this.load.audio("select", "assets/sounds/select.mp3"),
      this.load.audio("bump", "assets/sounds/bump.mp3"),
      this.load.audio("move", "assets/sounds/move.mp3");
  }
  loadSpritesheets() {
    this.load.spritesheet("spider", "assets/images/spider.png", {
      frameWidth: 32,
      frameHeight: 32,
    }),
      this.load.spritesheet("heart", "assets/images/heart.png", {
        frameWidth: 32,
        frameHeight: 32,
      }),
      this.load.spritesheet("frog", "assets/images/frog.png", {
        frameWidth: 32,
        frameHeight: 48,
      }),
      this.load.spritesheet("frog2", "assets/images/frog2.png", {
        frameWidth: 48,
        frameHeight: 32,
      }),
      this.load.spritesheet("trail", "assets/images/trail.png", {
        frameWidth: 32,
        frameHeight: 32,
      }),
      this.load.spritesheet("block", "assets/images/block.png", {
        frameWidth: 48,
        frameHeight: 48,
      });
  }
  setRegistry() {
    this.registry.set("score", 0), this.registry.set("moves", 0);
  }
  createBars() {
    (this.loadBar = this.add.graphics()),
      this.loadBar.fillStyle(16769126, 1),
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
      this.cameras.main.setBackgroundColor(3970982),
      (this.splashLayer = this.add.layer()),
      this.showCount(),
      this.addStartButton(),
      this.input.keyboard.on("keydown-SPACE", this.startSplash, this),
      this.input.keyboard.on("keydown-ENTER", this.startSplash, this);
  }
  showCount() {
    (this.winText = this.add
      .bitmapText(
        this.center_width,
        -100,
        "mario",
        "TOTAL MOVES: " + this.registry.get("moves"),
        30
      )
      .setOrigin(0.5)
      .setTint(16769126)
      .setDropShadow(2, 3, 7715143, 0.7)),
      this.tweens.add({
        targets: this.winText,
        duration: 500,
        y: { from: this.winText.y, to: this.center_height },
      }),
      this.tweens.add({
        targets: this.winText,
        duration: 100,
        scale: { from: 1, to: 1.1 },
        repeat: -1,
        yoyo: !0,
      });
  }
  addStartButton() {
    (this.startButton = this.add
      .bitmapText(this.center_width, 500, "mario", "Click to start", 30)
      .setOrigin(0.5)
      .setTint(10113024)
      .setDropShadow(2, 3, 6895104, 0.7)),
      this.startButton.setInteractive(),
      this.startButton.on("pointerdown", () => {
        this.startSplash();
      }),
      this.startButton.on("pointerover", () => {
        this.startButton.setTint(4089973);
      }),
      this.startButton.on("pointerout", () => {
        this.startButton.setTint(16777215);
      }),
      this.tweens.add({
        targets: this.space,
        duration: 300,
        alpha: { from: 0, to: 1 },
        repeat: -1,
        yoyo: !0,
      });
  }
  startSplash() {
    this.sound.stopAll(), this.scene.start("splash");
  }
}
class i extends Phaser.Scene {
  constructor() {
    super({ key: "splash" });
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      (this.background = this.add
        .tileSprite(0, 0, 1024, 1024, "background")
        .setOrigin(0)),
      this.cameras.main.setBackgroundColor(3970982),
      this.time.delayedCall(1e3, () => this.showInstructions(), null, this),
      this.addStartButton(),
      this.input.keyboard.on("keydown-SPACE", () => this.startGame(), this),
      this.playMusic(),
      this.showTitle(),
      this.addStartButton();
  }
  update() {
    (this.background.tilePositionX += 1), (this.background.tilePositionY += 1);
  }
  startGame() {
    this.theme && this.theme.stop(),
      this.playGameMusic(),
      this.scene.start("transition", { name: "STAGE", number: 0 });
  }
  playGameMusic(t = "music") {
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
  showTitle() {
    (this.gameLogo1 = this.add
      .bitmapText(this.center_width - 1e3, 100, "mario", "Push", 120)
      .setOrigin(0.5)
      .setTint(16777215)
      .setDropShadow(3, 4, 7715143, 0.7)),
      (this.gameLogo2 = this.add
        .bitmapText(this.center_width + 1e3, 220, "mario", "Pull", 120)
        .setOrigin(0.5)
        .setTint(16769126)
        .setDropShadow(2, 3, 6895104, 0.7)),
      this.titleTweens();
  }
  titleTweens() {
    this.tweens.add({
      targets: [this.gameLogo2],
      duration: 1e3,
      x: { from: this.gameLogo2.x, to: this.center_width },
      onComplete: () => {
        this.tweens.add({
          targets: [this.gameLogo2],
          duration: 1e3,
          x: "-=20",
          repeat: -1,
          ease: "Linear",
        });
      },
    }),
      this.tweens.add({
        targets: [this.gameLogo1],
        duration: 1e3,
        x: { from: this.gameLogo1.x, to: this.center_width },
        onComplete: () => {
          this.tweens.add({
            targets: [this.gameLogo1],
            duration: 1e3,
            x: "+=20",
            repeat: -1,
            ease: "Linear",
          });
        },
      });
  }
  playMusic(t = "splash") {
    (this.theme = this.sound.add(t)),
      this.theme.stop(),
      this.theme.play({
        mute: !1,
        volume: 0.5,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      });
  }
  addStartButton() {
    (this.startButton = this.add
      .bitmapText(this.center_width, 500, "mario", "start", 30)
      .setOrigin(0.5)
      .setTint(16769126)
      .setDropShadow(2, 3, 6895104, 0.7)),
      this.startButton.setInteractive(),
      this.startButton.on("pointerdown", () => {
        this.sound.add("move").play(), this.startGame();
      }),
      this.startButton.on("pointerover", () => {
        this.startButton.setTint(4089973);
      }),
      this.startButton.on("pointerout", () => {
        this.startButton.setTint(16769126);
      }),
      this.tweens.add({
        targets: this.space,
        duration: 300,
        alpha: { from: 0, to: 1 },
        repeat: -1,
        yoyo: !0,
      });
  }
  showInstructions() {
    this.add
      .sprite(this.center_width - 80, 400, "pello")
      .setOrigin(0.5)
      .setScale(0.5),
      this.add
        .bitmapText(this.center_width + 40, 400, "mario", "By PELLO", 15)
        .setOrigin(0.5),
      this.tweens.add({
        targets: this.space,
        duration: 300,
        alpha: { from: 0, to: 1 },
        repeat: -1,
        yoyo: !0,
      });
  }
}
class a extends Phaser.Scene {
  constructor() {
    super({ key: "transition" });
  }
  init(t) {
    (this.name = t.name), (this.number = t.number);
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.cameras.main.setBackgroundColor(3970982),
      9 === this.number &&
        this.scene.start("outro", { name: this.name, number: this.number }),
      this.add
        .bitmapText(
          this.center_width,
          this.center_height - 20,
          "mario",
          [
            "Tutorial",
            "Stage0",
            "Stage1",
            "Stage2",
            "Stage3",
            "Stage4",
            "Stage5",
            "Stage6",
            "Stage7",
            "Outro",
          ][this.number],
          40
        )
        .setOrigin(0.5)
        .setTint(10941206)
        .setDropShadow(2, 3, 7715143, 0.7),
      this.add
        .bitmapText(
          this.center_width,
          this.center_height + 20,
          "mario",
          "Ready?",
          30
        )
        .setOrigin(0.5)
        .setTint(10941206)
        .setDropShadow(2, 3, 7715143, 0.7),
      this.time.delayedCall(1e3, () => this.loadNext(), null, this);
  }
  loadNext() {
    this.scene.start("game", {
      name: this.name,
      number: this.number,
      limitedTime: 10 + 3 * this.number,
    });
  }
}
class h extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i = "block_blue", a = 100) {
    super(t, e, s, i), this.setOrigin(0, 0), (this.scene = t), (this.name = i);
  }
}
class r extends Phaser.GameObjects.Container {
  constructor(t, e, s, i = 2, a = 3, h = "blue", r = 100) {
    super(t, e, s),
      (this.w = +i),
      (this.h = +a),
      (this.id = Math.random()),
      (this.name = "block_" + h),
      this.scene.add.existing(this),
      this.scene.physics.add.existing(this),
      (this.body.immovable = !0),
      (this.active = !1),
      this.setKeys(),
      (this.defaultVelocity = r),
      this.createBlock(),
      (this.allowChangeDirection = !0),
      this.scene.events.on("update", this.update, this),
      this.setListeners();
  }
  createBlock() {
    this.body.setSize(32 * this.w, 32 * this.h);
    for (let t = 0; t < this.w; t++)
      for (let e = 0; e < this.h; e++)
        this.add(new h(this.scene, 32 * t, 32 * e, this.name));
  }
  setKeys() {
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
      )),
      this.scene.events.on("update", this.update, this);
  }
  setListeners() {
    this.setInteractive(
      new Phaser.Geom.Rectangle(0, 0, 64, 96),
      Phaser.Geom.Rectangle.Contains
    ),
      this.on("pointerdown", (t) => {
        this.scene.playAudio("select"),
          this.iterate((t) => t.setTint(3170416)),
          this.activate();
      }),
      this.on("pointerover", () => {
        this.scene.playAudio("hover"), this.iterate((t) => t.setTint(3170416));
      }),
      this.on("pointerout", () => {
        this.iterate((t) => t.clearTint());
      });
  }
  activate() {
    this.scene.activeBlock && this.scene.activeBlock.deactivate(),
      (this.active = !0),
      (this.scene.activeBlock = this);
  }
  deactivate() {
    this.active = !1;
  }
  update() {
    this.active &&
      ((Phaser.Input.Keyboard.JustUp(this.S) ||
        Phaser.Input.Keyboard.JustUp(this.cursor.down)) &&
      this.canMoveDown()
        ? (this.leaveTrail(32 * this.w, 32),
          (this.y += 32),
          this.scene.updateMoves())
        : (Phaser.Input.Keyboard.JustUp(this.W) ||
              Phaser.Input.Keyboard.JustUp(this.cursor.up)) &&
            this.canMoveUp()
          ? (this.leaveTrail(32 * this.w, 32, 0, 32 * (this.h - 1)),
            (this.y -= 32),
            this.scene.updateMoves())
          : (Phaser.Input.Keyboard.JustUp(this.D) ||
                Phaser.Input.Keyboard.JustUp(this.cursor.right)) &&
              this.canMoveRight()
            ? (this.leaveTrail(32, 32 * this.h),
              (this.x += 32),
              this.scene.updateMoves())
            : (Phaser.Input.Keyboard.JustUp(this.A) ||
                Phaser.Input.Keyboard.JustUp(this.cursor.left)) &&
              this.canMoveLeft() &&
              (this.leaveTrail(32, 32 * this.h, 32 * (this.w - 1)),
              (this.x -= 32),
              this.scene.updateMoves()));
  }
  leaveTrail(t, e, s = 0, i = 0) {
    this.scene.playAudio("move");
    const a = this.scene.add
      .rectangle(this.x + s, this.y + i, t, e, 13421772)
      .setOrigin(0);
    this.scene.tweens.add({
      targets: [a],
      duration: 300,
      alpha: { from: 1, to: 0 },
      onComplete: () => {
        a.destroy();
      },
    });
  }
  isOverlap(t = 0, e = 0) {
    return !this.scene.blocks.children.entries
      .map((s) => {
        if (s.id === this.id) return !1;
        let i = this.getBounds(),
          a = s.getBounds();
        return (
          (i.x += 1),
          (i.y += 1),
          (i.width = 32 * this.w - 2),
          (i.height = 32 * this.h - 2),
          (i.x += t),
          (i.y += e),
          Phaser.Geom.Intersects.RectangleToRectangle(i, a)
        );
      })
      .every((t) => !t);
  }
  canMoveDown(t = 32) {
    if (this.isOverlap(0, 1)) return this.scene.playAudio("bump"), !1;
    t = 32 * this.h;
    const e = Array(this.w)
      .fill(0)
      .map((e, s) =>
        this.scene.platform.getTileAtWorldXY(this.x + 32 * s, this.y + t)
      )
      .every((t) => !t);
    return e || this.scene.playAudio("bump"), e;
  }
  canMoveUp(t = 32) {
    if (this.isOverlap(0, -1)) return this.scene.playAudio("bump"), !1;
    const e = Array(this.w)
      .fill(0)
      .map((t, e) =>
        this.scene.platform.getTileAtWorldXY(this.x + 32 * e, this.y - 1)
      )
      .every((t) => !t);
    return e || this.scene.playAudio("bump"), e;
  }
  canMoveLeft(t = 32) {
    if (this.isOverlap(-1, 0)) return this.scene.playAudio("bump"), !1;
    const e = Array(this.h)
      .fill(0)
      .map((e, s) =>
        this.scene.platform.getTileAtWorldXY(this.x - t, this.y + 32 * s)
      )
      .every((t) => !t);
    return e || this.scene.playAudio("bump"), e;
  }
  canMoveRight(t = 32) {
    if (this.isOverlap(1, 0)) return this.scene.playAudio("bump"), !1;
    t = 32 * this.w;
    const e = Array(this.h)
      .fill(0)
      .map((e, s) =>
        this.scene.platform.getTileAtWorldXY(this.x + t, this.y + 32 * s)
      )
      .every((t) => !t);
    return e || this.scene.playAudio("bump"), e;
  }
}
class o extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i = "star") {
    super(t, e, s, "star"),
      (this.name = i),
      this.setOrigin(0.5),
      this.setAlpha(0),
      t.add.existing(this),
      t.physics.add.existing(this),
      this.body.setAllowGravity(!1);
  }
}
class n extends Phaser.Scene {
  constructor() {
    super({ key: "game" }),
      (this.player = null),
      (this.score = 0),
      (this.scoreText = null);
  }
  init(t) {
    (this.name = t.name),
      (this.number = t.number || 0),
      (this.limitedTime = t.limitedTime || 10);
  }
  preload() {}
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.cameras.main.setBackgroundColor(0),
      this.input.mouse.disableContextMenu(),
      this.addPointer(),
      this.addMap(),
      this.addMoves(),
      this.addRetry(),
      this.loadAudios(),
      this.showTexts(),
      (this.solved = !1);
  }
  addRetry() {
    this.R = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  }
  addMoves() {
    (this.movesText = this.add
      .bitmapText(this.center_width, 32, "mario", "0", 30)
      .setOrigin(0.5)
      .setTint(16769126)
      .setDropShadow(3, 4, 7715143, 0.7)),
      (this.totalMoves = 0);
  }
  addMap() {
    (this.tileMap = this.make.tilemap({
      key: `scene${this.number}`,
      tileWidth: 32,
      tileHeight: 32,
    })),
      (this.tileSetBg = this.tileMap.addTilesetImage("tileset_fg")),
      this.tileMap.createLayer("background", this.tileSetBg),
      (this.tileSet = this.tileMap.addTilesetImage("tileset_fg")),
      (this.platform = this.tileMap.createLayer(
        `scene${this.number}`,
        this.tileSet
      )),
      (this.objectsLayer = this.tileMap.getObjectLayer("objects")),
      this.platform.setCollisionByExclusion([-1]),
      this.physics.world.setBounds(0, 0, this.width, this.height),
      (this.exits = this.add.group()),
      (this.blocks = this.add.group()),
      (this.texts = []),
      this.addObjects();
  }
  addObjects() {
    this.objectsLayer.objects.forEach((t) => {
      if (t.name.startsWith("block")) {
        const [e, s, i, a] = t.name.split("_");
        (this.activeBlock = new r(this, t.x, t.y, s, i, a)),
          this.blocks.add(this.activeBlock),
          t.name.startsWith("block_1_1") && this.addPlayer(this.activeBlock);
      }
      t.name.startsWith("exit") && this.exits.add(new o(this, t.x - 16, t.y));
    });
  }
  showTexts() {
    this.number > 0 ||
      [
        "Select cubes",
        "Pull/push them with WASD/Arrows",
        "MOVE the red to exit",
      ].forEach((t, e) => {
        this.add
          .bitmapText(this.center_width, 425 + 35 * e, "mario", t, 15)
          .setOrigin(0.5)
          .setTint(16769126)
          .setDropShadow(1, 2, 12526882, 0.7);
      });
  }
  addPlayer(t) {
    (this.player = t),
      this.physics.add.overlap(
        this.player,
        this.exits,
        this.hitExit,
        () => !0,
        this
      );
  }
  hitBlockBlock(t, e) {}
  hitExit(t, e) {
    (this.player.active = !1), e.destroy(), this.finishScene();
  }
  addPointer() {
    (this.pointer = this.input.activePointer),
      this.input.mouse.disableContextMenu();
  }
  loadAudios() {
    this.audios = {
      bump: this.sound.add("bump"),
      hover: this.sound.add("hover"),
      select: this.sound.add("select"),
      move: this.sound.add("move"),
      win: this.sound.add("win"),
    };
  }
  playAudio(t) {
    this.audios[t].play();
  }
  playRandom(t, e = 1) {
    this.audios[t].play({
      rate: Phaser.Math.Between(1, 1.5),
      detune: Phaser.Math.Between(-1e3, 1e3),
      delay: 0,
      volume: e,
    });
  }
  update() {
    Phaser.Input.Keyboard.JustDown(this.R) && this.restartScene();
  }
  finishScene() {
    if (this.solved) return;
    this.playAudio("win"), (this.solved = !0);
    const t = +this.registry.get("moves") + this.totalMoves;
    this.registry.set("moves", t),
      (this.winText = this.add
        .bitmapText(this.center_width, -100, "mario", "STAGE CLEARED!", 30)
        .setOrigin(0.5)
        .setTint(16769126)
        .setDropShadow(2, 3, 7715143, 0.7)),
      this.tweens.add({
        targets: this.winText,
        duration: 500,
        y: { from: this.winText.y, to: this.center_height },
      }),
      this.tweens.add({
        targets: [this.winText, this.movesText],
        duration: 100,
        scale: { from: 1, to: 1.1 },
        repeat: -1,
        yoyo: !0,
      }),
      this.time.delayedCall(
        2e3,
        () => {
          this.scene.start("transition", {
            next: "underwater",
            name: "STAGE",
            number: this.number + 1,
          });
        },
        null,
        this
      );
  }
  restartScene() {
    this.scene.start("game", {
      next: "underwater",
      name: "STAGE",
      number: this.number,
    });
  }
  updateMoves() {
    this.totalMoves++,
      this.movesText.setText(this.totalMoves),
      this.tweens.add({
        targets: [this.timerText],
        duration: 200,
        alpha: { from: 0.6, to: 1 },
        repeat: -1,
      });
  }
}
const d = {
  width: 608,
  height: 608,
  scale: { mode: t.Scale.FIT, autoCenter: t.Scale.CENTER_BOTH },
  autoRound: !1,
  parent: "game-container",
  physics: { default: "arcade", arcade: { gravity: { y: 0 }, debug: !1 } },
  plugins: {},
  scene: [e, i, a, n, s],
};
new t.Game(d);
