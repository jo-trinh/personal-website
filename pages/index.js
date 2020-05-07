import styles from './index.module.css'
import Profile from '../components/templates/Profile/Profile'
import Portfolio from '../components/templates/Portfolio/Portfolio'

export default () => (
  <>
    <div className={styles.flexContainer}>
      <div className={`${styles.flexItem} ${styles.border}`}>
        <div className={styles.flexBody}>
          <Profile />
        </div>
      </div>
      <div id={`${styles.portfolioPane}`} className={`${styles.flexItem}`}>
        <Portfolio />
      </div>
    </div>
  </>
)
