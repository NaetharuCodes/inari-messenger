import styles from "./App.module.css";
import ContactsSection from "./components/ContactsSection/ContactsSection";
import MessageSection from "./components/MessageSection/MessageSection";
import SidebarSection from "./components/SidebarSection/SidebarSection";

const App = () => {
  return (
    <div className={styles.container}>
      <SidebarSection />
      <ContactsSection />
      <MessageSection />
    </div>
  );
};

export default App;
