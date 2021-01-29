function helloWorld() {
  const element = document.getElementById("hello-world");
  if (element) {
    element.textContent = "Hello, World! This site uses Typescript!";
  }
}

helloWorld();
