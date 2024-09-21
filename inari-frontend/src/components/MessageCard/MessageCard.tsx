import styles from "./MessageCard.module.css";

interface MessageCardProps {
  text: string;
  sent?: boolean;
}

const MessageCard = ({ text, sent }: MessageCardProps) => {
  return (
    <div className={`${styles.container} ${sent ? styles.sent : ""}`}>
      <div className={`${styles.text} ${sent ? styles.textSent : ""}`}>
        {text}
      </div>
    </div>
  );
};

export default MessageCard;
