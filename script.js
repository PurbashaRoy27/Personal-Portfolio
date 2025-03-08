document.addEventListener("DOMContentLoaded", function () {
  const helloWorldElement = document.querySelector(".hello-world");
  helloWorldElement.addEventListener("click", function () {
    alert("Hello, welcome to our website!");
  });

  helloWorldElement.style.cursor = "pointer";
});
