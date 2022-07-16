import React from 'react';
import ipoInfoMainImg from '../../../img/m&a_ipo/ipo_summery@2x.png'


const IpoInfo = () => {
  return (
    <div className='maInfoContent'>
      <img className='maInfoMainImg' src={ipoInfoMainImg} alt="M&A 개요 메인 이미지" />

      <div className='maInfoTxt'>
        <p>Initial Public Offering</p>
        <p>
          어떤 기업의 주식이 증권시장에서 공식적으로 거래되기 위해서는 우선 상장이라는 과정을 거쳐야 합니다.
          <br />
          기업이 주식을 상장하는 방법 중 가장 많이 사용하는 방법은 IPO로, `Initial Public Offering`의 약자이며 기업공개를 뜻합니다.
          <br />
          외부 투자자가 공개적으로 주식을 살 수 있도록 기업이 자사의 주식과 경영 내역을 시장에 공개하는 것입니다.
          <br />
          여기서 주식을 공개한다는 것은 기업의 주식을 증권시장에 공식적으로 등록하는 것을 말합니다.
        </p>
        <p>일정한 기준에 따라 심사하여 기업의 자금조달과 투자자의 보호를 도모하고 있습니다.</p>
      </div>
    </div>
  );
};

export default IpoInfo;