Feature: Lista de usuários
Como um usuário qualquer 
Quero listar os usuarios cadastrados
Para poder visualizar as informações 

   Background: Tela inicial 
      Given usuário está na tela inicial

   Scenario: Deve exibir uma opção para cadastrar usuário quando não existir usuários cadastrados
      When não existir usuários cadastrados
      Then um texto informando que não existe usuários cadastrados deverá ser exibido com opção de cadastrar um novo usuário
   Scenario: Deve exibir paginação se existir mais de 6 usuários cadastrados
      When existir mais que 6 usuários cadastrados 
      Then a paginação deve estar disponinel
   Scenario: Deve ser possível avançar entre as páginas da lista de usuários
      When existir mais que 6 usuários cadastrados 
      And clicar no botão de Próximo 
      Then deve ser capaz ir para a proxima página 
   Scenario: Deve ser possível voltar para a página anterior
      When existir mais que 6 usuários cadastrados 
      And clicar no botão de Próximo
      Then deve ser capaz de voltar a página Anterior 
   Scenario: Não deve exibir paginação se existir 6 ou menos usuários cadastrados
      When existir 6 usuários cadastrados
      Then a paginação não deve estar disponivel 
   Scenario: Não deve ser possível avançar para a próxima página se não existirem usuários para serem exibidos nela
      When existir mais que 6 usuários cadastrados 
      And clicar no botão de próximo 3 vezes
      Then não deve ser possivel clicar no botão de proximo 

