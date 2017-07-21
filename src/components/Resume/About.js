import React from 'react';
import styles from './About.css';

function About() {
  return (
    <div className={styles.normal}>
      <h4 className={styles.title}>关于我</h4>
      <h5 className={styles.subTitle}>个人简介</h5>
      <p className={styles.text}>
      	大学毕业后在铁路局工作了三年多，业余时间自学了web相关知识；<br />
      	能够阅读英文文档，曾翻译过简单的技术文档； <br />
				熟悉JavaScript, AJAX, CSS, HTML,能够使用jQuery, Bootstrap ；<br />
				接触过后端知识，能够用Python + django + MySQL + Apache搭建完整网站，对前后端的数据交换对接较为熟悉 ；<br />
				能够使用Photoshop进行切图 ；<br />
				近期在学习React，此页面便是基于React。
			</p>
    </div>
  );
}

export default About;
