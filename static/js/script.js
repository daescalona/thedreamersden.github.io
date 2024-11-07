document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('click', (e) => {
    alert(`Vas a ser redirigido a ${e.target.textContent.trim()}`);
  });
});