import styles from "./Avatar.module.css";
import sample from "../../assets/Jenni.png";

interface AvatarProps {
  image?: string;
}

const Avatar = ({ image }: AvatarProps) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={image ? image : sample}
        alt="account image"
      />
    </div>
  );
};

export default Avatar;
