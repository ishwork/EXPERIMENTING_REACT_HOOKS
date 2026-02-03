import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router';
import './App.css';

import UseOptimisticExample from './components/UseOptimisticExample';
import UseActionStateExample from './components/UseActionState';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <h1 className="text-center text-4xl font-bold pt-8 mb-6 text-gray-800">
          Experimenting React Hooks
        </h1>
        
        <nav className="text-center mb-8 flex justify-center gap-8 flex-wrap py-4 px-4">
          <NavLink 
            to="/use-optimistic" 
            className={({ isActive }) => 
              isActive 
                ? 'px-8 py-3 text-gray-700 text-lg font-bold border-b-[3px] border-black inline-block' 
                : 'px-8 py-3 text-gray-700 text-lg inline-block hover:text-blue-600'
            }
          >
            useOptimistic
          </NavLink>
          <NavLink 
            to="/use-action-state" 
            className={({ isActive }) => 
              isActive 
                ? 'px-8 py-3 text-gray-700 text-lg font-bold border-b-[3px] border-black inline-block' 
                : 'px-8 py-3 text-gray-700 text-lg inline-block hover:text-blue-600'
            }
          >
            useActionState
          </NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<UseOptimisticExample />} />
          <Route path="/use-optimistic" element={<UseOptimisticExample />} />
          <Route path="/use-action-state" element={<UseActionStateExample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
  
