import ContactCard from "../ContactCard/ContactCard";
import styles from "./ContactsSection.module.css";
import Jenni from "../../assets/Jenni.png";
import Karina from "../../assets/Karina.jpg";
import Alison from "../../assets/Alison.jpg";

const ContactsSection = () => {
  return (
    <section id="contactSection" className={styles.contactSection}>
      <div id="contactActions">Add New Contact</div>
      <div id="contactList" className={styles.contactList}>
        <ContactCard
          active
          name="Jenni Nuttal"
          image={Jenni}
          lateSeenDate="10/12/2022"
        />
        <ContactCard
          name="Karina Sykora"
          image={Karina}
          lateSeenDate="02/01/2020"
        />{" "}
        <ContactCard
          name="Alison Bateman"
          image={Alison}
          lateSeenDate="21/02/2023"
        />
      </div>
    </section>
  );
};

export default ContactsSection;
