const btnRef = document.querySelector("#searchBtn")



btnRef.addEventListener("click", (e) => {
  const input = document.querySelector("#numInput").value.trim();
  const minutes = parseInt(input);

  if (isNaN(minutes) || minutes < 0) {
    alert("Введіть коректне число хвилин!");
    return;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  document.querySelector("#time").textContent = `${hours}:${mins}`;
});










