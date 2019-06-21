1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  ```
  Map, Reduce and Filter. Map can be used to make a new object while extending the properties of another object.
  ```

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  ```
  Actions- Packets of information that contain an action type and some data that we weant associated with that action type.
  Reducers- This is where we update our state. Actions tell reducers how to update the state.
  Store- This contains our state for our application
  ```

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is immutable. We clone application state and then we are able to modify it and replace the original state with the new copy.

1. What is middleware?

A Middlware function is a function that returns a function that returns a function.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

This is a middleware created by Dan Abramov and it provides the ability to handle asynchronous operations inside our Action creators.

1. Which `react-redux` method links up our `components` with our `redux store`?

Connect
