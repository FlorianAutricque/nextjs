import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button className={styles.actions}>To favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
