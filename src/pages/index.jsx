import React from 'react';
import MainBanner from './main/MainBanner';
import Partners from './main/Partners';
import GlobalNetwork from './main/GlobalNetwork';
import OurBusiness from './main/OurBusiness';
import Performance from './main/Performance';
import ZetaIntroduction from './main/ZetaIntroduction';
import NewsColumn from './main/NewsColumn';
import { useEffect } from 'react';
import InformationList from '../components/main/InformationList';

const Index = ({ setHdSubStyle }) => {
  useEffect(() => {
    setHdSubStyle('hdMain')
  }, [setHdSubStyle])

  return (
    <div>
      <MainBanner />
      <OurBusiness />
      <Performance />
      <ZetaIntroduction />
      <NewsColumn />
      <InformationList />
      <Partners />
      <GlobalNetwork />
    </div>
  );
};

export default Index;
