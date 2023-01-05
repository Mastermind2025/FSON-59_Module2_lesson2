import { Layout } from './components/Layout/Layout';
import { Header } from './components/Layout/Header/Header';
import { Counter } from './components/Counter/Counter';
import { Vouter } from './components/Vouter/Vouter';
import { LoginForm } from './components/LoginForm/LoginForm';
import { Users } from './components/Users/Users';

// всё добавляем в компонент App
// всё добавляем в компонент App
// всё добавляем в компонент App

export const App = () => {
  return (

    <Layout>

      <Header title="Hello world!" />
      <Counter />
      <Vouter />
      <LoginForm />
      <Users />

    </Layout>

  );
};