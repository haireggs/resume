import React from 'react';
import styles from './CardsGroup.css';
import { Card, Row, Col } from 'antd';
//import P1 from '../statics/images/p1.jpg'

function CardsGroup() {
  return (
    <Row className={styles.normal} type='flex' justify='center' gutter={0}>
    	<Col xs={{ span: 24, order: 1 }} sm={{span: 12, order: 0 }} > 
	      <Card className={styles.card}>      	
	      		<h4 className={styles.title}>简历页面</h4>
	       		<p className={styles.text}>
					2017年7月<br />
					学习React的练手小项目,使用React + dva + antd制作。支持屏幕自适应。<br />
					网站地址:
					<a href='http://120.25.74.236'>120.25.74.236</a><br />
					源码：
					<a href='http://github.com/haireggs/resume'>http://github.com/haireggs/resume</a>
				</p>
	      </Card>
      </Col>
      <Col xs={{ span: 24, order: 0 }} sm={{span: 12, order: 1 }} >
	      <Card className={styles.card} bodyStyle={{ padding:0 }}>
	       <a href='http://120.25.74.236'><img className={styles.img} src={require('../../../public/images/myResume.jpg')} alt='图片加载中' /></a>
	      </Card>
      </Col>
	  </Row>


  );
}

export default CardsGroup;
