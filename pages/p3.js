import Tag from "../components/Tag";
import Progress from "../components/Progressbar";
export default function p3() {
    return (
      <div className="page" style={{background:"url(/img/p3.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">ประวัติการศึกษา</Tag></h1>
        </div>
        </div>
        <div className="container container-width" style={{height:"50%",width:"80%"}}>

        <div className="ab-skill shadow" style={{height:"33.33%"}}>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        <h1 className="sec-title">ประถมศึกษา</h1>
        <h3 className="ab-basic-text" style={{marginTop:"20px"}} > <span className="label ab-label">โรงเรียน</span>โรงเรียนจุฑาทิพย์</h3>
        </div>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        <h3 className="ab-basic-text" style={{marginTop:"20px" ,fontSize:"1.5rem"}} > <span className="label ab-label">ปีการศึกษา</span>2552-2557</h3>
        <h3 className="ab-basic-text" style={{marginTop:"20px" ,fontSize:"1.5rem"}} > <span className="label ab-label">เกรดเฉลี่ย</span>4.00</h3>
        </div>
        </div>

        <div className="ab-skill shadow" style={{height:"33.33%"}}>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        <h1 className="sec-title">มัธยมศึกษาตอนต้น</h1>
        <h3 className="ab-basic-text" style={{marginTop:"20px"}} > <span className="label ab-label" style={{height:"fit-content !important"}}>โรงเรียน</span>โรงเรียนพนมสารคาม"พนมอดุลวิทยา"</h3>
        </div>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        <h3 className="ab-basic-text" style={{marginTop:"10px" ,fontSize:"1rem"}} > <span className="label ab-label">แผนการเรียน</span>English program</h3>
        <h3 className="ab-basic-text" style={{marginTop:"10px" ,fontSize:"1rem"}}  > <span className="label ab-label">ปีการศึกษา</span>2558-2560</h3>
        <h3 className="ab-basic-text" style={{marginTop:"10px" ,fontSize:"1rem"}}  > <span className="label ab-label">เกรดเฉลี่ย</span>3.49</h3>
        </div>
        </div>

        <div className="ab-skill shadow" style={{height:"33.33%"}}>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        <h1 className="sec-title">มัธยมศึกษาตอนปลาย</h1>
        <h3 className="ab-basic-text" style={{marginTop:"20px"}} > <span className="label ab-label" style={{height:"fit-content !important"}}>โรงเรียน</span>โรงเรียนพนมสารคาม"พนมอดุลวิทยา"</h3>
        </div>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        <h3 className="ab-basic-text" style={{marginTop:"10px" ,fontSize:"1rem"}} > <span className="label ab-label">แผนการเรียน</span>วิทย์-คณิต(MEP)</h3>
       
        <h3 className="ab-basic-text" style={{marginTop:"10px" ,fontSize:"1rem"}} > <span className="label ab-label">ปีการศึกษา</span>2561-2563</h3>
        <h3 className="ab-basic-text" style={{marginTop:"10px" ,fontSize:"1rem"}} > <span className="label ab-label">เกรดเฉลี่ย</span>3.70(5เทอม)</h3>
        </div>
        </div>

        <div className="ab-skill shadow" style={{height:"33.33%"}}>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        <h1 className="sec-title">Study aboard</h1>
        <h3 className="ab-basic-text" style={{marginTop:"20px"}} > <span className="label ab-label" style={{height:"fit-content !important"}}>โรงเรียน</span>Clayton high school</h3>
        </div>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        
        <h3 className="ab-basic-text" style={{marginTop:"10px" ,fontSize:"1rem"}} > <span className="label ab-label">ปีการศึกษา</span>2562</h3>
        <h3 className="ab-basic-text" style={{marginTop:"10px" ,fontSize:"1rem"}} > <span className="label ab-label">เกรดเฉลี่ย</span>4.00</h3>
        </div>
        </div>

        </div>
      </div>
    )
  }
  