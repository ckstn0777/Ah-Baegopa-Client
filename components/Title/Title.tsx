import styles from './style.module.scss'

export default function Title() {
  return <h1 className={`text-3xl font-bold underline ${styles.title}`}>Hello, Next.js!</h1>
}
