Feature: Cadastro de usuário
Como um usuário qualquer 
Quero poder me cadastrar 
Para ter meus dados salvos

    Background: Tela de cadastro
        Given usuário está na tela de cadastro

    Scenario: Ao preencher todos os campos corretamente e confirmar, o cadastro será realizado com sucesso
        When informar um nome válido
        And informar um email válido
        And confirmar
        Then o usuário será cadastrado e uma mensagem de sucesso será exibida
    Scenario: Não deve ser possivel cadastrar com nome acima de 100 caracteres
        When informar um nome "jureminhasjureminhasjureminhasjureminhasjureminhasjureminhasjureminhasjureminhasjureminhasjureminhasj"
        And informar um email válido
        And confirmar
        Then uma mensagem informando o limite de caracteres do nome deverá ser exibida
    Scenario: Não deve ser possivel cadastrar com email acima de 60 caracteres
        When informar um nome válido
        And informar um email "oioioioioioioioioioioioioioioioioioioioioioioioioioioioioioiw"
        And confirmar
        Then uma mensagem informando o limite de caracteres do email deverá ser exibida
    Scenario: Não deve ser possivel cadastrar com um email já utilizado
        When informar um nome válido
        And informar um e-mail já utilizado
        And confirmar
        Then uma mensagem informando que o email já é utilizado deverá ser exibida
    Scenario: Não deve ser possivel cadastrar com o nome vazio
        When informar um email válido
        And confirmar
        Then uma mensagem informando que o campo nome é obrigatório deverá ser exibida
    Scenario: Não deve ser possivel cadastrar com o email vazio
        When informar um nome válido
        And confirmar
        Then uma mensagem informando que o campo email é obrigatório deverá ser exibida
    Scenario: Não deve ser possivel cadastrar com todos campos vazios
        When confirmar
        Then uma mensagem informando que todos os campos são obrigatórios deverá ser exibida
    Scenario: Não deve ser possivel cadastrar com formato de email inválido
        When informar um nome válido
        And informar um email 'asjs'
        And confirmar
        Then uma mensagem informando que o campo email está inválido
    Scenario: Não deve ser possivel cadastrar com formato de nome inválido
        When informar um nome "kaue3"
        And informar um email válido
        And confirmar
        Then uma mensagem informando que o campo nome está inválido
    Scenario: Não deve ser possivel cadastrar com nome abaixo/igual a 3 caracteres
        When informar um nome "ana"
        And informar um email válido
        And confirmar
        Then uma mensagem informando o minimo de caracteres do nome deverá ser exibida
    Scenario: Não deve ser possivel cadastrar com email abaixo/igual a 3 caracteres
        When informar um nome válido
        And informar um email "t@i"
        And confirmar
        Then uma mensagem informando o minimo de caracteres do email deverá ser exibida
    Scenario: Deve ser possivel voltar para a página Inicial
        When clicar para voltar a página inicial
        Then devo ser redirecionado para página inicial
    Scenario: Deve ser possível cadastrar usuário com 100 caracteres no nome
        When informar um nome com 100 caracteres
        And informar um email válido
        And confirmar
        Then o usuário será cadastrado e uma mensagem de sucesso será exibida
    Scenario: Deve ser possível cadastrar usuário com 60 caracteres no email
        When informar um nome válido
        And informar um email com 60 caracteres
        And confirmar
        Then o usuário será cadastrado e uma mensagem de sucesso será exibida
