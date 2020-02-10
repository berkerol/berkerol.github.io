const projects = [['fireworks', true, 'Fireworks', 'Create your own fireworks show or watch one randomly'], ['stargazing', true, 'Stargazing', 'A beautiful sky animation with colorful and moving stars'], ['party', true, 'Party', 'Join this party with colorful confetti'], ['snowstorm', true, 'Snowstorm', 'Watch a crazy snowstorm in the comfort of your browser'], ['spaceflight', true, 'Spaceflight', 'Enter a journey into the depths of space'], ['aggregator', true, 'Aggregator', 'A beautiful aggregator animation with colorful particles'], ['hypnotizer', true, 'Hypnotizer', 'Hypnotize yourself with the flowing characters'], ['stock-price-simulator', true, 'Stock Price Simulator', 'Generate a random stock chart or watch its progress'], ['random-binary-music', true, 'Random Binary Music', 'Listen to the music of random binary numbers'], ['sprinter-turtle', true, 'Sprinter Turtle', '2D top down road crossing game'], ['battle-pong', true, 'Battle Pong', 'Remake of the classic game with rockets and different game types'], ['breakout', true, 'Breakout', 'Remake of the classic game with meteors'], ['typer', true, 'Typer', 'A tower defense like typing game'], ['beat-the-market', true, 'Beat the Market', 'Buy low, sell high, make money'], ['guess-the-image', true, 'Guess the Image', 'Try to recognize the partially visible images'], ['guess-the-number', true, 'Guess the Number', 'Try to find the number using various hints'], ['match-the-numbers', true, 'Match the Numbers', 'Try to make all numbers equal by visiting them'], ['hangman', true, 'Hangman', 'Remake of the classic game with GUI'], ['guess-the-average', true, 'Guess the Average', 'Try to calculate the average of the appearing numbers'], ['rock-paper-scissors-lizard-spock', true, 'Rock Paper Scissors Lizard Spock', 'Remake of the classic game with the Lizard Spock expansion'], ['roll-a-ball', true, 'Roll a Ball', 'Destroy the cubes without touching the walls'], ['battleshipjs', true, 'Battleship.js', 'A Battleship CLI game with customizations'], ['lottery', true, 'Lottery', 'Decentralized autonomous lottery'], ['github-explorer', true, 'GitHub Explorer', 'Filter and sort all repositories of a user or organization'], ['affine-cipher', true, 'Affine Cipher', 'Simple & easy-to-use Affine Cipher GUI'], ['empatica-charts', true, 'Empatica Charts', 'Charts for physiological data gathered from <a href="https://www.empatica.com/research/e4">Empatica E4</a> wristband'], ['photo-of-the-day', false, 'Photo of the Day', 'Downloads Bing, NASA, National Geographic, Unsplash Photo of the Day and sets it as wallpaper'], ['mousejs', false, 'Mouse.js', 'Move your mouse with arrow keys on the keyboard'], ['libraries', false, 'Libraries', 'Libraries for common functionalities of my other repositories'], ['cv', false, 'CV', 'My CV']];

const parent = document.getElementsByClassName('row justify-content-center')[0];
for (const project of projects) {
  const div = document.createElement('div');
  div.className = 'col-12 col-sm-6 col-md-4 mt-3 text-center';
  const a = document.createElement('a');
  a.className = 'text-reset text-decoration-none';
  a.href = project[0];
  if (project[1]) {
    const img = document.createElement('img');
    img.className = 'img-fluid rounded';
    img.src = `images/${project[0]}.png`;
    img.alt = `${project[0]}-screenshot`;
    a.appendChild(img);
  }
  const h3 = document.createElement('h3');
  h3.innerHTML = project[2];
  a.appendChild(h3);
  const p = document.createElement('p');
  p.innerHTML = project[3];
  a.appendChild(p);
  div.appendChild(a);
  parent.appendChild(div);
}
