
window.onload = function(){
  $('#lap').click(stopwatch.recordLap);
  $('#stop').click(stopwatch.stop);
  $('#reset').click(stopwatch.reset);
  $('#start').click(stopwatch.start);
};

var stopwatch = {
  time:0,
  lap:1,
  reset: function(){
    stopwatch.time = 0;
    stopwatch.lap = 1;
    $('#display').html("00:00");
    $('#laps').html('');
  },
  start: function(){
    counter = setInterval(stopwatch.count, 1000);

  },
  stop: function(){
    clearInterval(counter);

  },

  recordLap: function(){
    var converted = stopwatch.timeConverter(stopwatch.time);
    $('#laps').append(" " + "Interval " + " " + stopwatch.lap + " | " + converted + " : " + " ");
    stopwatch.lap++;
  },

  count: function(){
    // Increment the time by 1
    stopwatch.time++;
    // Gets the current time, passes it into the stopwatch.timeConverter function
    // and then save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    // Display the converted time variable in the HTML display window
    $('#display').html(converted);
  },

  timeConverter: function(t){
    //Takes the current time in seconds and converts it to minutes and seconds (mm:ss)
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
      if (seconds < 10){
        seconds = "0" + seconds;
      }
      if (minutes === 0){
        minutes = "00";
      } else if (minutes < 10){
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconds;
  }
};
