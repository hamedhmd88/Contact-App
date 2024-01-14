import styles from './Header.module.css'
export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="#">React Contact App</a> | Todo List
      </p>
    </div>
  )
}
