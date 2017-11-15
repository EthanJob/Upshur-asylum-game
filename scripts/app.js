
$(() => {

  const $player = {
    health: 100,
    attack: .7
  };
  // HEALTH BARS
  const $health100 = $('<h2>').text('Health: 100%').addClass('health100');
  const $health75 = $('<h2>').text('Health: 75%').addClass('health75');
  const $health50 = $('<h2>').text('Health: 50%').addClass('health50');
  const $health25 = $('<h2>').text('Health: 25%').addClass('health25');

  // HEALTH
  const $healthPlace = () => {
  if ($player.health === 100) {
    $('.healthArea').append($health100);
  } else if ($player.health === 75) {
    $('.healthArea').append($health75);
  } else if ($player.health === 50) {
    $('.healthArea').append($health50);
  } else if ($player.health === 25) {
    $('.healthArea').append($health25);
  } else {
    console.log('no health');
  }
};

  const $clearHealth = () => {
    $('.health100').remove();
    $('.health75').remove();
    $('.health50').remove();
    $('.health25').remove();
  }

  // ITEMS
  const items = {
    keys: null,
    weapons: null,
    tools: null
  };

  // ENEMIES
  const $enemy1 = {
    health: 1
  };
  const $enemy2 = {
    health: 1
  };
  const $enemy3 = {
    health: 1
  };
  // VARIABLES
  const $container = $('#container');
  const $buttonArea = $('.buttonArea');
  const $healthArea = $('.healthArea');
  const $chapter = $('.chapter');
  const $room = $('.room');
  const $story = $('.story');
  // BUTTONS
  const $startBtn = $('#startButton');
  const $cont1 = $('<button>').attr('id', 'startButton').text('Next Room');
  const $cont2 = $('<button>').attr('id', 'startButton').text('Next Room');
  const $cont3 = $('<button>').attr('id', 'startButton').text('Continue');
  const $cont4 = $('<button>').attr('id', 'startButton').text('Continue');
  // room 1
  const $button1a = $('<button>').addClass('button1').text('Path 1');
  const $button1b = $('<button>').addClass('button2').text('Path 2');
  // room 2a
  const $button2aa = $('<button>').addClass('button1').text('Path 1');
  const $button2ab = $('<button>').addClass('button2').text('Path 2');
  // room 2b
  const $button2ba = $('<button>').addClass('button1').text('Explore');
  const $button2bb = $('<button>').addClass('button2').text('Next Room');
  // room 3
  const $button3a = $('<button>').addClass('button1').text('Path 1');
  const $button3b = $('<button>').addClass('button2').text('Path 2');
  // office
  const $officeBtn1 = $('<button>').addClass('button1').text('Search Desk');
  const $officeBtn2 = $('<button>').addClass('button2').text('Next Room');
  // Chapter 3 room 1
  const $chapter2Btn1 = $('<button>').addClass('button1').text('Unlock Elevator');
  const $chapter2Btn2 = $('<button>').addClass('button2').text('Take Stairs');
  const $chapter2Btn1b = $('<button>').addClass('button1').text('Use Elevator');
  const $backButton = $('<button>').text('Go back').attr('id', 'startButton');
  // attack/run buttons
  const $attackBtn = $('<button>').addClass('button1').text('Attack');
  const $runBtn = $('<button>').addClass('button2').text('Run');
  // Chapter 2
  const $attackBtn2 = $('<button>').addClass('button1').text('Attack');
  const $runBtn2 = $('<button>').addClass('button2').text('Run');
  // room 2b
  const $attackBtn3 = $('<button>').addClass('button1').text('Attack');
  const $runBtn3 = $('<button>').addClass('button2').text('Run');
  // room 3
  const $chp2rm3Btn1 = $('<button>').addClass('button1').text('Left Door');
  const $chp2rm3Btn2 = $('<button>').addClass('button2').text('Right Door');
  // room 4
  const $climbButton = $('<button>').attr('id', 'window').text('Climb Out Window');
  // sewer room
  const $sewerButton1 = $('<button>').addClass('button1').text('Left Door');
  const $sewerButton2 = $('<button>').addClass('button2').text('Right Door');
  // locker room
  const $largeLockers = $('<button>').addClass('button1').text('Large Lockers');
  const $smallLockers = $('<button>').addClass('button2').text('Small Lockers');
  // locker exit
  const $lockerCont1 = $('<button>').attr('id', 'startButton').text('Next Room');
  const $lockerCont2 = $('<button>').attr('id', 'startButton').text('Next Room');
  const $useMasterKey = $('<button>').attr('id', 'window').text('Use Master Key');
  const $useCrowbar = $('<button>').attr('id', 'window').text('Use Crowbar');
  // TEXT VARIABLES
  // Chapters
  const $chapter1Title = $('<h2>').text('Chapter 1').addClass('chapterTitle');
  const $chapter2Title = $('<h2>').text('Chapter 2').addClass('chapterTitle');
  const $chapter3Title = $('<h2>').text('Chapter 3').addClass('chapterTitle');
  // Rooms
  const $room1Title = $('<h3>').text('Room 1').addClass('roomTitle');
  const $room2aTitle = $('<h3>').text('Room 2').addClass('roomTitle');
  const $room2bTitle = $('<h3>').text('Room 2').addClass('roomTitle');
  const $room3Title = $('<h3>').text('Room 3').addClass('roomTitle');
  const $enemyRoom = $('<h3>').text('Enemy').addClass('roomTitle');
  const $chp2rm2Title = $('<h3>').text('Room 2').addClass('roomTitle');
  const $chp2rm3Title = $('<h3>').text('Room 2').addClass('roomTitle');
  const $chp2rm4Title = $('<h3>').text('Room 3').addClass('roomTitle');
  const $sewerRm1Title = $('<h3>').text('Basement').addClass('roomTitle');
  const $sewerRm2Title = $('<h3>').text('Locker Room').addClass('roomTitle');
  const $basementExit = $('<h3>').text('Exit').addClass('roomTitle');
  // Story Paragraphs
  const $room1Text = $('<p>').html('The glass door just ahead of you is locked. <br><br>Path 1: There is a closed door to left. It looks like it may lead to a restroom. <br><br>Path 2: The door to the right is open and has light coming from inside. <br><br>Which path will you take?').addClass('roomText');

  const $room2aText = $('<p>').html('You entered the restroom but there is a monster here! <br><br>Attack or Run!').addClass('roomText');

  const $room2bText = $('<p>').html("This room appears to be a kitchen with a sink and a fridge. There aren't any items on the tables and the room looks desolate. <br><br> Will you explore the fridge?<br><br> Or <br><br> Will you continue to the next room?").addClass('roomText');

  const $room3Text = $('<p>').html('The hallway in front of you has an open door to the left and an open door to the right. There is no sound coming from the door to the left but there is a dim light coming from inside. The door to the right is well-lit and has dripping sounds echoing from inside. <br><br> Path 1: Enter the room to the left. <br><br> Or <br><br>Path 2: Enter the door to the right.').addClass('roomText');

  const $chp2Txt = $('<p>').html("An old wheelchair lies on its back as blood covers the floor. There are two paths here: <br>A locked elevator to the left and a descending staircase to the right that may lead to the basement. <br><br> Will you use the elevator? <br><br> Or <br><br> Will you take the stairs to the basement?").addClass('roomText');

  const $chp2rm2Txt = $('<p>').html("You ride the elevator up to the second floor. You pull the old elevator door back but as soon as you do this a monster appears from around the corner! <br><br>Attack or Run!").addClass('roomText');

  const $sewerRoomFightTxt = $('<p>').html("You descend the old basement stairs but as soon as you reach the bottom a monster appears from around the corner!<br><br>Attack or Run!").addClass('roomText');

  const $chp2rm3Txt = $('<p>').html("There are two doors ahead. One to the left and one to the right. <br><br> A cool breeze and the faint sound of tree branches brushing against each other can be heard from the room to the left. <br><br> But <br><br> Heavy footsteps and whispers seem to be coming from the door to the right.").addClass('roomText');

  const $chp3rm4Txt = $('<p>').html("This room is empty but has an open window with scaffolding just outside.<br><br>The front gate of the Upshur Asylum can be seen from here.").addClass('roomText');

  const $sewerRm1Txt = $('<p>').html("There are two doors ahead. One to the left and one to the right. <br><br> The door to the right is unlocked and seems to lead to a locker room.<br><br> But <br><br> Heavy footsteps and whispers seem to be coming from the door to the right.").addClass('roomText');

  const $sewerRm2Txt = $('<p>').html("This room appears to be a locker room. There are large lockers lining the left wall and small lockers lining the right wall. <br><br> Will you search the large lockers? <br><br> Or <br><br> Will you search the small lockers?").addClass('roomText');

  const $basementExitTxt = $('<p>').html("There is a locked steel door here. You may be able to pry it open with a tool or unlock it with a master key.").addClass('roomText');

  // FUNCTIONS
  const $clear = (event) => {
    $('.roomTitle').remove();
    $('.roomText').remove();
    $('.button1').remove();
    $('.button2').remove();
  };
  const $victoryKill = (event) => {
    $room.append($room2aTitle);
    $story.append( $('<p>').addClass('roomText').text('You defeated the monster!') );
    $buttonArea.append($cont1);
  };
  const $victoryRun = (event) => {
    $room.append($room2aTitle);
    $story.append( $('<p>').addClass('roomText').text('You escaped the monster!') );
    $buttonArea.append($cont1);
  };
  const $foundKnife = (event) => {
    $room.append( $('<h3>').addClass('roomTitle').text('Fridge') );
    $story.append( $('<p>').addClass('roomText').html("You found a rusty kitchen knife! <br><br> You now have a 90% chance to hit and kill enemies!") );
    $buttonArea.append($cont1);
    items.weapons = 'rusty knife';
    $('#items').append( $('<h3>').attr('id', 'knife').text('Rusty Kitchen Knife') );
    $player.attack = .9;
  };
  const $foundKey = (event) => {
    $('.roomText').remove();
    $('.button1').remove();
    $('.button2').remove();
    $room.append( $('<p>').addClass('roomText').text('You found an elevator key!') );
    $buttonArea.append($cont2);
    items.keys = 'elevator key';
    $('#items').append( $('<h3>').attr('id', 'EKey').text('Elevator Key') );
  };
  const $foundCrowbar = (event) => {
    $room.append( $('<h3>').addClass('roomTitle').text('Large Lockers') );
    $story.append( $('<p>').html("You found a crowbar!").addClass('roomText') );
    items.tools = 'crowbar';
    $('#items').append( $('<h3>').attr('id', 'crowbar').text('Crowbar') );
  };
  const $foundMasterKey = (event) => {
    $room.append( $('<h3>').addClass('roomTitle').text('Large Lockers') );
    $story.append( $('<p>').html("You found a master key!").addClass('roomText') );
    items.tools = 'master key';
    $('#items').append( $('<h3>').attr('id', 'masterKey').text('Master Key') );
  };

  // Chapters
  const $chapter1 = (event) => {
    $chapter.append($chapter1Title);
    $room.append($room1Title);
    $story.append($room1Text);
    $buttonArea.append($button1a, $button1b);
    $('body').attr('background', 'images/2door-hallway.jpg');
  };
  const $chapter2 = (event) => {
    $chapter.append($chapter2Title);
    $room.append($room1Title);
    $story.append($chp2Txt);
    $buttonArea.append($chapter2Btn1, $chapter2Btn2);
    $('body').attr('background', 'images/elevator.jpg');
  };
  const $gameOver = (event) => {
    $healthArea.remove();
    $story.append( $('<p>').html("You were ambushed by a group of enemies.").addClass('roomText') );
    $story.append( $('<h1>').html('GAME OVER').addClass('gameOver') );
  };
  const $gameOverFight = (event) => {
    $healthArea.remove();
    $story.append( $('<p>').html("You were killed by the monster.").addClass('roomText') );
    $story.append( $('<h1>').html('GAME OVER').addClass('gameOver') );
    $('body').attr('background', 'images/sewer-death.jpg');
  };
  const $winScene = (event) => {
    $story.append( $('<p>').html("You escaped the Upshur Asylum!").addClass('roomText') );
    $story.append( $('<h1>').html('YOU WIN!').addClass('win') );
  };
  // Rooms
  const $room2a = (event) => {
    $room.append($room2aTitle);
    $story.append($room2aText);
    $buttonArea.append($attackBtn, $runBtn);
    $('body').attr('background', 'images/bathroom.jpg');
  };
  const $room2b = (event) => {
    $room.append($room2bTitle);
    $story.append($room2bText);
    $buttonArea.append($button2ba, $button2bb);
    $('body').attr('background', 'images/kitchen.jpg');
  };
  const $room3 = (event) => {
    $room.append($room3Title);
    $story.append($room3Text);
    $buttonArea.append($button3a, $button3b);
    $('body').attr('background', 'images/cage-hallway.jpg');
  };
  const $chp2rm2a = (event) => {
    $room.append($chp2rm2Title);
    $story.append($chp2rm2Txt);
    $buttonArea.append($attackBtn2, $runBtn2);
    $('body').attr('background', 'images/level2-hall.jpg');
  };
  const $chp2rm2b = (event) => {
    $room.append($chp2rm2Title);
    $story.append($chp2rm2Txt);
    $('body').attr('background', 'images/sewer.jpg');
  };
  const $sewerFight = (event) => {
    $room.append($chp2rm2Title);
    $story.append($sewerRoomFightTxt);
    $('body').attr('background', 'images/sewer.jpg');
  };
  const $chp2rm3 = (event) => {
    $room.append($chp2rm3Title);
    $story.append($chp2rm3Txt);
  };
  const $chp2rm4 = (event) => {
    $room.append($chp2rm4Title);
    $story.append($chp3rm4Txt);
    $buttonArea.append($climbButton);
    $('body').attr('background', 'images/scaffolding.jpg');
  };
  const $sewerRm1 = (event) => {
    $room.append($sewerRm1Title);
    $story.append($sewerRm1Txt);
    $buttonArea.append($sewerButton1, $sewerButton2);
  };
  const $sewerRm2 = (event) => {
    $room.append($sewerRm2Title);
    $story.append($sewerRm2Txt);
    $buttonArea.append($largeLockers, $smallLockers);
  };

  // START BUTTON
  $startBtn.on('click', (event) => {
    // REMOVING START SCREEN
    $('.startTitle').removeClass();
    $('.startInfo').remove();
    $healthPlace();
    $startBtn.remove();
    // ADDING CHAPTER 1
    $chapter1();
    $('#items').append( $('<h1>').addClass('items').text('Items:') );
  });

  // ROOM 1: PATH BUTTONS
  $button1a.on('click', (event) => {
    $clear();
    $room2a();
  });

  $button1b.on('click', (event) => {
    $clear();
    $room2b();
  });

  // ROOM 2A: PATH BUTTONS
  $attackBtn.on('click', (event) => {
    if (($player.health >= 50) && (Math.random() < $player.attack) && ($enemy1.health = 1)) {
    $enemy1.health = 0;
    $clear();
    $victoryKill();
  } else if ($player.health === 25) {
    $clear();
    $gameOverFight();
  } else {
    $player.health -= 25;
    // alert('enemy has hit you');
    $('.roomText').remove();
    $story.append( $('<p>').html("The monster dodged your attack and hit you!<br><br>Attack or Run!").addClass('roomText') );
    $clearHealth();
    $healthPlace();
  };
  });

  $runBtn.on('click', (event) => {
    if (($player.health >= 50) && (Math.random() < .5) && ($enemy1.health = 1)) {
    $clear();
    $victoryRun();
  } else {
    $clear();
    $gameOverFight();
  };

  });

  // ROOM 2B: PATH BUTTONS
  $button2ba.on('click', (event) => {
    $clear();
    $foundKnife();
  });

  $cont1.on('click', (event) => {
    $clear();
    $('#startButton').remove();
    $room3();
  });
  $button2bb.on('click', (event) => {
    $clear();
    $room3();
  });

  // ROOM 3: PATH BUTTONS
  $button3a.on('click', (event) => {
    $clear();
    $room.append( $('<h3>').addClass('roomTitle').text('Office') );
    $story.append( $('<p>').addClass('roomText').text('This room apears to  be an office with a desk and computer in the right corner. The computer is on but is not responsive.') );
    $buttonArea.append($officeBtn1, $officeBtn2);
    $('body').attr('background', 'images/office.jpg');
  });
  $button3b.on('click', (event) => {
    $clear();
    $('.chapterTitle').remove();
    // CHAPTER 2
    $chapter2();
  });
  $officeBtn1.on('click', (event) => {
    $foundKey();
  });
  $cont2.on('click', (event) => {
    $clear();
    $('.chapterTitle').remove();
    $('#startButton').remove();
    // CHAPTER 2
    $chapter2();
  });
  $officeBtn2.on('click', (event) => {
    $clear();
    $('.chapterTitle').remove();
    // CHAPTER 2
    $chapter2();
  });
  $chapter2Btn1.on('click', (event) => {
    if (items.keys === 'elevator key') {
      $('#EKey').remove();
      items.keys = null;
      $chapter2Btn1.remove();
      $chapter2Btn2.remove();
      $buttonArea.append($chapter2Btn1b, $chapter2Btn2);
    } else {
      $clear();
      $story.append( $('<p>').html("You don't have an elevator key!").addClass('roomText') );
      $buttonArea.append($backButton);
    };
    $backButton.on('click', (event) => {
      $clear();
      $backButton.remove();
      $chapter2();
    });
    $chapter2Btn2.on('click', (event) => {
      $clear();
      $sewerFight();
      $buttonArea.append($attackBtn3, $runBtn3);
    });
  });
  $chapter2Btn2.on('click', (event) => {
    $clear();
    $sewerFight();
    $buttonArea.append($attackBtn3, $runBtn3);
  });
  $chapter2Btn1b.on('click', (event) => {
    $clear();
    $chp2rm2a();
    $buttonArea.append($attackBtn2, $runBtn2);
  });
  // ROOM 2
  $attackBtn2.on('click', (event) => {
    if (($player.health >= 50) && (Math.random() < $player.attack) && ($enemy2.health = 1)) {
    $enemy2.health = 0;
    $clear();
    $('.button1').remove();
    $('.button2').remove();
    $('.roomText').remove();
    $story.append( $('<p>').addClass('roomText').html("You killed the monster!") );
    $buttonArea.append($cont3);
  } else if ($player.health === 25) {
    $clear();
    $gameOverFight();
  } else {
    $player.health -= 25;
    // alert('enemy has hit you');
    $('.roomText').remove();
    $story.append( $('<p>').html("The monster dodged your attack and hit you!<br><br>Attack or Run!").addClass('roomText') );
    $clearHealth();
    $healthPlace();
  };

  });
  $runBtn2.on('click', (event) => {
    if (($player.health >= 50) && (Math.random() < .5) && ($enemy2.health = 1)) {
    $clear();
    $('.button1').remove();
    $('.button2').remove();
    $('.roomText').remove();
    $story.append( $('<p>').addClass('roomText').html("You escaped the monster!") );
    $buttonArea.append($cont3);
  } else {
    $clear();
    $gameOverFight();
  };

  });
  $cont3.on('click', (event) => {
    $clear();
    $('#startButton').remove();
    $chp2rm3();
    $buttonArea.append($chp2rm3Btn1, $chp2rm3Btn2);
  });
  $chp2rm3Btn1.on('click', (event) => {
    $clear();
    $chp2rm4();
  });
  $climbButton.on('click', (event) => {
    $clear();
    $buttonArea.remove();
    $winScene();
    $('body').attr('background', 'images/gate-exit.jpg');
  });
  $chp2rm3Btn2.on('click', (event) => {
    $clear();
    $gameOver();
    $('body').attr('background', 'images/falling.jpg');
  });
  // SEWERS
  $attackBtn3.on('click', (event) => {
    if (($player.health >= 50) && (Math.random() < $player.attack) && ($enemy3.health = 1)) {
    $enemy3.health = 0;
    $clear();
    $('.button1').remove();
    $('.button2').remove();
    $('.roomText').remove();
    $story.append( $('<p>').addClass('roomText').html("You killed the monster!") );
    $buttonArea.append($cont4);
  } else if ($player.health === 25) {
    $clear();
    $gameOverFight();
  } else {
    $player.health -= 25;
    // alert('enemy has hit you');
    $('.roomText').remove();
    $story.append( $('<p>').html("The monster dodged your attack and hit you!<br><br>Attack or Run!").addClass('roomText') );
    $clearHealth();
    $healthPlace();
  };

  });
  $runBtn3.on('click', (event) => {
    if (($player.health >= 50) && (Math.random() < .5) && ($enemy1.health = 1)) {
    $clear();
    $('.button1').remove();
    $('.button2').remove();
    $('.roomText').remove();
    $story.append( $('<p>').addClass('roomText').html("You escaped the monster!") );
    $buttonArea.append($cont4);
  } else {
    $clear();
    $gameOverFight();
  };

  });
  $cont4.on('click', (event) => {
    $clear();
    $('#startButton').remove();
    $sewerRm1();
  });
  $sewerButton2.on('click', (event) => {
    $clear();
    $gameOver();
    $('body').attr('background', 'images/sewer-death.jpg');
  });
  $sewerButton1.on('click', (event) => {
    $clear();
    $sewerRm2();
    $('body').attr('background', 'images/locker-room.png');
  });
  $largeLockers.on('click', (event) => {
    $clear();
    $foundCrowbar();
    $buttonArea.append($lockerCont1);
  });
  $smallLockers.on('click', (event) => {
    $clear();
    $foundMasterKey();
    $buttonArea.append($lockerCont2);
  });
  $lockerCont1.on('click', (event) => { // crowbar
    $clear();
    $('#startButton').remove();
    $room.append($basementExit);
    $story.append($basementExitTxt);
    $buttonArea.append($useCrowbar);
  });
  $lockerCont2.on('click', (event) => { // master key
    $clear();
    $('#startButton').remove();
    $room.append($basementExit);
    $story.append($basementExitTxt);
    $buttonArea.append($useMasterKey);
  });
  $useCrowbar.on('click', (event) => {
    $clear();
    $buttonArea.remove();
    $winScene();
    $('body').attr('background', 'images/steel-door-exit.jpg');
  });
  $useMasterKey.on('click', (event) => {
    $clear();
    $buttonArea.remove();
    $winScene();
    $('body').attr('background', 'images/steel-door-exit.jpg');
    $('#masterKey').remove();
  });

  console.log($player);

}); // End
