
$(() => {

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
  // ACTION BUTTONS
  const $startBtn = $('#startButton');
  const $button1 = $('<button>').attr('id', 'button1').text('Path 1');
  const $button2 = $('<button>').attr('id', 'button2').text('Path 2');
  const $attackBtn = $('<button>').attr('id', 'attack').text('Attack');
  const $runBtn = $('<button>').attr('id', 'run').text('Run');
  // TEXT VARIABLES
  // Chapters
  const $chapter1Title = $('<h2>').text('Chapter 1').addClass('chapterTitle');
  const $chapter2Title = $('<h2>').text('Chapter 2').addClass('chapterTitle');
  const $chapter3Title = $('<h2>').text('Chapter 3').addClass('chapterTitle');
  // Rooms
  const $room1Title = $('<h3>').text('Room 1').addClass('roomTitle');
  const $room2Title = $('<h3>').text('Room 2').addClass('roomTitle');
  const $room3Title = $('<h3>').text('Room 3').addClass('roomTitle');
  const $enemyRoom = $('<h3>').text('ENEMY').addClass('roomTitle');
  // Story Paragraphs
  const $room1Text = $('<p>').html('The glass door just ahead of you is locked. <br><br>Path 1: There is a closed door to left. It looks like it may lead to a restroom. <br><br>Path 2: The door to the right is open and has light coming from inside. <br><br>Which path will you take?').addClass('roomText');

  const $room2Text = $('<p>').html('changed to story paragraph 2.').addClass('roomText');

  const $room3Text = $('<p>').html('changing to the third story paragraph.').addClass('roomText');


  const $clear = (event) => {
    $('.roomTitle').remove();
    $('.roomText').remove();
  };


  // START BUTTON
  $startBtn.on('click', (event) => {
    console.log('clicked start button');
    // REMOVING START SCREEN
    $('.startTitle').removeClass();
    $('.startInfo').remove();
    $startBtn.remove();
    // ADDING CHAPTER 1
    $chapter.append($chapter1Title);
    $room.append($room1Title);
    $story.append($room1Text);
    $buttonArea.append($button1, $button2);
    $healthArea.append($health100);
    $('body').attr('background', 'images/2door-hallway.jpg');
  })

  // ROOM 1: PATH BUTTONS
  $button1.on('click', (event) => {
    console.log('button 1 was clicked');
    $clear();
    // change button id or class here
    $room.append($room2Title);
    $story.append($room2Text);
  })

  $button2.on('click', (event) => {
    console.log('button 2 was clicked');
    $clear();
    // change button id or class here
    $room.append($room2Title);
    $story.append($room2Text);
  })






}); // End
