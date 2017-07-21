import React from 'react';
import { connect } from 'dva';
import styles from './Resume.css';
import ResumeComponents from '../components/Resume/Resume'

function Resume() {
  return (
    <div className={styles.normal}>
      <ResumeComponents />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Resume);
