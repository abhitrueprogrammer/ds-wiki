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

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN](https://ui.shadcn.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Axios](https://axios-http.com/)
- Mongoose: mongo database connection
- Tanstack table: admin tables
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
9. Desgin plan made
10. Homepage (current admin page)
11. created nav.tsx for easier use
12. curent homepage created
13. content page: To call api -> display json.
14. AboutUs.tsx created and implimented
15. Styled according to design plan

## 🏁 Setup

To get started, fork your own copy and clone the main branch. To clone a branch you can run the following:

```bash
git clone -b main https://github.com/<Your username>/dswiki.git
```

Run these commands on your bash/terminal and open it in a code editor of your choice.

Run the following to install all the dependencies:

```bash
pnpm i
```
Then create a .env file and provide values for the following fields:
```
MONGODB_URI=
SERVER_URL=http://localhost:3000
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```
You can create a MONGODB cluster by visiting: https://cloud.mongodb.com/
You can setup google credentials by visiting: https://authjs.dev/getting-started/authentication/oauth

To start your development server run:

```bash
pnpm dev
```

