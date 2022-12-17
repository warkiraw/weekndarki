// Сохранение пользовательских данных в localStorage
function store() {
    var userName = document.getElementById("userName").value;
    var key = document.getElementById("key").value;
  
    const user = {
      userName,
      key,
    };
  
    // Конвертация объекта в строку и сохранение строки
    localStorage.setItem(userName, JSON.stringify(user));
  }
  window.onload = function () {
    document.getElementById("userForm").onsubmit = store;
};
document.getElementById('avtor').onclick = function() {
  window.location.href = '2.html';
}
document.getElementById('gost').onclick = function() {
    window.location.href = '3.html';
}
  