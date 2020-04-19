import styles from './index.module.css'
import Profile from '../components/templates/Profile/Profile'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export default () => (
  <>
    <div className={styles.flexContainer}>
      <div className={`${styles.flexItem} border shadow border-primary`}>
        <div className={styles.flexBody}>
          <Profile />
        </div>
      </div>
      {/* <div
        className={`${styles.flexItem} border shadow border-primary border-2`}
      >
        <div className={styles.flexBody}>
          <article className='article'>
            <h3 style={{textAlign: 'center'}}>Projects</h3>
          </article>
        </div>
      </div> */}
      <div id={`${styles.portfolioPane}`} className={`${styles.flexItem}`}>
        <Tabs>
          <TabList>
            <Tab>Projects</Tab>
            <Tab>Interest</Tab>
          </TabList>

          <TabPanel>
            <span style={{ textAlign: 'center' }}>Projects</span>
          </TabPanel>
          <TabPanel>
            <span style={{ textAlign: 'center' }}>Interests</span>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  </>
)
