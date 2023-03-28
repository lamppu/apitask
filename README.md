# apitask

This is a repository for the recruitment task for NoofLab Junior Developer position, spring 2023.

## Run the project

To run this project, you will need to install Node.js. This project was built with Node.js version 19.4.0.

#### Clone this repository
```git clone https://github.com/lamppu/apitask.git```

#### Database configuration
##### Form database connection

This project is set up to use MySQL as the database. To be able to run the app, create a new MySQL database and add the following lines with your database credentials in an .env file in the project root folder:

```
MYSQL_HOST='host'
MYSQL_PORT=port
MYSQL_USER='username'
MYSQL_PWD='password'
MYSQL_DB='database_name'
```

##### Add database tables and seed PostalCodes table with ten records

In the project root, run ```npm run init-db```

