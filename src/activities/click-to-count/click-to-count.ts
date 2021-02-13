export function clickToCountActivity(): HTMLButtonElement {
  let count = 0;

  const clickToCount = document.createElement('button');
  clickToCount.addEventListener('click', handleClick);
  updateButtonText();

  function handleClick() {
    count += 1;
    updateButtonText();
  }

  function updateButtonText() {
    clickToCount.textContent = `I've been clicked ${count} times`;
  }

  return clickToCount;
}
