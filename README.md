# Review Sentiment Analysis

Welcome to the fascinating world of Review Sentiment Analysis, where we dive into the minds of customers and extract valuable insights from their feedback. In this project, we will be using the cutting-edge technology of Google NLP APIs to analyze the sentiment of customer reviews and extract valuable information that can be used to improve products and services.

## Running the Review Sentiment Analysis Project Locally

### Backend Setup

1. Install nvm (Node Version Manager) to manage multiple Node.js versions. Alternatively, you can directly use Node.js version 19.
   - To install nvm, follow the instructions [here](https://github.com/nvm-sh/nvm#install--update-script).
2. Install the project dependencies by running the command `npm i` in your terminal.
3. Install Prisma by running the command `npm i prisma@latest`.
   - Prisma is an ORM (Object-Relational Mapping) tool used to interact with databases. It will allow us to communicate with our Postgres database.
4. Set up a local Postgres database.
   - You can download and install Postgres from [here](https://www.postgresql.org/download/), or use a managed service such as [Heroku Postgres](https://www.heroku.com/postgres).
   - Create a new database and note the connection string, which will be used in the next step.
   - In the project root directory, create a `.env` file and set the `DATABASE_URL` variable to your Postgres connection string. For example: `DATABASE_URL="postgresql://username:password@localhost:5432/reviews"`.
5. Use Prisma to pull the database schema and generate client code. In your terminal, run the command `npx prisma db pull && npx prisma generate`.
   - This command will create a `prisma` folder with the database schema and generated client code.
6. Start the development server by running the command `npm run watch`.
   - This command will start the server in watch mode, so any changes you make will automatically be reflected in the running application.
7. Open a new terminal window and run the command `npm run dev`.
   - This command will start the development server and enable the backend API.

### Frontend Setup

1. Install nvm (Node Version Manager) to manage multiple Node.js versions. Alternatively, you can directly use Node.js version 19.
   - To install nvm, follow the instructions [here](https://github.com/nvm-sh/nvm#install--update-script).
2. Install the project dependencies by running the command `npm i` in your terminal.
3. Start the development server by running the command `npm start`.
   - This command will start the frontend server and open the application in your default browser.

### Congratulations! You have successfully set up and run the Review Sentiment Analysis project locally!
