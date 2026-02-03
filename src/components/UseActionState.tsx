import { useActionState } from 'react';

type FormState = {
  success: boolean
  error: string | null
  message?: string | null
  email?: string
  name?: string
};

// Simulated server action (async function that returns state/error)
async function submitFormAction(previousState: FormState, formData: FormData): Promise<FormState> {
  // Simulate server delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  const email = formData.get('email') as string;
  const name = formData.get('name') as string;

  // Validation
  if (!email || !name) {
    return { 
      ...previousState,
      error: 'All fields are required', 
      success: false, 
      message: null 
    };
  }

  if (!email.toString().includes('@')) {
    return { 
      ...previousState,
      error: 'Invalid email format', 
      success: false,
      message: null
    };
  };

  // Simulate successful submission
  return {
    ...previousState,
    success: true,
    error: null,
    message: `Form submitted! Thank you, ${name}.`,
    email,
    name
  };
};

function UseActionStateExample() {
  const [state, formAction, isPending] = useActionState(submitFormAction, {
    success: false,
    error: null,
    message: null
  });

  return (
    <div className="p-5 max-w-[600px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">useActionState Hook</h2>
      <p className="text-gray-600 text-sm mb-6">
        `useActionState` simplifies handling async actions in forms. It manages loading state, errors, 
        and results. Perfect for form submissions and async operations.
      </p>

      <form action={formAction} className="space-y-4 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            disabled={isPending}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-black"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            disabled={isPending}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-black"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {isPending ? '⏳ Submitting...' : 'Submit Form'}
        </button>
      </form>

      {/* Error Message */}
      {state?.error && (
        <div className="p-4 mb-4 bg-red-50 border border-red-300 rounded-md">
          <p className="text-red-700 font-medium">❌ {state.error}</p>
        </div>
      )}

      {/* Success Message */}
      {state?.success && (
        <div className="p-4 mb-4 bg-green-50 border border-green-300 rounded-md">
          <p className="text-green-700 font-medium">{state.message}</p>
          {state.name && (
            <div className="mt-3 text-sm text-green-600">
              <p><strong>Name:</strong> {state.name}</p>
              <p><strong>Email:</strong> {state.email}</p>
            </div>
          )}
        </div>
      )}

      {/* Key Features */}
      <section className="mt-4 bg-purple-50 border border-purple-300 rounded-md p-4">
        <h4 className="text-black font-bold mb-2">How it works:</h4>
        <ol className="text-sm space-y-2 text-gray-700">
          <li>1. User submits form</li>
          <li>2. Form data is serialized automatically</li>
          <li>3. Action function is called with (previousState, formData)</li>
          <li>4. isPending becomes true during execution</li>
          <li>5. Action returns new state</li>
          <li>6. Component re-renders with new state</li>
        </ol>
      </section>
    </div>
  )
};

export default UseActionStateExample;
