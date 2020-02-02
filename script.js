var task=new Date();
var hr=task.getHours();
//time 24 hr
function changeColor(){
  if($("#saveInfo").attr("time")==hr){
    $("#saveInfo").css("background-color","red")
  }

if($("#saveInfo").attr("time")<hr){
  $("#saveInfo").css("background-color","gray")
}

if($("#saveInfo").attr("time")>hr){
  $("#saveInfo").css("background-color","green")
}
}







function timeclock(){
      setInterval(function(){
          var time = moment().format('MMMM Do YYYY, h:mm:ss a');
          $("#currentDay").text(time);
          }, 1000);
  }



function saveDate(){
  localStorage.setItem("9",$("#saveInfo").val())
  localStorage.setItem("10",$("#saveInfo1").val())
  localStorage.setItem("11",$("#saveInfo2").val())
  localStorage.setItem("12",$("#saveInfo3").val())
  localStorage.setItem("1",$("#saveInfo4").val())
  localStorage.setItem("2",$("#saveInfo5").val())
  localStorage.setItem("3",$("#saveInfo6").val())
  localStorage.setItem("4",$("#saveInfo7").val())
  localStorage.setItem("5",$("#saveInfo8").val())
}


function userInfo(){
timeclock()
changeColor()
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
$("#saveInfo").val(localStorage.getItem("9"))
$("#saveInfo1").val(localStorage.getItem("10"))
$("#saveInfo2").val(localStorage.getItem("11"))
$("#saveInfo3").val(localStorage.getItem("12"))
$("#saveInfo4").val(localStorage.getItem("1"))
$("#saveInfo5").val(localStorage.getItem("2"))
$("#saveInfo6").val(localStorage.getItem("3"))
$("#saveInfo7").val(localStorage.getItem("4"))
$("#saveInfo8").val(localStorage.getItem("5"))
}