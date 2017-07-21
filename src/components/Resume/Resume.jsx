import React from 'react';
import styles from './Resume.css';
import { Layout } from 'antd';
import MyHeader from './MyHeader';
import MyContent from './MyContent';
import MyFooter from './MyFooter';

//const { Header, Content, Footer } = Layout;



function Resume() {
  return (
    	<Layout className={styles.normal}  id='anchorHome'>		
    			<MyHeader />
    			<MyContent />
    			<MyFooter />	
    	</Layout>  
  );
}

export default Resume;
