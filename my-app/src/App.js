document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('div');
  const linkCSS = document.createElement('link');
    header.className = 'header';
    header.textContent = '';
    document.body.appendChild(header);

      // Criar um elemento <link>
      linkCSS.rel = 'stylesheet';
      linkCSS.href = 'App.css';  // Caminho para o seu arquivo CSS

    // Create and append menu icon
    const menuIcon = document.createElement('div');
    menuIcon.className = 'menu-icon';
    menuIcon.textContent = '☰';
    document.body.appendChild(menuIcon);

    // Create and append navigation menu
    const navMenu = document.createElement('nav');
    navMenu.id = 'nav-menu';
    const ul = document.createElement('ul');
    ['Home', 'About', 'Contact'].forEach(text => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${text.toLowerCase()}`;
        a.textContent = text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    navMenu.appendChild(ul);
    document.body.appendChild(navMenu);

    // Create and append content
    const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = '<h1>Bem vindo ao Cinema na mão</h1><p>This is a simple home page created with JavaScript.</p>';
    document.body.appendChild(content);

    // Toggle menu function
    menuIcon.addEventListener('click', () => {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
    // Exemplo de formatação de data em português do Brasil
const data = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatter = new Intl.DateTimeFormat('pt-BR', options);
const dataFormatada = formatter.format(data);

console.log(dataFormatada); // Exibe a data formatada em português do Brasil

});