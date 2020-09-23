import React, { useState, useCallback } from 'react';
import { Button, Drawer, Typography, Checkbox } from 'antd';
import EditableTable from './EditableTable';
import { MenuOutlined } from '@ant-design/icons';

const { Title } = Typography;
const PortalPage = () => {
  const [isFilterDisplay, setFilterDisplay] = useState(false);
  const onClose = useCallback(() => {
    setFilterDisplay(false);
  },[]);
  const showMenu = useCallback(() => {
    setFilterDisplay(true);
  },[]);
  return (
    <div>
      <div style={{backgroundColor: '#1890ff', display: 'flex'}}>
        <div style={{color: '#f8f8f8', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 16, cursor: 'pointer'}}>
          <Button type="primary" onClick={showMenu}>
            <MenuOutlined />
          </Button>
        </div>
        <Title style={{color: '#f8f8f8', paddingTop: 8, paddingLeft: 16}} level={3}>Voter List</Title>
      </div>
      <div style={{ padding: '16px'}}>
        <EditableTable />
        <Drawer
            title={<Title level={5}>Filter</Title>}
            placement='left'
            closable={false}
            onClose={onClose}
            visible={isFilterDisplay}
            key='left'
          >
            <div>
              <Title level={4}>State</Title>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>
                  <Checkbox>TamilNadu</Checkbox>
                </div>
                <div>
                  <Checkbox>Kerala</Checkbox>
                </div>
              </div>
            </div>
            <div style={{paddingTop: 16}}>
              <Title level={4}>District</Title>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>
                  <Checkbox>Chennai</Checkbox>
                </div>
                <div>
                  <Checkbox>Madurai</Checkbox>
                </div>
                <div>
                  <Checkbox>Salem</Checkbox>
                </div>
              </div>
            </div>
            <div style={{paddingTop: 16}}>
              <Title level={4}>Booth</Title>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>
                  <Checkbox>Booth 1</Checkbox>
                </div>
                <div>
                  <Checkbox>Booth 2</Checkbox>
                </div>
              </div>
            </div>
          </Drawer>
      </div>
    </div>
  );
};

export default PortalPage;