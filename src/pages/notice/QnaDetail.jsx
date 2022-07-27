import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import '../../styles/qna/qnaDetail.scss'

const QnaDetail = ({ setHdSubStyle }) => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const qnaList = JSON.parse(window.localStorage.getItem('newQnaList'));
    const detailPageData = qnaList.find(element => element.id === parseInt(id));
    setData(detailPageData);
  }, []);

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  const hasComments = data?.comments?.length;

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'

  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='qnaDetailInner'>
        <div className='qnaTitleBox'>
          <h2 className='qnaTitle'>Q&A</h2>
        </div>
        <p className='qnaSubTitle'>{data.title}</p>
        <ul className='qnaDetailInfo'>
          <li>작성자: {data.author}</li>
          <li>조회수: {data.hit}</li>
          <li>{data.createdAt}</li>
        </ul>
        <div className='qnaContent'>
          <p className='content' dangerouslySetInnerHTML={{ __html: data.content }}>
          </p>
        </div>
        <div className="qnaContentBtnArea">
          <button className='qnaContentUpdateBtn'>수정하기</button>
          <button className='qnaContentDeleteBtn' 
            onClick={() =>  window.localStorage.removeItem}
          >삭제하기</button>
        </div>
        {
          hasComments && (<>
            <div className='answerInfo'>
              <p className='answerInfoText'>답변</p>
              <p className='answerDate'>{data.comments[0].createdAt}</p>
            </div>
            <div className='answerContent'>
              <div className='content' dangerouslySetInnerHTML={{ __html: data.comments[0].content }}></div>
            </div>
          </>
          )
        }
        <Link to="/qna" className='qnaListBtn'>목록</Link>
      </div>
    </div>
  );
};

export default QnaDetail;