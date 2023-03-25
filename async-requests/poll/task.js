const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.response);
    document.getElementById("poll__title").innerText = data.data.title;
    const answer = data.data.answers;
    answer.forEach((element) => {
      document.getElementById("poll__answers").insertAdjacentHTML(
        "beforeEnd",
        `<button class="poll__answer">
            ${element}</button>`
      );
    });
    const btn = Array.from(document.querySelectorAll(".poll__answer"));
    btn.forEach((el) => {
      el.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
        xhr.open(
          "POST",
          "https://students.netoservices.ru/nestjs-backend/poll"
        );
        xhr.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        xhr.addEventListener("load", () =>
          showResults(JSON.parse(xhr.response))
        );

        xhr.send(`vote=${data.id}&answer=${btn.indexOf(el)}`);
      });
    });
  }
});
function showResults(resp) {
  const total = resp.stat.reduce((total, item) => total + item.votes, 0);
  document.getElementById("poll__answers").innerText = resp.stat.reduce(
    (html, item) =>
      html +
      item.answer +
      ": " +
      ((item.votes / total) * 100).toFixed(2) +
      "%\n",
    ""
  );
}
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();
