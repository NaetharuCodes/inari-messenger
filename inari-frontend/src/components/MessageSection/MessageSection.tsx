import IconButton from "../IconButton/IconButton";
import styles from "./MessageSection.module.css";
import arrow from "../../icons/arrow.svg";
import MessageCard from "../MessageCard/MessageCard";

const MessageSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.messageWindow}>
        <MessageCard text="Hey Jenni! It's great to speak to you." />
        <MessageCard sent text="Hi! Did you have a nice time on your break?" />
        <MessageCard
          sent
          text="I saw Carley last week. She asked after you and the girls."
        />
        <MessageCard text="Break was great thank you! I took a nice walk in Pods Woods, where we used to go." />
        <MessageCard text="Nice to hear from Carley, we should all get together and have dinner soon." />
      </div>
      <form className={styles.messageForm} action="submit">
        <input className={styles.messageInput} type="text" />
        <IconButton icon={arrow} onClick={() => {}} />
      </form>
    </section>
  );
};

export default MessageSection;
