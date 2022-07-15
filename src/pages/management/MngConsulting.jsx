import ProcessGraph from '../../img/me/me_process_graph@2x.png';
import '../../styles/mng/mngConsulting.scss';

const MngConsulting = () => {
  return (
    <div className='mngInner'>
      <div>
        <h2 className='mngSubTitle'>개요</h2>
      </div>
      <div className='mngSummary'>
        <p>기업의 요청하에 의뢰처인 기업의 경영 실태를 조사하고, 기업의 문제를 진단합니다.</p>
        <p>또한, 진단 결과를 통해 구체적인 개선방법을 기업에 제안합니다.</p>
        <p>외부자의 시선으로 기업을 바라보므로, 독립적이고 객관적 입장을 유지할 수 있습니다.</p>
        <p>또한, 경영관리에 관한 최신의 지식과 기법을 해결책에 적용시킬 수 있으며,</p>
        <p>다른 기업에서 성공한 경험을 제공함으로써 컨설팅의 대상이 되는 기업에 많은 경험적인 도움을 줄 수 있습니다.</p>
      </div>  
      <div>
        <h2 className='mngSubTitleNb'>목표</h2>
      </div>
      <ul className='mngFourCircle'>
        <li>경영정보</li>
        <li>경영자원</li>
        <li>경영 process</li>
        <li>경영전략</li>
      </ul>
      <div className='mngCircleTxt'>
        <p>Application, Data Base,<br />
           EIS/DSS, OA
        </p>
        <p>
        사람, 자금, 자재, 설비,<br />
        정보인프라, 문화
        </p>
        <p>
        업무절차, 통제지침,<br />
        보고절차, Report(산출물)
        </p>
        <p>
        Vision, Mission, Objective (목표),<br />
        CSF (주요성공요소), Issue (현안긴급과제),<br />
        C.A (주요가정)
        </p>
      </div>
      <div>
        <h2 className='mngSubTitleNb'>Matrix</h2>
      </div>
      <h3 className='mngSmTitle'>사업개발전략</h3>
      <div>
        <ul className='mngFiveCircle'>
          <li>STEP 01<br />사업모델정립</li>
          <li>STEP 02<br />제품/서비스 완성</li>
          <li>STEP 03<br />초기시장진입</li>
          <li>STEP 04<br />대상시장<br />리더그룹 포지셔닝</li>
          <li>STEP 05<br />해외진출/사업확장</li>
        </ul>
        <div className='mngFiveTxt'>
          <p>사업타당성 검토, 사업계획/전략수립</p>
          <p>사업계획 upgrade</p>
          <p>초기사업목표 재확인, 사업선점 전략 수립</p>
          <p>신제품개발 Needs, 시장지배 강화전략</p>
          <p>해외기업과의 전략적 제휴 추진</p>
        </div>
      </div>
      <h3 className='mngSmTitle'>자금투자유치</h3>
      <ul className='mngFiveCircle'>
        <li>STEP 01<br />사업모델정립</li>
        <li>STEP 02<br />제품/서비스 완성</li>
        <li>STEP 03<br />초기시장진입</li>
        <li>STEP 04<br />대상시장<br />리더그룹 포지셔닝</li>
        <li>STEP 05<br />해외진출/사업확장</li>
      </ul>
      <div className='mngConsultingTxt'>
        <p>사업모델정립 단계에서는 원가추정, 추정 재무제표,  현금흐름・순익추정, 자금유치시기 분석, 창업자금 조달 등이 진행되며
        제품/서비스 완성 단계에서는자금 운영계획, 회계사・회계시스템 활용,<br /> 자금대출/상환계획이 이루어지고 초기시장진입단계에서는 재무제표 관리, 수입금 관리 계획, 전문가에 의한 자금 흐름/지출 분석을 진행한다.<br />
        대상시장/ 리더그룹 포지셔닝 단계에서는 자본증자 계획, 전략적 투자유치, 투자유치IR활동, 자금차입계획이 이루어지며
        해외진출/ 사업확장 단계에서는 국외투자유치 추진, 전략적 투자유치,<br />정부 정책자금, 벤처캐피털・사모펀드 투자유치가 진행된다.</p>
      </div>
      <div>
        <h2 className='mngSubTitleNb mngConsultingPro'>Process</h2>
      </div>
      <img src={ProcessGraph} alt='graph' className='mngConsultingProcessImg'/>
    </div>
  );
};

export default MngConsulting;