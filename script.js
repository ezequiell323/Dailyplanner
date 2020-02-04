var task=new Date();
var hr=task.getHours();
//time 24 hr

//present time red outline
function changeColor(){
  if($("#saveInfo").attr("time")==hr){
    $("#saveInfo").css("border-color","red")
  }
  if($("#saveInfo1").attr("time")==hr){
    $("#saveInfo1").css("border-color","red")
  }
  if($("#saveInfo2").attr("time")==hr){
    $("#saveInfo2").css("border-color","red")
  }
  if($("#saveInfo3").attr("time")==hr){
    $("#saveInfo3").css("border-color","red")
  }
  if($("#saveInfo4").attr("time")==hr){
    $("#saveInfo4").css("border-color","red")
  }
  if($("#saveInfo5").attr("time")==hr){
    $("#saveInfo5").css("border-color","red")
  }
  if($("#saveInfo6").attr("time")==hr){
    $("#saveInfo6").css("border-color","red")
  }
  if($("#saveInfo7").attr("time")==hr){
    $("#saveInfo7").css("border-color","red")
  }
  if($("#saveInfo8").attr("time")==hr){
    $("#saveInfo8").css("border-color","red")
  }



//past time background gray
  if($("#saveInfo").attr("time")<hr){
  $("#saveInfo").css("background-color","gray")
}
if($("#saveInfo1").attr("time")<hr){
  $("#saveInfo1").css("background-color","gray")
}
if($("#saveInfo2").attr("time")<hr){
  $("#saveInfo2").css("background-color","gray")
}
if($("#saveInfo3").attr("time")<hr){
  $("#saveInfo3").css("background-color","gray")
}
if($("#saveInfo4").attr("time")<hr){
  $("#saveInfo4").css("background-color","gray")
}
if($("#saveInfo5").attr("time")<hr){
  $("#saveInfo5").css("background-color","gray")
}
if($("#saveInfo6").attr("time")<hr){
  $("#saveInfo6").css("background-color","gray")
}
if($("#saveInfo7").attr("time")<hr){
  $("#saveInfo7").css("background-color","gray")
}
if($("#saveInfo8").attr("time")<hr){
  $("#saveInfo8").css("background-color","gray")
}

//future time outline green
if($("#saveInfo").attr("time")>hr){
  $("#saveInfo").css("border-color","green")
}
if($("#saveInfo1").attr("time")>hr){
  $("#saveInfo1").css("border-color","green")
}
if($("#saveInfo2").attr("time")>hr){
  $("#saveInfo2").css("border-color","green")
}
if($("#saveInfo3").attr("time")>hr){
  $("#saveInfo3").css("border-color","green")
}
if($("#saveInfo4").attr("time")>hr){
  $("#saveInfo4").css("border-color","green")
}
if($("#saveInfo5").attr("time")>hr){
  $("#saveInfo5").css("border-color","green")
}
if($("#saveInfo6").attr("time")>hr){
  $("#saveInfo6").css("border-color","green")
}
if($("#saveInfo7").attr("time")>hr){
  $("#saveInfo7").css("border-color","green")
}
if($("#saveInfo8").attr("time")>hr){
  $("#saveInfo8").css("border-color","green")
}

}






//date n time
function timeclock(){
      setInterval(function(){
          var time = moment().format('MMMM Do YYYY, h:mm:ss a');
          $("#currentDay").text(time);
          }, 1000);
  }


// save unput user
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

//local storage 
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