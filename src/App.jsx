import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies tincidunt. Nullam nec purus nec nunc ultricies tincidunt. Nullam nec purus nec nunc ultricies tincidunt. Nullam nec purus nec nunc ultricies tincidunt."
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </>
  );
}

export default App;
