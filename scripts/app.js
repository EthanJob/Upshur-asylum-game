
$(() => {

  // VARIABLES
  const $container = $('#container');
  const $buttonArea = $('.buttonArea');
  const $healthArea = $('.health');
  const $health100 = $('<h3>').text('Health: 100%');
  const $chapter = $('.chapter');
  const $room = $('.room');
  const $main = $('.main');
  // ACTION BUTTONS
  const $button1 = $('<button>').attr('id', 'button1').text('Path 1');
  const $button2 = $('<button>').attr('id', 'button2').text('Path 2');
  const $attackBtn = $('<button>').attr('id', 'attack').text('Attack');
  const $runBtn = $('<button>').attr('id', 'run').text('Run');
  const $startBtn = $('#startButton');
  // TEXT VARIABLES
  const $chapter1Txt = $('<h2>').text('Chapter 1');
  const $chapter2Txt = $('<h2>').text('Chapter 2');
  const $chapter3Txt = $('<h2>').text('Chapter 3');
  const $room1Txt = $('<h3>').text('Room 1');
  const $room2Txt = $('<h3>').text('Room 2');
  const $room3Txt = $('<h3>').text('Room 3');

  const $clear = () => {
    $('p').remove();
  }


  // START BUTTON
  $startBtn.on('click', (event) => {
    console.log('clicked start button');
    // REMOVING START SCREEN
    $('.startTitle').removeClass();
    $('.startInfo').remove();
    $startBtn.remove();
    // ADDING CHAPTER 1
    $chapter.append($chapter1Txt);
    $room.append($room1Txt);
    $main.append( $('<p>story for room 1 goes here.</p>') );
    $buttonArea.append($button1, $button2);
    $healthArea.append($health100);

  })

  // PATH BUTTONS
  $button1.on('click', (event) => {
    console.log('button 1 was clicked');
    $clear();
  })

  $button2.on('click', (event) => {
    console.log('button 2 was clicked');
  })






}); // End
