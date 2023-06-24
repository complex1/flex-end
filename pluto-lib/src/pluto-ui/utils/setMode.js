export const toggleMode = () => {
  const body = document.querySelector('body');
  let mode = body.getAttribute('data-mode');
  if (mode === null) {
    mode = localStorage.getItem('mode') || 'light';
    body.setAttribute('data-mode', mode);
    localStorage.setItem('mode', mode);
    return
  }
  if (mode === 'dark') {
    body.setAttribute('data-mode', 'light');
    localStorage.setItem('mode', 'light');
  }
  if (mode === 'light') {
    body.setAttribute('data-mode', 'dark');
    localStorage.setItem('mode', 'dark');
  }
}
