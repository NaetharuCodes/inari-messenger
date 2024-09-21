import styles from "./App.module.css";
import logo from "./assets/logo.svg";
import Avatar from "./components/Avatar/Avatar";
import IconButton from "./components/IconButton/IconButton";
import homeIcon from "./icons/home.svg";
import messageIcon from "./icons/message.svg";
import notesIcon from "./icons/notes.svg";
import optionsIcon from "./icons/options.svg";

const App = () => {
  return (
    <div className={styles.container}>
      <section id="sidebar" className={styles.sidebar}>
        <img className={styles.logo} src={logo} alt="inari logo" />
        <div className={styles.mainNav}>
          <IconButton icon={homeIcon} onClick={() => {}} />
          <IconButton icon={messageIcon} onClick={() => {}} />
          <IconButton icon={notesIcon} onClick={() => {}} />
        </div>
        <div className={styles.account}>
          <Avatar />
          <IconButton icon={optionsIcon} onClick={() => {}} />
        </div>
      </section>
      <section id="contactSection" className={styles.contactSection}>
        b
      </section>
      <section id="messageSection" className={styles.messageSection}>
        c
      </section>
    </div>
  );
};

export default App;
