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
          <div id={styles.rightPaneBody}>
            <div className={`${styles.projectBox}`}>
              <div
                style={{
                  display: 'flex',
                }}
              >
                Tax Exemption
                <p></p>
              </div>
              <div className={`${styles.projectHighLightBoxes}`}>
                <div className={`${styles.projectHighlightBox}`}>
                  <span className={`${styles.projectHighLightText}`}>
                    <FontAwesomeIcon icon={faUser} />
                    {''} Tech Lead
                  </span>
                </div>
                <div className={`${styles.projectHighlightBox}`}>
                  <span className={`${styles.projectHighLightText}`}>
                    <FontAwesomeIcon icon={faCodeBranch} /> {''} ReactJS, NodeJS
                  </span>
                </div>
                <div className={`${styles.projectHighlightBox}`}>
                  <span className={`${styles.projectHighLightText}`}>
                    <FontAwesomeIcon icon={faClock} />
                    {''} Ongoing
                  </span>
                </div>
              </div>
            </div>

            <div className={`${styles.projectBox}`}>
              <div
                style={{
                  display: 'flex',
                }}
              >
                Resource Allocation Tool
                <p></p>
              </div>
              <div className={`${styles.projectHighLightBoxes}`}>
                <div className={`${styles.projectHighlightBox}`}>
                  <span className={`${styles.projectHighLightText}`}>
                    <FontAwesomeIcon icon={faUser} />
                    {''} Tech Lead, Product Manager
                  </span>
                </div>
                <div className={`${styles.projectHighlightBox}`}>
                  <span className={`${styles.projectHighLightText}`}>
                    <FontAwesomeIcon icon={faCodeBranch} /> {''} ReactJS, Spring
                    Boot
                  </span>
                </div>
                <div className={`${styles.projectHighlightBox}`}>
                  <span className={`${styles.projectHighLightText}`}>
                    <FontAwesomeIcon icon={faClock} />
                    {''} 10 Months
                  </span>
                </div>
              </div>
            </div>

            <div className={`${styles.projectBox}`}>
              <div
                style={{
                  display: 'flex',
                }}
              >
                Tax Mapping
                <p></p>
              </div>
              <div className={`${styles.projectHighLightBoxes}`}>
                <div className={`${styles.projectHighlightBox}`}>
                  <span className={`${styles.projectHighLightText}`}>
                    <FontAwesomeIcon icon={faUser} />
                    {''} Software Engineer
                  </span>
                </div>
                <div className={`${styles.projectHighlightBox}`}>
                  <span className={`${styles.projectHighLightText}`}>
                    <FontAwesomeIcon icon={faCodeBranch} /> {''} ReactJS, Spring
                    Boot
                  </span>
                </div>
                <div className={`${styles.projectHighlightBox}`}>
                  <span className={`${styles.projectHighLightText}`}>
                    <FontAwesomeIcon icon={faClock} />
                    {''} 8 Months
                  </span>
                </div>
              </div>
            </div>
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
