# CyberCell-Express Task4

### This is an assignment to practice for routes and routes handlers.

> Packages used :

- Express
- dotenv : This package is used for hiding confidential infos from public

> Initialize server

```bash
    npm init
```

> Install Packages

```bash
    npm i express dotenv
```

> GET Methods

- <code>/users</code> : This returns an array of users.

> POST Methods

- <code>/add-user</code> : This route takes <code>name , age , profession , contact , email ,gender</code> in the body and creates an user with the following infos.

> PUT Methods

- <code>/update-user/:email</code> : This route takes <code>email</code> as a parameter and <strong>the infos</strong> as body to be updated.

> DELETE Methods

- <code>/delete-user/:email</code> : This route takes <code>email</code> as a parameter and delete the user linked with that particular email.
