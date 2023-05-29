const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const reasonSelect = document.querySelector('#reason');
const messageInput = document.querySelector('#message');
const errorElement = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  let messages = [];

  if (nameInput.value === '' || nameInput.value == null) {
    messages.push('Vui lòng nhập tên của bạn');
  }

  if (emailInput.value === '' || emailInput.value == null) {
    messages.push('Vui lòng nhập địa chỉ email của bạn');
  } else if (!isValidEmail(emailInput.value)) {
    messages.push('Địa chỉ email không hợp lệ');
  }

  if (reasonSelect.value === '') {
    messages.push('Vui lòng chọn lý do liên hệ');
  }

  if (messageInput.value === '' || messageInput.value == null) {
    messages.push('Vui lòng nhập tin nhắn của bạn');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join('\n');
  }
});

function isValidEmail(email) {
  // Thực hiện kiểm tra định dạng email ở đây
  return true;
}