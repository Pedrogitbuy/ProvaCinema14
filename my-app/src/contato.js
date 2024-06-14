// contact.js

document.addEventListener('DOMContentLoaded', () => {
    // Cria a estrutura da página
    const body = document.body;

    // Adiciona o título
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    body.appendChild(title);

    // Cria o formulário de contato
    const form = document.createElement('form');
    form.id = 'contact-form';

    // Adiciona o campo Nome
    const nameField = document.createElement('div');
    nameField.className = 'form-field';
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
    nameField.appendChild(nameLabel);
    nameField.appendChild(nameInput);
    form.appendChild(nameField);

    // Adiciona o campo Email
    const emailField = document.createElement('div');
    emailField.className = 'form-field';
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    emailField.appendChild(emailLabel);
    emailField.appendChild(emailInput);
    form.appendChild(emailField);

    // Adiciona o campo Mensagem
    const messageField = document.createElement('div');
    messageField.className = 'form-field';
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message:';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.name = 'message';
    messageTextarea.required = true;
    messageField.appendChild(messageLabel);
    messageField.appendChild(messageTextarea);
    form.appendChild(messageField);

    // Adiciona o botão de envio
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    // Adiciona o formulário ao corpo da página
    body.appendChild(form);

    // Adiciona comportamento ao formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});
