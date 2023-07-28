
    let colors = ["red", "yellow", "green"];

    function setup() {
      createCanvas(100, 500);
    }

    function draw() {
      background(220);
      let circleSize = 80; 
      let spacing = 100;

      for (let i = 0; i < 3; i++) {
        fill(colors[i]);
        circle(width / 2, spacing * (i + 1), circleSize);
      }
    }