
function setup(){
    canvas=createCanvas(250, 180);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json', modelLoaded);
  }
  function draw() {
    image(video, 0, 0, 250, 180);
    classifier.classify(video, gotResults);
  }
  
  function modelLoaded() {
    console.log('model loaded');
  }
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("name").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
  }