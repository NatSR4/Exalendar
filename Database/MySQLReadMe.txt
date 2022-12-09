This is a jumpstart guide to get going with a MySQL database.

1) Get MySQLWorkshop or something along those lines to host a local sql server

2) Set up w/ mysql. Download off the net, get a free community version for whatever device you're on

3) Open the exalendar.sql doc in your sql interface, and run all those lines to create a database

4) Make a file called ".env" in your main Exalendar folder. Set it up like this, but w/o parentheticals:
DB_HOST=localhost (probably. This should be whatever the hostname is in your sql setup)
DB_USER=root (you'll set up a username and password for your local server)
DB_PSWD=12345
DB_PORT=8080 (I believe you can leave these two as is.)
DB_NAME=exalendar

5) With any luck, you should be able to run, and the database will connect when you do NPM start.