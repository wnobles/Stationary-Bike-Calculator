function getResult() {  
  var weight = document.getElementById("weight").value;
  var cals = document.getElementById("cals").value;
  var score = Math.round( (4/3)*(cals/((weight/250))**1.08) );
  document.getElementById("result").innerHTML = "Your score is: " + score;
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
  document.getElementById("percentile").innerHTML = getPercentile(score) + "th Percentile";
}

function getPercentile(score) {
  if (score <= 208) return 5;
  else if (score <= 227) return 10;
  else if (score <= 230) return 15;
  else if (score <= 238) return 20;
  else if (score <= 245) return 25;
  else if (score <= 253) return 30;
  else if (score <= 256) return 35;
  else if (score <= 259) return 40;
  else if (score <= 266) return 45;
  else if (score <= 279) return 50;
  else if (score <= 286) return 55;
  else if (score <= 295) return 60;
  else if (score <= 307) return 65;
  else if (score <= 312) return 70;
  else if (score <= 322) return 75;
  else if (score <= 332) return 80;
  else if (score <= 345) return 85;
  else if (score <= 355) return 90;
  else return 95;
};