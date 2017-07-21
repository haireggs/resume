import React from 'react';
import styles from './MyHeader.css';
import { Menu, Icon, Row, Col } from 'antd';

function MyHeader() {
  return (
    <div className={styles.normal} id='anchorHome'>
      <Menu className={styles.menu} mode='horizontal' theme='dark'>
        <Menu.Item key='home'>
          <a href='#anchorHome'> <Icon type='home' />主页 </a>
        </Menu.Item>
        <Menu.Item key='about'>
          <a href='#anchorAbout'> 关于我 </a>
        </Menu.Item>
        <Menu.Item key='projects'>
          <a href='#anchorProjects'> 项目</a>
        </Menu.Item>
        <Menu.Item key='contact'>
          <a href='#anchorContact'> <Icon type='phone' />联系我</a>       
          </Menu.Item>
      </Menu>
      <div className={styles.container}>
        <img className={styles.img} src={require('../../../public/images/banner.jpg')} alt />
        <h3 className='titleResume'>简历</h3>
        <div  className='headerDetail'>
          <h4 className={styles.name}>邓凯</h4>
          <h5 className={styles.position}>前端开发</h5>
          <div className={styles.icons}>
            <Icon type='github' />
            <Icon type='message' />
            <Icon type='mail'  id='anchorContact' />
          </div>
        </div>

      
      </div>
    </div>
    
  );
}

export default MyHeader;
