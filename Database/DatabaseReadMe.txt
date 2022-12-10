The following is an overview on the database organization and setup. The project
uses a MySQL database, and sequelize as an ORM. We use sequelize-auto to generate
sequelize models.

Helpful Documentation:
https://sequelize.org/master/
https://github.com/sequelize/sequelize-auto/blob/master/README.md

A diagram of the database relationships is available here:
https://dbdiagram.io/d/608317c5b29a09603d11e433

Originally the database was held on a rasberrypi running a MySQL server. This
probably won't exist in the future so you'll have to find a new way to host it.
UPDATE: The database is currently hosted on freedb.tech. Login details are posted
on the discord server. Once logged into freedb.tech click on "Visit PhpMyAdmin".
The Username and password are detailed in the .env file provided in the discord.
If possible find a more permanent place to host it the databse such as AWS.


Once you find a way to host the datbase you can export the MySQL statements from
the diagram above. After executing those you will need to create credentials for 
each user. Users will have to put there credentials in a file named ".env" that
has the following text

DB_HOST=*sql_host*
DB_USER=*sql_username*
DB_PSWD=*sql_password*

Make sure these files are included in the gitignore (they should already be there).
If you did all of this correctly you should be able to use functions from the tools
classes now.

Your job at this point is to expand the database tools as well as revising the 
diagram and models to the projects needs. 

Should you change the diagram and need to re import the sequelize models, usue the
library sequelize-auto. It allows you to generate models based upon your databases
structure. So just change the diagram, alter the database (wipe it if you have to),
delete the models folder, and then use sequelize auto to generate new models.

In order to run sequelize-auto, install it and grab the variables defined by the
database hosting service. This is dependent on whatever is being used to host the
database. However, in order for sequelize to work the variables needed must be
defined in .env, so you can use those to run the following command:
For Linux:
sequelize-auto -h [host] -d [database name] -u [username] -x [password] --dialect mysql -o Database/models/
For Windows:
npx sequelize-auto -h [host] -d [database name] -u [username] -x [password] --dialect mysql -o Database/models/
Refer to the sequelize-auto readme for more information.

How to setup the backend for local use:
Download MySQL
We are using MySQL Workbench for ease, this is downloaded when you download MySql from the internet
You will be directed to make a connection for your server, the default settings suffice for now
Create your .env file with the information mentioned above, the sql host will likely be localhost, and the user and password will be whatever you've given it.
Run the exalendar.sql file by selecting OPEN a SQL Script within your database
Run the command mentioned above 
You should be good to go now!
