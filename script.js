/*Clock*/
var date = moment().format("MMM Do YYYY");
$("#currentDay").append(date);

var time = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]
updatetime();

function updatetime(){
    var currentTime = moment().format('H');
    for(var i = 0; i < time.length; i++) {
        if (parseInt(time[i]) > currentTime) {
            $("#" + time[i]).attr("style", "background-color: red");
      
      
          }
          else if (parseInt(time[i]) < currentTime) {
            $("#" + time[i]).attr("style", "background-color: lightgray");
      
          }
          else if (parseInt(time[i]) == currentTime) {
            $("#" + time[i]).attr("style", "background-color: green");
          
          }
        }
      }


var save = document.querySelector(".saveBtn");

save.addEventListener("click", function(){
    var time = $(this).parent().attr("id");
    var textContent = $("textarea").val().trim();
    localStorage.setItem(time, textContent);
    console.log(time, textContent);
});


      /*
$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("class");
    var textContent = $("textarea").val().trim();
    
    localStorage.setItem(time, textContent);
    console.log(time, textContent);
}); */
/*
$("#9AM").children("textarea").val(localStorage.getItem("9AM"));

$("#10AM").children("textarea").val(localStorage.getItem("10AM"));

$("#11AM").children("textarea").val(localStorage.getItem("11AM"));

$("#12PM").children("textarea").val(localStorage.getItem("12PM"));

$("#1PM").children("textarea").val(localStorage.getItem("1PM"));

$("#2PM").children("textarea").val(localStorage.getItem("2PM"));

$("#3PM").children("textarea").val(localStorage.getItem("3PM"));

$("#4PM").children("textarea").val(localStorage.getItem("4PM"));

$("#5PM").children("textarea").val(localStorage.getItem("5PM"));*/