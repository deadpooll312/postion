import React from 'react';

import { Layout } from 'antd';

const { Sider, Content } = Layout;

function ContentLayout(props) {
  const { isAuthenticated } = props;
  if (!isAuthenticated) {
    return (
      <>
        {/* {isLoading && <Loader />} */}
        {props.children}
      </>
    );
  }

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        {/* <Sider
          style={{ minWidth: '250px' }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className='logo' />
          <Aside />
        </Sider> */}
        <Layout className='site-layout'>
          {/* <HeaderNav
          // temperature={temp}
          // icon={{ icon }}
          // collapsed={collapsed}
          // onCollapse={(value) => {
          //   this.onCollapse(value);
          // }}
          /> */}

          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflowY: 'scroll',
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default ContentLayout;
