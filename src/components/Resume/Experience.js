import React from 'react';
import styles from './Experience.css';
import { Timeline, Icon } from 'antd';

function Experience() {
  return (
    <div className={styles.normal}>
    	<h4 className={styles.title}>教育工作经历</h4>
	    <Timeline className={styles.text}>
		    <Timeline.Item className={styles.text}>2009年9月-2013年7月 就读与西南交通大学电气工程及其自动化专业</Timeline.Item>
		    <Timeline.Item className={styles.text}>2013年8月-2017年5月 就职于成都铁路局，担任助理工程师，从事电力机车驾驶和维护相关工作</Timeline.Item>
		    <Timeline.Item className={styles.text}>2016年1月-2016年6月 独立完成新闻展示网站的前后端及各项功能的初步实现</Timeline.Item>
		    <Timeline.Item className={styles.text} id='anchorProjects'>2016年7月 翻译Masonry瀑布流布局库，并分享于CSDN</Timeline.Item>
	  	</Timeline>
    </div>
  );
}

export default Experience;
