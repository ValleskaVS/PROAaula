// Define a classe Funcionario, que representa um funcionário com um nome
class Funcionario {
    // O construtor inicializa o nome do funcionário
    constructor(nome) {
        this._nome = nome;  // Atributo privado para armazenar o nome do funcionário
    }

    // Getter para o nome do funcionário
    get nome() {
        return this._nome;  // Retorna o valor do atributo _nome
    }

    // Setter para o nome do funcionário
    set nome(nome) {
        this._nome = nome;  // Define o valor do atributo _nome
    }

    // Método que retorna uma descrição básica do funcionário
    descricao() {
        return `Nome: ${this._nome}`;  // Retorna uma string com o nome do funcionário
    }
}

// Define a classe Engenheiro, que herda de Funcionario e adiciona a especialidade
class Engenheiro extends Funcionario {
    // O construtor inicializa o nome e a especialidade do engenheiro
    constructor(nome, especialidade) {
        super(nome);  // Chama o construtor da classe base (Funcionario) para inicializar o nome
        this._especialidade = especialidade;  // Atributo privado para armazenar a especialidade do engenheiro
    }

    // Getter para a especialidade do engenheiro
    get especialidade() {
        return this._especialidade;  // Retorna o valor do atributo _especialidade
    }

    // Setter para a especialidade do engenheiro
    set especialidade(especialidade) {
        this._especialidade = especialidade;  // Define o valor do atributo _especialidade
    }

    // Método que retorna uma descrição detalhada do engenheiro, incluindo sua especialidade
    descricao() {
        return `${super.descricao()}, Especialidade: ${this._especialidade}`;  // Chama o método descricao da classe base e adiciona a especialidade
    }
}

// Define a classe Designer, que herda de Funcionario e adiciona a ferramenta
class Designer extends Funcionario {
    // O construtor inicializa o nome e a ferramenta do designer
    constructor(nome, ferramenta) {
        super(nome);  // Chama o construtor da classe base (Funcionario) para inicializar o nome
        this._ferramenta = ferramenta;  // Atributo privado para armazenar a ferramenta do designer
    }

    // Getter para a ferramenta do designer
    get ferramenta() {
        return this._ferramenta;  // Retorna o valor do atributo _ferramenta
    }

    // Setter para a ferramenta do designer
    set ferramenta(ferramenta) {
        this._ferramenta = ferramenta;  // Define o valor do atributo _ferramenta
    }

    // Método que retorna uma descrição detalhada do designer, incluindo a ferramenta que usa
    descricao() {
        return `${super.descricao()}, Ferramenta: ${this._ferramenta}`;  // Chama o método descricao da classe base e adiciona a ferramenta
    }
}

// Cria uma instância da classe Engenheiro com o nome "Rodrigo" e especialidade "Backend"
const engenheiro = new Engenheiro("Rodrigo", "Backend");

// Cria uma instância da classe Designer com o nome "BobMarley" e ferramenta "Figma"
const designer = new Designer("BobMarley", "Figma");

// Imprime a descrição do engenheiro no console
console.log(engenheiro.descricao());

// Imprime a descrição do designer no console
console.log(designer.descricao());
