import styles from "../styles/Contact.module.css";
import Circle from "../Components/Circle";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" />
      <Circle backgroundColor="darkblue" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input className={styles.inputS} type="text" placeholder="Username" />
        <input className={styles.inputS} type="tel" placeholder="Phone" />
        <input className={styles.inputL} type="email" placeholder="Email" />
        <input className={styles.inputL} type="text" placeholder="Subject" />
        <textarea className={styles.textArea} rows={6} placeholder="Message" />
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
