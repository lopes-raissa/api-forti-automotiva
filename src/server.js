// Exportação do app, que traz o express. Não precisamos colocar a extensão .js porque ele faz isso automaticamente.
const app = require("./app");

// Criando uma variável para definir a porta que utilizaremos.
const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});