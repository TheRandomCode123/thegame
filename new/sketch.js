let tigris;
let proceed = 1;
var color1 = 1;
var proceeding = 0;
var choosing = 0;
let taka;
let hero;
var color2 = 1;
var color3 = 1;
var color5 = 1;
var game = 0;
var game1 = 0;
var game2 = 0;
var choose1 = 0;
var choose2 = 0;
var choose3 = 0;
var mover = 0;
var mover1 = 0;
var move = 0;
var move1 = 0;
var move2 = 0;
var move3 = 0;
var stationary = 0;
let knight, knight1, knight2, knight3, knight5, knight6;
var x = 100;
var y = 500;
let tree, rock;
let trees = [];
let base, tower, base1, tower1;
var w = 75; // character width
var h = 75; // character height
let arrow, arrow1;
var arrowx = 2800;
var arrowy = 300;
var dmg = 0;
var arrowx1 = 3750;
var arrowy1 = 200;
var arrowx2 = 3750;
var arrowy2 = 500;
let troop, troop1, troop2, troop3, troop5;
let troops = [];
let base2, base3;
let attack1, attack2, attack3;
var attack = 0;
var attacking = 0;
let skill1, skill2, skill3, skill5, skill6, skill7;
var firstskill = 0;
var skill = 0;
var bootspeed = 5;
let market, market1, market2;
let helmet, armor, sword, axe, boots1, boots2, boots3, potion1, potion2, shield, weapon;
var color6 = 0;
var color7 = 0;
var color8 = 0;
var color9 = 0;
var shopping1 = 0;
var shopping2 = 0;
var shopping3 = 0;
var shopping5 = 0;
let cophelmet, coparmor, copsword, copaxe, copboots1, copboots2, copboots3, coppotion1, coppotion2, copshield, copweapon;
var level = 1;
var gold = 0;
var n = 0,
  n1 = 0,
  n2 = 0,
  n3 = 0,
  n4 = 0,
  n5 = 0,
  n6 = 0,
  n7 = 0,
  n8 = 0,
  n9 = 0,
  n10 = 0,
  n11 = 0;
var m1 = 0,
  m2 = 0,
  m3 = 0,
  m4 = 0,
  m5 = 0,
  m6 = 0,
  m7 = 0,
  m8 = 0,
  m9 = 0,
  m10 = 0,
  m11 = 0;
var purchased1 = 0;
var purchased2 = 0;
var purchased3 = 0;
var purchased4 = 0;
var purchased5 = 0;
var purchased6 = 0;
var purchased7 = 0;
var purchased8 = 0;
var purchased9 = 0;
var purchased10 = 0;
var purchased11 = 0;
let knightult, knightult1, knightult2, knightult3;
var ult = 0,
  ult1 = 0;
var p1 = 0,
  p2 = 0,
  p3 = 0,
  p4 = 0,
  p5 = 0,
  p6 = 0,
  p7 = 0,
  p8 = 0,
  p9 = 0,
  p10 = 0,
  p11 = 0;
let taka1, taka2, taka3, taka5, taka6;
var takamove = 0,
  takamove1 = 0,
  takamove2 = 0,
  takamove3 = 0;
var takastationary = 0;
var takamover = 0,
  takamover1 = 0,
  takamover2 = 0,
  takamover3 = 0;
let takaskill1, takaskill2, takaskill3;
var takaattack = 0;
var takaatk = 0;
let takaskill5, takaskill6, takaskill7, takaskill8;
var takaini = 0;
var takaini1 = 0;
let takaskill9, takaskill10, takaskill11;
var takault = 0,
  takault1 = 0;
let disguise, disguise1;
var hide = 0,
  hide1 = 0;
let blade1, blade2, blade3, blade5, blade6;
var blademove = 0,
  blademove1 = 0,
  blademove2 = 0,
  blademove3 = 0;
var blademoving = 0,
  blademoving1 = 0,
  blademoving2 = 0,
  blademoving3 = 0;
var bladestationary = 0;
let bladeatk, bladeatk1;
var bladeatk2 = 0,
  bladeatk3 = 0;
var bladeskill = 0,
  bladeskill1 = 0,
  bladeskill2 = 0,
  bladeskill3 = 0,
  bladeskill5 = 0,
  bladeskill6 = 0;
let bladejump, bladejump1;
let bladerush;
let bladeult, bladeult1, bladeult2, bladeult3;
let displayer, displayer1, displayer2, display1, display2, display3, display4, display5, display6, display7, display8, display9;
var exp1 = 0;
var attackingdamage = 0,
  attackdamage = 0;
var firstskill = 0;
var secondskill = 0;
var thirdskill = 0;
var duration = 20;
var duration1 = 1;
var mn = 150;
var skillheal = 0;
var healtext = 0,
  healtext1 = 0;
var towerhp = 200,
  towerhp1 = 200,
  towerhp2 = 200,
  towerhp3 = 200,
  towerhp4 = 200,
  towerhp5 = 200;
var bonusdefense = 0,
  bonusdefense1 = 0,
  bonusdefense5 = 0,
  bonusdefense3 = 0;
var bonusattack = 0,
  bonusattack1 = 0,
  bonusattack2 = 0,
  bonusattack3 = 0;
var bonusspeed = 0,
  bonusspeed1 = 0,
  bonusspeed2 = 0,
  bonusspeed3 = 0;
var bonushp = 0,
  bonushp1 = 0,
  bonushp2 = 0;
var bonusmana = 0,
  bonusmana1 = 0;
var hpregen = 0, mnregen = 0;
var basehp = 300;
var knightfirstskill = 0;
let fountain, fountain1;
let enemy, enemy1, enemy2, enemy3, enemy4;
var enemymove = 0;
enemymove1 = 0;
enemymove2 = 0;
enemymove3 = 0;
var enemystationary = 0;
var x1 = 4500,
  y1 = 500;
var enemyhp = 150;
var enemymana = 150;
var enemylevel = 1;
var exp2 = 0;
var atkenx = 1250;
var atkeny = 300;
var atkenx1 = 400;
var atkeny1 = 200;
var atkenx2 = 400;
var atkeny2 = 500;
let enemyattack, enemyattack1;
let aura1, aura2;
let enemyrush;
let thunder, thunder1;
var enemyrespond = 20, enemyrespond1 = 1;
var enemyattacks = 0, enemyattacking = 0;
var enemyrushing = 0, enemyrushing1 = 0;
var enemyspeed = 0;
var enemyrandom = 0, enemyrandom1 = 0, enemyrandom2 = 0
var enemyskill = 0, enemyskill1 = 0;
var enemyult = 0, enemyult1 = 0;
var allybase = 300;
let towerdestroyed1, towerdestroyed2, towerdestroyed3, towerdestroyed4, towerdestroyed5, towerdestroyed6;
var demolish1 = 0, demolish2 = 0, demolish3 = 0;
var enemyatks = 0, enemyatking = 0;
let enemyatk, enemyatk1;
var thedurationhealing = 0;
let clash;
let attacks, attacks1, attacks2;
let jump;
var match1 = 0, match2 = 0;
var thecolor = 0, thecolor1 = 0;
var getexp1 = 0;
var getexp2 = 0, getexp3 = 0;
var colorchanger = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tigris = loadImage("img/Picture1.png");
  taka = loadImage("img/taka.png");
  hero = loadImage("img/hero.png");
  knight = loadImage("img/knight1.png");
  knight1 = loadImage("img/knight2.png");
  knight2 = loadImage("img/knight3.png");
  knight3 = loadImage("img/knight5.png");
  knight5 = loadImage("img/knight6.png");
  knight6 = loadImage("img/knight7.png");
  tree = loadImage("img/tree.png");
  rock = loadImage("img/rock.png");
  base = loadImage("img/base.png");
  tower = loadImage("img/tower.png");
  base1 = loadImage("img/base1.png");
  tower1 = loadImage("img/tower1.png");
  arrow = loadImage("img/arrow.png");
  arrow1 = loadImage("img/arrow1.png");
  troop = loadImage("img/troop.png");
  troop1 = loadImage("img/troop1.png");
  troop2 = loadImage("img/troop2.png");
  troop3 = loadImage("img/troop3.png");
  troop5 = loadImage("img/troop5.png");
  base2 = loadImage("img/base2.png");
  base3 = loadImage("img/base3.png");
  attack1 = loadImage("img/attack1.png");
  attack2 = loadImage("img/attack2.png");
  attack3 = loadImage("img/attack3.png");
  skill1 = loadImage("img/skill1.png");
  skill2 = loadImage("img/skill2.png");
  skill3 = loadImage("img/skill3.png");
  skill5 = loadImage("img/skill5.png");
  skill6 = loadImage("img/skill6.png");
  skill7 = loadImage("img/skill7.png");
  market = loadImage("img/market.png");
  market1 = loadImage("img/market.png");
  market2 = loadImage("img/market.png");
  helmet = loadImage("img/helmet.png");
  armor = loadImage("img/armor.png");
  sword = loadImage("img/sword.png");
  axe = loadImage("img/axe.png");
  boots1 = loadImage("img/boots1.png");
  boots2 = loadImage("img/boots2.png");
  boots3 = loadImage("img/boots3.png");
  potion1 = loadImage("img/potion1.png");
  potion2 = loadImage("img/potion2.png");
  shield = loadImage("img/shield.png");
  weapon = loadImage("img/weapon.png");

  cophelmet = loadImage("img/helmet.png");
  coparmor = loadImage("img/armor.png");
  copsword = loadImage("img/sword.png");
  copaxe = loadImage("img/axe.png");
  copboots1 = loadImage("img/boots1.png");
  copboots2 = loadImage("img/boots2.png");
  copboots3 = loadImage("img/boots3.png");
  coppotion1 = loadImage("img/potion1.png");
  coppotion2 = loadImage("img/potion2.png");
  copshield = loadImage("img/shield.png");
  copweapon = loadImage("img/weapon.png");

  knightult = loadImage("img/knightult.png");
  knightult1 = loadImage("img/knightult1.png");
  knightult2 = loadImage("img/knightult2.png");
  knightult3 = loadImage("img/knightult3.png");
  taka1 = loadImage("img/taka1.png");
  taka2 = loadImage("img/taka2.png");
  taka3 = loadImage("img/taka3.png");
  taka5 = loadImage("img/taka5.png");
  taka6 = loadImage("img/taka6.png");
  takaskill1 = loadImage("img/takaskill.png");
  takaskill2 = loadImage("img/takaskill1.png");
  takaskill3 = loadImage("img/takaskill2.png");
  takaskill5 = loadImage("img/takaskill3.png");
  takaskill6 = loadImage("img/takaskill4.png");
  takaskill7 = loadImage("img/takaskill5.png");
  takaskill8 = loadImage("img/takaskill6.png");
  takaskill9 = loadImage("img/takaskill7.png");
  takaskill10 = loadImage("img/takaskill8.png");
  takaskill11 = loadImage("img/takaskill9.png");
  disguise = loadImage("img/disguise.png");
  disguise1 = loadImage("img/disguise1.png");

  blade1 = loadImage("img/blade1.png");
  blade2 = loadImage("img/blade2.png");
  blade3 = loadImage("img/blade3.png");
  blade5 = loadImage("img/blade5.png");
  blade6 = loadImage("img/blade6.png");
  bladeatk = loadImage("img/bladeatk.png");
  bladeatk1 = loadImage("img/bladeatk1.png");
  bladejump = loadImage("img/bladejump.png");
  bladejump1 = loadImage("img/bladejump1.png");
  bladerush = loadImage("img/bladerush.png");
  bladeult = loadImage("img/bladeult.png");
  bladeult1 = loadImage("img/bladeult1.png");
  bladeult2 = loadImage("img/bladeult2.png");
  bladeult3 = loadImage("img/bladeult3.png");

  displayer = loadImage("img/display.png");
  displayer1 = loadImage("img/display.png");
  displayer2 = loadImage("img/display.png");
  display1 = loadImage("img/display1.png");
  display2 = loadImage("img/display2.png");
  display3 = loadImage("img/display3.png");
  display4 = loadImage("img/display4.png");
  display5 = loadImage("img/display5.png");
  display6 = loadImage("img/display6.png");
  display7 = loadImage("img/display7.png");
  display8 = loadImage("img/display8.png");
  display9 = loadImage("img/display9.png");

  fountain = loadImage("img/fountain.png");
  fountain1 = loadImage("img/fountain.png");
  enemy = loadImage("img/enemy.png");
  enemy1 = loadImage("img/enemy1.png");
  enemy2 = loadImage("img/enemy2.png");
  enemy3 = loadImage("img/enemy3.png");
  enemy4 = loadImage("img/enemy4.png");
  enemyattack = loadImage("img/enemyattack.png");
  enemyattack1 = loadImage("img/enemyattack1.png");
   enemyatk= loadImage("img/enemyattack.png");
  enemyatk1 = loadImage("img/enemyattack1.png");
  aura1 = loadImage("img/aura1.png");
  aura2 = loadImage("img/aura2.png");
  enemyrush = loadImage("img/enemyrush.png");
  thunder = loadImage("img/thunder.png");
    thunder1 = loadImage("img/thunder1.png");
  towerdestroyed1 = loadImage("img/towerdestroyed.png");
    towerdestroyed2 = loadImage("img/towerdestroyed.png");
    towerdestroyed3 = loadImage("img/towerdestroyed.png");
    towerdestroyed4 = loadImage("img/towerdestroyed.png");
    towerdestroyed5 = loadImage("img/towerdestroyed.png");
    towerdestroyed6 = loadImage("img/towerdestroyed.png");
  
   clash = loadSound("clash.mp3");
  attacks = loadSound("attack.mp3");
   attacks1 = loadSound("attack1.mp3");
   attacks2 = loadSound("attack2.mp3");
  jump = loadSound("jump.mp3");
  
  for (let i = 0; i < 20; i++) {
    var a = 100;
    var b = 100;
    var c = 50;
    trees[i] = new createtrees(a, b, c);
  }
  for (let j = 0; j < 10; j++) {
    var a1 = 100;
    var b1 = 100;
    var c1 = 50;
    troops[j] = new createtroop(a1, b1, c1);
  }
  angleMode(DEGREES);
}

function mousePressed() {
  if (proceeding < 1) {
    if (mouseX > 950 && mouseX < 1350 && mouseY > 620 && mouseY < 740 && mouseIsPressed) {
      proceed = proceed + 1;
    }
  }
}

function keyPressed() {
  if (key == 'o' && level >= 2 && mn + bonusmana >= 20) {
    firstskill = 1;
    knightfirstskill = 1;
    takaini = 1;
    bladeskill = 1;
    mn = mn - 20;
  }

  if (key == 'l') {
    attack = 1;
    takaattack = 1;
    bladeatk2 = 1;
  }
  if (key == 'i' && level >= 8 && mn + bonusmana >= 50) {
    ult = 1;
    takault = 1;
    bladeskill5 = 1;
    mn = mn - 50;
  }
  if (key == 'k' && level >= 5 && mn + bonusmana >= 30) {
    hide = 1;
    bladeskill2 = 1;
    skillheal = 1;
    mn = mn - 30;
  }
   //sound 
      if(key == 'l' || (choose2 > 0 && takaini > 0)) {
        clash.play();
        clash.setVolume(0.3);
      }
     if(choose2 > 0 && takault > 0) {
        attacks.play();
        attacks.setVolume(0.3);
      }
     if(choose1 > 0 && knightfirstskill > 0) {
        attacks1.play();
        attacks1.setVolume(0.3);
      }
     if(choose3 > 0 && bladeskill2 > 0) {
        attacks2.play();
        attacks2.setVolume(0.5);
      }
     if((choose1 > 0 && ult > 0) || (choose3 > 0 && bladeskill5 > 0)) {
        jump.play();
        jump.setVolume(0.3);
      }

}

function draw() {
  background(1);
  if (proceeding < 1) {
    strokeWeight(5);
    fill(200, color1);
    rect(950, 620, 400, 120);
    textSize(80);
    fill(255);
    text("Proceed", 1000, 700);
    if (mouseX > 950 && mouseX < 1350 && mouseY > 620 && mouseY < 740) {
      color1 = 255;
    } else {
      color1 = 1;
    }
    if (proceed == 1) {
      stroke(255);
      strokeWeight(50);
      noFill();
      rect(200, 200, 1000, 350);
      stroke(255);
      strokeWeight(5);
      noFill();
      textSize(100);
      text("Hero Legends", 405, height / 2);
    }
    if (proceed == 2) {
      text("Welcome to Hero Legends", 200, 100);
       textSize(30);
      stroke(255);
      strokeWeight(1);
      text("Rules are simple:", 100, 250);
      text("Farm by slaying the creeps in the jungle to get gold and exps", 100, 310);
      text("More gold will be given if the enemy hero is slain", 100, 400);
      text("Use gold to get access to items in shop, go to fountain to recover hp and mana", 100, 500);
      text("Destroy the enemy's towers and base to win", 100, 600);
        text("Click w, a, d, s to move and click l to attack", 100, 700);
    }
    if (proceed == 3) {
      textSize(50);
      stroke(255);
      strokeWeight(1);
      text("Click on the interior of the", 100, 100);
      text("circles to see the descriptions and", 100, 250);
      text("keys to activate skills", 100, 400);
      noFill();
      ellipse(1200, 350, 100, 100);
       ellipse(1200, 450, 100, 100);
       ellipse(1200, 550, 100, 100);
    }
    if(proceed == 4) {
       fill(255);
      textSize(100);
      text("Start", 600, 200);
    }
    if (proceed == 5) {
      proceeding = 1;
    }
  }
  if (proceeding > 0) {
    background(100);
    image(tigris, 100, 100);
    tigris.resize(100, 125);
    image(taka, 500, 100);
    taka.resize(100, 125);
    image(hero, 900, 100);
    hero.resize(100, 125);
    textSize(50);
    strokeWeight(1);
    fill(255);
    text("Tigris", 100, 350);
    text("Taka", 500, 350);
    text("Blade", 900, 350);
    text("choose", 100, 500);
    text("choose", 500, 500);
    text("choose", 900, 500);
    fill(100, color2);
    rect(80, 440, 200, 100);
    fill(100, color3);
    rect(480, 440, 200, 100);
    fill(100, color5);
    rect(880, 440, 200, 100);
    textSize(20);
    fill(255);
    text("The great tank", 100, 600);
    text("with thick layers of defense", 50, 650);
    text("A worrior with", 500, 600);
    text("invisibility", 500, 650);
    text("The hero that", 900, 600);
    text("possess the mighty sword", 900, 650);
    if (mouseX > 80 && mouseX < 280 && mouseY > 440 && mouseY < 540) {
      color2 = 255;
    } else {
      color2 = 1;
    }
    if (mouseX > 480 && mouseX < 680 && mouseY > 440 && mouseY < 540) {
      color3 = 255;
    } else {
      color3 = 1;
    }
    if (mouseX > 880 && mouseX < 1080 && mouseY > 440 && mouseY < 540) {
      color5 = 255;
    } else {
      color5 = 1;
    }


    if (mouseX > 80 && mouseX < 280 && mouseY > 440 && mouseY < 540 && mouseIsPressed && choose1 < 1 && choose2 < 1 && choose3 < 1) {
      game = 1;
      choose1 = 1;
    }
    if (mouseX > 480 && mouseX < 680 && mouseY > 440 && mouseY < 540 && mouseIsPressed && choose1 < 1 && choose2 < 1 && choose3 < 1) {
      game1 = 1;
      choose2 = 1;
    }
    if (mouseX > 880 && mouseX < 1080 && mouseY > 440 && mouseY < 540 && mouseIsPressed && choose1 < 1 && choose2 < 1 && choose3 < 1) {
      game2 = 1;
      choose3 = 1;
    }

    //commence

    if (game > 0 || game1 > 0 || game2 > 0) {
      background(colorchanger);
      colorchanger = colorchanger - 0.05;
      if(colorchanger < 50) {
        colorchanger = 200;
      }
      translate(width / 2 - x, 0);

      if (keyIsPressed && key == 'l') {
        attackingdamage = 1;
      } else {
        attackingdamage = 0;
      }

      //skill display

      noFill();
      stroke(1);
      strokeWeight(10);
      ellipse(x + 600, 500, 100, 100);
      ellipse(x + 600, 610, 100, 100);
      ellipse(x + 600, 720, 100, 100);
      fill(1);
      textSize(50);
      stroke(1);
      strokeWeight(1);
      text("Skills", x + 550, 400);
      let distskill1 = dist(mouseX, mouseY, width / 2 + 600, 500);
      let distskill2 = dist(mouseX, mouseY, width / 2 + 600, 610);
      let distskill3 = dist(mouseX, mouseY, width / 2 + 600, 720);
      stroke(1);
      strokeWeight(2);
      noFill();

      if (distskill1 < 50) {
        rect(x + 250, 450, 250, 100);
      }
      if (distskill2 < 50) {
        rect(x + 250, 550, 250, 100);
      }
      if (distskill3 < 50) {
        rect(x + 250, 650, 250, 100);
      }

      if (choose1 > 0 && choose2 < 1 && choose3 < 1) {
        image(display1, x + 575, 475);
        display1.resize(50, 50);
        image(display2, x + 575, 585);
        display2.resize(50, 50);
        image(display3, x + 575, 700);
        display3.resize(50, 50);
      }
      if (choose2 > 0 && choose1 < 1 && choose3 < 1) {
        image(display4, x + 575, 475);
        display4.resize(50, 50);
        image(display5, x + 575, 585);
        display5.resize(50, 50);
        image(display6, x + 575, 700);
        display6.resize(50, 50);
      }
      if (choose3 > 0 && choose1 < 1 && choose2 < 1) {
        image(display7, x + 575, 475);
        display7.resize(50, 50);
        image(display8, x + 575, 585);
        display8.resize(50, 50);
        image(display9, x + 575, 700);
        display9.resize(50, 50);
      }

      textSize(20);
      fill(1);
      if (distskill1 < 50) {
        text("Level 2 required", x + 300, 490);
        text("Key: o", x + 300, 520);
      }
      if (distskill2 < 50) {
        text("Level 5 required", x + 300, 590);
        text("Key: k", x + 300, 620);
      }
      if (distskill3 < 50) {
        text("Level 8 required", x + 300, 690);
        text("Key: i", x + 300, 720);
      }

      //skill lock
      if (level < 2) {
        image(displayer, x + 475, 475);
        displayer.resize(50, 50);
      }
      if (level < 5) {
        image(displayer1, x + 475, 585);
        displayer1.resize(50, 50);
      }
      if (level < 8) {
        image(displayer2, x + 475, 700);
        displayer2.resize(50, 50);
      }




      // items effect

      bootspeed = 5 + bonusspeed1 + bonusspeed2 + bonusspeed3;
      bonusattack = bonusattack1 + bonusattack2 + bonusattack3;
      bonusdefense = 1 + bonusdefense1 + bonusdefense5 + bonusdefense3;
      bonushp = bonushp1 + bonushp2;
      bonusmana = bonusmana1;

      //level
      noFill();
      strokeWeight(1);
      rect(x + 140, 35, 300, 15);
      fill(255, 100, 100);
      rect(x + 140, 35, exp1, 15);
      exp1 = exp1 + 0.01;
      if (exp1 >= 300) {
        exp1 = 0;
        level = level + 1;
      }
      fill(1);
      text("Level", x + 50, 50);
      text(level, x + 110, 50);
      // inventory

      fill(255, 255, 100);
      textSize(30);
      noStroke();
      text("Inventory", x - 670, 700);
      noFill();
      stroke(255);
      strokeWeight(1);
      rect(x - 500, 650, 100, 100);
      rect(x - 400, 650, 100, 100);
      rect(x - 300, 650, 100, 100);
      rect(x - 200, 650, 100, 100);
      rect(x - 100, 650, 100, 100);
      rect(x, 650, 100, 100);

      if (purchased1 > 0) {
        image(copsword, x - 575 + 100 * n1, 675);
        copsword.resize(50, 50);
      }
      if (purchased2 > 0) {
        image(copaxe, x - 575 + 100 * n2, 675);
        copaxe.resize(50, 50);
      }
      if (purchased3 > 0) {
        image(copweapon, x - 575 + 100 * n3, 675);
        copweapon.resize(50, 50);
      }
      if (purchased4 > 0) {
        image(coparmor, x - 575 + 100 * n4, 675);
        coparmor.resize(50, 50);
      }
      if (purchased5 > 0) {
        image(cophelmet, x - 575 + 100 * n5, 675);
        cophelmet.resize(50, 50);
      }
      if (purchased6 > 0) {
        image(copshield, x - 575 + 100 * n6, 675);
        copshield.resize(50, 50);
      }
      if (purchased7 > 0) {
        image(copboots1, x - 575 + 100 * n7, 675);
        copboots1.resize(50, 50);
      }
      if (purchased8 > 0) {
        image(copboots2, x - 575 + 100 * n8, 675);
        copboots2.resize(50, 50);
      }
      if (purchased9 > 0) {
        image(copboots3, x - 575 + 100 * n9, 675);
        copboots3.resize(50, 50);
      }
      if (purchased10 > 0) {
        image(coppotion1, x - 575 + 100 * n10, 675);
        coppotion1.resize(50, 50);
      }
      if (purchased11 > 0) {
        image(coppotion2, x - 575 + 100 * n11, 675);
        coppotion2.resize(50, 50);
      }

      //Gold
      fill(1);
      textSize(25);
      noStroke();
      text("Gold :", x - 500, 50);
      text(int(gold), x - 410, 50);
      gold = gold + 0.02;


      // ally base

      for (let j = 0; j < troops.length; j++) {
        troops[j].deploy();
      }

      text("fountain", -490, 370);
      image(fountain, -500, 390);
      fountain.resize(200, 200);
      let fountaindist = dist(x, y, -500, 390);
      if (fountaindist <= 200) {
        dmg = dmg - 1;
        mn = mn + 1;
      }
      text("shop", 90, 590);
      text("secret shop", 1680, 590);
      text("shop", 4080, 590);
      image(market, 10, 600);
      market.resize(200, 200);

      image(market1, 1600, 600);
      market1.resize(200, 200);

      if(allybase > 0) {
      noFill();
      rect(30, 210, 300, 10);
      fill(0, 200, 0);
      rect(30, 210, allybase, 10);

      image(base, 100, 250);
      base.resize(150, 150);
      }

       if(towerhp > 0) {
         noFill();
      rect(300, 160, 200, 10);
      fill(0, 200, 0);
      rect(300, 160, towerhp, 10);

      image(tower, 350, 200);
      tower.resize(100, 150);
      }
      if(towerhp < 1) {
        image(towerdestroyed1, 350, 200);
        towerdestroyed1.resize(100, 150);
      }

      if(towerhp1 > 0) { 
      noFill();
      rect(300, 460, 200, 10);
      fill(0, 200, 0);
      rect(300, 460, towerhp1, 10);

      image(tower, 350, 500);
      tower.resize(100, 150);
      } 
      
         if(towerhp1 < 1) {
        image(towerdestroyed2, 350, 500);
        towerdestroyed2.resize(100, 150);
      }

      
       if(towerhp2 > 0) {
      noFill();
      rect(1150, 260, 200, 10);
      fill(0, 200, 0);
      rect(1150, 260, towerhp2, 10);
      
      image(tower, 1200, 300);
      tower.resize(100, 150);
      }
      if(towerhp2 < 1) {
        image(towerdestroyed2, 1200, 300);
        towerdestroyed2.resize(100, 150);
      }
      

      // enemy base

      image(market2, 4000, 600);
      market2.resize(200, 200);

      text("fountain", 4600, 370);
      image(fountain1, 4500, 390);
      fountain1.resize(200, 200);

      let fountaindist1 = dist(x, y, 4700, 390);
      if (fountaindist1 <= 200) {
        dmg = dmg + 10;
      }

      if (basehp > 0) {
        noFill();
        rect(3930, 210, 300, 10);
        fill(200, 0, 0);
        rect(3930, 210, basehp, 10);

        image(base1, 4000, 250);
        base1.resize(150, 150);
      }

      if (towerhp3 > 0) {
        noFill();
        rect(3700, 160, 200, 10);
        fill(200, 0, 0);
        rect(3700, 160, towerhp3, 10);

        image(tower1, 3750, 200);
        tower1.resize(100, 150);
      }
        if(towerhp3 < 1) {
        image(towerdestroyed4, 3750, 200);
        towerdestroyed4.resize(100, 150);
      }

      if (towerhp4 > 0) {
        noFill();
        rect(3700, 460, 200, 10);
        fill(200, 0, 0);
        rect(3700, 460, towerhp4, 10);

        image(tower1, 3750, 500);
        tower1.resize(100, 150);
      }
        if(towerhp4 < 1) {
        image(towerdestroyed5, 3750, 500);
        towerdestroyed5.resize(100, 150);
      }

      if (towerhp5 > 0) {
        noFill();
        rect(2750, 260, 200, 10);
        fill(200, 0, 0);
        rect(2750, 260, towerhp5, 10);

        image(tower1, 2800, 300);
        tower1.resize(100, 150);
      }
        if(towerhp5 < 1) {
        image(towerdestroyed6, 2800, 300);
        towerdestroyed6.resize(100, 150);
      }

      //enemy tower

      let d = dist(x, y + 30, 2850, 300);
      if (d < 500 && towerhp5 > 0) {
        ellipse(arrowx, arrowy, 10, 10);
        if (x < arrowx) {
          arrowx = arrowx - 10;
        } else {
          arrowx = arrowx + 10;
        }
        if (y + 30 < arrowy) {
          arrowy = arrowy - 10;
        } else {
          arrowy = arrowy + 10;
        }
        let ad = dist(x, y + 30, arrowx, arrowy);
        if (ad < 30) {
          arrowx = 2800;
          arrowy = 300;
          dmg = dmg + 15/bonusdefense;
        }
      }


      let d1 = dist(x, y + 30, 3800, 200);
      if (d1 < 500 && towerhp3 > 0) {
        ellipse(arrowx1, arrowy1, 10, 10);
        if (x < arrowx1) {
          arrowx1 = arrowx1 - 10;
        } else {
          arrowx1 = arrowx1 + 10;
        }
        if (y + 30 < arrowy1) {
          arrowy1 = arrowy1 - 10;
        } else {
          arrowy1 = arrowy1 + 10;
        }
        let ad1 = dist(x, y + 30, arrowx1, arrowy1);
        if (ad1 < 30) {
          arrowx1 = 3750;
          arrowy1 = 200;
          dmg = dmg + 15 / bonusdefense;
        }
      }


      let d2 = dist(x, y + 30, 3800, 500);
      if (d2 < 500 && towerhp4 > 0) {
        ellipse(arrowx2, arrowy2, 10, 10);
        if (x < arrowx2) {
          arrowx2 = arrowx2 - 10;
        } else {
          arrowx2 = arrowx2 + 10;
        }
        if (y + 30 < arrowy2) {
          arrowy2 = arrowy2 - 10;
        } else {
          arrowy2 = arrowy2 + 10;
        }
        let ad2 = dist(x, y + 30, arrowx2, arrowy2);
        if (ad2 < 30) {
          arrowx2 = 3750;
          arrowy2 = 500;
          dmg = dmg + 15 / bonusdefense;
        }
      }

      //attacking enemy's tower

      let d10 = dist(x, y, 2800, 375);
      let d11 = dist(x, y, 3750, 575);
      let d12 = dist(x, y, 3750, 275);
      let d13 = dist(x, y, 4075, 275);

      if (d10 < 100 && attackingdamage > 0) {
        towerhp5 = towerhp5 - 0.2 - bonusattack / 3;
      }
      if (d11 < 100 && attackingdamage > 0) {
        towerhp4 = towerhp4 - 0.2 - bonusattack / 3;
      }
      if (d12 < 100 && attackingdamage > 0) {
        towerhp3 = towerhp3 - 0.2 - bonusattack / 3;
      }
      if (d13 < 100 && attackingdamage > 0 && towerhp3 <= 0 && towerhp4 <= 0 && towerhp5 <= 0) {
        basehp = basehp - 0.2 - bonusattack / 3;
      }

      //ally's tower
      let allytower = dist(atkenx, atkeny, x1, y1);
      let allytower1 = dist(atkenx1, atkeny1, x1, y1);
      let allytower2 = dist(atkenx2, atkeny2, x1, y1);
      let d30 = dist(x1 + 30, y1 + 30, 1250, 375);
      
      if (d30 <= 500 && enemyrespond == 20 && towerhp2 > 0) {
        ellipse(atkenx, atkeny, 10, 10);
        if (atkenx <= x1) {
          atkenx = atkenx + 10;
        } else {
          atkenx = atkenx - 10;
        }
        if (atkeny <= y1) {
          atkeny = atkeny + 10;
        } else {
          atkeny = atkeny - 10;
        }
        if (allytower <= 75) {
          enemyhp = enemyhp - 10/enemylevel;
          atkenx = 1250;
          atkeny = 300;
        }
      }

      let d31 = dist(x1 + 30, y1 + 30, 400, 275);
      if (d31 <= 500 && enemyrespond == 20 && towerhp > 0) {
        ellipse(atkenx1, atkeny1, 10, 10);
        if (atkenx1 <= x1) {
          atkenx1 = atkenx1 + 10;
        } else {
          atkenx1 = atkenx1 - 10;
        }
        if (atkeny1 <= y1) {
          atkeny1 = atkeny1 + 10;
        } else {
          atkeny1 = atkeny1 - 10;
        }
        if (allytower1 <= 75) {
          enemyhp = enemyhp - 10/enemylevel;
          atkenx1 = 400;
          atkeny1 = 200;
        }
      }

      let d32 = dist(x1 + 30, y1 + 30, 400, 575);
      if (d32 <= 500 && enemyrespond == 20 && towerhp1 > 0) {
        ellipse(atkenx2, atkeny2, 10, 10);
        if (atkenx2 <= x1) {
          atkenx2 = atkenx2 + 10;
        } else {
          atkenx2 = atkenx2 - 10;
        }
        if (atkeny2 <= y1) {
          atkeny2 = atkeny2 + 10;
        } else {
          atkeny2 = atkeny2 - 10;
        }
        if (allytower2 <= 75) {
          enemyhp = enemyhp - 10/enemylevel;
          atkenx2 = 400;
          atkeny2 = 500;
        }
      }




      //enemy's hp and mana
      noFill();
      stroke(1);
      rect(x1, y1 - 30, 150, 10);
      fill(255, 0, 0);
      rect(x1, y1 - 30, enemyhp, 10);
      fill(1);
      textSize(10);
      text("HP", x1 - 30, y1 - 20);
      if(enemyhp >= 150) {
        enemyhp = 150;
      }
       if(enemyhp <= 0 && getexp1 < 1) {
        gold = gold + 1000;
        exp1 = exp1 + 100;
      }
      if(enemyhp <= 0) {
        x1 = 4500;
        y1 = 1000;
        enemyrespond = enemyrespond - 0.02;
        getexp1 = 1;
      }
      if(enemyrespond <= 0) {
        enemyhp = 150;
        enemyrespond = 20;
        getexp1 = 0;
         x1 = 4500;
        y1 = 500;
      }

      noFill();
      rect(x1, y1 - 20, 150, 10);
      fill(0, 0, 200);
      rect(x1, y1 - 20, enemymana, 10);
      fill(1);
      text("MN", x1 - 30, y1 - 10);
      textSize(20);
      text("Bot", x1 + 35, y1 - 35);
      enemymana = enemymana + 0.5;
      if(enemymana >= 150) {
        enemymana = 150;
      }

      if (enemyhp >= 150) {
        enemyhp = 150;
      }
      if (enemymana >= 150) {
        enemymana = 150;
      }
      
      //enemy attack
      
      let endistance = dist(x, y, x1, y1);
      if(endistance <= 75) {
        enemystationary = 1;
        enemyattacks = enemyattacks + 1;
      }
        if(enemyattacks > 0 && enemyattacks <= 5) {
          image(enemyattack, x1, y1);
          enemyattack.resize(w, h);
        }
         if(enemyattacks > 5 && enemyattacks <= 10) {
          image(enemyattack1, x1, y1);
          enemyattack1.resize(w, h);
           dmg = dmg + 0.1 + 0.01*enemylevel;
         }
        if(enemyattacks >= 10) {
          enemyattacks = 1;
        } else { 
        enemystationary = 0;
        enemyattacks = 0;
      }
      
      
      //enemy skills
      
   if(enemylevel >= 2 && enemymana >= 60 && endistance <= 120 && enemyhp > 0) {
        enemyrushing = 1;
     enemymana = enemymana - 3;
     
      }
        if(enemyrushing > 0) {
       enemyrushing1 = enemyrushing1 + 1;
          enemystationary = 1;
              dmg = dmg + (0.1 + 0.2*enemylevel)/bonusdefense;
        }
      if(enemyrushing1 > 1 && enemyrushing1 <= 10) {
           image(enemyrush, x1, y1);
        enemyrush.resize(w, h);
        if(x1 >= x) {
          x1 = x1 - 3;
        } else {
          x1 = x1 + 3;
        }
          if(y1 >= y) {
          y1 = y1 - 3;
        } else {
          y1 = y1 + 3;
        }
      }
      if(enemyrushing1 >= 10) {
        enemyrushing = 0;
        enemyrushing1 = 0;
        enemystationary = 0;
      }
      
   if(enemylevel >= 5 && enemymana >= 30 && endistance <= 75 && enemyhp > 0) {
     enemyhp = enemyhp + 0.1;
     enemyskill = 1;
     dmg = dmg + (0.2 + 0.3*enemylevel)/bonusdefense;
     enemymana = enemymana - 0.2;
   }
      if(enemyskill > 0) {
        enemyskill1 = enemyskill1 + 1;
      }
      if(enemyskill1 > 0 && enemyskill1 <= 3) {
        image(aura1, x1, y1);
        aura1.resize(w, h);
      }
       if(enemyskill1 >= 3 && enemyskill1 <= 6) {
        image(aura2, x1, y1);
        aura2.resize(w, h);
      }
      if(enemyskill1 > 6) {
        enemyskill1 = 0;
        enemyskill = 0;
      }
      
        if(enemylevel >= 8 && enemymana >= 70 && endistance <= 150 && enemyhp > 0) {
          enemyult = 1;
          enemymana = enemymana - 70;
        }
      if(enemyult > 0) {
        enemyult1 = enemyult1 + 1;
         dmg = dmg + (1 + 0.5*enemylevel)/bonusdefense;
      }
      if(enemyult1 > 0 && enemyult1 <= 5) {
        image(thunder, x, y - 600);
        thunder.resize(200, 600);
      }
        if(enemyult1 >= 5 && enemyult1 <= 10) {
        image(thunder1, x, y - 600);
        thunder1.resize(200, 600);
      }
      if(enemyult1 >= 10) {
        enemyult = 0;
        enemyult1 = 0;
      }
      
      // enemy level
      textSize(20);
      text("level", x1 + 80, y1 - 35);
      text(enemylevel, x1 + 130, y1 - 35);
      exp2 = exp2 + 0.2;
      if(exp2 > 500) {
        exp2 = 0;
        enemylevel = enemylevel + 1;
        enemyspeed = enemyspeed + 0.2;
        if(enemyspeed > 3) {
          enemyspeed = 3;
        }
      }
  
      //enemy movement

      let thedistance = map(noise(enemyrandom), 0, 1, 1500, 3000);
       let thedistance1 = map(noise(enemyrandom1), 0, 1, 1500, 3000);
      let therandommover = map(noise(enemyrandom2), 0, 1, -5, 5);
      
      enemyrandom = enemyrandom + 0.03;
      enemyrandom1 = enemyrandom1 + 0.03;
      enemyrandom2 = enemyrandom2 + 0.03;
      if (enemyhp >= 30 && enemyrespond == 20 && enemystationary < 1 && enemylevel <= 7) {
        if(x1 <= thedistance) {
          x1 = x1 + 5 + enemyspeed;
          y1 = y1 + therandommover;
           enemymove1 = enemymove1 + 1;
        enemymove = 0;
        }
         if(x1 >= thedistance) {
          x1 = x1 - 5 - enemyspeed;
            y1 = y1 + therandommover;
           enemymove = enemymove + 1;
        enemymove1 = 0;
        }
        }
     // if (enemyhp >= 30 && enemyrespond == 20 && enemystationary < 1 && enemylevel > 5) {
     //   x1 = x1 - 5 - enemyspeed;
     //    if(x1 <= thedistance1) {
     //      x1 = x1 + 5 + enemyspeed;
     //      y1 = y1 + therandommover;
     //       enemymove1 = enemymove1 + 1;
     //    enemymove = 0;
     //    }
     //     if(x1 >= thedistance1) {
     //      x1 = x1 - 5 - enemyspeed;
     //        y1 = y1 + therandommover;
     //       enemymove = enemymove + 1;
     //    enemymove1 = 0;
     //    }
     // }
      
      //enemy attack tower
      
      
      if (enemyhp >= 30 && enemyrespond == 20 && enemystationary < 1 && enemylevel >= 8) {
        
        //enemy invade first tower
        
        if(x1 > 1230 && towerhp2 >= 0) {
            x1 = x1 - 5; 
          if(y1 >= 375) {
            y1 = y1 - 1;
          } else {
            y1 = y1 + 1;
          }
            enemymove = enemymove + 1;
        enemymove1 = 0;
        }
         if(x1 <= 1230 && towerhp2 >= 0) {
           enemystationary = 1;
           // enemymove = 0;
           // enemymove1 = 0;
             if(y1 >= 375) {
            y1 = y1 - 1;
          } else {
            y1 = y1 + 1;
          }
           enemyatking = 1
           towerhp2 = towerhp2 - 0.05 - enemylevel/10;
        }  
        if(towerhp2 <= 0) {
          demolish1 = 1;
        }
        
        //enemy invade second tower
        
         if(x1 > 380 && towerhp >= 0 && demolish1 == 1) {
            x1 = x1 - 5; 
            if(y1 >= 275) {
            y1 = y1 - 1;
          } else {
            y1 = y1 + 1;
          }
          
             enemymove = enemymove + 1;
        enemymove1 = 0;
        }
         if(x1 <= 380 && towerhp >= 0 && demolish1 == 1) {
           enemystationary = 1;
           //  enemymove = 0;
           // enemymove1 = 0;
           enemyatking = 1;
            if(y1 >= 275) {
            y1 = y1 - 1;
          } else {
            y1 = y1 + 1;
          }
           towerhp = towerhp - 0.1 - enemylevel/10;
        }
        if(towerhp <= 1) {
          demolish2 = 1;
            y1 = y1 + 5;
             if(y1 >= 575) {
               y1 = 575;
             }
          
             enemymove = enemymove + 1;
        enemymove1 = 0;
        }
        
         //enemy invade third tower
        
         if(x1 >= 380 && towerhp1 >= 0 && demolish2 > 0) {
      x1 = x1 - 5;
        }
         if(x1 <= 380 && towerhp1 >= 0 && demolish2 > 0 && y1 >= 575) {
           enemystationary = 1;
           //  enemymove = 0;
           // enemymove1 = 0;
            enemyatking = 1;
            y1 = y1 + 5;
             if(y1 >= 575) {
               y1 = 575;
             }
           towerhp1 = towerhp1 - 0.1 - enemylevel/10;
        }
        if(towerhp1 <= 0) {
          demolish3 = 1;
          y1 = y1 + 5;
             if(y1 >= 375) {
               y1 = 375;
             }
        }
        
        //enemy invade base
        if(x1 >= 175 && allybase >= 0 && demolish3 == 1) {
          x1 = x1 - 5;
           enemymove = enemymove + 1;
         y1 = y1 + 5;
             if(y1 >= 375) {
               y1 = 375;
             }
        enemymove1 = 0;
        }
          if(x1 <= 175 && allybase >= 0 && demolish3 == 1) {
             enemystationary = 1;
           //  enemymove = 0;
           // enemymove1 = 0;
           enemyatking = 1;
             y1 = y1 + 5;
             if(y1 >= 375) {
               y1 = 375;
             }
           allybase = allybase - 0.1 - enemylevel/10; 
          }
      }
      
      if(enemyatking > 0) {
        enemyatks = enemyatks + 1;
      }
      if(enemyatks > 0 && enemyatks <= 10) {
        image(enemyatk, x1, y1);
        enemyatk.resize(w, h);
      }
          if(enemyatks >= 10 && enemyatks <= 20) {
        image(enemyatk1, x1, y1);
        enemyatk1.resize(w, h);
      }
      if(enemyatks >= 20) {
        enemyatks = 0;
        enemyatking = 0;
      }
      
      
      
      
      
      if (enemyhp <= 30 && enemyrespond == 20) {
        x1 = x1 + 5 + enemyspeed;
        enemymove1 = enemymove1 + 1;
        enemymove = 0;
        if(y1 >= 450) {
        y1 = y1 - 1;
        } else {
          y1 = y1 + 1;
        }
      }
      if (enemymove > 1 && enemymove <= 5 && enemystationary < 1) {
        image(enemy1, x1, y1);
        enemy1.resize(w, h);
      }
      if (enemymove >= 5 && enemymove <= 10 && enemystationary < 1) {
        image(enemy2, x1, y1);
        enemy2.resize(w, h);
      }
      if (enemymove >= 10 && enemyrespond == 20 && enemystationary < 1) {
        enemymove = 1;
      }


      if (enemymove1 > 1 && enemymove1 <= 5) {
        image(enemy3, x1, y1);
        enemy3.resize(w, h);
      }
      if (enemymove1 >= 5 && enemymove1 <= 10) {
        image(enemy4, x1, y1);
        enemy4.resize(w, h);
      }
      if (enemymove1 >= 10 && enemyrespond == 20) {
        enemymove1 = 1;
      }

      let enemyfountdist = dist(x1, y1, 4550, 390);
      if (enemyfountdist <= 300 && enemyhp < 150) {
        thedurationhealing = thedurationhealing + 1;
      }
      if(thedurationhealing > 1) {
        x1 = 4600;
        enemyhp = enemyhp + 1;
        enemymana = enemymana + 1;
      }
       if(enemyfountdist > 300 || enemyhp > 150) {
         thedurationhealing = 0;
       }


      // enemy limit walking

      if (x1 < -600) {
        x1 = -600;
      }
      if (x1 > 4700) {
        x1 = 4700;
      }
      if (y1 > height - 50) {
        y1 = height - 50;
      }
      if (y1 < 50) {
        y1 = 50;
      }
      
      //skill and attack cast to enemy
      let allydist = dist(x, y, x1, y1);
        if(allydist <= 80 && keyIsPressed && key == 'l') {
          enemyhp = enemyhp - 0.1 - bonusattack/9;
        }
      
     
    
    if (allydist < 150 && skill >= 3) {
        enemyhp = enemyhp - 0.3 - bonusattack/6;
    }
    if (allydist < 200 && ult1 > 0) {
       enemyhp = enemyhp - 0.5 - bonusattack/5;
    }
    if (allydist < 50 && takaini1 >= 6) {
        enemyhp = enemyhp - 1 - bonusattack/6;
    }
    if (allydist < 100 && takault1 >= 30) {
       enemyhp = enemyhp - 1 - bonusattack/3;
    }
    if (allydist < 75 && bladeskill1 >= 10) {
       enemyhp = enemyhp - 2 - bonusattack/6;
    }
    if (allydist < 100 && bladeskill3 >= 2) {
       enemyhp = enemyhp - 2 - bonusattack/6;
    }

    if (allydist < 75 && bladeskill6 >= 5 && bladeskill6 <= 30) {
     enemyhp = enemyhp - 1 - bonusattack/6;
    }
    let bladeultdist5 = dist(x + 50, y, this.a1, this.b1);
    let bladeultdist6 = dist(x + 150, y, this.a1, this.b1);
    let bladeultdist7 = dist(x + 300, y, this.a1, this.b1);
    if (bladeultdist5 <= 75 && bladeskill6 >= 15) {
      enemyhp = enemyhp - 1 - bonusattack/3;
      dmg = dmg - 0.2 - bonusattack/5;
    }
    if (bladeultdist6 <= 75 && bladeskill6 >= 17) {
       enemyhp = enemyhp - 1 - bonusattack/3;
       dmg = dmg - 0.2 - bonusattack/5;
    }
    if (bladeultdist7 <= 75 && bladeskill6 >= 21) {
      enemyhp = enemyhp - 1 - bonusattack/3;
       dmg = dmg - 0.2 - bonusattack/5;
    }
      
      
      
      
      
      
      
      


      // hp and mana
      stroke(1);
      strokeWeight(1);
      noFill();
      rect(x - 30, y - 20, 150 + bonushp, 10);
      fill(0, 200, 0);
      rect(x - 30, y - 20, 150 - dmg + bonushp, 10);
      if(dmg < 150 + bonushp) {
      dmg = dmg - hpregen;
      }
      if (dmg <= 0) {
        dmg = 0;
      } 
      textSize(50);
      fill(1);
      if (dmg >= 150 + bonushp) {
        text("Revive in", x - 700, 200);
        text(int(duration), x - 410, 200);
        duration = duration - 0.02;
        x = 10;
        y = 500;
        dmg = 150 + bonushp;
      }
      if (duration <= 0) {
        dmg = 0;
        duration = 20;
      }
      

      noFill();
      rect(x - 30, y - 10, 150 + bonusmana, 10);
      fill(0, 0, 200);
      rect(x - 30, y - 10, mn + bonusmana, 10);
      mn = mn + 0.05 + mnregen;
      if (mn + bonusmana >= 150 + bonusmana) {
        mn = 150;
      }
      fill(1);
      textSize(10);
      text("HP", x - 50, y - 13);
      text("Mana", x - 60, y - 3);



      for (let i = 0; i < trees.length; i++) {
        trees[i].plant();
      }
      //limit walking
      if (x < -600) {
        x = -600;
      }
      if (x > 4600) {
        x = 4600;
      }
      if (y > height - 50) {
        y = height - 50;
      }
      if (y < 0) {
        y = 0;
      }
      if (choose1 > 0 && duration == 20) {
        if (stationary < 1) {
          image(knight, x, y);
          knight.resize(w, h);
        }

        // knight's movement
        if (keyIsPressed && key == 'w') {
          y = y - bootspeed;
          move = 1;
        } else {
          move = 0;
        }

        if (keyIsPressed && key == 'd') {
          x = x + bootspeed;
          move1 = 1;
        } else {
          move1 = 0;
        }

        if (keyIsPressed && key == 'a') {
          x = x - bootspeed;
          move2 = 1;
        } else {
          move2 = 0;
        }

        if (keyIsPressed && key == 's') {
          y = y + bootspeed;
          move3 = 1;
        } else {
          move3 = 0;
        }

        if (move == 1 || move1 == 1 || move3 == 1) {
          mover = mover + 1;
        } else {
          mover = 0;
        }

        if (mover > 1 && mover <= 10) {
          image(knight1, x, y);
          knight1.resize(w, h);
        }
        if (mover >= 10 && mover <= 20) {
          image(knight, x, y);
          knight.resize(w, h);
        }
        if (mover >= 20 && mover <= 30) {
          image(knight2, x, y);
          knight2.resize(w, h);
        }
        if (mover >= 30) {
          mover = 1;
        }


        if (move2 == 1) {
          mover1 = mover1 + 1;
        } else {
          mover1 = 0;
        }

        if (mover1 > 1 && mover1 <= 10) {
          image(knight3, x, y);
          knight3.resize(w, h);
        }
        if (mover1 >= 10 && mover1 <= 20) {
          image(knight6, x, y);
          knight6.resize(w, h);
        }
        if (mover1 >= 20 && mover1 <= 30) {
          image(knight5, x, y);
          knight5.resize(w, h);
        }
        if (mover1 >= 30) {
          mover1 = 1;
        }
        if (move == 1 || move1 == 1 || move2 == 1 || move3 == 1) {
          stationary = 1;
        } else {
          stationary = 0;
        }
        //attack
        if (attack > 0) {
          attacking = attacking + 1;
          stationary = 1;
        }
        if (attacking > 0 && attacking <= 3) {
          image(attack1, x + 1, y);
          attack1.resize(w, h);
        }
        if (attacking >= 3 && attacking <= 6) {
          image(attack2, x + 1, y);
          attack2.resize(w, h);
        }
        if (attacking >= 6 && attacking <= 9) {
          image(attack3, x + 1, y);
          attack3.resize(w, h);
        }
        if (attacking >= 9) {
          attacking = 0;
          attack = 0;
        }
        //skill

        if (firstskill > 0) {
          skill = skill + 1;
          stationary = 1;
          bootspeed = 0;
        }
        if (skill > 0 && skill <= 3) {
          image(skill1, x - 20, y - 10);
          skill1.resize(w + 39, h + 39);
        }
        if (skill >= 3 && skill <= 6) {
          image(skill2, x - 10, y);
          skill2.resize(w + 39, h + 39);
        }
        if (skill >= 6 && skill <= 9) {
          image(skill3, x - 20, y - 10);
          skill3.resize(w + 39, h + 39);
        }
        if (skill >= 9 && skill <= 12) {
          image(skill5, x + 30, y - 10);
          skill5.resize(w + 39, h + 39);
          image(skill3, x - 20, y - 10);
          skill3.resize(w + 39, h + 39);
        }
        if (skill >= 12 && skill <= 15) {
          image(skill6, x + 60, y - 10);
          skill6.resize(w + 39, h + 39);
          image(skill3, x - 20, y - 10);
          skill3.resize(w + 39, h + 39);
        }
        if (skill >= 15 && skill <= 18) {
          image(skill7, x + 100, y - 10);
          skill7.resize(w + 39, h + 39);
          image(skill3, x - 20, y - 10);
          skill3.resize(w + 39, h + 39);
        }
        if (skill >= 18) {
          skill = 0;
          firstskill = 0;
          stationary = 0;
          bootspeed = 5;
        }


        if (skillheal > 0) {
          dmg = dmg - 10;
          skillheal = 0;
          healtext = 1;
        }
        if (healtext > 0) {
          healtext1 = healtext1 + 1;
          textSize(30);
          text("+50 HP", x + 50, y + 30);
        }
        if (healtext1 > 50) {
          healtext1 = 0;
          healtext = 0;
        }
        if (ult > 0) {
          stationary = 1;
          ult1 = ult1 + 1;
          bootspeed = 0;
        }
        if (ult1 > 0 && ult1 <= 10) {
          image(knightult, x, y);
          knightult.resize(w, h);
        }
        if (ult1 >= 10 && ult1 <= 60) {
          image(knightult1, x, y);
          knightult1.resize(w, h);
        }
        if ((ult1 >= 20 && ult1 <= 30) || (ult1 >= 40 && ult1 <= 50)) {
          image(knightult2, x - 50, y - 50);
          knightult2.resize(w * 3, h * 3);
        }
        if ((ult1 >= 30 && ult1 <= 40) || (ult1 >= 50 && ult1 <= 60)) {
          image(knightult3, x - 50, y - 50);
          knightult3.resize(w * 3, h * 3);
        }
        if (ult1 >= 60) {
          ult = 0;
          ult1 = 0;
          stationary = 0;
          bootspeed = 5;
        }

      }

      //taka

      if (choose2 > 0 && duration == 20) {

        //movement

        if (takastationary < 1) {
          image(taka1, x, y);
          taka1.resize(w, h);
        }

        if (keyIsPressed && key == 'd') {
          x = x + bootspeed;
          takamove = 1;
        } else {
          takamove = 0;
        }
        if (keyIsPressed && key == 'a') {
          x = x - bootspeed;
          takamove1 = 1;
        } else {
          takamove1 = 0;
        }
        if (keyIsPressed && key == 'w') {
          y = y - bootspeed;
          takamove2 = 1;
        } else {
          takamove2 = 0;
        }
        if (keyIsPressed && key == 's') {
          y = y + bootspeed;
          takamove3 = 1;
        } else {
          takamove3 = 0;
        }




        if (takamove > 0 || takamove1 > 0 || takamove2 > 0 || takamove3 > 0) {
          takastationary = 1;
        } else {
          takastationary = 0;
        }


        if (takamove > 0 || takamove2 > 0 || takamove3 > 0) {
          takamover = takamover + 1;
        } else {
          takamover = 0;
        }
        if (takamover > 0 && takamover <= 5) {
          image(taka2, x, y);
          taka2.resize(w, h);
        }
        if (takamover >= 5 && takamover <= 10) {
          image(taka3, x, y);
          taka3.resize(w, h);
        }
        if (takamover >= 10) {
          takamover = 1;
        }


        if (takamove1 > 0) {
          takamover1 = takamover1 + 1;
        } else {
          takamover1 = 0;
        }
        if (takamover1 > 0 && takamover1 <= 5) {
          image(taka5, x, y);
          taka5.resize(w, h);
        }
        if (takamover1 >= 5 && takamover1 <= 10) {
          image(taka6, x, y);
          taka6.resize(w, h);
        }
        if (takamover1 >= 10) {
          takamover1 = 1;
        }



        if (takaattack > 0) {
          takaatk = takaatk + 1;
          takastationary = 1;
        }
        if (takaatk > 0 && takaatk <= 5) {
          image(takaskill1, x, y);
          takaskill1.resize(w, h);
        }
        if (takaatk >= 5 && takaatk <= 10) {
          image(takaskill2, x, y);
          takaskill2.resize(w, h);
        }
        if (takaatk >= 10 && takaatk <= 15) {
          image(takaskill3, x, y);
          takaskill3.resize(w, h);
        }
        if (takaatk >= 15) {
          takaatk = 0;
          takaattack = 0;
          takastationary = 0;
        }


        if (takaini > 0) {
          takaini1 = takaini1 + 1;
          takastationary = 1;
        }
        if (takaini1 > 0 && takaini1 <= 3) {
          image(takaskill5, x, y - 10);
          takaskill5.resize(w, h);
        }
        if (takaini1 >= 3 && takaini1 <= 6) {
          image(takaskill6, x, y - 30);
          takaskill6.resize(w, h);
        }
        if (takaini1 >= 6 && takaini1 <= 9) {
          image(takaskill7, x, y - 10);
          takaskill7.resize(w, h);
        }
        if (takaini1 >= 9 && takaini1 <= 12) {
          image(takaskill8, x, y + 30);
          takaskill8.resize(w, h);
        }
        if (takaini1 >= 12) {
          takaini1 = 0;
          takaini = 0;
          takastationary = 1;
        }


        if (takault > 0) {
          takault1 = takault1 + 1;
          takastationary = 1;
        }
        if (takault1 > 0 && takault1 <= 30) {
          image(takaskill9, x, y);
          takaskill9.resize(w, h);
        }
        if (takault1 >= 30 && takault1 <= 35) {
          x = x + 100;
          image(takaskill10, x, y);
          takaskill10.resize(w, h);
        }
        if (takault1 >= 35 && takault1 <= 50) {
          image(takaskill11, x, y);
          takaskill11.resize(w, h);
        }
        if (takault1 >= 50) {
          takault1 = 0;
          takault = 0;
          takastationary = 0;
        }

        if (hide > 0) {
          hide1 = hide1 + 1;
          takastationary = 1;
          dmg = dmg - 0.2 - bonusattack/10;
        }
        if (hide1 > 0 && hide1 <= 10) {
          image(disguise, x - 19, y - 19);
          disguise.resize(w * 1.5, h * 1.5);
        }
        if (hide1 > 10 && hide1 <= 100) {
          image(disguise1, x - 19, y - 19);
          disguise1.resize(w * 1.5, h * 1.5);
        }
        if (hide1 >= 100) {
          hide = 0;
          hide1 = 0;
          takastationary = 0;
        }

      }
      if (choose3 > 0 && duration == 20) {

        if (bladestationary < 1) {
          image(blade1, x, y);
          blade1.resize(w, h);
        }
        if (keyIsPressed && key == 'd') {
          x = x + bootspeed;
          blademove = 1;
        } else {
          blademove = 0;
        }
        if (keyIsPressed && key == 'a') {
          x = x - bootspeed;
          blademove1 = 1;
        } else {
          blademove1 = 0;
        }
        if (keyIsPressed && key == 'w') {
          y = y - bootspeed;
          blademove2 = 1;
        } else {
          blademove2 = 0;
        }

        if (keyIsPressed && key == 's') {
          y = y + bootspeed;
          blademove3 = 1;
        } else {
          blademove3 = 0;
        }

        if (blademove > 0 || blademove1 > 0 || blademove2 > 0 || blademove3 > 0) {
          bladestationary = 1;
        } else {
          bladestationary = 0;
        }

        if (blademove > 0 || blademove2 > 0 || blademove3 > 0) {
          blademoving = blademoving + 1;
        } else {
          blademoving = 0;
        }
        if (blademoving > 0 && blademoving <= 5) {
          image(blade2, x, y);
          blade2.resize(w, h);
        }
        if (blademoving > 5 && blademoving <= 10) {
          image(blade3, x, y);
          blade3.resize(w, h);
        }
        if (blademoving >= 10) {
          blademoving = 1;
        }


        if (blademove1 > 0) {
          blademoving1 = blademoving1 + 1;
        } else {
          blademoving1 = 0;
        }
        if (blademoving1 > 0 && blademoving1 <= 5) {
          image(blade5, x, y);
          blade5.resize(w, h);
        }
        if (blademoving1 > 5 && blademoving1 <= 10) {
          image(blade6, x, y);
          blade6.resize(w, h);
        }
        if (blademoving1 >= 10) {
          blademoving1 = 1;
        }




        if (bladeatk2 > 0) {
          bladeatk3 = bladeatk3 + 1;
          bladestationary = 1;

        }
        if (bladeatk3 > 0 && bladeatk3 <= 5) {
          image(bladeatk, x, y);
          bladeatk.resize(w, h);
        }
        if (bladeatk3 > 5 && bladeatk3 <= 13) {
          image(bladeatk1, x, y);
          bladeatk1.resize(w, h);
        }
        if (bladeatk3 >= 13) {
          bladeatk3 = 0;
          bladeatk2 = 0;
          bladestationary = 0;
        }


        if (bladeskill > 0) {
          bladeskill1 = bladeskill1 + 1;
          bladestationary = 1;
        }
        if (bladeskill1 > 0 && bladeskill1 <= 20) {
          x = x + 10;
          y = y - 3;
          image(bladejump, x, y);
          bladejump.resize(w, h);
        }
        if (bladeskill1 > 20 && bladeskill1 <= 30) {
          x = x + 1;
          y = y + 6;
          image(bladejump1, x, y);
          bladejump1.resize(w * 1.3, h * 1.3);
        }
        if (bladeskill1 >= 30) {
          bladeskill = 0;
          bladeskill1 = 0;
          bladestationary = 0;
        }



        if (bladeskill2 > 0) {
          bladeskill3 = bladeskill3 + 1;
          bladestationary = 1;
        }
        if (bladeskill3 > 0 && bladeskill3 <= 20) {
          x = x + 20;
          image(bladerush, x, y);
          bladerush.resize(w, h);
        }
        if (bladeskill3 >= 20) {
          bladeskill2 = 0;
          bladeskill3 = 0;
          bladestationary = 0;
        }


        if (bladeskill5 > 0) {
          bladeskill6 = bladeskill6 + 1;
          bladestationary = 1;
        }
        if (bladeskill6 > 0 && bladeskill6 <= 5) {
          image(bladeult, x, y);
          bladeult.resize(w, h);
        }
        if (bladeskill6 >= 5 && bladeskill6 <= 10) {
          image(bladeult1, x, y);
          bladeult1.resize(w, h);
        }
        if (bladeskill6 >= 10 && bladeskill6 <= 30) {
          image(bladeult2, x, y);
          bladeult2.resize(w, h);
        }
        if (bladeskill6 >= 15 && bladeskill6 <= 17) {
          image(bladeult3, x + 50, y);
          bladeult3.resize(w * 1.5, h * 1.5);
        }
        if (bladeskill6 >= 17 && bladeskill6 <= 19) {
          image(bladeult3, x + 150, y);
          bladeult3.resize(w * 1.5, h * 1.5);
        }
        if (bladeskill6 >= 21 && bladeskill6 <= 30) {
          image(bladeult3, x + 300, y);
          bladeult3.resize(w * 1.5, h * 1.5);
        }
        if (bladeskill6 >= 30) {
          bladeskill5 = 0;
          bladeskill6 = 0;
          bladestationary = 0;
        }

      }

      // market

      let ranging1 = dist(x, y, 100, 700);
      let ranging2 = dist(x, y, 1700, 700);
      let ranging3 = dist(x, y, 4100, 700);

      if (ranging1 < 100 || ranging2 < 100 || ranging3 < 100) {
        background(50);
        noFill()
        stroke(255);
        fill(100, color6);
        rect(x - 500, 100, 200, 100);
        fill(100, color7);
        rect(x - 200, 100, 200, 100);
        fill(100, color8);
        rect(x + 100, 100, 200, 100);
        fill(100, color9);
        rect(x + 400, 100, 200, 100);

        fill(255);
        textSize(50);
        text("Weapon", x - 490, 160);
        text("Defense", x - 190, 160);
        text("Agility", x + 120, 160);
        text("Potion", x + 420, 160);

        if (mouseX > width / 2 - 500 && mouseX < width / 2 - 300 && mouseY > 100 && mouseY < 200) {
          color6 = 255;
        } else {
          color6 = 0;
        }
        if (mouseX > width / 2 - 200 && mouseX < width / 2 && mouseY > 100 && mouseY < 200) {
          color7 = 255;
        } else {
          color7 = 0;
        }
        if (mouseX > width / 2 + 100 && mouseX < width / 2 + 300 && mouseY > 100 && mouseY < 200) {
          color8 = 255;
        } else {
          color8 = 0;
        }
        if (mouseX > width / 2 + 400 && mouseX < width / 2 + 600 && mouseY > 100 && mouseY < 200) {
          color9 = 255;
        } else {
          color9 = 0;
        }




        if (mouseX > width / 2 - 500 && mouseX < width / 2 - 300 && mouseY > 100 && mouseY < 200 && mouseIsPressed) {
          shopping1 = 1;
          shopping2 = 0;
          shopping3 = 0;
          shopping5 = 0;
        }
        if (mouseX > width / 2 - 200 && mouseX < width / 2 && mouseY > 100 && mouseY < 200 && mouseIsPressed) {
          shopping1 = 0;
          shopping2 = 1;
          shopping3 = 0;
          shopping5 = 0;
        }
        if (mouseX > width / 2 + 100 && mouseX < width / 2 + 300 && mouseY > 100 && mouseY < 200 && mouseIsPressed) {
          shopping1 = 0;
          shopping2 = 0;
          shopping3 = 1;
          shopping5 = 0;
        }
        if (mouseX > width / 2 + 400 && mouseX < width / 2 + 600 && mouseY > 100 && mouseY < 200 && mouseIsPressed) {
          shopping1 = 0;
          shopping2 = 0;
          shopping3 = 0;
          shopping5 = 1;
        }
        //items

        noFill();
        stroke(255);
        textSize(20);
        if (shopping1 > 0) {
          rect(x - 500, 300, 100, 100);
          image(sword, x - 500, 300);
          sword.resize(100, 100);
          rect(x - 400, 300, 600, 100);
          text("+150 damage", x - 300, 330);
          text("cost: 5000 gold", x - 300, 360);


          rect(x - 500, 400, 100, 100);
          image(axe, x - 500, 400);
          axe.resize(100, 100);
          rect(x - 400, 400, 600, 100);
          text("+50 damage, +30% piercing", x - 300, 430);
          text("cost: 3000 gold", x - 300, 460);


          rect(x - 500, 500, 100, 100);
          image(weapon, x - 500, 500);
          weapon.resize(100, 100);
          rect(x - 400, 500, 600, 100);
          text("+100 damage + 20% piercing", x - 300, 530);
          text("cost: 3500 gold", x - 300, 560);
        }



        if (shopping2 > 0) {
          rect(x - 500, 300, 100, 100);
          image(armor, x - 500, 300);
          armor.resize(100, 100);
          rect(x - 400, 300, 600, 100);
          text("+100 defense", x - 300, 330);
          text("cost: 3000 gold", x - 300, 360);

          rect(x - 500, 400, 100, 100);
          image(helmet, x - 500, 400);
          helmet.resize(100, 100);
          rect(x - 400, 400, 600, 100);
          text("+30 defense, +5HP regeneration", x - 300, 430);
          text("cost: 2000 gold", x - 300, 460);

          rect(x - 500, 500, 100, 100);
          image(shield, x - 500, 500);
          shield.resize(100, 100);
          rect(x - 400, 500, 600, 100);
          text("+90 defense, +2HP regeneration, + 5MN regeneration", x - 300, 530);
          text("cost: 5000 gold", x - 300, 560);
        }
        if (shopping3 > 0) {
          rect(x - 500, 300, 100, 100);
          image(boots1, x - 500, 300);
          boots1.resize(90, 90);
          rect(x - 400, 300, 600, 100);
          text("+5 movement speed", x - 300, 330);
          text("cost: 1000 gold", x - 300, 360);

          rect(x - 500, 400, 100, 100);
          image(boots2, x - 500, 400);
          boots2.resize(90, 90);
          rect(x - 400, 400, 600, 100);
          text("+5 movement speed", x - 300, 430);
          text("cost: 1000 gold", x - 300, 460);

          rect(x - 500, 500, 100, 100);
          image(boots3, x - 500, 500);
          boots3.resize(90, 90);
          rect(x - 400, 500, 600, 100);
          text("+5 movement speed", x - 300, 530);
          text("cost: 1000 gold", x - 300, 560);
        }
        if (shopping5 > 0) {
          rect(x - 500, 300, 100, 100);
          image(potion1, x - 500, 300);
          potion1.resize(90, 90);
          rect(x - 400, 300, 600, 100);
          text("+500 HP", x - 300, 330);
          text("cost: 2000 gold", x - 300, 360);

          rect(x - 500, 400, 100, 100);
          image(potion2, x - 500, 400);
          potion2.resize(90, 90);
          rect(x - 400, 400, 600, 100);
          text("+500 Mana", x - 300, 430);
          text("cost: 2000 gold", x - 300, 460);


        }

        // purchase

        let mtotal = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;

        if (shopping1 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 300 && mouseY < 400 && mouseIsPressed && p1 < 1 && mtotal < 6 && gold >= 5000) {
          purchased1 = 1;
          m1 = 1;
          n1 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          gold = gold - 5000;
          bonusattack1 = 5;
          p1 = 1;
        }

        if (shopping1 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 400 && mouseY < 500 && mouseIsPressed && p2 < 1 && mtotal < 6 && gold >= 3000) {
          purchased2 = 1;
          m2 = 1;
          n2 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          gold = gold - 3000;
          bonusattack2 = 2;
          p2 = 1;
        }

        if (shopping1 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 500 && mouseY < 600 && mouseIsPressed && p3 < 1 && mtotal < 6 && gold >= 3500) {
          purchased3 = 1;
          m3 = 1;
          n3 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          gold = gold - 3500;
          bonusattack3 = 3;
          p3 = 1;
        }

        if (shopping2 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 300 && mouseY < 400 && mouseIsPressed && p4 < 1 && mtotal < 6 && gold >= 3000) {
          purchased4 = 1;
          m4 = 1;
          n4 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          gold = gold - 3000;
          bonusdefense1 = 3;
          p4 = 1;
        }

        if (shopping2 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 400 && mouseY < 500 && mouseIsPressed && p5 < 1 && mtotal < 6 && gold >= 2000) {
          purchased5 = 1;
          m5 = 1;
          n5 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          gold = gold - 2000;
          bonusdefense5 = 1.3;
          hpregen = hpregen + 0.02;
          p5 = 1;
        }

        if (shopping2 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 500 && mouseY < 600 && mouseIsPressed && p6 < 1 && mtotal < 6 && gold >= 5000) {
          purchased6 = 1;
          m6 = 1;
          n6 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          gold = gold - 5000;
          bonusdefense3 = 3;
          hpregen = hpregen + 0.01;
          mnregen = mnregen + 0.02;
          p6 = 1;
        }

        if (shopping3 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 300 && mouseY < 400 && mouseIsPressed && p7 < 1 && mtotal < 6 && gold >= 1000) {
          purchased7 = 1;
          m7 = 1;
          n7 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          gold = gold - 1000;
          bonusspeed1 = 2;
          p7 = 1;

        }

        if (shopping3 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 400 && mouseY < 500 && mouseIsPressed && p8 < 1 && mtotal < 6 && gold >= 1000) {
          purchased8 = 1;
          m8 = 1;
          n8 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          bonusspeed2 = 2;
          gold = gold - 1000;
          p8 = 1;
        }

        if (shopping3 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 500 && mouseY < 600 && mouseIsPressed && p9 < 1 && mtotal < 6 && gold >= 1000) {
          purchased9 = 1;
          m9 = 1;
          n9 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          bonusspeed3 = 2;
          gold = gold - 1000;
          p9 = 1;
        }

        if (shopping5 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 300 && mouseY < 400 && mouseIsPressed && p10 < 1 && mtotal < 6 && gold >= 2000) {
          purchased10 = 1;
          m10 = 1;
          n10 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          gold = gold - 2000;
          bonushp1 = 50;
          p10 = 1;

        }

        if (shopping5 > 0 && mouseX > width / 2 - 500 && mouseX < width - 400 && mouseY > 400 && mouseY < 500 && mouseIsPressed && p11 < 1 && mtotal < 6 && gold >= 2000) {
          purchased11 = 1;
          m11 = 1
          n11 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
          gold = gold - 2000;
          bonusmana1 = 50;
          p11 = 1;
        }


        //Gold

        fill(1);
        textSize(25);
        text("Gold :", x - 500, 50);
        text(int(gold), x - 410, 50);
      }
      if(basehp <= 0) {
        match1 = 1;
      }
      if(allybase <= 0) {
        match2 = 1;
      }
      textSize(100);
      if(match1 > 0) {
        background(thecolor);
        text("Victory", x - 200, height/2);
        thecolor = thecolor + 1;
        if(thecolor > 255) {
          thecolor = 0.5;
        }
      }
      if(match2 > 0) {
        background(thecolor1);
        text("Retry", x - 200, height/2);
        thecolor1 = thecolor1 + 1;
        if(thecolor1 > 255) {
          thecolor1 = 0.5;
        }
      }

    }

  }

}
class createtrees {
  constructor(a, b, c) {
    this.a = random(-500, 4200);
    this.b = random(700);
    this.c = c;
    this.rocka = random(4000);
    this.rockb = random(700);
  }
  plant() {
    image(rock, this.rocka, this.rockb);
    rock.resize(50, 30);
    image(tree, this.a, this.b);
    tree.resize(100, 100);
  }
}
class createtroop {
  constructor(a1, b1, c1) {
    this.a1 = random(1000, 3000);
    this.b1 = random(700);
    this.c1 = c1;
    this.troopmove = 0;
    this.atk = 0;
  }
  deploy() {
    // minion's hp
    stroke(1);
    strokeWeight(1);
    noFill();
    rect(this.a1 - 30, this.b1 - 30, 100, 10);
    fill(255, 100, 100);
    rect(this.a1 - 30, this.b1 - 30, 100 - this.atk, 10);

    if (this.troopmove == 0) {
      image(troop, this.a1, this.b1);
      troop.resize(50, 50);
    }
    let distance = dist(x + 20, y, this.a1, this.b1);
     let distanceminion = dist(x1, y1, this.a1, this.b1);
    if (distance <= 50 || distanceminion <= 50) {
      this.troopmove = this.troopmove + 1;
      if (this.troopmove > 0 && this.troopmove <= 5) {
        image(troop1, this.a1, this.b1);
        troop1.resize(50, 50);
        
         if (distance <= 50) {
        dmg = dmg + 1 / bonusdefense;
         }
        
      }
      if (this.troopmove >= 5 && this.troopmove <= 10) {
        image(troop2, this.a1, this.b1);
        troop2.resize(50, 50);
      }
      if (this.troopmove >= 10 && this.troopmove <= 15) {
        image(troop3, this.a1, this.b1);
        troop3.resize(50, 50);
      }
      if (this.troopmove >= 15 && this.troopmove <= 20) {
        image(troop5, this.a1, this.b1);
        troop5.resize(50, 50);
      }
      if (this.troopmove >= 20) {
        this.troopmove = 1;
      }
    } else {
      this.troopmove = 0;
    }
    if (distance < 50 && attackingdamage > 0) {
      this.atk = this.atk + 1 + bonusattack;
    }
    if (distance < 150 && skill >= 3) {
      this.atk = this.atk + 1 + bonusattack;
    }
    if (distance < 200 && ult1 > 0) {
      this.atk = this.atk + 1 + bonusattack;
    }
    if (distance < 50 && takaini1 >= 6) {
      this.atk = this.atk + 3 + bonusattack;
    }
    if (distance < 100 && takault1 >= 30) {
      this.atk = this.atk + 10 + bonusattack;
    }
    if (distance < 75 && bladeskill1 >= 10) {
      this.atk = this.atk + 2 + bonusattack;
    }
    if (distance < 100 && bladeskill3 >= 2) {
      this.atk = this.atk + 3 + bonusattack;
    }

    if (distance < 75 && bladeskill6 >= 5 && bladeskill6 <= 30) {
      this.atk = this.atk + 1 + bonusattack;
    }
    let bladeultdist = dist(x + 50, y, this.a1, this.b1);
    let bladeultdist1 = dist(x + 150, y, this.a1, this.b1);
    let bladeultdist2 = dist(x + 300, y, this.a1, this.b1);
    if (bladeultdist <= 75 && bladeskill6 >= 15) {
      this.atk = this.atk + 5 + bonusattack;
       dmg = dmg - 0.2 - bonusattack/5;
    }
    if (bladeultdist1 <= 75 && bladeskill6 >= 17) {
      this.atk = this.atk + 5 + bonusattack;
       dmg = dmg - 0.2 - bonusattack/5;
    }
    if (bladeultdist2 <= 75 && bladeskill6 >= 21) {
      this.atk = this.atk + 5 + bonusattack;
       dmg = dmg - 0.2 - bonusattack/5;
    }


    //  if(bladeskill6 >= 15 && bladeskill6 <= 17) {
    //   image(bladeult3, x + 50, y);
    //   bladeult3.resize(w*1.5, h*1.5);
    // }
    //  if(bladeskill6 >= 17 && bladeskill6 <= 19) {
    //   image(bladeult3, x + 150, y);
    //   bladeult3.resize(w*1.5, h*1.5);
    // }
    //  if(bladeskill6 >= 21 && bladeskill6 <= 30) {
    //   image(bladeult3, x + 300, y);
    //   bladeult3.resize(w*1.5, h*1.5);
    // }



    if (this.atk >= 100) {
      this.a1 = random(500, 3000);
      this.b1 = random(700);
      this.atk = 0;
      exp1 = exp1 + 200/level*0.5;
      gold = gold + 50;
      getexp2 = 1;
    }
    if(getexp2 > 0) {
      getexp3 = getexp3 + 1;
      textSize(20);
      fill(200, 255, 150);
      text("+ 50 gold", x + 50, y + 20);
      text("+ 20 exp", x + 50, y + 45);
    }
    if(getexp3 > 200) {
      getexp2 = 0;
      getexp3 = 0;
    }
    if(distanceminion <= 50 && enemyhp > 1) {
      enemyhp = enemyhp - 0.2;
      enemyattacks = enemyattacks + 1;
      enemystationary = 1;
      this.atk = this.atk + 0.5 + enemylevel/5;
    }   
  }
}