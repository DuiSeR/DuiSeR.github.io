document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

const input = document.querySelector("#service-input");
[
  ["#development", "Разработка сайта"],
  ["#bot", "Чат бот"],
  ["#design", "Дизайн"],
].forEach(
  ([id, value]) =>
    (document.querySelector(id).onclick = () => (input.value = value))
);

const input2 = document.querySelector("#communication-input");
[
  ["#mail", "Почта"],
  ["#phone", "Телефон"],
  ["#messenger", "Мессенджер"],
].forEach(
  ([id, value]) =>
    (document.querySelector(id).onclick = () => (input2.value = value))
);
