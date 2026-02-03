# Experimenting React Hooks

This project is used to test and explore React 19 hooks with interactive examples.

## Features

- **useOptimistic Hook**: Demonstrates optimistic UI updates with a todo list

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
- `/use` - use hook example
- `/use-optimistic` - useOptimistic hook example
- `/use-action-state` - useActionState hook example

## Purpose

This project serves as a learning and testing ground for the new hooks introduced in React 19 to see practical implementations and understand their use cases.

## Table of Contents

1. [useOptimistic Hook](#useoptimistic-hook)

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