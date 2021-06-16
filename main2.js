const { createStore } = window.Redux;

// Step 1: Define a reducer
// A pure js function
// that transform the old state to the new one
// based on the action.type
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
// Step 2: Init your store with the reducer
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)
console.log(store.getState())
// Step 3: Subscribe to state changes to update UI
store.subscribe(() => console.log(store.getState()))
// Step 4: Dispatch action to update redux state
// The only way to mutate the internal state is to dispatch an action.
store.dispatch({ type: 'INCREMENT' }) // 1
store.dispatch({ type: 'INCREMENT' }) // 2
store.dispatch({ type: 'DECREMENT' }) // 1