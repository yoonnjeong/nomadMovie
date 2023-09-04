import propTypes from "prop-types"; //propTypes 맨 처음 글자 소문자!
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

export default Button;

Button.propTypes = {
  text: propTypes.string.isRequired,
};
