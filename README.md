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
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Tanstack Table](https://tanstack.com/table/latest)
- [Auth.js](https://authjs.dev/)

# Features
**Explore the API**: Access all available endpoints through the API tab—perfect for developers and lore enthusiasts.

**Admin Control**: Admins can add new entries and manage existing data directly through the dashboard.

**Refined Design**: Navigate a sleek, immersive interface crafted to reflect the soul of the game.

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

## ScreenShots
**Home Page**
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/2a1c0877-0101-427c-b416-22b963c4242a" />

**API Page**: You can call and view contents of our API here
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/3bcda600-8f62-4f46-8764-e5824eb5436c" />

**Admin Panel**: Admin powers let you manage the Posts->Edit or Delete
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/51afe0d9-b59d-4cf6-ae8a-d57218ba21ca" />

**Post Creation**: Admins can create new posts in a **Markdown Editor**
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/f80dd4e5-1e8f-4946-88f3-ef760dd07f33" />

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

