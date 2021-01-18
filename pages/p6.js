import Tag from "../components/Tag";
import Certi from "../components/Certi";
export default function p6() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"2rem",letterSpacing:"3px"}} tagname="h1">ระเบียนแสดงผลการเรียน</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"70%",width:"80%",marginTop:"15px"}}>

        <div className="twoinpage" style={{display:"block",height:"100%"}}>
            <div className="one" style={{height:"50%",position: "relative",display:"flex",justifyContent:"center",marginBottom:"20px"}}>
            <Certi imgp="/img/transcript/1.jpg" caption="การแข่งขันศิลปหัตถกรรมระดับชาติ ครั้งที่ ๖๙ หมวด Web applications (รางวัลเหรียญทองระดับชาติ)"/>
            </div>
            <div className="two" style={{height:"50%",position: "relative",display:"flex",justifyContent:"center"}}>
            <Certi imgp="/img/transcript/2.jpg" caption="เข้าร่วมการแข่งขันทักษะด้านความมั่นคงไซเบอร์ " captionsec="(Royal Thai Air Force Junior CTF 2020)"/>
            </div>
        </div>
        <a className="pj-web-text" style={{position:"relative",top:"50px"}} href={`https://s.thistine.com/transcript`} target="blank">คลิกที่นี่เพื่อดาวน์โหลด (รหัสเข้าถึงข้อมูล *อยู่ใน portfolio)</a>


        {/* <div className="sixbytwo">
        <div className="haf">
        <Award imgp="/img/certi/oeg.jpg" caption="เข้าร่วมโปรแกรมนักเรียนแลกเปลี่ยน ณ ประเทศ สหรัฐอเมริกา ปี 2019-2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/etech.jpg" caption="รางวัลชนะเลิศ Computer Graphic & Homepage Contest E-tech" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/Nextjs.png" caption="เข้าร่วมงานสัมมนา nextjs conf 2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/aws.jpg" caption="เข้าร่วม AWS | AWSOME DAY งานสัมมนา online เรียนรู้เกี่ยวกับบริการต่าง ๆ ภายใน amazon web service" />
        </div>
            
        </div> */}

        </div>
      </div>
    )
  }
  