# Formação em Node e React
Atividades de Node, React Native e React da Extensão Tecnológica Formação Node e React

## 1. Iniciando o projeto

1. **Requisitos**
    * Node.js
    * expo
    * Mysql ou container docker com mysql

######
2. **Instalando dependêncencias**
    * **API node.js** - dentro da pasta api-node
        ```node
        npm install
        ```
    * **APP mobile** - dentro da pasta mobile
        ```node
        npm install --force
        ```

3. **Containers do banco**
    * **Levantando** - dentro da pasta api-node
        ```docker
        docker compose up -d
        ```
    * **Parando** - dentro da pasta api-node
        ```docker
        docker compose stop
        ```

## 2. Rodando o projeto

* **API node.js** - dentro da pasta api-node
    ```node
    npm run dev
    ```
* **APP mobile** - dentro da pasta mobile
    ```node
    expo start
    ```
    ou
    ######
    ```node
    expo start --web
    ```

