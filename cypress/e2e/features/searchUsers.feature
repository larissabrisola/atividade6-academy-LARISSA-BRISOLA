Feature: Pesquisar usuário
Como um usuário qualquer 
Quero pesquisar um usuário
Para poder visualizar as informações sobre ele 
    
    Scenario: Pesquisar usuário com sucesso 
        When preencher o campo de pesquisar usuário
        Then devo ser capaz de visualizar as informações do usuário 

    Scenario: Usuário não encontrado 
        When preencher o campo de pesquisar com dados não cadastrados
        Then um texto de usuário não encontrado deve ser exibido
