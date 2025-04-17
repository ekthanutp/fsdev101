import React from 'react';
import { Tabs, Tab } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleIcon from '@mui/icons-material/People';

function TopMenu({ activeTab, onChangeTab }) {
  const handleTabChange = (event, newValue) => {
    onChangeTab(newValue);
  };

  return (
    <Tabs value={activeTab} onChange={handleTabChange} centered sx={{ mb: 3,fontFamily: 'Mitr, sans-serif', }}>
      <Tab icon={<RestaurantIcon />} iconPosition="start" label="รายการ" />
      <Tab icon={<PeopleIcon />} iconPosition="start" label="รายชื่อเพื่อน" />
    </Tabs>
  );
}

export default TopMenu;
