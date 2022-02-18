var imgurl = "12771.jpg";
$("body").css('background-image', 'url('+imgurl+')');

username = document.querySelector('#username');
pass = document.querySelector('#password');
confirmpass = document.querySelector('#confirmpass');
btn = document.querySelector('#btn');
btn.setAttribute('disabled', true);
username.oninput = function() {
  if (username.value.length > 0) {
    pass.oninput = function() {
      if (pass.value.length > 0) {
        confirmpass.oninput = function() {
          if (confirmpass.value.length > 0) {
            btn.removeAttribute('disabled');
         }
          else {
            btn.setAttribute('disabled', true);
          }
        }
      }
    }
  }
}

function register() {
  pass1 = document.getElementById("password").value;
  pass2 = document.getElementById("confirmpass").value;
  if (pass1 == pass2) {
    alert('Success!')
  }
  else {
    alert('passwords dont match!');
  }
}

var maxL = 20;
$("textarea").keyup(function() {
  var inL = maxL - $(this).val().length;
  $('#asd').text(inL);
});

$("p").click(function() {
  $(this).fadeTo("slow", 0.6);
});

$("#btn1").click(function() {
  $("#box").animate({
   width: "500px",
   height: "500px",
 });
});

$("#btn2").click(function() {
  $("#box").animate({
   width: "100px",
   height: "100px",
 });
});

$("a[href='#up']").click(function() {
  $("html, body").animate({scrollTop: 0}, "fast");
  return false;
});
