Current Tables:
*users
*user_settings
*user_classes
*classes
*class_events

Short Description
*users:
Stores a list of all users, including their name, username, and hashed password.
used as a foreign key for other tables

*user_settings
Stores a list of settings and a foreign key to the user they are associated with

*user_classes
Stores a foreign key to a class and a foreign key to a user, used to find all classes
taken by a given user.

*classes
Stores a list of classes, their names, and a foreign key to the teacher(user)
associated with them

*class_events
Stores event data as described here
https://stackoverflow.com/questions/5183630/calendar-recurring-repeating-events-best-storage-method