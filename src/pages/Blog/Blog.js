import React from 'react';

const Blog = () => {
    return (
        <section className="  dark:bg-gray-800 dark:text-gray-100 py-10 lg:py-24">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">INTERVIEW QUESTIONS</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Importance Question & Answer</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What are the different ways to manage a state in a React application?</summary>
                        <div className="px-4 pb-4 text-base-content">
                            <p><strong>Ans:</strong>There are several other ways to manage state​s in React, including the use of: Hooks. React Context API. Apollo Link State. There are four main types of state you need to properly manage in your React app. {"(1)"} Local Sate {"(2)"} Global state {"(3)"} Server State {"(4)"} URL State <br /> <strong>Local State:</strong>Local state is data we manage in one or another component. <br /> Local state is most often managed in React using the useState hook. </p>
                            <p><strong>Global State:</strong> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                            <p><strong>Server state:</strong> Data that comes from an external server that must be integrated with our UI state.</p>
                            <p><strong>URL state:</strong>Data that exists on our URLs, including the pathname and query parameters.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does prototypical inheritance work?</summary>
                        <div className="px-4 pb-4 text-base-content text-justify">
                            <p><strong>Ans:</strong>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                            <p className='my-6'>JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types.</p>
                            <p className='my-6 text-justify'>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.</p>
                            <p className='mb-6 text-justify'>While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented.</p>
                            <p>Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is a unit test? Why should we write unit tests?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p><strong>Ans:</strong> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">React vs. Angular vs. Vue?</summary>
                        <div className="px-4 pb-4 space-y-2 text-justify">
                            <p><strong>Ans:</strong>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.</p>
                            <div className='text-justify text-base-content'>
                                <h3 className="h3 text-lg font-semibold">React</h3>
                                <p className="mb-6">React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.</p>
                                <p className="mb-6">React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.</p>
                                <p className="mb-6">Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.</p>
                                <p className="mb-6">React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.</p>
                                <p className="mb-6">Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.</p>
                            </div>
                            {/* Angular */}
                            <div className='text-justify text-base-content'>
                                <h3 className="h3 text-lg font-semibold">Angular</h3>
                                <p className='mb-6'>In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.</p>
                                <p className='mb-6'>AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.</p>
                                <p className='mb-6'>Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.</p>
                                <p className='mb-6'>Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.</p>
                                <p className='mb-6'>Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.</p>
                                <p className='mb-6'>Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.</p>
                            </div>
                            {/* Vue */}
                            <div className='text-justify text-base-content'>
                                <h3 className="h3 text-lg font-semibold">Angular</h3>
                                <p className='mb-6'>Even though Redux can be used in Vue, there are no official bindings. But that should not worry you because Vuex is the official state management library made specifically for Vue applications. Aside from integrating very well with Vue, it’s easy to debug using Vue’s developer tools.</p>
                                <p className='mb-6'>For mobile app development, there’s an up and coming project called Weex. Weex is developed and used by Alibaba, but it’s not as mature and powerful as React Native. What’s more, since the project is developed and used more in China, it’s harder to find documentation and solutions to issues in English.

                                    Vue integrates well with Laravel, and that’s why they are often used together. Laravel offers complete JavaScript and CSS scaffolding to enable the use of Vue in new projects.</p>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;