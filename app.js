function generateRandomString(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

document.addEventListener("DOMContentLoaded", function () {
  const genBtn = document.querySelector(".gen-btn");
  const genList = document.querySelector(".gen-list");

  genBtn.addEventListener("click", function () {
    genList.innerHTML = ""; // Clear existing items
    for (let i = 0; i < 5; i++) {
      const li = document.createElement("li");
      li.textContent = generateRandomString(12);
      genList.appendChild(li);
    }
  });
});
