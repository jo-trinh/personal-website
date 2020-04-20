import styles from './index.module.css'
import Profile from '../components/templates/Profile/Profile'
import Portfolio from '../components/templates/Portfolio/Portfolio'

export default () => (
  <>
    <div className={styles.flexContainer}>
      <div className={`${styles.flexItem} border shadow border-primary`}>
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
