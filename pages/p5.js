import Tag from "../components/Tag";
import Award from "../components/Award";
export default function p5() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">Certificates</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"50%",width:"80%",marginTop:"15px"}}>

        <div className="sixbytwo">
        <div className="haf">
        <Award imgp="/img/certi/webapp.jpg" caption="การแข่งขันศิลปหัตถกรรมระดับชาติ ครั้งที่ ๖๙ หมวด Web applications (รางวัลเหรียญทองระดับชาติ)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/ctf.jpg" caption="เข้าร่วมการแข่งขันทักษะด้านความมั่นคงไซเบอร์(Royal Thai Air Force Junior CTF 2020)"/>
        </div>
        <div className="haf">
        <Award imgp="/img/certi/aws.jpg" caption="เข้าร่วม AWS | AWSOME DAY งานสัมมนา online เรียนรู้เกี่ยวกับบริการต่าง ๆ ภายใน AWS"  />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/memofcong.jpg" caption="เข้าร่วมพูดคุยแลกเปลี่ยนความคิด ทางด้านการเมือง/สิ่งแวดล้อม วัฒนธรรม และอื่นๆ กับ สมาชิกสภาผู้แทนราษฎร DAVID ROUZER" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/senate.jpg" caption="เข้าร่วมพูดคุยแลกเปลี่ยนความคิด ทางด้านการเมือง/สิ่งแวดล้อม วัฒนธรรม และอื่นๆ กับ วุฒิสามาชิก THOM TILLIS" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/oeg.jpg" caption="เข้าร่วมโปรแกรมนักเรียนแลกเปลี่ยน ณ ประเทศ สหรัฐอเมริกา ปี 2019-2020"  />
        </div>

        <div className="haf">
        <Award imgp="/img/certi/movie.jpg" caption="การแข่งขันศิลปหัตถกรรมระดับชาติ ครั้งที่ ๖๙ หมวด หนังสั้น (รางวัลเหรียญเงินระดับประเทศ)"  />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/eng.jpg" caption="เหรียญเงิน การแข่งขันทักษะภาษาอังกฤษหมวด ฟัง พูด อ่าน เขียน (Multi-Skills)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/rotc.jpg" caption="เข้าร่วมการประกวด รด.นวัตกรรม ภายใต้โครงการศูนย์ฝึกแข็งขัน สถานศึกษาร่วมใจ มุ่งไปสู่มาตรฐานเดียวกัน" />
        </div>
            
        </div>

        </div>
      </div>
    )
  }
  