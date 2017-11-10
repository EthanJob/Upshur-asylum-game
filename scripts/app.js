
$(() => {

  // VARIABLES
  const $container = $('#container');
  const $buttonArea = $('.buttonArea');
  const $healthArea = $('.health');
  const $chapter = $('.chapter');
  const $room = $('.room');
  const $main = $('.main');
  // HEALTH BARS
  const $health100 = $('<h3>').text('Health: 100%');
  const $health75 = $('<h3>').text('Health: 75%');
  const $health50 = $('<h3>').text('Health: 50%');
  const $health25 = $('<h3>').text('Health: 25%');
  // ACTION BUTTONS
  const $button1 = $('<button>').attr('id', 'button1').text('Path 1');
  const $button2 = $('<button>').attr('id', 'button2').text('Path 2');
  const $attackBtn = $('<button>').attr('id', 'attack').text('Attack');
  const $runBtn = $('<button>').attr('id', 'run').text('Run');
  const $startBtn = $('#startButton');
  // TEXT VARIABLES
  // Chapters
  const $chapter1Title = $('<h2>').text('Chapter 1').addClass('chapterTitle');
  const $chapter2Title = $('<h2>').text('Chapter 2').addClass('chapterTitle');
  const $chapter3Title = $('<h2>').text('Chapter 3').addClass('chapterTitle');
  // Rooms
  const $room1Title = $('<h3>').text('Room 1').addClass('roomTitle');
  const $room2Title = $('<h3>').text('Room 2').addClass('roomTitle');
  const $room3Title = $('<h3>').text('Room 3').addClass('roomTitle');
  // Story Paragraphs
  const $room1Text = $('<p>').text('story for room 1 goes here.').addClass('roomText');

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
    $main.append($room1Text);
    $buttonArea.append($button1, $button2);
    $healthArea.append($health100);
  })

  // PATH BUTTONS
  $button1.on('click', (event) => {
    console.log('button 1 was clicked');
    $clear();
    // change button id here

  })

  $button2.on('click', (event) => {
    console.log('button 2 was clicked');
    $clear();
    // change button id here
  })






}); // End
