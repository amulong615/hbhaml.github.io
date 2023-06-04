document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // 密码保护
      const password = '080699'; 
      var passwordInput = document.querySelector('input[type="password"]');
      var enteredPassword = passwordInput.value;
      passwordInput.value = '';
      if (enteredPassword === password) {
        window.location.href = '/mysecret.html';
      } else {
        alert('密码错误。请重新输入');
      }
    });
  });
