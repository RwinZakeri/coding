const btn = document.getElementById("btn").addEventListener("click", () => {
  document.querySelector(".contentContainer").classList.remove("hide");
  document.querySelector(".overlay").classList.remove("hide");
});

const closeBtn = document
  .querySelector(".closeBtn")
  .addEventListener("click", () => {
    document.querySelector(".contentContainer").classList.add("hide");
    document.querySelector(".overlay").classList.add("hide");
  });
const overlay = document
  .querySelector(".overlay")
  .addEventListener("click", () => {
    ("hide");
    document.querySelector(".overlay").classList.add("hide");
    document.querySelector(".contentContainer").classList.add("hide");
  });

document.addEventListener("keyup", (e) => {
  console.log(e);
  if (e.key === "Escape") {
    const test = document
      .querySelector(".contentContainer")
      .classList.contains("hide");
    console.log(test);
    if (!test) {
      document.querySelector(".overlay").classList.add("hide");

      document.querySelector(".contentContainer").classList.add("hide");
    }
  }
});
