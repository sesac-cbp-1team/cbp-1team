import React from 'react';
import SubBanner from '../../components/common/SubBanner';
import MaIpoSubImg from '../../img/m&a_ipo/m&a_ipo_sub_bg@2x.png'
import '../../styles/maipo/MaIpoInfo.scss'
import MaInfo from './tab/MaInfo';
import IpoInfo from './tab/IpoInfo';
import { useState } from 'react';

const MaIpoInfo = () => {
  const [active, setActive] = useState(0);

  const maTitle = 'M&A는 기업에게 <br /> 재 도약과 성장의 기회를 부여합니다.';
  const ipoTitle = 'IPO는 기업에게 <br /> 상장을 향한 큰 도약입니다.';

  const tabContentents = [
    {
      tabSubTitle: (<SubBanner title={maTitle} img={MaIpoSubImg} />),
      tabHead: (<button key={0} className={active === 0 ? 'on' : ''} onClick={() => tabClick(0)}> M&A </button>),
      tabContent: (<MaInfo />)
    },
    {
      tabSubTitle: (<SubBanner title={ipoTitle} img={MaIpoSubImg} />),
      tabHead: (<button key={1} className={active === 1 ? 'on' : ''} onClick={() => tabClick(1)}> IPO </button>),
      tabContent: (<IpoInfo />)
    }
  ];


  const tabClick = (index) => {
    setActive(index)
  }

  return (
    <div className='miInfo'>

      {tabContentents[active].tabSubTitle}

      <div className='inner'>
        <div className='miInfoHead'>
          개요
          <div className='miInfoTab'>
            {
              tabContentents.map((section, index) => {
                return section.tabHead
              })
            }
          </div>
        </div>

        {tabContentents[active].tabContent}

      </div>
    </div >
  );
};

export default MaIpoInfo;