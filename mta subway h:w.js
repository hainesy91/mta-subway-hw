function subwayStops(stationName){
this.stationName = stationName;
}

var lineL = new subwayStops(["Stop 8th", "Stop 6th", "Union Square", "Stop 3rd", "Stop 1st"]);

var lineN = new subwayStops(["Grand Central", "Stop 33rd", "Stop 28th", "Stop 23rd", "Union Square", "Astor Place"]);

var line6 = new subwayStops(["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]);

alert("Welcome to the New York Subway System!");

var leave = prompt("Which line are you traveling from?(lineL, lineN or line6");
if (leave === 'lineL'){
    var line1 = line1(prompt("What stop did you get on at? (8th, 6th, Union Square, 3rd or 1st?"));
    var line2 = line2(prompt("What stop do you want to get off at)"));
  
  if (line1 === '8th'){
    prompt(line2);
  }
  
}
  
  
  //}
//var land = prompt("Where do you want to go?");
//var landIndex = lineL.subwayStops.indexOf(land);

//console.log(landIndex);