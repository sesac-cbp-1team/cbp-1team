import React from 'react';
import '../../styles/global/gbStrategy.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/global/global_sub_bg.png';
import { useEffect, useState } from 'react';
import PageBase from '../../components/common/Darkmode/PageBase';

const GbStrategy = ({ setHdSubStyle }) => {
  const title = 'ZETA PLAN은 전 세계적으로\n우수한 해외 네트워크를 보유하고 있습니다.';

  const oneDepth = '해외진출';
  const oneDepthLink = '/gb';
  const twoDepth = '전략수립';
  const twoDepthLink = '/gb-strategy';
  const linkActive = 'twoDepth';

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub');
  }, [setHdSubStyle]);

  return (
    <div>
      <SubBanner
        title={title}
        img={subBg}
        oneDepth={oneDepth}
        oneDepthLink={oneDepthLink}
        twoDepth={twoDepth}
        twoDepthLink={twoDepthLink}
        linkActive={linkActive}
      />
      <PageBase>
        <div className="gbInner">
          <div className="gbTabTitleBox darkText">
            <p className="gbTabTitle">전략수립</p>
          </div>
          <div className="gbContentTitle darkText">
            (주)제타플랜인베스트는 중국,대만,베트남, 싱가폴,일본 등<br /> 전 세계적으로 우수한 해외 네트워크를 보유하고
            있습니다.
          </div>
          <p className="gbContentSubTitle darkText">사업분야</p>
          <div className="gbContentImgBox">
            <div className="gbGraphImgCon">해외 진출 단계</div>
            <p className="gbPerformanceDes">해외진출지원 단계별 Key Module에 대한 최적해법을 제공합니다</p>
          </div>
          <p className="gbMaterialTitle darkText">✔︎ 기술거래·기술이전컨설팅</p>
          <p className="gbMaterialContent darkText">
            • 해외기술이전사업 진출이후 베이징기술교역촉진중심, Transpacific IP, IPA VIETNAM, 주한영국상공회의소(BCCK),
            이스라엘 ABG 등과 기술이전 업무협약을 체결하였고, 그 외 해외 정부기관들을 통한 기술이전 네트워크 구축
          </p>
          <p className="gbMaterialContent darkText">
            • 국내에는 한국발명진흥회, 농업기술실용화재단, 중소기업청 해외민간네트워크 등을 통해 한국과 해외간의
            공식적인 기술이전사업을 진행
          </p>
          <p className="gbMaterialTitle darkText">✔︎ 글로벌 투자유치</p>
          <p className="gbMaterialContent darkText">
            • 글로벌 시장 진출 및 해외투자유치를 희망하는 기업들에게 기술평가 및 IR 컨설팅 지원 등 투자유치 전문서비스
            지원
          </p>
          <p className="gbMaterialContent darkText">
            • 기업의 업종 및 성장단계에 맞는 투자자 정보 제공, 투자유치 설명회 개최 및 관심 투자자 매칭 지원 등 투자유치
            정보제공
          </p>
          <div className="gbContentBoxWrap darkText">
            <p className="gbContentSubTitle">전문분야 강점</p>
            <div className="gbContentBox">
              <p className="gbContentBoxT">
                01
                <br />
                해외 정부의 무역기관 지정
              </p>
              <p className="gbContentBoxC">
                2018년 Being B&R International Co-incubation(ICI)와 MOU 2017년 인도네시아 Sucofindo 업무 협력 2016년
                중국 강소성 하이먼 정부의 한국대표처 지정 <br />
                2015년 베트남 IPA VIETNAM과 해외 수출 및 업무제휴 파트너 협약(MOU)
              </p>
            </div>
            <div className="gbContentBox">
              <p className="gbContentBoxT">
                02
                <br />
                해외 수출지원실적 및 진출 성공의 노하우 보유
              </p>
              <p className="gbContentBoxC">
                • 수요기업과 공급기업 무역을 위한 공식 매칭 가능
                <br />
                • 수요기업발굴, 협상지원, 계약지원, 사후관리 등 중국정부기관과의 협력체계 구축
                <br />
                • 2011년 ~ 현재까지 해외 투자/수출/ 기술거래 실적을 연평균 350만USD 달성
                <br />• 연 7회 이상 기술거래/조인트벤처/투자 상담회 진행
              </p>
            </div>
            <div className="gbContentBox">
              <p className="gbContentBoxT">
                03
                <br />
                Human Resources
              </p>
              <p className="gbContentBoxC">
                • 석박사급의 이론과 실무를 겸비한 인력 투입 - 해당 분야 프로젝트 경험 보유 인력 풀 보유
                <br />
                - 중국관련 투자전문가
                <br />
                - 기술거래사 (국내외 7명 보유)
                <br />
                - 변리사, 공학박사, 국제공인경영컨설턴트
                <br />- 중국 바이어 매칭 전문가 Pool 제휴
              </p>
            </div>
          </div>
          <p className="gbContentSubTitle darkText">GCC란?</p>
          <p className="gbMaterialContent darkText">
            - “기술기반” 국내업체의 성공적인 해외시장 진출을 위해, 해외 현지 경험과 컨설팅 능력을 갖춘 글로벌기술 사업화
            센터(GCC)를 통해 종합적인 글로벌 기술 사업화 컨설팅 서비스를 제공합니다.
          </p>
          <p className="gbMaterialContent darkText">
            - 정의 : 기술기반 국내 기업의 해외진출 관련 종합적 기술사업화 컨설팅 서비스 제공
          </p>
          <p className="gbMaterialContent darkText">
            - 제공 서비스 범위:순 상품판매나 거래 알선이 아닌 기술관련 또는 기술기반 국내기업의 현지 진출을 위한
            시장조사, 고객평가, 잠재수요처 발굴, 잠재수요처 컨택 및 거래, 알선, 법률, 계약, 회계, 세무 등의 종합 컨설팅
            원스탑 서비스 제공
          </p>
          <p className="gbMaterialContent darkText">
            - 지원대상:우수기술 및 기술기반 제품의 해외기술 사업화를 추진하고자 하는 국내기업,연구소,대학등
          </p>
          <div className="gbContentSubTitleBox darkText">
            <p className="gbContentSubTitle">컨설팅 지원사업 프로세스</p>
          </div>
          <div className="gbProcessList">
            <div className="gbProcessItem">
              <div className="gbProcessItemBox">
                <p className="gbProcessItemT">STEP 01</p>
                <p className="gbProcessItemC">기술사업화 대상기업 선정</p>
              </div>
            </div>
            <div className="gbProcessItem">
              <div className="gbProcessItemBox">
                <p className="gbProcessItemT">STEP 02</p>
                <p className="gbProcessItemC">기술사업화 시장성 분석</p>
              </div>
            </div>
            <div className="gbProcessItem">
              <div className="gbProcessItemBox">
                <p className="gbProcessItemT">STEP 03</p>
                <p className="gbProcessItemC">현지사업화 전략의 수립</p>
              </div>
            </div>
            <div className="gbProcessItem">
              <div className="gbProcessItemBox">
                <p className="gbProcessItemT">STEP 04</p>
                <p className="gbProcessItemC">기술사업화 전략의 수립</p>
              </div>
            </div>
            <div className="gbProcessItem">
              <div className="gbProcessItemBox">
                <p className="gbProcessItemT">STEP 05</p>
                <p className="gbProcessItemC">사업화 종료 사후적 관리</p>
              </div>
            </div>
          </div>
          <div className="gbProcessListDesBox darkText">
            <p className="gbProcessListDes">
              1. 기업신청접수
              <br />
              2. 기업기술 평가
              <br />
              3. 기업의 선정
            </p>
            <p className="gbProcessListDes">
              공급대상기술
              <br />
              가능성 분석
              <br />
              기술성 검토
            </p>
            <p className="gbProcessListDes">현지 수요기술 관련 시장조사, 기업발굴, 분석</p>
            <p className="gbProcessListDes">
              기술소개, 상담회 개최, 계약체결 <br />
              협상 지원
            </p>
            <p className="gbProcessListDes">
              성과분석 바탕
              <br />
              개선 방안 도출,
              <br />
              차년도 반영
            </p>
          </div>
        </div>
      </PageBase>
    </div>
  );
};

export default GbStrategy;
