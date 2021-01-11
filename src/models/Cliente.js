const { Model, DataTypes } = require("sequelize");

class Cliente extends Model {
    // Inicialização dos campos da tabela
    static init(sequelize){
        super.init(
            {
                cliente: DataTypes.STRING,
                produto: DataTypes.STRING,
                quantidade: DataTypes.STRING
            },
            {
                sequelize,
            }
        );
    }

    // Configuração de relacionamentos
    static associate(models){
        
    }
}

module.exports = Cliente;