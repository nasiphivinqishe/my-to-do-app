# My ToDo App

Bootstrapped with create-reac-app, this Application uses REACT Hooks to manage the State of the Application. The App has mainly 3 sections, one to Add/Edit TODO then the 2 others are for completed and uncompleted ToDo list. User can drag across back/forth - marking a ToDo as complete or bringing it back to uncompleted. The TODOs have draggable feature. As part of security/defensive programming, an exception is throw on a Nice Alert when you are dropping toDo over other to do as that is not allowed, its only allowed to drop on the container's empty space because it brings errors when dropping on other todo. This App uses font-awesome for icons. 

ToDo can be created, edited(editing the content), updated status(complete or incomplete) and deleted

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
