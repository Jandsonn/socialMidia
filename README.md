# socialMidia
Uma construção de uma rede social, onde é utilizado uma API e um arquiivo docker-compose, para utilizar o projeto é preciso usar o yarn ou npm, demonstrarei aqui um exemplo para quem utilizar o yarn.
yarn start, esse comando deve ser executado no terminal dentro da pasta do projeto, dentro da pasta api, usamos o mesmo comando... As duas aplicações serão executadas em diferentes portas, então temos que executar as duas pois são aplicações isoladas.
a API e também o client. Então dentro da pasta do cliente devemos usar o mesmo comando, exemplo: yarn start dentro da pasta do client. Obs: a aplicação client e a api deve ser executadas juntas, pois faze, parte do projeto e uma depende da outra. Então para que tenhamos sucesso temos que executar as duas aplicações com o yarn. yarn start dentro da pasta do client e yarn start dentro da pasta api.
Após isso o projeto estará pronto para ser exibibido e mostrado. Até o final desse projeto acredito que será feito um deployment.

o arquivo docker-compose.yaml também deverá ser executar, pois é o arquivo do container do nosso banco de dados mysql, então devemos abrir outro terminal só para monitorar os status dele. Podemos usar o seguinte comando para executar o docker-compose.  docker-compose up -d a flag "-d" indica que será executado em modo detach, mas eu prefiro ver os status então posso usar só o docker-compose up. Após você ter chegado até aqui, espero que tenha tido sucesso ao executar a aplicação, agradeço pela atenção e obrigado.




Jandson Ferreira
