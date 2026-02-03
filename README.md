# Experimenting React Hooks

This project is used to test and explore React 19 hooks with interactive examples.

## Features

- **useOptimistic Hook**: Demonstrates optimistic UI updates with a todo list
- **useActionState Hook**: Demonstrates form handling with async actions and state management

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Navigation

The app includes navigation between different hook examples:
- `/use-optimistic` - useOptimistic hook example
- `/use-action-state` - useActionState hook example

## Purpose

This project serves as a learning and testing ground for the new hooks introduced in React 19 to see practical implementations and understand their use cases.

## Table of Contents

1. [useOptimistic Hook](#useoptimistic-hook)
2. [useActionState Hook](#useactionstate-hook)

## Hooks Overview

### useOptimistic Hook

`useOptimistic` is a React Hook introduced in React 19 that allows to show a different state while an async action is underway. It enables optimistic updates, where the UI immediately reflects the expected result of an action before the server confirms it.

**Key Concepts:**
- Show optimistic state immediately for better UX
- Automatically revert to actual state when action completes
- Commonly used with form submissions and server actions
- Improves perceived performance of async operations

### useOptimistic Basic Syntax

```javascript
const [optimisticState, addOptimistic] = useOptimistic(
  state,
  // updateFn (optional)
  (currentState, optimisticValue) => {
    // merge and return new optimistic state
    return newState;
  }
);
```

**Parameters:**
- `state`: The initial/current state value
- `updateFn` (optional): A function that takes current state and optimistic value, returns the new optimistic state

**Returns:**
- `optimisticState`: The current state (either actual or optimistic)
- `addOptimistic`: A function to trigger an optimistic update

### useOptimistic When to Use

Use `useOptimistic` when:

✅ **Good use cases:**
- Form submissions that update a list (todos, posts, comments)
- Like/unlike buttons
- Upvote/downvote functionality
- Adding items to a cart
- Any action where you can predict the outcome
- When server response time is noticeable

❌ **Avoid when:**
- The action outcome is unpredictable
- Server might return different data than expected
- Action has complex validation that might fail
- Real-time data accuracy is critical

---

### useActionState Hook

`useActionState` is a React Hook introduced in React 19 that helps you manage state updates based on the result of a form action. It simplifies handling async form submissions by automatically managing loading states, errors, and results.

**Key Concepts:**
- Binds async actions directly to forms using the `action` attribute
- Automatically handles FormData serialization
- Built-in pending state management
- Returns updated state from the action function
- Eliminates need for manual form handling with useTransition

### useActionState Basic Syntax

```javascript
const [state, formAction, isPending] = useActionState(
  actionFn,
  initialState
);
```

**Parameters:**
- `actionFn`: Async function that receives (previousState, formData) and returns new state
- `initialState`: The initial state value

**Returns:**
- `state`: The current state returned from the action function
- `formAction`: Function to pass to form's `action` prop
- `isPending`: Boolean indicating if the action is currently executing

### useActionState When to Use

Use `useActionState` when:

✅ **Good use cases:**
- Form submissions with validation
- User registration/login forms
- Search forms with async results
- Multi-step forms
- Forms that need server-side validation
- Any form that updates based on submission results