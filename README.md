# To Do Back End

## General
Creating a Back End for To Do Application. 

For users, this application includes registering for the new users, logging in for the existing users, updating some users' data (username, email, and password), and deleting the existing users. 

For the todos, this application includes seeing all specific user's todos, creating user todos, updating some todos' data (title, date, status), and deleting todos

<br>

## Packages
* Dotenv
* Bcrypt
* Cookie-parser
* Express
* Joi
* JSONWebToken
* PostgreSQL
* Sequelize
* Sequelize-cli

<br>

## Routes & Controller
### User:
* Register New User <br>
`localhost:9000/v1/register`

* Login Existing User <br>
`localhost:9000/v1/register`

* Update User's Username <br>
`localhost:9000/v1/user/update/username/:id`

* Update User's Email <br>
`localhost:9000/v1/user/update/email/:id`

* Update User's Password <br>
`locahost:9000/v1/user/update/password/:id`

* Delete User <br>
`localhost:9000/v1/user/delete/:id`


### To Do:
* See All User's Todo <br>
`localhost:9000/v1/todo`

* Create Todo <br>
`localhost:9000/v1/todo/create`

* Update Todo's Title <br>
`localhost:9000/v1/todo/update/title/:id`

* Update Todo's Status <br>
`localhost:9000/v1/todo/update/status/:id`

* Update Todo's Date <br>
`localhost:9000/v1/todo/update/date/:id`

* Delete Todo <br>
`localhost:9000/v1/todo/delete/:id`