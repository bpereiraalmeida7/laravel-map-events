# laravel-map-events

Ferramenta para mapeamento de eventos de busca (AUTOCOMPLETE), POST de eventos dos usuários e timeline de eventos (API externa).

## Tecnologia Utilizada:

- Laravel 6
- MySQL

## Instrução:

- Para execução do framework [Laravel](https://laravel.com/docs/6.x/installation), é preciso ter PHP e composer pré-instalados.
- Clonar o repositório, e no diretório do sistema, executar o comando via terminal: 'composer install' e 'npm install' (Para instalar todas as dependências do projeto).
- Depois execute o comando 'php artisan serve', para executar o serviço do PHP no Laravel. Deve aparecer "Aplicação rodando no endereço: 127.0.0.1:8000", e é este endereço que deverá ser usado no navegador. 

## Observações Importantes:

- Para testar os endpoints, você pode utilizar ferramentas específicas (Postaman e etc).

Rotas:

> GET: /search/{param} 
> POST: /postEvent 
> GET: /viewTimeline