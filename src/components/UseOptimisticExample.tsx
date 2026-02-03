import React, { useState, useOptimistic, startTransition } from 'react';

type Todo = {
  text: string;
  isPending?: boolean;
};

function UseOptimisticExample() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    }
  );

  const addTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const taskText = input;
    setInput('');

    startTransition(async () => {
      const optimisticTodo = { text: taskText, isPending: true };
      
      // Add optimistic todo
      addOptimisticTodo(optimisticTodo);

      // Simulate async operation (server delay)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Update actual state with final value
      setTodos(prevTodos => [...prevTodos, { text: taskText }]);
    });
  };

  return (
    <div className="p-5 max-w-[600px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">useOptimistic Hook - Add Task</h2>
      <p className="text-gray-600 text-sm mb-5">
        Add a new task to see optimistic updates in action. The item appears immediately with a pending state,
        then automatically updates to confirmed state after the server delay (1.5s).
      </p>
      
      <form onSubmit={addTask} className="mb-6 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium"
        >
          Add Task
        </button>
      </form>
      
      <ul className="list-none p-0">
        {optimisticTodos.map((todo, index) => (
          <li 
            key={`${todo.text}-${index}`} 
            className={`p-3 mb-2.5 rounded-md transition-all border-2 border-l-4 ${
              todo.isPending 
                ? 'bg-red-50 border-red-300 border-l-red-400 opacity-75' 
                : 'bg-green-50 border-green-300 border-l-green-400'
            }`}
          >
            <span className={`text-base ${
              todo.isPending ? 'text-red-700' : 'text-green-700'
            }`}>
              {todo.isPending ? '⏳ (Optimistic)' : '✓ (Confirmed)'} {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseOptimisticExample;
