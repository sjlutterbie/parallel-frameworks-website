export function renderHtmlTemplate(template: string, id: string) {
  const wrapper = document.getElementById(id);
  if (wrapper) {
    wrapper.innerHTML = template;
  }
}
