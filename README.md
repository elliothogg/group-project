# GROUP 5 PROJECT

Make sure you have Node and NPM installed on your machine.

Clone the project, change into the directory and install the dependencies.

```bash
git clone https://github.com/philnash/react-express-starter.git
cd react-express-starter
npm install
```


You can start the server on its own with the command:

```bash
npm run server
```

Run the React application on its own with the command:

```bash
npm start
```

Run both applications together with the command:

```bash
npm run dev
```

The React application will run on port 3000 and the server port 3001.


## FRONT END

For developing the front end alone, just run $ npm start and go to localhost:3000/

All the files are inside of ./src

If you look at the "Website Schematic" inside ./documentation, it will show you where the code for each component needs to go. Each component has an associated .css file, which needs to be imported into the .js file.

The App.js file is where the website is brought together. It imports all of the pages and certain modules to be displayed. The <Router> & <Switch> emulate the effect of swithing pages.

At the moment, the order page is routed to localhost:3000/ (not /order), this can be changed inside of App.js.

index.js imports the App and renders it on the DOM.

serviceWorker.js manages the link between FE and BE; no need to edit this file.

This boilerplate contains mobile optimization, but this may break in the process of development.


## BACK END

This is contained inside ./server

All of the code can live inside on file (index.js), but there is an option to create seperate modules.

To run the backend server, type $ npm run server.

 To test the methods WITHOUT sending requests from the frontend code, you can send HTTP requests to localhost:3001 using curl (in the terminal), or by using Postman.




