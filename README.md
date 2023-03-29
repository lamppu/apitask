# apitask

This is a repository for the recruitment task for NoofLab Junior Developer position, spring 2023.

## Run the project

To run this project, you will need to install Node.js. This project was built with Node.js version 19.4.0.

### Clone this repository
```git clone https://github.com/lamppu/apitask.git```

### Install dependencies
In the project root, run ```npm install```

### Database configuration
#### Form database connection:

This project is set up to use MySQL as the database. To be able to run the app, create a new MySQL database and add the following lines with your database credentials in an .env file in the project root folder:

```
MYSQL_HOST='host'
MYSQL_PORT=port
MYSQL_USER='username'
MYSQL_PWD='password'
MYSQL_DB='database_name'
```

#### Add database tables and seed PostalCodes table with ten rows of data:

In the project root, run ```npm run init-db```

### Fetch data from PRH API and insert into the database

In the project root, run ```node prh_client/prh_api_client.js```

Note that the slash '\\' should be written the other way around on a Windows console.

### Run tests

In the project root, run ```npm run test```

### Start the server

In the project root, run ```node server.js```

### Make API calls

Now you are ready to make calls to the /postal_codes/[CODE]/companies endpoint.

Notice that in the validation I have assumed that the postal code is of the Finnish postal code format.
