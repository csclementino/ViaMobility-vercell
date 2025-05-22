# 🚇 ViaMobility

ViaMobility é um web aplicativo desenvolvido em **Next.js** com foco na mobilidade urbana. Ele foi projetado para funcionar em todos os dispositivos móveis, com **ênfase na resolução 360x800**, proporcionando uma experiência acessível e eficiente ao usuário.

Este projeto busca otimizar a experiência de quem utiliza o metrô, oferecendo informações em tempo real sobre o status das linhas, previsão de chegada dos trens e permitindo o envio de reportes sobre segurança.

---

## 🌐 Links

- 🔗 **Repositório GitHub**: [Insira aqui o link do GitHub]
- 🚀 **Site (Vercel)**: [Insira aqui o link do site no Vercel]
- 🎥 **Vídeo demonstrativo no YouTube**: [Insira aqui o link do vídeo]

---

## 📁 Estrutura do Projeto

```
/Vercell
│
├── public/                # Imagens, ícones e arquivos estáticos
├── src/
│   ├── app/        # Componentes reutilizáveis da interface
│   ├── components/             # Páginas da aplicação (rotas Next.js)
│   ├── data/          # Comunicação com a API
├── package.json           # Dependências e scripts
└── README.md              # Documentação do projeto
```

---

## 📡 API - Endpoints

Base URL:  
`https://viamobility-backend-dzb8a3hterh6d2ce.brazilsouth-01.azurewebsites.net/`

| Método | Endpoint                                                  | Descrição                          |
|--------|-----------------------------------------------------------|------------------------------------|
| GET    | `/api/next-train/{departure}/{linha}/{estacao}`          | Consulta o próximo trem            |
| GET    | `/api/linhas`                                             | Retorna o status atual das linhas |
| POST   | `/api/login-usuario`                                      | Efetua o login do usuário          |
| POST   | `/api/cadastrar-usuario`                                  | Cadastra um novo usuário           |
| POST   | `/api/cadastrar-reporte`                                  | Envia um reporte de problema       |
| GET    | `/api/reportes/{user}`                                    | Lista todos os reportes do usuário|

---

## 💻 Como Executar Localmente

1. Clone o repositório:

```bash
git clone [insira o link do repositório GitHub]
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:3000
```

---

## ✨ Tecnologias Utilizadas

- Next.js
- React
- Axios
- CSS Modules / Tailwind (se aplicável)
- API RESTful (Backend em Azure)

---

## 📲 Design Responsivo

O layout foi otimizado especialmente para smartphones com resolução **360x800**, garantindo boa legibilidade, navegação simples e uso prático em movimento.

---

> Desenvolvido com 💙 para melhorar a experiência de quem vive o transporte urbano diariamente.
