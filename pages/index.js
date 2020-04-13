import styles from './index.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <>
    <div className={styles.flexContainer}>
      <div className={styles.flexItem}>
        <div className={styles.bookmark}>
          <div>
            <img src='https://media-exp1.licdn.com/dms/image/C5603AQEaSmf2PjwGMg/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=MIKqfeXvlv_g6Rq6sPrfwqNwNRvjdBbwKFTZKWUuSfA' />
          </div>
        </div>
      </div>
      <div className={styles.flexItem}>
        <div>Test 2</div>
      </div>
    </div>
  </>
)
