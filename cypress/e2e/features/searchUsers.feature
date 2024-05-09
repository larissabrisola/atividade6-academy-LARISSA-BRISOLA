Feature: Pesquisar usuário
Como um usuário qualquer 
Quero pesquisar um usuário
Para poder visualizar as informações sobre ele 

    Scenario: Pesquisar usuário pelo email com sucesso 
        Given que estou na tela inicial 
        And o usuário está cadastrado
        When preencher o campo de pesquisar usuário com o  email
        Then devo ser capaz de visualizar as informações do usuário 
    
    Scenario: Pesquisar usuário pelo nome com sucesso 
        Given que estou na tela inicial 
        When preencher o campo de pesquisar usuário com o nome
        Then devo ser capaz de visualizar as informações do usuário 

    Scenario: Usuário não encontrado 
        Given que estou na tela inicial 
        When preencher o campo de pesquisar com dados não cadastrados
        Then um texto de usuário não encontrado deve ser exibido
