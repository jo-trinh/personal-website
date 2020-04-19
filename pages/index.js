import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopHouse,
  faEnvelope,
  faMobile,
  faMedal,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons'

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <>
    <div className={styles.flexContainer}>
      <div className={`${styles.flexItem} border shadow border-primary`}>
        <div className={styles.flexBody}>
          <div id={styles.profileHeader}>
            <img
              height={80}
              width={80}
              style={{ borderRadius: '50%' }}
              src='https://media-exp1.licdn.com/dms/image/C5603AQEaSmf2PjwGMg/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=MIKqfeXvlv_g6Rq6sPrfwqNwNRvjdBbwKFTZKWUuSfA'
            />
        
            <span style={{ fontSize: '24px' }}>Joseph Trinh</span>
          </div>
          <div id={styles.profileDescriptions}>
            <span>
              <FontAwesomeIcon icon={faMedal} size='1x' /> Senior Software
              Engineer
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} size='1x' />{' '}
              jotrinh@outlook.com
            </span>
            <span>
              <FontAwesomeIcon icon={faMobile} size='1x' /> (470) 869-3972
            </span>
            <span>
              <FontAwesomeIcon icon={faStickyNote} size='1x' /> Placeholder
            </span>
            <span>
              <FontAwesomeIcon icon={faStickyNote} size='1x' /> Placeholder
            </span>
            <span>
              <FontAwesomeIcon icon={faStickyNote} size='1x' /> Placeholder
            </span>
            <span>
              <FontAwesomeIcon icon={faLaptopHouse} size='1x' /> Full Time at{' '}
              <u
                onClick={() => window.open('https://www.homedepot.com/')}
                style={{
                  color: '#EE7125',
                  cursor: 'pointer',
                }}
              >
                The Home Depot
              </u>
            </span>
          </div>
          <div
            id={styles.profileFooter}
            className='border border-3 border-primary'
          >
            <span>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.icon}
                size='2x'
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/joseph-trinh-0517b312b/'
                  )
                }
              />{' '}
            </span>
            <span>
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.icon}
                size='2x'
                onClick={() => window.open('https://github.com/jo-trinh/')}
              />{' '}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${styles.flexItem} border shadow border-primary border-2`}
      ></div>
    </div>
  </>
)
