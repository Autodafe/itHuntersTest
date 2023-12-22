
console.log(5);
document.addEventListener("DOMContentLoaded", function () {
  // Скрываем прелоадер и отображаем основной контент при завершении загрузки
  const loaderContainer = document.querySelector('.loader-container');
  const mainContent = document.querySelector('.content-wrapper');

  window.addEventListener("load", function () {
    loaderContainer.style.display = "none";
    mainContent.style.display = "flex";
  });
});
