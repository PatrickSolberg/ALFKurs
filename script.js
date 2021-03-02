var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10) {
  dd='0'+dd
} 

if(mm<10) {
  mm='0'+mm
} 

today = dd+'/'+mm+'/'+yyyy;
document.getElementById("dag").innerHTML = today;
var myVar=setInterval(function(){myTimer()},1000);

function myTimer() {
    var dato = new Date();
    var timer = dato.getHours();
    document.getElementById("klokken").innerHTML = dato.toLocaleTimeString() + " !";

    if (timer < 6) {
        document.getElementById('hilsen').innerHTML = "<img src=\"https://64.media.tumblr.com/d14995c11b9f3b9c94347e3b5d790d24/babbd570ca3d6c19-f3/s500x750/5fd44a8447f25e68a4da3740b06c65adc597bcea.gifv\"></img>" + "<br>" + ("Nattugle 🦉");
    } else if (timer < 12) {
        document.getElementById('hilsen').innerHTML = "<img src=\"https://64.media.tumblr.com/b876ea93a22c86bc5b78c7b78eff97f5/15397bd7e8d2a434-37/s540x810/40efb0e5aafbcbfe08fbdec5278ac720a9d2aba2.gifv\"></img>" + "<br>" + ("God morgen!");
    } else if (timer < 15) {
        document.getElementById('hilsen').innerHTML = "<img src=\"https://64.media.tumblr.com/c484cb7645835c02bc49d8feab5ddfeb/tumblr_p9g13a6gm11we9f2ro2_r1_1280.gifv\"></img>" + "<br>" + ("God formidag!");
    } else if (timer < 18) {
        document.getElementById('hilsen').innerHTML = "<img src=\"https://64.media.tumblr.com/632d8a7f1e1d338071da4ce7dfd03e9c/d98e601b3516fb04-1b/s540x810/9a9cc7449ba93a891051f88c1f4a190e371a9ab5.gifv\"></img>" + "<br>" + ("God ettermidag!");
    } else {
        document.getElementById('hilsen').innerHTML = "<img src=\"https://64.media.tumblr.com/fe6d6866c5f3902586116f472a2ab20f/921683666be3fa68-8a/s540x810/90260b81c89a1cc7d3f0bdabf9096d7530e3f83d.gifv\"></img>" + "<br>" + ("God kveld!");
    }
}

//Setter opp datoer til neste kurs
var countkurs1 = new Date("Mar 04, 2021 09:00:00").getTime();
var countkurs2 = new Date("Mar 05, 2021 09:00:00").getTime();
var countkurs3 = new Date("Mar 11, 2021 09:00:00").getTime();
var countkurs4 = new Date("Mar 12, 2021 09:00:00").getTime();

// Oppdaterer nedtellingen = 1 sek.
var x = setInterval(function() {
  // Finner dagens dato/klokke
  var now = new Date().getTime();
  //Finner tid mellom de diverse kursdagene og nå
  var distance = countkurs1 - now;
  var distance2 = countkurs2 - now;
  var distance3 = countkurs3 - now;
  var distance4 = countkurs4 - now;

  // 
  var a;
  if (distance < 0 && distance2 >0) {
      a = distance2; 
  } else if (distance2 < 0 && distance3 >0) {
      a = distance3; 
  } else if (distance3 < 0 && distance4 >0) {
      a = distance4; 
  } else {
      a = distance;
  }

  // Kalkulerer dato / tid / timer / min / sek
  var days = Math.floor(a / (1000 * 60 * 60 * 24));
  var hours = Math.floor((a % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((a % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((a % (1000 * 60)) / 1000);

  // Sender resultat til HTML div Countdown
  document.getElementById("nedtelling").innerHTML = days + " :Dager | " + hours + " :Timer | "
  + minutes + "m " + seconds + "s ";
  
  //Om alle distancene er mindre enn 0, Sender mld til countdown div
  if (distance4 < 0) {
    clearInterval(x);
    document.getElementById("nedtelling").innerHTML = "INGEN FLERE KURS DAGER SADGE " + "<img src=\"https://i.kym-cdn.com/photos/images/newsfeed/001/857/750/4ab.png\"></img>";
    document.getElementById("kursdag").style.display = "none";
}
}, 1000);