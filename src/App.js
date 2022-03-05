import './App.css';
import RegisterForm from './components/register';
import LoginForm from './components/login';

function App() {
  return (
    <div className="main-body">
      <RegisterForm/>
      <LoginForm/>
    </div>
  );
}

export default App;
