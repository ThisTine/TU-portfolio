import Award from "../components/Award";
import Tag from "../components/Tag";
export default function p5() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"2rem",letterSpacing:"3px"}} tagname="h1">ผลการทดสอบภาษาอังกฤษ</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"50%",width:"55%",marginTop:"15px"}}>
        <Award imgp="/img/certi/cefr.jpg" caption="ผลการสอบ Oxford University Press จากมหาวิทยาลับ Oxford อยู่ในระดับ B1 (2019)" />

        </div>
      </div>
    )
  }
  