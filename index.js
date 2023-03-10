/* Deklarasi variabel angka captcha */
let num1 = Math.round(Math.random() * 9);
let num2 = Math.round(Math.random() * 9);
let sum = num1 + num2;

/* Pemanggilan dom untuk 2 angka captcha  */
document.getElementById("captcha1").innerHTML = num1;
document.getElementById("captcha2").innerHTML = num2;

/* Fungsi button ketika diklik */
function submitButton() {
  /* Pemilihan kondisi untuk input name */
  const nameInput = document.getElementById("name").value;
  if (nameInput == "" || nameInput == null) {
    document.getElementById("notifName").innerHTML = "Name must be filled out!";
    return false;
  } else if (nameInput != "" || nameInput != null) {
    document.getElementById("notifName").innerHTML = "";
  }
  
  /* Pemilihan kondisi untuk input message */
  const messageInput = document.getElementById("message").value;
  if (messageInput == "" || messageInput == null) {
    document.getElementById("notifMessage").innerHTML = "Message must be filled out!";
    return false;
  } else if (messageInput != "" || messageInput != null) {
    document.getElementById("notifMessage").innerHTML = "";
  }

  /* Pemilihan kondisi untuk input captcha */
  const captchaInput = document.getElementById("sumCaptcha").value;
  if (captchaInput == "" || captchaInput == null) {
    document.getElementById("notifCaptcha").innerHTML = "Your answer is still empty!";
    return false;
  } else if (captchaInput != sum) {
    document.getElementById("notifCaptcha").innerHTML = "Wrong Answer!";
    return false;
  } else {
    alert ("Your feedback has been sent, Thank You!");
    location.reload();
  }
}