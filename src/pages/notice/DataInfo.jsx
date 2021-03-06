import React, { useState, useEffect } from 'react';
import '../../styles/notice/dataInfo.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import mnaInvestmentData from '../../db/m&a-investList.json';
import govSupportData from '../../db/govSupportList.json';
import fundSupportData from '../../db/fund-supportList.json';
import techData from '../../db/technologyList.json';
import consultData from '../../db/consultingList.json';
import InfoItem from '../../components/Notice/InfoItem';
import { useNavigate, useParams } from 'react-router-dom';
import PageBase from '../../components/common/Darkmode/PageBase';

const DataInfo = ({ setHdSubStyle }) => {

  const {category} = useParams();
  const navigate = useNavigate();

  const [filteredList, setFilteredList] = useState([]);
  const [showNum, setShowNum] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dataList, setDataList] = useState([]);

  const [input, setInput] = useState('');
  const [originData, setOriginData] = useState([]);

  useEffect(() => {
    setShowNum(6);
    setOriginData(getSelectedData());
    setDataList(getSelectedData());
  }, [selectedIndex]);

  useEffect(()=> {
    setShowNum(6);
    setOriginData(getCategoryData());
    setDataList(getCategoryData());
  }, [category]);

  useEffect(() => {
    setFilteredList(dataList.slice(0, showNum));
  }, [dataList]);

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  const showMoreData = () => {
    const result = dataList.length - filteredList.length;
    const add = result < 3 ? result + showNum : showNum + 3;
    const newArray = [...filteredList, ...dataList.slice(showNum, add)];
    setFilteredList(newArray);
    setShowNum(add);
  }

  const getSelectedData = () => {
    switch (selectedIndex) {
    case 0:
      return mnaInvestmentData;
    case 1:
      return govSupportData;
    case 2:
      return fundSupportData;
    case 3:
      return techData;
    case 4:
    default:
      return consultData;
    }
  }

  const searchByData = (e) => {
    setInput(e.target.value);
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }

  const onSearch = () => {
    const searchedData = originData.filter((item) => {
      return item.title.includes(input);
    })
    setDataList(searchedData);
  }

  const getActiveClassName = (cate) => {
    if (cate === category) {
      return 'active';
    }
    return undefined;
  }
  
  const getCategoryData = () => {
    switch (category) {
    case 'm&a-invest':
    default:
      return mnaInvestmentData;
    case 'government-support':
      return govSupportData;
    case 'fund-support':
      return fundSupportData;
    case 'technology-trade':
      return techData
    case 'consulting-list':
      return consultData;
    }
  }

  const setBreadThreeDepth = () => {
    switch (category) {
    case 'm&a-invest':
    default:
      return 'M&A???????????????'
    case 'government-support':
      return '?????????????????? ????????????'
    case 'fund-support':
      return '????????????/??????????????????'
    case 'technology-trade':
      return '?????????????????????'
    case 'consulting-list':
      return '???????????????'
    }
  }

  const title = 'ZETA PLAN?????? \n???????????? ???????????? ????????? ?????????????????????'
  const oneDepth='?????? ?? ??????';
  const oneDepthLink='/news/news';
  const twoDepth='??????';
  const twoDepthLink='/datainfo/m&a-invest';
  const linkActive='threeDepth';


  return (
    <div>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={setBreadThreeDepth()} threeDepthLink={category === undefined ? '/datainfo/m&a-invest' : `/datainfo/${category}`} linkActive={linkActive} />
      <PageBase>
        <div className='dataInfoInner'>
          <div className='infoTitleBox'>
            <h2 className='infoTitle darkText'>??????</h2>
            <ul className='infoTabList'>
              <li className={getActiveClassName('m&a-invest')} onClick={() => {
                navigate('/datainfo/m&a-invest')
                setSelectedIndex(0)
              }}>M&A???????????????</li>
              <li className={getActiveClassName('government-support')} onClick={() => {
                navigate('/datainfo/government-support')
                setSelectedIndex(1)
              }}>?????????????????? ?????? ??????</li>
              <li className={getActiveClassName('fund-support')} onClick={() => {
                navigate('/datainfo/fund-support')
                setSelectedIndex(2)
              }}>???????????? / ??????????????????</li>
              <li className={getActiveClassName('technology-trade')} onClick={() => {
                navigate('/datainfo/technology-trade')
                setSelectedIndex(3)
              }}>?????????????????????</li>
              <li className={getActiveClassName('consulting-list')} onClick={() => {
                navigate('/datainfo/consulting-list')
                setSelectedIndex(4)
              }}>????????? ??????</li>
            </ul>
          </div>
          <div className='infoSearchCon'>
            <span className='darkText'>???{dataList ? dataList.length  : originData.length}  ???</span>
            <div className='infoSearchBox'>
              <input className="infoInput" type="text" placeholder='???????????? ???????????????' onKeyDown={onKeyDown} onChange={searchByData}/>
              <span className='infomagnifier' onClick={onSearch}></span>
            </div>

          </div>
          <div className='dataInfoLiBox'>
            {
              filteredList.map((data) => {
                return <InfoItem key={data.id} item={data} selectedIndex={selectedIndex} />
              })
            }
          </div>
          {dataList.length !== filteredList.length && <button className='infoMoreBtn darkText' onClick={showMoreData}>?????????</button>}
        </div>
      </PageBase>
    </div>    
  );
};

export default React.memo(DataInfo);