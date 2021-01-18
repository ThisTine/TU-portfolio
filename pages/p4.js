import { SRLWrapper } from "simple-react-lightbox";
import Award from "../components/Award";
import Tag from "../components/Tag";
export default function p5() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"2rem",letterSpacing:"3px"}} tagname="h1">Statement of Purpose</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"50%",width:"78%",marginTop:"15px"}}>
        <SRLWrapper>
          <div style={{padding:"20px",boxSizing:"border-box",background:"white",borderRadius:"20px"}}>
           
          <img src="/img/statement.jpg" style={{width:"100%"}}/>
          </div>
          </SRLWrapper>
        </div>
      </div>
    )
  }
  