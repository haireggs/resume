import React from 'react';
import styles from './CardsGroup.css';
import { Card, Row, Col } from 'antd';
//import P1 from '../statics/images/p1.jpg'

function CardsGroup() {
  return (
    <Row className={styles.normal} type='flex' justify='center' gutter={0}>
    	<Col xs={{ span: 24, order: 1 }} sm={{span: 12, order: 0 }} > 
	      <Card className={styles.card}>      	
	      		<h4 className={styles.title}>新闻展示网站</h4>
	       		<p className={styles.text}>
							2016年1月-2016年6月<br />
	       			新闻展示网站，内容由scrapy自动爬取自t66y。首页标题列表采用瀑布流式布局，下拉自动加载更多，自适应不同设备屏幕分辨率。<br />
							网站搭建环境：
							Ubuntu14.04 + python2.7 +django + MySQL + Apache2.4，部署于阿里云服务器。<br />
							前端框架和插件：
							jQuery + Bootstrap + Masonry + infinite-scroll<br />
							网站地址:
							<a href='http://120.25.74.236/blog'>120.25.74.236/blog</a><br />
							爬虫和网站的源码：
							<a href='http://github.com/haireggs'>http://github.com/haireggs</a>
						</p>
	      </Card>
      </Col>
     <Col xs={{ span: 24, order: 0 }} sm={{span: 12, order: 1 }} >
	      <Card className={styles.card} bodyStyle={{ padding:0 }}>
	       <a href='/blog'><img className={styles.img} src={require('../../../public/images/mySite.gif')} alt='图片加载中' /></a>
	      </Card>
      </Col>
	  </Row>


  );
}

export default CardsGroup;
