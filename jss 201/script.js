function login() {
  var a = document.getElementById('log').value;
  var b = document.getElementById('pass').value;
  var userName = localStorage.getItem('userName');
  var usepo = localStorage.getItem(userName);
  var plok = JSON.parse(usepo);
  console.log(plok)
  if (a == plok.userName && b == plok.key) {
    alert("Bye bye nigga")
    } else {
    alert("niga")
  }
}
  window.onload = function () {
    document.getElementById("login").onsubmit = login;
  };
document.getElementById('reg').onclick = function() {
  window.location.href = '1.html';
}

