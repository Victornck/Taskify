# 📝 Taskify

Taskify é uma aplicação web simples, moderna e funcional para gerenciamento de tarefas, desenvolvida com foco em aprendizado prático de **React**, **React Router**, **LocalStorage** e **Tailwind CSS**.

O projeto permite criar, visualizar, concluir e excluir tarefas, além de acessar uma página dedicada com os detalhes de cada tarefa.

🔗 **Acesse o projeto em produção:**
👉 [https://taskify-rho-five.vercel.app/](https://taskify-rho-five.vercel.app/)

---

## 🚀 Funcionalidades

* ✅ Criar novas tarefas
* 📋 Listar tarefas salvas
* ✔️ Marcar tarefas como concluídas
* 🗑️ Excluir tarefas
* 🔍 Visualizar detalhes da tarefa em uma página dedicada
* 💾 Persistência de dados com **LocalStorage**
* 📱 Layout responsivo (mobile e desktop)

---

## 🛠️ Tecnologias Utilizadas

* **React**
* **React Router DOM**
* **Tailwind CSS**
* **Lucide Icons**
* **Vite**
* **LocalStorage (Web API)**
* **Vercel (Deploy)**

---

## 📂 Estrutura do Projeto

```bash
src/
 ├─ Components/
 │   ├─ Tasks.jsx
 │   └─ AddTask.jsx
 │
 ├─ pages/
 │   └─ TaskPage.jsx
 │
 ├─ App.jsx
 ├─ main.jsx
```

---

## 🔁 Fluxo da Aplicação

1. O usuário cria uma tarefa
2. A tarefa é salva no **LocalStorage**
3. A lista é renderizada dinamicamente
4. Ao clicar em "ver detalhes", o usuário é redirecionado para a página da tarefa
5. Os dados são recuperados a partir do `id` armazenado

---

## 📸 Demonstração

A aplicação está hospedada na Vercel e pode ser acessada no link abaixo:

👉 **[https://taskify-rho-five.vercel.app/](https://taskify-rho-five.vercel.app/)**

---

## 📦 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Acesse a pasta do projeto
cd taskify

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com fins educacionais, com foco em:

* Entendimento de estado no React
* Navegação entre páginas com React Router
* Persistência de dados no navegador
* Organização de componentes
* Boas práticas iniciais de front-end

---

## 👤 Autor

Desenvolvido por **Victor Berlinck** 🚀

Se quiser contribuir, dar feedback ou sugerir melhorias, fique à vontade!

---

⭐ Se você gostou do projeto, considere deixar uma estrela no repositório!
