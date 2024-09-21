import Avatar from "../Avatar/Avatar";
import IconButton from "../IconButton/IconButton";
import styles from "./SidebarSection.module.css";
import logo from "../../assets/logo.svg";
import homeIcon from "../../icons/home.svg";
import messageIcon from "../../icons/message.svg";
import notesIcon from "../../icons/notes.svg";
import optionsIcon from "../../icons/options.svg";

const SidebarSection = () => {
  return (
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
  );
};

export default SidebarSection;
