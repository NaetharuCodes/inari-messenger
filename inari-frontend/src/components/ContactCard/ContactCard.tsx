import styles from "./ContactCard.module.css";
import Avatar from "../Avatar/Avatar";

interface ContactCardProps {
  active?: boolean;
  image: string;
  name: string;
  lateSeenDate: string;
}

const ContactCard = ({
  active,
  image,
  name,
  lateSeenDate,
}: ContactCardProps) => {
  return (
    <button className={`${styles.button} ${active ? styles.buttonActive : ""}`}>
      <Avatar image={image} />
      <div className={styles.textContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>Last Message: {lateSeenDate}</div>
      </div>
    </button>
  );
};

export default ContactCard;
