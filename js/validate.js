window.addEventListener("DOMContentLoaded", function () {
  new JustValidate(".about__form", {
    colorWrong: "var(--font-error)",

    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 35,
      },
      mail: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Ошибка",
        minLength: "Ошибка",
        maxLength: "Ошибка",
      },
      mail: {
        required: "Ошибка",
        email: "Ошибка",
      },
    },
  });
});
