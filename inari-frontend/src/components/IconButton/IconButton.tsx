import styles from "./IconButton.module.css";

interface IconButtonProps {
  icon: string;
  onClick: () => void;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img className={styles.image} src={icon} alt="home icon" />
    </button>
  );
};

export default IconButton;
