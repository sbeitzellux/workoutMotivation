
var compoundLift = ["squats"]; // ch 2 array literals
var push = ["push ups"];
var pull = ["hinges"];

    // Get the first checkbox
    var checkBox = document.getElementById("check");
    var checkBox2 = document.getElementById("check2");
    var checkBox3 = document.getElementById("check3");
    var checkBox4 = document.getElementById("check4");
    var checkBox5 = document.getElementById("check5");
    // If the checkbox is checked, display the output text
    checkBox.addEventListener('change', function(){
        if (checkBox.checked == true){ // ch 4 if statements
            var barbell = ["rows", "military press", "barbell bicep curls"];
         compoundLift = compoundLift.concat(barbell);
            
            document.getElementById("compoundLift").textContent = compound; // ch 5 text content
            console.log(compoundLift);
          } else {
         compoundLift.splice(1,3);
            document.getElementById("compoundLift").textContent = compound;
            console.log(compoundLift);
          }
    });
      // If the checkbox is checked, display the output text
    checkBox2.addEventListener('change', function(){ // ch 6 event listeners
          if (checkBox2.checked == true){
              var barbell = ["bench press"];
             compoundLift = compoundLift.concat(barbell);
            
              var bench = ["tricep dips"];
              push = push.concat(bench);


              document.getElementById("compoundLift").textContent = compound;
              console.log (compoundLift);
              document.getElementById("arms1").textContent = firstSet;
              console.log(push);
            } 
            else if (checkBox.checked == true && checkBox2.checked != true){
              compoundLift.splice(4,1);
              console.log(push);
              push.splice(1, 1);
              console.log(compoundLift);
            }
            else {
              push.splice(1, 1);
             compoundLift.splice(1,1);

              document.getElementById("compoundLift").textContent = compound;
              console.log (compoundLift);
              document.getElementById("arms1").textContent = firstSet;
              console.log(push);
            }
      });
      // If the checkbox is checked, display the output text
    checkBox3.addEventListener('change', function(){
      if (checkBox3.checked == true){ 
          var dumbbellsPush = ["lateral raises"];
          var dumbbellsPull = ["dumbbell row", "bicep curls", "dumbbell deadlift"]
          push = push.concat(dumbbellsPush);
          pull = pull.concat(dumbbellsPull)
          document.getElementById("arms1").textContent = firstSet;
          console.log(push);
          document.getElementById("arms2").textContent = secondSet;
          console.log(pull);
        } else {
          push.pop();
          document.getElementById("arms1").textContent = firstSet;
          console.log(push);
          pull.pop();
          pull.pop();
          pull.pop();
          document.getElementById("arms2").textContent = secondSet;
          console.log(pull);
        }
  });
    checkBox4.addEventListener('change', function(){
    if (checkBox4.checked == true){ 
        var pullUpBar = ["pull ups"]
        pull = pull.concat(pullUpBar)
        document.getElementById("arms2").textContent = secondSet;
        console.log(pull);
      } else {
        pull.pop();
        document.getElementById("arms2").textContent = secondSet;
        console.log(pull);
      }
     
});
    checkBox5.addEventListener('change', function(){
  if (checkBox5.checked == true){ 
      var kettlebells = ["kettlebell push press"]
      push = push.concat(kettlebells)
      document.getElementById("arms1").textContent = firstSet;
      console.log(push);
    } else {
      push.pop();
      document.getElementById("arms1").textContent = firstSet;
      console.log(push);
    }
   
});

      
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) { // ch 1 structuring
    greeting = 'End this day on a high note!';
} else if (hourNow > 12) {
    greeting = 'Get after it!';
} else if (hourNow > 0) {
    greeting = 'Get it done early!';
} else {
    greeting = 'Time to sweat!';
}
   
var getRandomCompound = function () {
  return compoundLift[Math.floor(Math.random() * compoundLift.length)];
};
var getRandomPush = function () {
  return push[Math.floor(Math.random() * push.length)];
};
var getRandomPull = function () {
return pull[Math.floor(Math.random() * pull.length)];
};

var compound;
var firstSet;
var secondSet;


function randomWorkout(){
  
compound = getRandomCompound();
document.getElementById("compoundLift").textContent = compound;

firstSet = getRandomPush();
document.getElementById("arms1").textContent = firstSet;

secondSet = getRandomPull();
document.getElementById("arms2").textContent = secondSet;

}
/* display randos to html */ // ch 3 working with dom
document.getElementById("greeting").textContent = greeting;


$(function() { //ch 7 jquery
  
  // Set several properties on all list items.
  $('#btn').css({
    'background-color': '#fff',
    'border-radius': '13px',
    'border': '2px solid #9c9fa1',
    'color': '#000',
  });
});

    
function weatherBalloon( cityID ) {
  var key = 'a31824d6e74a8ee51dcd06a1b2c9cd91';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weatherBalloon( 4369596 );
}

function drawWeather( d ) {
	// var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
  document.getElementById('location').innerHTML = d.name;

  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  }
}


var myJSON = '{"advice":"remember your posture", "advice2":"consistency is key"}'; //ch 8 json
var myObj = JSON.parse(myJSON);
document.getElementById("advice").innerHTML = '<em>' + myObj.advice2 + '</em>';

