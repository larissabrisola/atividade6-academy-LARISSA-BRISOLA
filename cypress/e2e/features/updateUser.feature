Feature: Atualizar usuário
    Como um usuário qualquer
    Quero ser capaz de atualizar os dados de um usuário
    Para manter atualizado

    Background: Tela de atualização do usuário
        Given que usuário está na tela de atualizar informações de um determinado usuário

    Scenario: Deve ser possivel atualizar apenas o nome do usuário
        When clicar no botão Editar
        And preencher o campo nome com dados válidos
        And clicar no botão Salvar
        Then as informações serão atualizadas, uma mensagem de sucesso será exibida e o usuário deve ser redirecionado para a página inicial
    Scenario: Deve ser possivel atualizar apenas o email do usuário
        When clicar no botão Editar
        And preencher o campo email com dados válidos
        And clicar no botão Salvar
        Then as informações serão atualizadas, uma mensagem de sucesso será exibida e o usuário deve ser redirecionado para a página inicial
    Scenario: Deve ser possivel atualizar email e nome do usuário de uma vez
        When clicar no botão Editar
        And preencher o campo nome com dados válidos
        And preencher o campo email com dados válidos
        And clicar no botão Salvar
        Then as informações serão atualizadas, uma mensagem de sucesso será exibida e o usuário deve ser redirecionado para a página inicial
    Scenario: Deve ser possivel atualizar o email com 60 caracteres
        When clicar no botão Editar
        And preencher o campo email com dados válidos de 60 caracteres
        And clicar no botão Salvar
        Then as informações serão atualizadas, uma mensagem de sucesso será exibida e o usuário deve ser redirecionado para a página inicial
    Scenario: Deve ser possivel atualizar o nome com 100 caracteres
        When clicar no botão Editar
        And preencher o campo nome com dados válidos de 100 caracteres
        And clicar no botão Salvar
        Then as informações serão atualizadas, uma mensagem de sucesso será exibida e o usuário deve ser redirecionado para a página inicial
    Scenario: Deve ser possivel cancelar a ação
        When clicar no botão Editar
        And preencher o campo nome com dados válidos
        And clicar no botão Cancelar
        Then a ação será cancelada e os campos estarão indisponiveis
    Scenario: Não deve ser possivel atualizar ID usuário
        When clicar no botão Editar
        And tentar preencher o campo ID
        Then não deve ser possivel preencher
    Scenario: Não deve ser possível atualizar os dados do usuário com um email já utilizado
        When clicar no botão Editar
        And preencher o campo email com um email já cadastrado
        And clicar no botão Salvar
        Then um modal informando que email já é utilizado deverá ser exibido
    Scenario: Não deve ser possivel atualizar o nome com formato inválido
        When clicar no botão Editar
        And preencher o campo nome "090909090"
        And clicar no botão Salvar
        Then um texto informando que o formato de nome é inválido deve ser exibido
    Scenario: Não deve ser possivel atualizar o email com formato inválido
        When clicar no botão Editar
        And preencher o campo email "@.cooom"
        And clicar no botão Salvar
        Then um texto informando que o formato de email é inválido deve ser exibido
    Scenario: Não deve ser possivel atualizar o nome com menos de 4 caracteres
        When clicar no botão Editar
        And preencher o campo nome "sds"
        And clicar no botão Salvar
        Then um texto informando o minimo de caracteres de nome deve ser exibido
    Scenario: Não deve ser possivel atualizar o email com menos de 4 caracteres
        When clicar no botão Editar
        And preencher o campo email "t@g"
        And clicar no botão Salvar
        Then um texto informando o minimo de caracteres do email deve ser exibido
    Scenario: Não deve ser possivel atualizar o email com mais de 60 caracteres
        When clicar no botão Editar
        And preencher o campo email "caracterescaracterescaracterescaracterescaracterescaracteress"
        And clicar no botão Salvar
        Then um texto informando o limite de caracteres do email deve ser exibido
    Scenario: Não deve ser possivel atualizar o nome com mais de 100 caracteres
        When clicar no botão Editar
        And preencher o campo nome "caracterescaracterescaracterescaracterescaracterescaracterescaracterescaracterescaracterescaracteress"
        And clicar no botão Salvar
        Then um texto informando o limite de caracteres do nome deve ser exibido
    Scenario: Não deve ser possivel atualizar informações se o botão de Editar não for acionado
        When tento preencher o campo nome ou email  
        Then não deve ser possivel preencher
    Scenario: Deve ser possivel voltar para a página anterior
        When clicar no botão de Voltar
        Then o usuário deve ser redirecionado para a página inicial