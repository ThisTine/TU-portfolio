import Tag from "../components/Tag";
import SmallPJ from "../components/SmallProject";
import {SRLWrapper} from 'simple-react-lightbox'
export default function p8() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">Activites</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"80%",width:"70%"}}>
        <SRLWrapper>
        <div className="activity">
            
            <div className="activity-con">
            <img src="/img/act/foodrive.jpg" className="activity-pic" />
            <p className="activity-parag">
            กิจกรรม Food Drive ช่วยเหลือผู้คนที่ได้รับ ผลกระทบจากฮอริเคนในสหรัฐอเมริกา ปี 2018  </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/bed.jpg" className="activity-pic" />
            <p className="activity-parag">
            กิจกรรมร้องเพลงให้ผู้พิการเนื่องในวันคริสต์มาสจัดโดยโบสถ์ Church of Christ In Clayton </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/christ.jpg" className="activity-pic" />
            <p className="activity-parag">
              กิจกรรมสร้างเตียงนอนสำหรับผู้ที่ได้รับ ผลกระทบน้ำท่วมในสหรัฐอเมริกาเนื่อง จากผลกระทบของฮอริเคน   </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/cookie.jpg" className="activity-pic" />
            <p className="activity-parag"> 
            กิจกรรมอบขนม คุกกี้สำหรับแจกจ่ายผู้คนชราและพิการในหมู่บ้านในวันคริสต์มาส </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/com.jpg" className="activity-pic" />
            <p className="activity-parag"> 
            ภาพกิจกรรมการแข่งขันศิลปหัตถกรรมระดับชาติ ครั้งที่ ๖๙ หมวด Web applications (รางวัลเหรียญทองระดับชาติ)</p>
            </div>
            <div className="activity-con">
            <img src="/img/act/tc.jpg" className="activity-pic" />
            <p className="activity-parag"> 
            ภาพกิจกรรมการเขียนโปรแกรมเข้าร่วมการประกวด โครงการ รด.นวัตกรรม </p>
            </div>
            
        </div>
        </SRLWrapper>
        </div>
      </div>
    )
  }
  