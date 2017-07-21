import React from 'react';
import styles from './MyFooter.css';
import { Icon } from 'antd';
import { BackTop } from 'antd';

function MyFooter() {
  return (
    <div className={styles.normal}>
      © 2017 个人简历 All rights reserved | Design by DK
      <BackTop />
    </div>
  );
}

export default MyFooter;
