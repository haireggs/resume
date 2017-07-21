import React from 'react';
import styles from './CardsGroup.css';
import { Card, Row, Col } from 'antd';
//import P1 from '../statics/images/p1.jpg'

function CardsGroup() {
  return (
    <Row className={styles.normal} type='flex' justify='center' gutter={0}>
    	<Col xs={{ span: 24, order: 1 }} sm={{span: 12, order: 0 }} >
	      <Card className={styles.card}>      	
	      		<h4 className={styles.title}>摄像头循迹智能车</h4>
	       		<p className={styles.text}>
							2012年9月-2013年2月<br />
	       			于三人团队中完成，主要负责电路原理、算法及程序编写部分。此作品获得了第七届全国大学生智能汽车竞赛西部赛区二等奖。<br />
	       			<a href='http://v.youku.com/v_show/id_XMTU3NDE4OTYyOA==.html'>视频链接</a>
						</p>
	      </Card>
      </Col>
     <Col xs={{ span: 24, order: 0 }} sm={{span: 12, order: 1 }} >
	      <Card className={styles.card} bodyStyle={{ padding:0 }}>
	       <a href='http://v.youku.com/v_show/id_XMTU3NDE4OTYyOA==.html '><img className={styles.img} src={require('../../../public/images/myCar.gif')} alt='图片加载中' /></a>
	      </Card>
      </Col>
	  </Row>


  );
}

export default CardsGroup;
