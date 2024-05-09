Feature: Lista de usuários
Como um usuário qualquer 
Quero listar os usuarios cadastrados
Para poder visualizar as informações 

   Background: Tela inicial 
         Given usuário está na tela inicial

   Scenario: Listar usuários com sucesso
   Scenario: Devem exibir opções para exibir detalhes ou excluir usuário -  posso matar dentro desse cenario
   Scenario: Deve exibir uma opção para cadastrar usuário quando não existir usuários cadastrados
      When não existir usuários cadastrados
      Then um texto informando que não existe usuários cadastrados deverá ser exibido com opção de cadastrar um novo usuário
   Scenario: Deve exibir paginação se existir mais de 6 usuários cadastrados
   Scenario: Deve ser possível avançar entre as páginas da lista de usuários
   Scenario: Deve ser possível voltar para a página anterior
   Scenario: Não deve exibir paginação se existir 6 ou menos usuários cadastrados
   Scenario: Não deve ser possível avançar para a próxima página se não existirem usuários para serem exibidos nela