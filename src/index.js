function component() {
  const element = document.createElement('div'); 
  element.innerHTML = ._join(['Hello', 'Webpack'], '');
  return element;
}

document.body.appendChild(component());