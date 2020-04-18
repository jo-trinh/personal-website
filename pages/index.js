import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopHouse,
  faEnvelope,
  faMobile,
  faMedal,
} from '@fortawesome/free-solid-svg-icons'

export default () => (
  <>
    <div className={styles.flexContainer}>
      <div className={`${styles.flexItem} border border-primary`}>
        <div style={{ height: '90%' }}>
          <div id={styles.profileHeader}>
            <img
              height={80}
              width={80}
              style={{ borderRadius: '50%' }}
              src='https://media-exp1.licdn.com/dms/image/C5603AQEaSmf2PjwGMg/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=MIKqfeXvlv_g6Rq6sPrfwqNwNRvjdBbwKFTZKWUuSfA'
            />
            Joseph Trinh
          </div>
          <div className={styles.profileDescriptions}>
            <span>
              <FontAwesomeIcon icon={faMedal} /> Senior Software Engineer
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> jotrinh@outlook.com
            </span>
            <span>
              <FontAwesomeIcon icon={faMobile} /> (470) 869-3972
            </span>
            <span>
              <FontAwesomeIcon icon={faLaptopHouse} /> Full Time at{' '}
              <span style={{ color: '#EE7125' }}>The Home Depot</span>
            </span>
          </div>
        </div>
      </div>
      <div className={`${styles.flexItem} border border-primary`}></div>
    </div>
  </>
)
