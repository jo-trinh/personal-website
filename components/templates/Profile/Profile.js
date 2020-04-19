import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faMobileAlt,
  faMedal,
  faMapMarkerAlt,
  faBriefcase,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'
import styles from './profile.module.css'

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
  return (
    <>
      <div id={styles.profileHeader}>
        <img
          height={80}
          width={80}
          style={{ marginBottom: '5px' }}
          src='https://media-exp1.licdn.com/dms/image/C5603AQEaSmf2PjwGMg/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=MIKqfeXvlv_g6Rq6sPrfwqNwNRvjdBbwKFTZKWUuSfA'
        />

        <span style={{ fontSize: '24px' }}>Jo Trinh</span>
      </div>
      <div id={styles.profileDescriptions}>
        <span>
          <FontAwesomeIcon icon={faMedal} size='1x' /> Senior Software Engineer
        </span>
        <span>
          <FontAwesomeIcon icon={faLaptopCode} size='1x' /> ReactJS, Spring,
          Rails
        </span>

        <span>
          <FontAwesomeIcon icon={faBriefcase} size='1x' /> Full-Time at{' '}
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
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} size='1x' /> Atlanta, Georgia
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} size='1x' />{' '}
          <u
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('mailto:jotrinh@outlook.com')}
          >
            jotrinh@outlook.com
          </u>
        </span>
        <span>
          <FontAwesomeIcon icon={faMobileAlt} size='1x' /> (470) 869-3972
        </span>
      </div>
      <div id={styles.profileFooter} className='border border-3 border-primary'>
        <button className={`${styles.icon} border-1`}>
          <FontAwesomeIcon
            icon={faLinkedin}
            size='2x'
            onClick={() =>
              window.open('https://www.linkedin.com/in/joseph-trinh-0517b312b/')
            }
          />{' '}
        </button>
        <button className={`${styles.icon} border-2`}>
          <FontAwesomeIcon
            icon={faGithub}
            size='2x'
            onClick={() => window.open('https://github.com/jo-trinh/')}
          />{' '}
        </button>
      </div>
    </>
  )
}
export default Profile
