Feature: Lista de usuários 

    Scenario: Listar usuários com sucesso 
        Given que existe usuários cadastrados
        When acesso a tela inicial 
        Then os usuários cadastrados são exibidos 
#Scenario: Devem exibir opções para exibir detalhes ou excluir usuário -  posso matar dentro desse cenario
    Scenario: Deve exibir uma opção para cadastrar usuário quando não existir usuários cadastrados
        Given que não existe usuários cadastrados
        When acesso a tela inicial 
        Then um texto informando que não existe usuários cadastrados com um botão para cadastrar novo usuário será exibido

    Scenario: Deve exibir paginação se existir mais de 6 usuários cadastrados
    Scenario: Deve ser possível avançar entre as páginas da lista de usuários
    Scenario: Deve ser possível voltar para a página anterior
    Scenario: Não deve exibir paginação se existir 6 ou menos usuários cadastrados
    Scenario: Não deve ser possível avançar para a próxima página se não existirem usuários para serem exibidos nela