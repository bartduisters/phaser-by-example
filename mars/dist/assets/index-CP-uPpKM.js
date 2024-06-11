import { g as e, P as s, c as t } from "./phaser-X8YdoW2c.js";
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
class i extends Phaser.Scene {
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
      this.loadSpritesheets(),
      this.setRegistry();
  }
  setLoadEvents() {
    this.load.on(
      "progress",
      function (t) {
        this.progressBar.clear(),
          this.progressBar.fillStyle(11411474, 1),
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
      "pico",
      "assets/fonts/pico.png",
      "assets/fonts/pico.xml"
    );
  }
  loadImages() {
    this.load.image("body", "assets/images/body.png"),
      this.load.image("landscape", "assets/images/landscape.png"),
      this.load.image("record", "assets/images/record.png"),
      this.load.image("hole", "assets/images/hole.png"),
      this.load.image("pello", "assets/images/pello_ok.png"),
      this.load.image("mars", "assets/maps/mars64.png"),
      this.load.image("background", "assets/maps/mars.png");
  }
  loadMaps() {
    Array(7)
      .fill(0)
      .forEach((t, e) => {
        this.load.tilemapTiledJSON(`scene${e}`, `assets/maps/scene${e}.json`);
      });
  }
  loadAudios() {
    this.load.audio("mars_background", "assets/sounds/mars_background.mp3"),
      this.load.audio("step", "assets/sounds/step.mp3"),
      this.load.audio("creepy", "assets/sounds/creepy.mp3"),
      this.load.audio("heartbeat", "assets/sounds/heartbeat.mp3"),
      this.load.audio("breath", "assets/sounds/breath.mp3"),
      this.load.audio("blip", "assets/sounds/blip.mp3"),
      this.load.audio("ohmygod", "assets/sounds/ohmygod.mp3"),
      this.load.audio("kill", "assets/sounds/kill.mp3"),
      this.load.audio("tracker", "assets/sounds/tracker.mp3"),
      this.load.audio("holeshout", "assets/sounds/holeshout.mp3"),
      this.load.audio("oxygen", "assets/sounds/oxygen.mp3"),
      this.load.audio("monster", "assets/sounds/monster.mp3"),
      this.load.audio("killed", "assets/sounds/killed.mp3"),
      this.load.audio("creepy_static", "assets/sounds/creepy_static.mp3"),
      this.load.audio("shock", "assets/sounds/shock.mp3"),
      this.load.audio("cave", "assets/sounds/cave.mp3"),
      this.load.audio("type", "assets/sounds/type.mp3"),
      Array(4)
        .fill(0)
        .forEach((t, e) => {
          this.load.audio(`static${e}`, `assets/sounds/static${e}.mp3`);
        }),
      Array(6)
        .fill(0)
        .forEach((t, e) => {
          this.load.audio(
            `diary${e + 1}`,
            `assets/sounds/diary/diary${e + 1}.mp3`
          );
        }),
      Array(6)
        .fill(0)
        .forEach((t, e) => {
          this.load.audio(
            `officer${e + 1}`,
            `assets/sounds/officer/officer${e + 1}.mp3`
          );
        });
  }
  loadSpritesheets() {
    this.load.spritesheet("player", "assets/images/player.png", {
      frameWidth: 64,
      frameHeight: 64,
    }),
      this.load.spritesheet("debris", "assets/images/debris.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("step", "assets/images/step.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("wave", "assets/images/wave.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("drone", "assets/images/drone.png", {
        frameWidth: 64,
        frameHeight: 64,
      }),
      this.load.spritesheet("monster", "assets/images/monster.png", {
        frameWidth: 128,
        frameHeight: 64,
      });
  }
  setRegistry() {
    this.registry.set("score", 0);
  }
  createBars() {
    (this.loadBar = this.add.graphics()),
      this.loadBar.fillStyle(7017483, 1),
      this.loadBar.fillRect(
        this.cameras.main.width / 4 - 2,
        this.cameras.main.height / 2 - 18,
        this.cameras.main.width / 2 + 4,
        20
      ),
      (this.progressBar = this.add.graphics());
  }
}
class n {
  constructor(t) {
    this.scene = t;
  }
  typeText(t, e, s, i = 150, n = 450954, a = 40) {
    let h = [],
      o = 0,
      r = 0;
    t.split("").forEach((t, l) => {
      "\n" === t && ((o += 2), (r = 0)),
        h.push(
          this.scene.add
            .bitmapText(s - 350 + 25 * r++, i + o * a, e, t, a)
            .setTint(n)
            .setAlpha(0)
        );
    });
    const l = this.scene.add
        .rectangle(s - 335 + 25 * r, i + 25 + o * a, 25, 5, n)
        .setOrigin(0.5)
        .setAlpha(0),
      d = this.scene.tweens.timeline();
    return (
      (this.typeAudio = this.scene.sound.add("type")),
      h.forEach((t, e) => {
        d.add({ targets: t, alpha: { from: 0, to: 0.5 }, duration: 100 });
      }),
      d.add({
        targets: l,
        alpha: { from: 0, to: 0.8 },
        duration: 100,
        repeat: 5,
        yoyo: !0,
        onStart: () => {
          this.typeAudio.stop();
        },
      }),
      this.typeAudio.play({
        mute: !1,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      }),
      d.play(),
      h.push(l),
      h
    );
  }
  removeTyped(t) {
    t.flat().forEach((t) => t.destroy());
  }
}
class a extends Phaser.Scene {
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
      this.add.tileSprite(0, 0, 800, 600, "landscape").setOrigin(0),
      (this.utils = new n(this)),
      (this.title = this.add
        .bitmapText(
          this.center_width,
          this.center_height + 100,
          "pico",
          "MARSTRANDED",
          60
        )
        .setTint(7017483)
        .setAlpha(0)
        .setDropShadow(0, 4, 7024682, 0.9)
        .setOrigin(0.5)),
      this.tweens.add({
        targets: this.title,
        alpha: { from: 0, to: 1 },
        duration: 4e3,
      }),
      this.input.keyboard.on("keydown-SPACE", this.startSplash, this),
      this.input.keyboard.on("keydown-ENTER", this.startSplash, this);
  }
  playMusic(t = "mars_background") {
    (this.theme = this.sound.add(t)),
      this.theme.stop(),
      this.theme.play({
        mute: !1,
        volume: 1.5,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      });
  }
  startSplash() {
    this.sound.stopAll(), this.scene.start("splash");
  }
}
class h extends Phaser.GameObjects.Rectangle {
  constructor(t, e, s, i, n, a = 16771755) {
    super(
      t,
      (e += Phaser.Math.Between(-30, 30)),
      (s += Phaser.Math.Between(-30, 30)),
      Phaser.Math.Between(30, 55),
      Phaser.Math.Between(30, 55),
      a
    ),
      t.add.existing(this),
      t.physics.add.existing(this),
      this.body.setAllowGravity(!1),
      this.body.setVelocityX(100 * i),
      this.body.setVelocityY(100 * n),
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
class o extends Phaser.Scene {
  constructor() {
    super({ key: "splash" });
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.cameras.main.setBackgroundColor(0),
      (this.smokeLayer = this.add.layer()),
      this.showTitle(),
      this.time.delayedCall(1e3, () => this.showInstructions(), null, this),
      this.input.keyboard.on("keydown-SPACE", () => this.startGame(), this),
      this.playMusic();
  }
  showTitle() {
    (this.step = this.sound.add("step")),
      "MARSTRANDED".split("").forEach((t, e) => {
        this.time.delayedCall(
          600 * (e + 1),
          () => {
            this.add
              .bitmapText(70 * e + 50, 200, "pico", t, 70)
              .setTint(7017483)
              .setOrigin(0.5)
              .setDropShadow(0, 4, 7024682, 0.9),
              Array(Phaser.Math.Between(2, 4))
                .fill(0)
                .forEach((t) => {
                  this.smokeLayer.add(
                    new h(
                      this,
                      70 * e + 80 + Phaser.Math.Between(-30, 30),
                      200 + Phaser.Math.Between(-30, 30),
                      0,
                      -1,
                      7024682
                    )
                  );
                }),
              this.step.play({ rate: 0.8 }),
              this.step.resume();
          },
          null,
          this
        );
      });
  }
  startGame() {
    this.theme && this.theme.stop(),
      this.sound.add("blip").play(),
      this.scene.start("transition", {
        next: "game",
        name: "STAGE",
        number: 0,
        time: 30,
      });
  }
  playMusic(t = "mars_background") {
    (this.theme = this.sound.add(t)),
      this.theme.stop(),
      this.theme.play({
        mute: !1,
        volume: 2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      });
  }
  showInstructions() {
    this.add
      .bitmapText(this.center_width, 450, "pico", "WASD/Arrows", 40)
      .setTint(7017483)
      .setOrigin(0.5)
      .setDropShadow(0, 3, 7024682, 0.9),
      this.add
        .sprite(this.center_width - 140, 355, "pello")
        .setOrigin(0.5)
        .setScale(0.5),
      this.add
        .bitmapText(this.center_width + 60, 350, "pico", "By PELLO", 35)
        .setTint(7017483)
        .setOrigin(0.5)
        .setDropShadow(0, 3, 7024682, 0.9),
      (this.space = this.add
        .bitmapText(this.center_width, 520, "pico", "SPACE start", 30)
        .setTint(7017483)
        .setOrigin(0.5)
        .setDropShadow(0, 2, 7024682, 0.9)),
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
    this.number = t.number;
  }
  create() {
    (this.missions = [
      "",
      "Go north, locate containers.",
      "Find landing zone. North East.",
      "Locate landing, South East.",
      "Go East, locate containers.",
      "Other landings: North East",
      "Find out ship origin...",
    ]),
      (this.utils = new n(this)),
      (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.add.tileSprite(0, 0, 800, 600, "landscape").setOrigin(0),
      7 === this.number
        ? this.scene.start("outro", { number: this.number })
        : this.sound.stopAll(),
      this.showInstructions(),
      this.input.keyboard.on("keydown-ENTER", () => this.loadNext(), this),
      this.input.keyboard.on("keydown-SPACE", () => this.loadNext(), this);
  }
  showInstructions() {
    const t = Array(8)
      .fill(0)
      .map((t, e) => `DAY ${e}`);
    (this.text1 = this.add
      .bitmapText(this.center_width, 20, "pico", t[this.number], 30)
      .setOrigin(0.5)
      .setAlpha(0)),
      (this.text2 = this.add
        .bitmapText(
          this.center_width,
          70,
          "pico",
          "AUDIO RECORD OF CAPTAIN BRAUN",
          20
        )
        .setOrigin(0.5)
        .setAlpha(0)),
      this.number > 0
        ? this.showSceneInstructions()
        : this.showFirstInstructions();
  }
  showSceneInstructions() {
    this.tweens.add({
      targets: [this.text1, this.text2, this.play],
      duration: 1e3,
      alpha: { from: 0, to: 1 },
      onComplete: () => {
        this.playDiary();
      },
    });
  }
  showFirstInstructions() {
    this.playBackground(),
      (this.text2 = this.add
        .bitmapText(this.center_width, 70, "pico", "THE CRASH", 20)
        .setOrigin(0.5)
        .setAlpha(0)),
      this.playCreepy(),
      this.tweens.add({
        targets: [this.text1],
        duration: 2e3,
        alpha: { from: 0, to: 1 },
        onComplete: () => {
          this.playIntro();
        },
      });
  }
  playIntro() {
    this.utils.typeText(
      "YOU JUST CRASHED ON MARS\nYOU ARE ALIVE BUT YOUR\nSHIP IS COMPLETELY LOST\nIF YOU WANT TO LIVE YOU\nMUST FIND LANDING REMAINS\nTRY GOING EAST...",
      "pico",
      this.center_width,
      150,
      16777215,
      20
    );
  }
  playBackground() {
    (this.theme = this.sound.add("mars_background")),
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
  playDiary() {
    (this.wave = this.add
      .sprite(this.center_width, 200, "wave")
      .setOrigin(0.5)),
      this.anims.create({
        key: "wave",
        frames: this.anims.generateFrameNumbers("wave", { start: 0, end: 4 }),
        frameRate: 20,
        repeat: -1,
      }),
      this.wave.anims.play("wave", !0),
      (this.recording = this.sound.add(`diary${this.number}`)),
      this.recording.on(
        "complete",
        function () {
          this.wave.destroy(), this.showMission(), this.playCreepy();
        }.bind(this)
      ),
      this.recording.play();
  }
  playCreepy() {
    (this.creepy = this.sound.add("creepy")),
      this.creepy.play({
        mute: !1,
        volume: 0.9,
        rate: 0.9,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      });
  }
  showMission() {
    (this.text3 = this.add
      .bitmapText(this.center_width, 300, "pico", "MISSION OBJECTIVE:", 30)
      .setOrigin(0.5)),
      this.utils.typeText(
        this.missions[this.number],
        "pico",
        this.center_width,
        400,
        16777215,
        20
      );
  }
  loadNext() {
    this.sound.add("blip").play(),
      this.sound.stopAll(),
      this.scene.start("game", { number: this.number });
  }
}
class l extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i = "step") {
    super(t, e, s, "step", Phaser.Math.Between(0, 3)),
      t.add.existing(this),
      this.setOrigin(0),
      t.tweens.add({
        targets: [this],
        duration: 2e3,
        alpha: { from: 1, to: 0.1 },
      });
  }
}
class d extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i = 100) {
    super(t, e, s, "player"),
      this.setOrigin(0),
      this.setScale(1),
      this.scene.add.existing(this),
      this.scene.physics.add.existing(this),
      this.body.setAllowGravity(!1),
      (this.dead = !1),
      this.init(),
      (this.shells = 0),
      (this.lastDirection = 0),
      (this.steps = 0),
      (this.stepDelta = 0),
      (this.moveDelta = 0),
      (this.rate = 0.2),
      (this.previousRate = 0.2),
      (this.oxygen = i),
      (this.locked = !1);
  }
  init() {
    this.addControls(), this.scene.events.on("update", this.update, this);
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
  update(t, e) {
    if (!this.dead && !this.locked) {
      if (
        ((this.stepDelta += e),
        (this.moveDelta += e),
        (Phaser.Input.Keyboard.JustDown(this.W) ||
          Phaser.Input.Keyboard.JustDown(this.cursor.up)) &&
          this.canMoveUp())
      ) {
        this.moveDelta = 0;
        const { x: t, y: e } = this;
        (this.locked = !0),
          this.scene.tweens.add({
            targets: this,
            y: "-=64",
            duration: 200,
            onComplete: () => {
              this.locked = !1;
            },
          }),
          this.step(t, e);
      } else if (
        (Phaser.Input.Keyboard.JustDown(this.D) ||
          Phaser.Input.Keyboard.JustDown(this.cursor.right)) &&
        this.canMoveRight()
      ) {
        this.moveDelta = 0;
        const { x: t, y: e } = this;
        (this.locked = !0),
          this.scene.tweens.add({
            targets: this,
            x: "+=64",
            duration: 200,
            onComplete: () => {
              this.locked = !1;
            },
          }),
          this.step(t, e);
      } else if (
        (Phaser.Input.Keyboard.JustDown(this.A) ||
          Phaser.Input.Keyboard.JustDown(this.cursor.left)) &&
        this.canMoveLeft()
      ) {
        this.moveDelta = 0;
        const { x: t, y: e } = this;
        (this.locked = !0),
          this.scene.tweens.add({
            targets: this,
            x: "-=64",
            duration: 200,
            onComplete: () => {
              this.locked = !1;
            },
          }),
          this.step(t, e);
      } else if (
        (Phaser.Input.Keyboard.JustDown(this.S) ||
          Phaser.Input.Keyboard.JustDown(this.cursor.down)) &&
        this.canMoveDown()
      ) {
        this.moveDelta = 0;
        const { x: t, y: e } = this;
        (this.locked = !0),
          this.scene.tweens.add({
            targets: this,
            y: "+=64",
            duration: 200,
            onComplete: () => {
              this.locked = !1;
            },
          }),
          this.step(t, e);
      }
      this.adaptBreath();
    }
  }
  canMoveUp() {
    return (
      !this.scene.platform.getTileAtWorldXY(this.x, this.y - 1) &&
      this.moveDelta > 200
    );
  }
  canMoveRight() {
    return (
      !this.scene.platform.getTileAtWorldXY(this.x + 64, this.y) &&
      this.moveDelta > 200
    );
  }
  canMoveDown() {
    return (
      !this.scene.platform.getTileAtWorldXY(this.x, this.y + 64) &&
      this.moveDelta > 200
    );
  }
  canMoveLeft() {
    return (
      !this.scene.platform.getTileAtWorldXY(this.x - 1, this.y) &&
      this.moveDelta > 200
    );
  }
  step(t, e) {
    this.steps++,
      this.scene.smokeLayer.add(new l(this.scene, t, e)),
      this.scene.playRandom("step", 1);
  }
  adaptBreath() {
    this.stepDelta > 2e3 &&
      (this.steps > 2
        ? ((this.previousRate = this.rate),
          (this.rate = this.steps < 11 ? this.steps / 10 : 1),
          this.scene.breath(this.rate),
          this.updateOxygen(this.steps + Math.round(this.steps / 2)))
        : this.rate !== this.previousRate
          ? ((this.previousRate = this.rate),
            (this.rate = this.rate > 0.2 ? this.rate - 0.1 : 0.2),
            this.scene.breath(this.rate),
            this.scene.updateOxygen(this.steps))
          : this.scene.updateOxygen(this.steps),
      (this.steps = this.stepDelta = 0));
  }
  updateOxygen(t) {
    t >= this.oxygen ? ((this.oxygen = 0), this.death()) : (this.oxygen -= t),
      this.scene.updateOxygen();
  }
  death() {
    (this.dead = !0),
      this.body.stop(),
      (this.body.enable = !1),
      this.scene.restartScene();
  }
}
class c extends Phaser.GameObjects.Sprite {
  constructor(t, e, s) {
    super(t, e, s, "hole"),
      (this.name = "hole"),
      this.setOrigin(0),
      this.setAlpha(0),
      t.add.existing(this),
      t.physics.add.existing(this),
      this.body.setAllowGravity(!1);
  }
}
class u extends Phaser.GameObjects.Sprite {
  constructor(t, e, s) {
    super(t, e, s, "body"),
      (this.name = "body"),
      this.setOrigin(0),
      (this.rotation = 1.6),
      t.add.existing(this);
  }
}
let p = class extends Phaser.GameObjects.Rectangle {
  constructor(t, e, s, i, n, a = "") {
    super(t, e, s, 192, 192),
      this.setOrigin(0),
      (this.type = i),
      (this.description = n),
      (this.extra = a),
      t.add.existing(this),
      t.physics.add.existing(this),
      this.body.setAllowGravity(!1),
      (this.activated = !1);
  }
  touch() {
    switch (this.type) {
      case "note":
        this.showNote(this.description);
        break;
      case "radio":
        this.useRadio();
        break;
      case "exit":
        this.exitScene();
        break;
      case "hole":
        this.activateHole();
        break;
      case "oxygen":
        this.useOxygen();
        break;
      case "braun":
        this.activateBraun();
        break;
      case "ending":
        this.revealEnding();
    }
  }
  showNote(t) {
    const e = this.scene.add.bitmapText(this.x, this.y, "pico", t, 15);
    this.scene.tweens.add({
      targets: e,
      alpha: { from: 1, to: 0 },
      duration: 6e3,
      ease: "Sine",
      onComplete: () => {
        e.destroy();
      },
    });
  }
  showExit(t) {
    const e = this.scene.add.bitmapText(
      this.x - 128,
      this.y - 64,
      "pico",
      t,
      25
    );
    this.scene.tweens.add({
      targets: e,
      alpha: { from: 0.8, to: 1 },
      duration: 100,
      repeat: 5,
    });
  }
  useRadio() {
    (this.officerAudio = this.scene.sound.add(this.description)),
      this.officerAudio.play(),
      this.officerAudio.on(
        "complete",
        function () {
          this.scene.playRandomStatic(),
            this.extra && this.scene.sound.add(this.extra).play();
        }.bind(this)
      );
  }
  exitScene() {
    this.showExit(this.description),
      this.showNote(this.extra),
      this.scene.finishScene();
  }
  useOxygen() {
    this.showNote("Oxygen supplies!"),
      (this.scene.player.oxygen = 100),
      this.scene.updateOxygen(),
      this.scene.playAudio("oxygen");
  }
  revealEnding() {
    const t = this.scene.sound.add("ohmygod");
    t.play(),
      this.scene.cameras.main.shake(1e4),
      this.showExit(this.description),
      this.scene.sound.add("monster").play({ volume: 1.5, rate: 0.8 });
    const e = this.scene.add
      .sprite(this.x + 128, this.y + 128, "monster")
      .setOrigin(0.5);
    this.scene.anims.create({
      key: "monster",
      frames: this.scene.anims.generateFrameNumbers("monster", {
        start: 0,
        end: 5,
      }),
      frameRate: 3,
    }),
      e.anims.play("monster", !0),
      t.on(
        "complete",
        function () {
          this.scene.breathing.pause(),
            this.scene.playAudio("holeshout"),
            this.scene.finishScene(!1);
        }.bind(this)
      );
  }
  activateHole() {
    this.scene.holes.add(new c(this.scene, this.x + 64, this.y + 64));
  }
  activateBraun() {
    this.showExit(this.description),
      this.scene.playAudio("shock"),
      new u(this.scene, this.x + 128, this.y + 64);
  }
};
var m,
  y = { exports: {} };
(m = y),
  function () {
    var t, e, s, i, n, a, h, o, r, l, d, c, u, p, y;
    (s = Math.floor),
      (l = Math.min),
      (e = function (t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      }),
      (r = function (t, i, n, a, h) {
        var o;
        if ((null == n && (n = 0), null == h && (h = e), n < 0))
          throw new Error("lo must be non-negative");
        for (null == a && (a = t.length); n < a; )
          h(i, t[(o = s((n + a) / 2))]) < 0 ? (a = o) : (n = o + 1);
        return [].splice.apply(t, [n, n - n].concat(i)), i;
      }),
      (a = function (t, s, i) {
        return null == i && (i = e), t.push(s), p(t, 0, t.length - 1, i);
      }),
      (n = function (t, s) {
        var i, n;
        return (
          null == s && (s = e),
          (i = t.pop()),
          t.length ? ((n = t[0]), (t[0] = i), y(t, 0, s)) : (n = i),
          n
        );
      }),
      (o = function (t, s, i) {
        var n;
        return null == i && (i = e), (n = t[0]), (t[0] = s), y(t, 0, i), n;
      }),
      (h = function (t, s, i) {
        var n;
        return (
          null == i && (i = e),
          t.length &&
            i(t[0], s) < 0 &&
            ((s = (n = [t[0], s])[0]), (t[0] = n[1]), y(t, 0, i)),
          s
        );
      }),
      (i = function (t, i) {
        var n, a, h, o, r, l;
        for (
          null == i && (i = e),
            r = [],
            a = 0,
            h = (o = function () {
              l = [];
              for (
                var e = 0, i = s(t.length / 2);
                0 <= i ? e < i : e > i;
                0 <= i ? e++ : e--
              )
                l.push(e);
              return l;
            }
              .apply(this)
              .reverse()).length;
          a < h;
          a++
        )
          (n = o[a]), r.push(y(t, n, i));
        return r;
      }),
      (u = function (t, s, i) {
        var n;
        if ((null == i && (i = e), -1 !== (n = t.indexOf(s))))
          return p(t, 0, n, i), y(t, n, i);
      }),
      (d = function (t, s, n) {
        var a, o, r, l, d;
        if ((null == n && (n = e), !(o = t.slice(0, s)).length)) return o;
        for (i(o, n), r = 0, l = (d = t.slice(s)).length; r < l; r++)
          (a = d[r]), h(o, a, n);
        return o.sort(n).reverse();
      }),
      (c = function (t, s, a) {
        var h, o, d, c, u, p, m, y, g;
        if ((null == a && (a = e), 10 * s <= t.length)) {
          if (!(d = t.slice(0, s).sort(a)).length) return d;
          for (
            o = d[d.length - 1], c = 0, p = (m = t.slice(s)).length;
            c < p;
            c++
          )
            a((h = m[c]), o) < 0 &&
              (r(d, h, 0, null, a), d.pop(), (o = d[d.length - 1]));
          return d;
        }
        for (
          i(t, a), g = [], u = 0, y = l(s, t.length);
          0 <= y ? u < y : u > y;
          0 <= y ? ++u : --u
        )
          g.push(n(t, a));
        return g;
      }),
      (p = function (t, s, i, n) {
        var a, h, o;
        for (
          null == n && (n = e), a = t[i];
          i > s && n(a, (h = t[(o = (i - 1) >> 1)])) < 0;

        )
          (t[i] = h), (i = o);
        return (t[i] = a);
      }),
      (y = function (t, s, i) {
        var n, a, h, o, r;
        for (
          null == i && (i = e), a = t.length, r = s, h = t[s], n = 2 * s + 1;
          n < a;

        )
          (o = n + 1) < a && !(i(t[n], t[o]) < 0) && (n = o),
            (t[s] = t[n]),
            (n = 2 * (s = n) + 1);
        return (t[s] = h), p(t, r, s, i);
      }),
      (t = (function () {
        function t(t) {
          (this.cmp = null != t ? t : e), (this.nodes = []);
        }
        return (
          (t.push = a),
          (t.pop = n),
          (t.replace = o),
          (t.pushpop = h),
          (t.heapify = i),
          (t.updateItem = u),
          (t.nlargest = d),
          (t.nsmallest = c),
          (t.prototype.push = function (t) {
            return a(this.nodes, t, this.cmp);
          }),
          (t.prototype.pop = function () {
            return n(this.nodes, this.cmp);
          }),
          (t.prototype.peek = function () {
            return this.nodes[0];
          }),
          (t.prototype.contains = function (t) {
            return -1 !== this.nodes.indexOf(t);
          }),
          (t.prototype.replace = function (t) {
            return o(this.nodes, t, this.cmp);
          }),
          (t.prototype.pushpop = function (t) {
            return h(this.nodes, t, this.cmp);
          }),
          (t.prototype.heapify = function () {
            return i(this.nodes, this.cmp);
          }),
          (t.prototype.updateItem = function (t) {
            return u(this.nodes, t, this.cmp);
          }),
          (t.prototype.clear = function () {
            return (this.nodes = []);
          }),
          (t.prototype.empty = function () {
            return 0 === this.nodes.length;
          }),
          (t.prototype.size = function () {
            return this.nodes.length;
          }),
          (t.prototype.clone = function () {
            var e;
            return ((e = new t()).nodes = this.nodes.slice(0)), e;
          }),
          (t.prototype.toArray = function () {
            return this.nodes.slice(0);
          }),
          (t.prototype.insert = t.prototype.push),
          (t.prototype.top = t.prototype.peek),
          (t.prototype.front = t.prototype.peek),
          (t.prototype.has = t.prototype.contains),
          (t.prototype.copy = t.prototype.clone),
          t
        );
      })()),
      (m.exports = t);
  }.call(t);
var g = {},
  f = function () {
    (this.pointsToAvoid = {}),
      this.startX,
      this.callback,
      this.startY,
      this.endX,
      this.endY,
      (this.nodeHash = {}),
      this.openList;
  },
  b = function (t, e, s, i, n) {
    (this.parent = t),
      (this.x = e),
      (this.y = s),
      (this.costSoFar = i),
      (this.simpleDistanceToTarget = n),
      (this.bestGuessDistance = function () {
        return this.costSoFar + this.simpleDistanceToTarget;
      });
  },
  v = y.exports,
  x = g,
  S = 1;
(g.js = function () {
  var t,
    e,
    s,
    i = 1.4,
    n = !1,
    a = {},
    h = {},
    o = {},
    r = {},
    l = !0,
    d = {},
    c = [],
    u = Number.MAX_VALUE,
    p = !1;
  (this.setAcceptableTiles = function (t) {
    t instanceof Array
      ? (s = t)
      : !isNaN(parseFloat(t)) && isFinite(t) && (s = [t]);
  }),
    (this.enableSync = function () {
      n = !0;
    }),
    (this.disableSync = function () {
      n = !1;
    }),
    (this.enableDiagonals = function () {
      p = !0;
    }),
    (this.disableDiagonals = function () {
      p = !1;
    }),
    (this.setGrid = function (e) {
      t = e;
      for (var s = 0; s < t.length; s++)
        for (var i = 0; i < t[0].length; i++) h[t[s][i]] || (h[t[s][i]] = 1);
    }),
    (this.setTileCost = function (t, e) {
      h[t] = e;
    }),
    (this.setAdditionalPointCost = function (t, e, s) {
      void 0 === o[e] && (o[e] = {}), (o[e][t] = s);
    }),
    (this.removeAdditionalPointCost = function (t, e) {
      void 0 !== o[e] && delete o[e][t];
    }),
    (this.removeAllAdditionalPointCosts = function () {
      o = {};
    }),
    (this.setDirectionalCondition = function (t, e, s) {
      void 0 === r[e] && (r[e] = {}), (r[e][t] = s);
    }),
    (this.removeAllDirectionalConditions = function () {
      r = {};
    }),
    (this.setIterationsPerCalculation = function (t) {
      u = t;
    }),
    (this.avoidAdditionalPoint = function (t, e) {
      void 0 === a[e] && (a[e] = {}), (a[e][t] = 1);
    }),
    (this.stopAvoidingAdditionalPoint = function (t, e) {
      void 0 !== a[e] && delete a[e][t];
    }),
    (this.enableCornerCutting = function () {
      l = !0;
    }),
    (this.disableCornerCutting = function () {
      l = !1;
    }),
    (this.stopAvoidingAllAdditionalPoints = function () {
      a = {};
    }),
    (this.findPath = function (e, i, a, h, o) {
      var r = function (t) {
        n
          ? o(t)
          : setTimeout(function () {
              o(t);
            });
      };
      if (void 0 === s)
        throw new Error(
          "You can't set a path without first calling setAcceptableTiles() on EasyStar."
        );
      if (void 0 === t)
        throw new Error(
          "You can't set a path without first calling setGrid() on EasyStar."
        );
      if (
        e < 0 ||
        i < 0 ||
        a < 0 ||
        h < 0 ||
        e > t[0].length - 1 ||
        i > t.length - 1 ||
        a > t[0].length - 1 ||
        h > t.length - 1
      )
        throw new Error(
          "Your start or end point is outside the scope of your grid."
        );
      if (e !== a || i !== h) {
        for (var l = t[h][a], u = !1, p = 0; p < s.length; p++)
          if (l === s[p]) {
            u = !0;
            break;
          }
        if (!1 !== u) {
          var m = new f();
          (m.openList = new v(function (t, e) {
            return t.bestGuessDistance() - e.bestGuessDistance();
          })),
            (m.isDoneCalculating = !1),
            (m.nodeHash = {}),
            (m.startX = e),
            (m.startY = i),
            (m.endX = a),
            (m.endY = h),
            (m.callback = r),
            m.openList.push(E(m, m.startX, m.startY, null, 1));
          var y = S++;
          return (d[y] = m), c.push(y), y;
        }
        r(null);
      } else r([]);
    }),
    (this.cancelPath = function (t) {
      return t in d && (delete d[t], !0);
    }),
    (this.calculate = function () {
      if (0 !== c.length && void 0 !== t && void 0 !== s)
        for (e = 0; e < u; e++) {
          if (0 === c.length) return;
          n && (e = 0);
          var a = c[0],
            h = d[a];
          if (void 0 !== h)
            if (0 !== h.openList.size()) {
              var o = h.openList.pop();
              if (h.endX !== o.x || h.endY !== o.y)
                (o.list = 0),
                  o.y > 0 && m(h, o, 0, -1, 1 * w(o.x, o.y - 1)),
                  o.x < t[0].length - 1 && m(h, o, 1, 0, 1 * w(o.x + 1, o.y)),
                  o.y < t.length - 1 && m(h, o, 0, 1, 1 * w(o.x, o.y + 1)),
                  o.x > 0 && m(h, o, -1, 0, 1 * w(o.x - 1, o.y)),
                  p &&
                    (o.x > 0 &&
                      o.y > 0 &&
                      (l ||
                        (y(t, s, o.x, o.y - 1, o) &&
                          y(t, s, o.x - 1, o.y, o))) &&
                      m(h, o, -1, -1, i * w(o.x - 1, o.y - 1)),
                    o.x < t[0].length - 1 &&
                      o.y < t.length - 1 &&
                      (l ||
                        (y(t, s, o.x, o.y + 1, o) &&
                          y(t, s, o.x + 1, o.y, o))) &&
                      m(h, o, 1, 1, i * w(o.x + 1, o.y + 1)),
                    o.x < t[0].length - 1 &&
                      o.y > 0 &&
                      (l ||
                        (y(t, s, o.x, o.y - 1, o) &&
                          y(t, s, o.x + 1, o.y, o))) &&
                      m(h, o, 1, -1, i * w(o.x + 1, o.y - 1)),
                    o.x > 0 &&
                      o.y < t.length - 1 &&
                      (l ||
                        (y(t, s, o.x, o.y + 1, o) &&
                          y(t, s, o.x - 1, o.y, o))) &&
                      m(h, o, -1, 1, i * w(o.x - 1, o.y + 1)));
              else {
                var r = [];
                r.push({ x: o.x, y: o.y });
                for (var g = o.parent; null != g; )
                  r.push({ x: g.x, y: g.y }), (g = g.parent);
                r.reverse();
                var f = r;
                h.callback(f), delete d[a], c.shift();
              }
            } else h.callback(null), delete d[a], c.shift();
          else c.shift();
        }
    });
  var m = function (e, i, n, h, o) {
      var r = i.x + n,
        l = i.y + h;
      if ((void 0 === a[l] || void 0 === a[l][r]) && y(t, s, r, l, i)) {
        var d = E(e, r, l, i, o);
        void 0 === d.list
          ? ((d.list = 1), e.openList.push(d))
          : i.costSoFar + o < d.costSoFar &&
            ((d.costSoFar = i.costSoFar + o),
            (d.parent = i),
            e.openList.updateItem(d));
      }
    },
    y = function (t, e, s, i, n) {
      var a = r[i] && r[i][s];
      if (a) {
        var h = x(n.x - s, n.y - i);
        if (
          !(function () {
            for (var t = 0; t < a.length; t++) if (a[t] === h) return !0;
            return !1;
          })()
        )
          return !1;
      }
      for (var o = 0; o < e.length; o++) if (t[i][s] === e[o]) return !0;
      return !1;
    },
    x = function (t, e) {
      if (0 === t && -1 === e) return g.TOP;
      if (1 === t && -1 === e) return g.TOP_RIGHT;
      if (1 === t && 0 === e) return g.RIGHT;
      if (1 === t && 1 === e) return g.BOTTOM_RIGHT;
      if (0 === t && 1 === e) return g.BOTTOM;
      if (-1 === t && 1 === e) return g.BOTTOM_LEFT;
      if (-1 === t && 0 === e) return g.LEFT;
      if (-1 === t && -1 === e) return g.TOP_LEFT;
      throw new Error("These differences are not valid: " + t + ", " + e);
    },
    w = function (e, s) {
      return (o[s] && o[s][e]) || h[t[s][e]];
    },
    E = function (t, e, s, i, n) {
      if (void 0 !== t.nodeHash[s]) {
        if (void 0 !== t.nodeHash[s][e]) return t.nodeHash[s][e];
      } else t.nodeHash[s] = {};
      var a = T(e, s, t.endX, t.endY);
      if (null !== i) var h = i.costSoFar + n;
      else h = 0;
      var o = new b(i, e, s, h, a);
      return (t.nodeHash[s][e] = o), o;
    },
    T = function (t, e, s, n) {
      var a, h;
      return p
        ? (a = Math.abs(t - s)) < (h = Math.abs(e - n))
          ? i * a + h
          : i * h + a
        : (a = Math.abs(t - s)) + (h = Math.abs(e - n));
    };
}),
  (g.TOP = "TOP"),
  (g.TOP_RIGHT = "TOP_RIGHT"),
  (g.RIGHT = "RIGHT"),
  (g.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
  (g.BOTTOM = "BOTTOM"),
  (g.BOTTOM_LEFT = "BOTTOM_LEFT"),
  (g.LEFT = "LEFT"),
  (g.TOP_LEFT = "TOP_LEFT");
const w = e(x);
class E extends Phaser.GameObjects.Sprite {
  constructor(t, e, s, i) {
    super(t, e, s, "drone"),
      (this.name = "drone"),
      this.setScale(1),
      (this.grid = i),
      t.add.existing(this),
      t.physics.add.existing(this),
      this.body.setAllowGravity(!1),
      (this.easystar = new w.js()),
      this.init();
  }
  init() {
    this.easystar.setGrid(this.grid),
      this.easystar.setAcceptableTiles([0]),
      this.scene.events.on("update", this.update, this),
      this.scene.tweens.add({
        targets: this,
        duration: 500,
        repeat: -1,
        scale: { from: 0.95, to: 1 },
        yoyo: !0,
      }),
      this.scene.anims.create({
        key: this.name,
        frames: this.scene.anims.generateFrameNumbers(this.name, {
          start: 0,
          end: 3,
        }),
        frameRate: 5,
        repeat: -1,
      }),
      this.anims.play(this.name, !0),
      (this.flipX = this.direction < 0),
      this.scene.time.delayedCall(
        Phaser.Math.Between(3e3, 5e3),
        () => {
          this.scene.playAudio("kill"), this.launchMove();
        },
        null,
        this
      );
  }
  launchMove() {
    this.scene &&
      (this.delayedMove = this.scene.time.addEvent({
        delay: 2e3,
        callback: this.move.bind(this),
        startAt: 0,
        callbackScope: this,
        loop: !0,
      }));
  }
  move() {
    try {
      if (!this.scene.player) return;
      this.moveTimeline && this.moveTimeline.destroy(),
        this.easystar.findPath(
          Math.floor(this.x / 64),
          Math.floor(this.y / 64),
          Math.floor(this.scene.player.x / 64),
          Math.floor(this.scene.player.y / 64),
          this.moveIt.bind(this)
        ),
        this.easystar.setIterationsPerCalculation(1e4),
        this.easystar.enableSync(),
        this.easystar.calculate();
    } catch (t) {
      console.log("Cant move yet: ", t);
    }
  }
  moveIt(t) {
    if (null === t) console.log("hello sneaky pete");
    else {
      let e = [];
      (this.i = 0), (this.path = t);
      for (let s = 0; s < t.length - 1; s++) {
        if (this.scene.player.dead) return;
        let i = 64 * t[s + 1].x,
          n = 64 * t[s + 1].y;
        e.push({ targets: this, duration: 400, x: i, y: n });
      }
      this.moveTimeline = this.scene.tweens.timeline({
        tweens: e,
        onComplete: () => {
          this.delayedMove.remove(),
            this.alpha > 0 && !this.scene.player.dead && this.launchMove();
        },
      });
    }
  }
}
const T = {
    setBloomEnable(t) {
      return void 0 === t && (t = !0), (this.bloomEnable = t), this;
    },
    setBloomRadius(t) {
      return (this.bloomRadius = t), this;
    },
    setBloomIntensity(t) {
      return (this.bloomIntensity = t), this;
    },
    setBloomThreshold(t) {
      return (this.bloomThreshold = t), this;
    },
    setBloomTexelSize(t, e) {
      return (
        void 0 === e && (e = t),
        (this.bloomTexelWidth = t),
        (this.bloomTexelHeight = e),
        this
      );
    },
  },
  k = {
    setChromaticEnable(t) {
      return void 0 === t && (t = !0), (this.chromaticEnable = t), this;
    },
    setChabIntensity(t) {
      return (this.chabIntensity = t), this;
    },
  },
  A = {
    setVignetteEnable(t) {
      return void 0 === t && (t = !0), (this.vignetteEnable = t), this;
    },
    setVignetteStrength(t) {
      return (this.vignetteStrength = t), this;
    },
    setVignetteIntensity(t) {
      return (this.vignetteIntensity = t), this;
    },
  },
  O = {
    setNoiseEnable(t) {
      return void 0 === t && (t = !0), (this.noiseEnable = t), this;
    },
    setNoiseStrength(t) {
      return (this.noiseStrength = t), this;
    },
    setNoiseSeed(t) {
      return (this.noiseSeed = t), this;
    },
  },
  M = {
    setVHSEnable(t) {
      return void 0 === t && (t = !0), (this.vhsEnable = t), this;
    },
    setVhsStrength(t) {
      return (this.vhsStrength = t), this;
    },
  },
  P = {
    setScanlinesEnable(t) {
      return void 0 === t && (t = !0), (this.scanlinesEnable = t), this;
    },
    setScanStrength(t) {
      return (this.scanStrength = t), this;
    },
  },
  I = {
    setCRTEnable(t) {
      return void 0 === t && (t = !0), (this.crtEnable = t), this;
    },
    setCrtSize(t, e) {
      return (
        void 0 === e && (e = t), (this.crtWidth = t), (this.crtHeight = e), this
      );
    },
  };
var C = {
  setEnable: function (t) {
    return (
      void 0 === t && (t = !0),
      (this.bloomEnable = t),
      (this.chromaticEnable = t),
      (this.vignetteEnable = t),
      (this.noiseEnable = t),
      (this.vhsEnable = t),
      (this.scanlinesEnable = t),
      (this.crtEnable = t),
      this
    );
  },
};
Object.assign(C, T, k, A, O, M, P, I);
const B = Phaser.Game;
var D = function (t) {
  return t instanceof B;
};
const R = Phaser.Scene;
var L = function (t) {
  return t instanceof R;
};
const H = Phaser.Renderer.WebGL.Pipelines.PostFXPipeline,
  _ = Phaser.Utils.Objects.GetValue;
class N extends H {
  constructor(t) {
    super({
      name: "rexHorrifiPostFx",
      game: t,
      renderTarget: !0,
      fragShader:
        "#ifdef GL_FRAGMENT_PRECISION_HIGH\n#define highmedp highp\n#else\n#define highmedp mediump\n#endif\nprecision highmedp float;\n\nuniform float time;\n\n// Scene buffer\nuniform sampler2D uMainSampler; \nvarying vec2 outTexCoord;\n\n// Effect parameters\n#define SAMPLES 32.\n\n// Bloom\nuniform float bloomEnable;\nuniform vec3 bloom;\nuniform vec2 bloomTexel;\n\n// Chromatic abberation\nuniform float chromaticEnable;\nuniform float chabIntensity;\n\n// Vignette\nuniform float vignetteEnable;\nuniform vec2 vignette;\n\n// Noise\nuniform float noiseEnable;\nuniform float noiseStrength;\nuniform float noiseSeed;\n\n// VHS\nuniform float vhsEnable;\nuniform float vhsStrength;\n\n// Scanlines\nuniform float scanlinesEnable;\nuniform float scanStrength;\n\n// CRT\nuniform float crtEnable;\nuniform vec2 crtSize;\n\n\n// Noise\nfloat noise(vec2 uv) {\n  return fract(sin(uv.x*12.9898+uv.y*78.233)*437.585453*noiseSeed);\n}\n\n// VHS\nvec4 vhs(vec2 uv) {\n  vec2 tcoord = uv;\n  tcoord.x += sin(time*noise(uv));\n  return texture2D( uMainSampler, tcoord)*vhsStrength;\t\n}\n\n// Vignette\nfloat vig(vec2 uv) {\n  uv *= 1. - uv;\n  return ( pow(uv.x*uv.y*vignette.x*10.,vignette.y) );\n}\n\n// Chromatic abberation\nvec3 chromatic(vec2 uv, float offset) {\n  float r = texture2D( uMainSampler, vec2(uv.x+offset, uv.y)).r;\n  float g = texture2D( uMainSampler, uv).g;\n  float b = texture2D( uMainSampler, vec2(uv.x-offset, uv.y)).b;\n  return vec3(r,g,b);\n}\n\n// Bloom\nvec4 blur(vec2 uv) {\n  float total = 0.;\n  float rad = 1.;\n  mat2 ang = mat2(.73736882209777832,-.67549037933349609,.67549037933349609,.73736882209777832);\n  vec2 point = normalize(fract(cos(uv*mat2(195,174,286,183))*742.)-.5)*(bloom.x/sqrt(SAMPLES));\n  vec4 amount = vec4(0);\n\t\n  for ( float i=0.; i<SAMPLES; i++ ) {\n    point*=ang;\n    rad+=1./rad;\n    vec4 samp = texture2D(uMainSampler, uv + point * (rad-1.) * bloomTexel);\n    \n    float mul = 1.;\n    float lum = ( samp.r+samp.g+samp.b )/3.;\n    if ( lum < bloom.z ){ mul = 0.; }\n    \n    amount += samp*(1./rad)*mul;\n    total+=(1./rad);\n  }\n  amount /= total;\n  return amount*bloom.y;\n}\n\n// TV Curve\nvec2 crtCurve( vec2 uv ) {\n  uv = uv*2.-1.;\n  vec2 uvoff = abs(uv.xy) / crtSize;\n  uv = uv + uv * uvoff * uvoff;\n  uv = uv * .5 + .5;\n  return uv;\n}\n\nvoid main() {\t\n  vec2 mainUv = outTexCoord;\n\n  // CRT\n  if ( crtEnable > .5 ) {\n    mainUv = crtCurve(outTexCoord);\n  }\n\t\n  // Base coloring\n  vec4 color = texture2D( uMainSampler, mainUv);\n\t\n  // Chromatic abberation\n  if ( chromaticEnable > .5 ) {\n    color.rgb *= chromatic(mainUv, chabIntensity * 0.01);\n  }\n\t\n  // Scanlines\n  if ( scanlinesEnable > .5 ) {\n    color.rgb *= (1.-scanStrength)+(sin(mainUv.y*1024.)*scanStrength);\n  }\n\n  // Bloom\n  if ( bloomEnable > .5 ) {\n    color.rgb += blur(mainUv).rgb;\n  }\n\t\n  // Noise\n  if ( noiseEnable > .5 ) {\n    color.rgb += noise(mainUv)*noiseStrength;\n  }\n\t\n  // VHS\n  if ( vhsEnable > .5 ) {\n    color += vhs(mainUv);\n  }\n\t\n  // Vignette\n  if ( vignetteEnable > .5) {\n    color.rgb *= vig(mainUv);\n  }\n\t\n  // Cutoff edges\n  if ( crtEnable > .5) {\n    if ( (mainUv.x < 0.)|| (mainUv.y < 0.) || (mainUv.x > 1.)|| (mainUv.y > 1.) ) {\n      color.rgb *= 0.;\n    }\n  }\n\t\n  gl_FragColor = color;\n}\n",
    }),
      (this.now = 0),
      (this.bloomEnable = !1),
      (this.bloomRadius = 0),
      (this.bloomIntensity = 0),
      (this.bloomThreshold = 0),
      (this.bloomTexelWidth = 0),
      (this.bloomTexelHeight = 0),
      (this.chromaticEnable = !1),
      (this.chabIntensity = 0),
      (this.vignetteEnable = !1),
      (this.vignetteStrength = 0),
      (this.vignetteIntensity = 0),
      (this.noiseEnable = !1),
      (this.noiseStrength = 0),
      (this.noiseSeed = Math.random()),
      (this.vhsEnable = !1),
      (this.vhsStrength = 0),
      (this.scanlinesEnable = !1),
      (this.scanStrength = 0),
      (this.crtEnable = !1),
      (this.crtWidth = 0),
      (this.crtHeight = 0);
  }
  resetFromJSON(t) {
    var e = _(t, "enable", !1);
    return (
      this.setBloomEnable(_(t, "bloomEnable", e)),
      this.setBloomRadius(_(t, "bloomRadius", 0)),
      this.setBloomIntensity(_(t, "bloomIntensity", 0)),
      this.setBloomThreshold(_(t, "bloomThreshold", 0)),
      this.setBloomTexelSize(
        _(t, "bloomTexelWidth", 0),
        _(t, "bloomTexelHeight")
      ),
      this.setChromaticEnable(_(t, "chromaticEnable", e)),
      this.setChabIntensity(_(t, "chabIntensity", 0)),
      this.setVignetteEnable(_(t, "vignetteEnable", e)),
      this.setVignetteStrength(_(t, "vignetteStrength", 0)),
      this.setVignetteIntensity(_(t, "vignetteIntensity", 0)),
      this.setNoiseEnable(_(t, "noiseEnable", e)),
      this.setNoiseStrength(_(t, "noiseStrength", 0)),
      this.setNoiseSeed(_(0, "noiseSeed", Math.random())),
      this.setVHSEnable(_(t, "vhsEnable", e)),
      this.setVhsStrength(_(t, "vhsStrength", 0)),
      this.setScanlinesEnable(_(t, "scanlinesEnable", e)),
      this.setScanStrength(_(t, "scanStrength", 0)),
      this.setCRTEnable(_(t, "crtEnable", e)),
      this.setCrtSize(_(t, "crtWidth", 0), _(t, "crtHeight", void 0)),
      this
    );
  }
  onPreRender() {
    var t, e;
    this.set1f("noiseSeed", this.noiseSeed),
      this.set1f("bloomEnable", this.bloomEnable ? 1 : 0),
      this.set3f(
        "bloom",
        this.bloomRadius,
        this.bloomIntensity,
        this.bloomThreshold
      ),
      this.set2f("bloomTexel", this.bloomTexelWidth, this.bloomTexelHeight),
      this.set1f("chromaticEnable", this.chromaticEnable ? 1 : 0),
      this.set1f("chabIntensity", this.chabIntensity),
      this.set1f("vignetteEnable", this.vignetteEnable ? 1 : 0),
      this.set2f("vignette", this.vignetteStrength, this.vignetteIntensity),
      this.set1f("noiseEnable", this.noiseEnable ? 1 : 0),
      this.set1f("noiseStrength", this.noiseStrength),
      this.set1f("vhsEnable", this.vhsEnable ? 1 : 0),
      this.set1f("vhsStrength", this.vhsStrength),
      this.set1f("scanlinesEnable", this.scanlinesEnable ? 1 : 0),
      this.set1f("scanStrength", this.scanStrength),
      this.set1f("crtEnable", this.crtEnable ? 1 : 0),
      this.set2f("crtSize", this.crtWidth, this.crtHeight),
      this.vhsEnable &&
        (this.now +=
          ((t = this.game),
          ((e = t),
          null == e || "object" != typeof e
            ? null
            : D(e)
              ? e
              : D(e.game)
                ? e.game
                : L(e)
                  ? e.sys.game
                  : L(e.scene)
                    ? e.scene.sys.game
                    : void 0).loop.delta)),
      this.set1f("time", this.now);
  }
}
Object.assign(N.prototype, C);
class F extends Phaser.Scene {
  constructor() {
    super({ key: "game" }),
      (this.player = null),
      (this.score = 0),
      (this.scoreText = null);
  }
  init(t) {
    (this.name = t.name), (this.number = t.number);
  }
  create() {
    (this.backgroundColors = [
      11411474, 9837584, 5247498, 4198922, 3150346, 3084810, 0,
    ]),
      (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.cameras.main.setBackgroundColor(this.backgroundColors[this.number]),
      this.addLight(),
      this.createMap(),
      (this.smokeLayer = this.add.layer()),
      this.addPlayer(),
      this.addOxygen(),
      this.cameras.main.startFollow(this.player, !0, 0.05, 0.05, 0, 0),
      this.loadAudios(),
      this.addEffects(),
      this.playMusic();
  }
  addOxygen() {
    this.oxygenBar = this.add
      .rectangle(this.center_width, 40, 1.8 * this.player.oxygen, 20, 7017483)
      .setOrigin(0.5)
      .setScrollFactor(0);
  }
  addEffects() {
    this.cameras.main.setPostPipeline(N);
  }
  addDay() {
    this.dayText = this.add
      .bitmapText(20, 10, "pico", "Day " + (this.number + 1), 20)
      .setTint(7017483)
      .setOrigin(0)
      .setScrollFactor(0)
      .setDropShadow(0, 2, 7024682, 0.9);
  }
  addLight() {
    this.lights.disable(),
      this.lights.setAmbientColor(11411474),
      (this.playerLight = this.lights
        .addLight(0, 100, 100)
        .setColor(16777215)
        .setIntensity(3));
  }
  createMap() {
    (this.tileMap = this.make.tilemap({
      key: "scene" + this.number,
      tileWidth: 64,
      tileHeight: 64,
    })),
      (this.tileSetBg = this.tileMap.addTilesetImage("mars")),
      (this.tileSet = this.tileMap.addTilesetImage("mars")),
      (this.platform = this.tileMap.createLayer(
        "scene" + this.number,
        this.tileSet
      )),
      (this.border = this.tileMap.createLayer("border", this.tileSet)),
      (this.objectsLayer = this.tileMap.getObjectLayer("objects")),
      this.border.setCollisionByExclusion([-1]),
      this.platform.setCollisionByExclusion([-1]),
      (this.holes = this.add.group()),
      (this.foes = this.add.group()),
      (this.objects = this.add.group()),
      this.createGrid(),
      this.addObjects();
  }
  addObjects() {
    this.objectsLayer.objects.forEach((t) => {
      if (t.name.startsWith("object")) {
        const [e, s, i, n] = t.name.split(":");
        this.objects.add(new p(this, t.x, t.y, s, i, n));
      }
      t.name.startsWith("drone") &&
        this.foes.add(new E(this, t.x, t.y, this.grid));
    });
  }
  createGrid() {
    (this.grid = []),
      Array(40)
        .fill(0)
        .forEach((t, e) => {
          (this.grid[e] = []),
            Array(40)
              .fill(0)
              .forEach((t, s) => {
                let i = this.platform.getTileAt(Math.floor(s), Math.floor(e)),
                  n = this.border.getTileAt(Math.floor(s), Math.floor(e));
                this.grid[e][s] = i || n ? 1 : 0;
              });
        });
  }
  addPlayer() {
    this.trailLayer = this.add.layer();
    const t = this.objectsLayer.objects.find((t) => "player" === t.name);
    (this.player = new d(this, t.x, t.y)),
      this.physics.add.collider(
        this.player,
        this.platform,
        this.hitFloor,
        () => !0,
        this
      ),
      this.physics.add.overlap(
        this.player,
        this.objects,
        this.touchObject,
        () => !0,
        this
      ),
      this.physics.add.overlap(
        this.player,
        this.foes,
        this.playerHitByFoe,
        () => !0,
        this
      ),
      this.physics.add.overlap(
        this.player,
        this.holes,
        this.playerHitHole,
        () => !0,
        this
      );
  }
  hitFloor(t, e) {}
  touchObject(t, e) {
    "hole" === e.type && this.playTracker(),
      e.activated || ((e.activated = !0), e.touch());
  }
  playerHitByFoe(t, e) {
    this.cameras.main.shake(100),
      this.playAudio("killed"),
      t.death(),
      this.restartScene();
  }
  playerHitHole(t, e) {
    t.dead ||
      (this.playAudio("holeshout"),
      e.setAlpha(1),
      t.setAlpha(0),
      this.cameras.main.shake(50),
      t.death(),
      this.restartScene());
  }
  loadAudios() {
    (this.audios = {
      mars_background: this.sound.add("mars_background"),
      step: this.sound.add("step"),
      kill: this.sound.add("kill"),
      blip: this.sound.add("blip"),
      ohmygod: this.sound.add("ohmygod"),
      holeshout: this.sound.add("holeshout"),
      oxygen: this.sound.add("oxygen"),
      shock: this.sound.add("shock"),
      killed: this.sound.add("killed"),
    }),
      (this.tracker = this.sound.add("tracker"));
  }
  playTracker() {
    this.tracker.isPlaying || this.tracker.play();
  }
  playRandomStatic() {
    const t =
      this.number < 6 ? "static" + Phaser.Math.Between(0, 3) : "creepy_static";
    this.sound
      .add(t)
      .play({
        rate: Phaser.Math.Between(9, 11) / 10,
        delay: 0,
        volume: Phaser.Math.Between(5, 10) / 10,
      });
  }
  playAudio(t) {
    this.audios[t].play();
  }
  playRandom(t, e = 1) {
    this.audios[t].play({
      rate: Phaser.Math.Between(0.9, 1),
      detune: Phaser.Math.Between(-500, 500),
      delay: 0,
      volume: e,
    });
  }
  playOfficer() {
    this.sound.add(`officer${this.number}`).play();
  }
  playMusic() {
    const t = this.number < 6 ? "mars_background" : "cave";
    (this.theme = this.sound.add(t)),
      this.theme.stop(),
      this.theme.play({
        mute: !1,
        volume: 1.5,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: !0,
        delay: 0,
      }),
      this.sound
        .add("creepy")
        .play({
          mute: !1,
          volume: 1,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: !0,
          delay: 0,
        }),
      (this.breathing = this.sound.add("breath")),
      this.breath(0.2);
  }
  breath(t = 0.2, e = 0.4) {
    const s = Phaser.Math.Between(500, 1e3);
    this.tweens.add({
      targets: this.breathing,
      volume: 0,
      duration: s,
      onComplete: () => {
        this.breathing.play({ rate: t, volume: e });
      },
    });
  }
  restartScene() {
    const t = this.cameras.main.worldView.centerX,
      e = this.cameras.main.worldView.centerY;
    (this.fadeBlack = this.add
      .rectangle(t - 100, e - 50, 1e4, 11e3, 0)
      .setOrigin(0.5)),
      (this.failure = this.add
        .bitmapText(t, e, "pico", "FAILURE", 40)
        .setTint(7017483)
        .setOrigin(0.5)
        .setDropShadow(0, 2, 7024682, 0.9)),
      this.tweens.add({
        targets: [this.failure, this.fadeBlack],
        alpha: { from: 0, to: 1 },
        duration: 2e3,
      }),
      this.time.delayedCall(
        3e3,
        () => {
          this.sound.stopAll(),
            this.scene.start("transition", { number: this.number });
        },
        null,
        this
      );
  }
  finishScene(t = !0) {
    const e = this.cameras.main.worldView.centerX,
      s = this.cameras.main.worldView.centerY;
    (this.fadeBlack = this.add
      .rectangle(e - 100, s - 50, 2e3, 2e3, 0)
      .setOrigin(0.5)),
      this.tweens.add({
        targets: [this.fadeBlack],
        alpha: { from: 0, to: 1 },
        duration: 3e3,
      }),
      (this.player.dead = !0),
      this.player.body.stop(),
      this.mute && this.sound.add("blip").play(),
      this.time.delayedCall(
        3e3,
        () => {
          this.mute && this.sound.stopAll(),
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
  updateOxygen() {
    this.oxygenBar.width = 1.8 * this.player.oxygen;
  }
  skipThis() {
    (this.player.dead = !0),
      this.player.body.stop(),
      this.theme.stop(),
      this.scene.start("transition", { number: this.number + 1 });
  }
}
const G = {
  width: 800,
  height: 800,
  scale: { mode: s.Scale.FIT, autoCenter: s.Scale.CENTER_BOTH },
  autoRound: !1,
  parent: "game-container",
  physics: { default: "arcade", arcade: { gravity: { y: 300 }, debug: !1 } },
  scene: [i, o, r, F, a],
};
new s.Game(G);
