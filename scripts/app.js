
$(() => {

  // ENEMIES
  const $enemy1 = {
    health: 10
  };
  const $enemy2 = {
    health: 10
  };
  const $enemy3 = {
    health: 10
  };
  // VARIABLES
  const $container = $('#container');
  const $buttonArea = $('.buttonArea');
  const $healthArea = $('.healthArea');
  const $chapter = $('.chapter');
  const $room = $('.room');
  const $story = $('.story');
  // HEALTH BARS
  const $health100 = $('<h3>').text('Health: 100%').addClass('health100');
  const $health75 = $('<h3>').text('Health: 75%').addClass('health75');
  const $health50 = $('<h3>').text('Health: 50%').addClass('health50');
  const $health25 = $('<h3>').text('Health: 25%').addClass('health25');
  // BUTTONS
  const $startBtn = $('#startButton');
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
  // attack/run buttons
  const $attackBtn = $('<button>').addClass('button1').text('Attack');
  const $runBtn = $('<button>').addClass('button2').text('Run');
  // TEXT VARIABLES
  // Chapters
  const $chapter1Title = $('<h2>').text('Chapter 1').addClass('chapterTitle');
  const $chapter2Title = $('<h2>').text('Chapter 2').addClass('chapterTitle');
  const $chapter3Title = $('<h2>').text('Chapter 3').addClass('chapterTitle');
  // Rooms
  const $room1Title = $('<h3>').text('Room 1').addClass('roomTitle');
  const $room2aTitle = $('<h3>').text('Room 2a').addClass('roomTitle');
    const $room2bTitle = $('<h3>').text('Room 2b').addClass('roomTitle');
  const $room3Title = $('<h3>').text('Room 3').addClass('roomTitle');
  const $enemyRoom = $('<h3>').text('ENEMY').addClass('roomTitle');
  // Story Paragraphs
  const $room1Text = $('<p>').html('The glass door just ahead of you is locked. <br><br>Path 1: There is a closed door to left. It looks like it may lead to a restroom. <br><br>Path 2: The door to the right is open and has light coming from inside. <br><br>Which path will you take?').addClass('roomText');

  const $room2aText = $('<p>').html('entered restroom. *monster*').addClass('roomText');

  const $room2bText = $('<p>').html("It looks like a kitchen with a stove-top and a fridge. There aren't any items on the tables and the room looks desolate. <br><br> Will you explore the fridge?<br><br> or <br><br> Will you continue to the next room?").addClass('roomText');

  const $room3Text = $('<p>').html('this is the third story paragraph.').addClass('roomText');


  // FUNCTIONS
  const $clear = (event) => {
    $('.roomTitle').remove();
    $('.roomText').remove();
    $('.button1').remove();
    $('.button2').remove();
  };

  // Chapters
  const $chapter1 = (event) => {
    $chapter.append($chapter1Title);
    $room.append($room1Title);
    $story.append($room1Text);
    $buttonArea.append($button1a, $button1b);
    $healthArea.append($health100);
    $('body').attr('background', 'images/2door-hallway.jpg');
  };
  const $chapter2a = (event) => {
    $room.append($room2aTitle);
    $story.append($room2aText);
    $buttonArea.append($attackBtn, $runBtn);
  };
  const $chapter2b = (event) => {
    $room.append($room2bTitle);
    $story.append($room2bText);
    $buttonArea.append($button2ba, $button2bb);
  };
  const $chapter3 = (event) => {
    $room.append($room3Title);
    $story.append($room3Text);
    $buttonArea.append($button3a, $button3b);
    $('body').attr('background', 'images/cage-hallway.jpg');
  };
  // START BUTTON
  $startBtn.on('click', (event) => {
    console.log('clicked start button');
    // REMOVING START SCREEN
    $('.startTitle').removeClass();
    $('.startInfo').remove();
    $startBtn.remove();
    // ADDING CHAPTER 1
    $chapter1();
  });

  // ROOM 1: PATH BUTTONS
  $button1a.on('click', (event) => {
    console.log('button 1 was clicked');
    $clear();
    $chapter2a();
  });

  $button1b.on('click', (event) => {
    console.log('button 2 was clicked');
    $clear();
    $chapter2b();
  });

  // ROOM 2A: PATH BUTTONS
  $attackBtn.on('click', (event) => {
    console.log("attack button clicked");
    $clear();
    // Attack sequence here with an if...else function
    $chapter3();
  });

  $runBtn.on('click', (event) => {
    console.log("run button clicked");
    $clear();
    $chapter3();
  });

  // ROOM 2B: PATH BUTTONS
  

}); // End
