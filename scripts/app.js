
$(() => {

  // Variables
  const $container = $('#container');
  const $buttonArea = $('.buttonArea');
  const $healthArea = $('.health');
  const $health100 = $('<h3>').text('Health: 100%');
  const $chapter = $('.chapter');
  const $button1 = $('<button>').attr('id', 'button1').text('Path 1');
  const $button2 = $('<button>').attr('id', 'button2').text('Path 2');
  const $startBtn = $('#startButton');


  // Buttons
  $startBtn.on('click', (event) => {
    console.log('clicked start button');
    // removing start screen
    $('.startTitle').removeClass();
    $('.startInfo').remove();
    $startBtn.remove();
    // adding chapter 1
    $chapter.append( $('<h2>Chapter 1<h2>') );
    // append paragraph here
    $buttonArea.append($button1, $button2);
    $healthArea.append($health100);
  })

  $button1.on('click', (event) => {
    console.log('button 1 was clicked');
  })

  $button2.on('click', (event) => {
    console.log('button 2 was clicked');
  })






}); // End
