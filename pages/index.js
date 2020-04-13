import styles from './index.module.css'
import { Tabs, Tab, Box } from 'grommet'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <>
    <div className={styles.flexContainer}>
      <div className={styles.flexItem}>
        <div className={styles.bookmark}>
          <img src='https://media-exp1.licdn.com/dms/image/C5603AQEaSmf2PjwGMg/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=MIKqfeXvlv_g6Rq6sPrfwqNwNRvjdBbwKFTZKWUuSfA' />
          Joseph Trinh
        </div>
      </div>
      <div className={`${styles.flexItem}`}>
        <Tabs style={{ height: '100%' }}>
          <Tab title='Summary'>
            <div className={styles.paperShadow} pad='medium'>
              <div style={{ textAlign: 'center' }}>Work Experience</div>
            </div>
          </Tab>
          <Tab title='Interest' disabled={true}>
            <Box pad='medium'>Two</Box>
          </Tab>
        </Tabs>
      </div>
    </div>
  </>
)
