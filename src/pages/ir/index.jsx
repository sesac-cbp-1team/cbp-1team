import React from 'react';
import './../../styles/ir/index.scss'
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/ir/ir_sub_bg@2x.png'
import { useEffect } from 'react';
import PageBase from '../../components/common/Darkmode/PageBase';

const Ir = ({ setHdSubStyle }) => {
  const title = '지원기관 네트워크를 통해\n기업의 맞춤 컨설팅을 지원합니다.'
  // breadCrumbs
  const oneDepth='투자 IR';
  const oneDepthLink='/ir';
  const twoDepth='개요';
  const twoDepthLink='/ir';
  const linkActive='twoDepth';

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle]);


  return (
    <div>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} 
        linkActive={linkActive}/>
      
      <PageBase>
        <div className='irInner'>
          <div className="darkText irSubtitle">개요</div>
          <div className="irSubImg">ir개요 이미지</div>
          <div className="irContent">
            <div className="darkText irSubTitleSmall">소재부품 투자 IR 사업</div>
            <div className="darkText irSubTxt">기업과 투자기관 간 정보비대칭성 해소를 통해 기업의 투자유치와 투자기관의 기업발굴을 촉진하기 위한 IR 시스템의 상시화 추진과 투자유치 희망 소재부품 기업 발굴 및 투자유치 지원(기술평가, IR 컨설팅, IR 개최 등)을 통해 소재·부품분야 투자 활성화 도모합니다</div>
          </div>
          <div className="irContent">
            <div className="darkText irListTitle">지원내용</div>
            <div className="darkText irListDetail">외부 투자자금 조달에 필요한 투자유치 컨설팅비용 등에 소요되는 직접비의 일부 지원합니다</div>
          </div>
          <div className="irContent">
            <div className="darkText irListTitle">전문서비스 지원기준</div>
            <div className="darkText irListContent">
              <ul className='darkText irList'>
                <li>지원항목</li>
                <li>세부내용</li>
              </ul>
              <ul className='darkText irList'>
                <li>IR 컨설팅</li>
                <li>환경분석, 투자유치 전략수립, IR 자료작성, 투자자 발굴 등 투자 유치 전과정 밀착 지원 컨설팅 비용의 80% 지원 1,000(만원) 한도</li>
              </ul>
              <ul className='darkText irList'>
                <li>기술평가(TCB)</li>
                <li>공인 평가기관의 기술력 검증을 통해 기술력에 대한 대외적인 신뢰도 제고 평가비용의 90% 지원, 150만원 한도</li>
              </ul>
              <ul className='darkText irList'>
                <li>투자설명회(IR) 개최</li>
                <li>기업과 투자기관의 1:1 또는 합동 투자 설명회를 연중 상시 개최</li>
              </ul>
              <ul className='darkText irList'>
                <li>투자협상</li>
                <li>기업과 투자기관(KITIA 회원사)의 원활한 투자협상 지원</li>
              </ul>
              <ul className='darkText irList'>
                <li>투자매칭 및 후속지원</li>
                <li>소재부품 투자유치세미나 참가 지원 글로벌 네트원크 활용 전략전 매칭 지원</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="irDecoBg">
          <p>ZETA PLAN</p>
        </div>
        <div className='irInner'>
          <div className="irContent">
            <div className="darkText irListTitle">Process</div>
            <div className="irListProcessImg">ir process 이미지</div>
          </div>
          <div className="irContent">
            <div className="darkText irListTitle">신청자격</div>
            <ul className='darkText irListDes'>국내법인 소재·부품기업
              <li>– 소재·부품 범위는 소재·부품전문기업 등의 육성에 관한 특별조치법 시행령 별표1 대상 업종에 따름</li>
              <li>- 소재·부품전문기업, 소재분야 영위기업, 해외수요처 확보기업은 평가시 가점 부여</li>
            </ul>
          </div>
        </div>
      </PageBase>
    </div>
  );
};

export default Ir;