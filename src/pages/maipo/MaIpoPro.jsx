import React from 'react';
import '../../styles/maipo/MaIpoPro.scss'
import SubBanner from '../../components/common/SubBanner';
import MaIpoSubImg from '../../img/m&a_ipo/m&a_ipo_sub_bg@2x.png'
import MaPro from './tab/MaPro';
import IpoPro from './tab/IpoPro';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MaIpoPro = ({ setHdSubStyle }) => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const { category } = useParams();
  const [selectedIndex, setSelectedIndex]= useState(0); 
  
  const tabClick = (index) => {
    setActive(index)
  }

  const maTitle = 'M&A는 기업에게 <br /> 재도약과 성장의 기회를 부여합니다.';
  const ipoTitle = 'IPO는 기업에게 <br /> 상장을 향한 큰 도약입니다.';

  const oneDepth='M&A/IPO';
  const oneDepthLink='/maipo-info/m&a';
  const twoDepth='Process';
  const twoDepthLink='/maipo-process/m&a';
  const threeDepth= setBreadThreeDepth();
  const threeDepthLink=`/maipo-process/${category}`;
  const linkActive = 'threeDepth';

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])
  
  const [data, setData] = useState([]);

  useEffect(()=> {
    setData(getSelectedData()); 
  }, [selectedIndex]);

  useEffect(() => {
    setData(getCategoryData());
  }, [category])

  const getCategoryData = () => {
    switch (category) {
    case 'm&a':
    default:
      return tabContentents[0];
    case 'ipo':
      return tabContentents[1];
    }
  }

  const getSelectedData = () => {
    switch (selectedIndex) {
    case 0:
    default:
      return tabContentents[0];
    case 1:
      return tabContentents[1];
    }
  }

  function setBreadThreeDepth() {
    if (category === undefined) {
      return 'M&A';
    } else if (category === 'm&a') {
      return 'M&A';
    } else if (category === 'ipo') {
      return 'IPO';
    }
  }

  const getActiveClassName = (cate) => {
    if (cate === category) {
      return 'on';
    }
    return '';
  }


  const tabContentents = [
    {
      tabSubTitle: (<SubBanner title={maTitle} img={MaIpoSubImg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={threeDepth} threeDepthLink={threeDepthLink} linkActive={linkActive}  />),
      tabContent: (<MaPro />)
    },
    {
      tabSubTitle: (<SubBanner title={ipoTitle} img={MaIpoSubImg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={threeDepth} threeDepthLink={threeDepthLink} linkActive={linkActive} />),
      tabContent: (<IpoPro />)
    }
  ];



  return (
    <div className='miPro'>

      {data.tabSubTitle}

      <div className='inner'>
        <div className='miProHead'>
          Process
          <div className='miProTab'>
            <button key={0} className={getActiveClassName('m&a')} onClick={() => {
              tabClick(0)
              navigate('/maipo-process/m&a')
              setSelectedIndex(0)
            }} > M & A </button >
            <button key={1} className={getActiveClassName('ipo')} onClick={() => {
              tabClick(1)
              navigate('/maipo-process/ipo')
              setSelectedIndex(1)
            }}> IPO </button>
          </div>
        </div>

        {data.tabContent}

      </div>
    </div >
  );
};

export default MaIpoPro;