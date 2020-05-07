import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faCodeBranch,
  faUsers,
  faClock,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'
import styles from './portfolio.module.css'

const Portfolio = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Projects</Tab>
          <Tab disabled={true}>Interests</Tab>
        </TabList>
        <TabPanel>
          <div className={styles.paper}>
            <div className={styles.paperContent}></div>
          </div>
        </TabPanel>
        <TabPanel>
          <span>Interests</span>
        </TabPanel>
      </Tabs>
    </>
  )
}
export default Portfolio
