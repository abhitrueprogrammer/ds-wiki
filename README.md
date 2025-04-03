We make a get endpoint on /api/lore that allow free access to data about dark souls (title, description and type) so that people can use it to either analyse it, show it in their custom UI, get items, people etc

We also feature an admin panel to perform CRUD on these posts

# Todo
- [x] Link the mongo db
- [x] Admin Panel
- [x] login and user role
- [x] Create backend routes to get approve buffer
- [x] create markdown editor
- [x] Write backend routes for CRUD of posts
- [x] Make frontend for performing crud of posts
- [x] add detection of unauthorised login
- [x] Homepage
- [x] Styling 

# dependencies 
- Mongoose: mongo database connection
- Tanstack table: admin tables
- shadcn: basic scaffold ui
- auth.js: login

# Log
1. init next project
2. init mongoose connection
3. create admin page first until figma comes
4. initialise shadcn for admin panel to not waste time on basic UI
5. Create Table
6. Added basic login but didn't connect yet
7. Added delete and edit 
8. Connected authentication
