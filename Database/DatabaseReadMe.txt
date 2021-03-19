The following is an overview on the database organization and setup. The project
uses a MySQL database, and sequelize as an ORM. We use sequelize-auto to generate
sequelize models.

Helpful Documentation:
https://sequelize.org/master/
https://github.com/sequelize/sequelize-auto/blob/master/README.md

A diagram of the database relationships is available here:
https://dbdiagram.io/d/605406d0ecb54e10c33c2d9a

Originally the database was held on a rasberrypi running a MySQL server. This
probably won't exist in the future so you'll have to find a new way to host it.

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

Your job at this point is to expand the databse tools as well as revising the 
diagram and models to the projects needs. 

Should you change the diagram and need to re import the sequelize models, usue the
library sequelize-auto. It allows you to generate models based upon your databases
structure. So just change the diagram, alter the database (wipe it if you have to),
delete the models folder, and then use sequelize auto to generate new models.
