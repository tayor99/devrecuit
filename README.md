
Quesion 1 :

        Props, are a way to pass data from a parent component to a child component in React. They are similar to function arguments in that they allow you to pass values from one component to another.
        function ChildComponent(props) {
        return <div>{props.message}</div>;
        }

        function ParentComponent() {
        return <ChildComponent message="Hello, World!" />;
        }
        The child component takes a prop called message which the parent Component passes down

        State: State represents the internal state of a component. It's an object that stores data that can be changed within the component. When the state of a component changes, React will re-render the component and its children.

        import React, { useState } from 'react';
        function Counter() {
        const [count, setCount] = useState(0);
        function handleClick() {
        setCount(count + 1);
        }
        return (
        <div>
                <p>Count: {count}</p>
                <button onClick={handleClick}>Increment</button>
        </div>
                );}
        In this example, we have a Counter component that uses the useState hook to manage its state. The count variable represents the current count, which is initially set to zero. The handleClick function updates the count by calling the setCount function with a new value.

QUESTION 2:

        JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

QUESTION 3:

        Solutions for this are in folder devrecuit

QUESTION 4:

        Lifting state up is a React concept where a shared state is moved to the nearest common ancestor of components that need to share or communicate with the state. This allows multiple components to read from and write to the same state while keeping the data consistent.

QUESTION 5:

        The Context API in React is a powerful feature for managing global state across a React application without the need for prop drilling.

        import React, { createContext, useState, useContext } from 'react';

        const userContext = createContext(); // creating the Context

        // Create a Provider Component
        export const userProvider = ({ children }) => {
        const [user, setUser] = useState("");

        const login = () => {
            setUser("Tayo");
        };

        return (
            <UserContext.Provider value={{ user, login }}>
            {children}
            </UserContext.Provider>
        );
        };

        // Custom hook to use the user Context
        export const useUser = () => {
        return useContext(userContext);
        };

QUESTION 6:

        React Portals provide a way to render components outside their parent DOM hierarchy while still being part of the React tree. This is really useful for modals view for more code based details

PRACTICAL:

        The folder above contains all the code for the requirments listed

        i. The form with validation apears when we click on the modal to add new todos which also covers for creating a modal with react Portals
        ii. The list to be filtered out is the list gotten from all the todos inputed which also covers for the search bar
        iii. The todo app connects to the local storage to add updates and delete
        iv. The multi-step form wizard is also handled  before users create todos
        v. I am using jsonplaceholder to hanle both the paginated data and also using useState and useEFfect
        Vi. The functionalities for todo is all handled in Context

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
