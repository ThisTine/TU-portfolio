import Tag from "../components/Tag";
export default function p2() {
    return (
      <div className="page" style={{background:"url(/img/p2.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div style={{width:"100%",height:"100%",overflow:"hidden",position:"absolute"}} >
        <img src="/img/p2-2.png" style={{height:"100%",zIndex:"3",position:"absolute",pointerEvents:"none"}}/>
        </div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">About me</Tag></h1>
        </div>
        </div>
        <div className="ab-layout container  container-width">
          <div className="ab-bg shadow">
            <span style={{position:"absolute",top:"0",right:"0",padding:"20px"}}>X</span>
            <div className="ab-basic">
              <h1 style={{width:"100%"}}> <Tag style={{fontSize:"1.25rem",letterSpacing:"3px"}} tagname="h2">Basic Info</Tag> </h1>
              <div style={{width:"70%"}}>
                <p className="ab-basic-text"> <span className="label ab-label">Name</span> นาย สิทธิโชค อ่วมศิริ</p>
                <p className="ab-basic-text"> <span className="label ab-label">birth day</span> 14 กุมภาพันธ์ 2546</p>
                {/* <p className="ab-basic-text"> <span className="label ab-label">Dad</span>นาย xxxx xxx</p>
                <p className="ab-basic-text"> <span className="label ab-label">Mom</span>นาง xxxx xxxx</p> */}
                </div>
              <div style={{width:"30%"}}>
                <p className="ab-basic-text"> <span className="label ab-label">Blood type</span> O</p>
                <p className="ab-basic-text"> <span className="label ab-label">Nationality</span> Thai</p>
                {/* <p className="ab-basic-text"> <span className="label ab-label">GPAX</span> 3.70</p> */}
                </div>
              {/* <div style={{width:"100%"}}>
                <p className="ab-basic-text"> <span className="label ab-label">Study Abord</span> Clayton High school, North Carolina</p>
                <p className="ab-basic-text"> <span className="label ab-label">Primary School</span> Chutatip School   <span className="label back-label">GPA : 4.00</span> </p>
                <p className="ab-basic-text"> <span className="label ab-label">Middle/High School</span> Phanom Adun Witthaya school</p>
                <p className="ab-basic-text" style={{marginLeft:"40px"}}> <span className="label ab-label">Study Program</span> วิทย์-คณิต (English program)</p>   
                <div className="gpax"><span className="label ab-label">GPAX M.1-3 : 3.49</span> <span className="label ab-label">GPAX (5 semesters) M.4-6 : 3.70</span></div>
              </div> */}
            </div>
            <div className="ab-basic">
              <div style={{width:"20%"}}></div>
            <h1 style={{width:"80%",textAlign:"left"}}> <Tag style={{fontSize:"1.25rem",letterSpacing:"3px"}} tagname="h2">Contact</Tag> </h1>
              <div style={{width:"100%"}}>
                <p className="ab-basic-text"> <span style={{whiteSpace:"nowrap",alignItems:"center",display:"flex"}} className="label ab-label">Address</span> xx หมู่ xx ต.xx อ.xxx จ.ฉะเชิงเทรา xxxx</p>
                <p className="ab-basic-text" > <span className="label ab-label">Website</span> www.thistine.com</p>
                <p className="ab-basic-text space" > <span className="label ab-label">Phone number</span>xxxx</p>
                <p style={{marginLeft:"40px"}} className="ab-basic-text space"> <span className="label ab-label">Email</span>xxxx@gmail.com</p>
                </div>
            </div>
            <div className="ab-basic">
            <div style={{display:"flex",width:"100%",flexDirection:"row"}}>
              <div style={{width:"50%",margin:"0"}}>
              <div  style={{width:"80%",display:'flex',justifyContent:"flex-start"}}>
                <h1  style={{fontSize:"1.5rem"}}> Interests </h1>
              </div>
              
              <div className="spas" >
                <ol style={{margin:"5px 0 0 0 "}}>
                  <li><p>Application development</p></li>
                  <li><p>Data analysis</p></li>
                  <li><p>Web application development</p></li>
                </ol>
              </div>
              </div>

              <div style={{width:"50%",margin:"0"}}>
              <div  style={{width:"80%",display:'flex',justifyContent:"flex-start"}}>
                <h1  style={{fontSize:"1.5rem"}}> Languages skill </h1>
              </div>
              
              <div className="spas" style={{display:"flex",flexWrap:"wrap"}} >
                {['Thai','English'].map(item=><span className="label" style={{fontSize:"0.7rem",margin:"3px"}}>{item}</span>)}
              </div>
              </div>


              </div>
            </div>
            <div className="ab-hobby" style={{flexDirection:"column"}}>
            <h1 style={{width:"80%",textAlign:"left"}}> ความสามารถด้านโปรแกรมคอมพิวเตอร์</h1>
            <div className="spas" style={{display:"flex",flexWrap:"wrap"}} >
            {['Visual Studio Code','Atom','Google Colab','Github','Windows terminal','Linux terminal','Wireshark','Photoshop','Lightroom','After effect','Premiere pro','Davinci Reslove','Microsoft Office'].map(item=><span className="label" style={{fontSize:"0.7rem",margin:"3px"}}>{item}</span>)}
            </div>
            </div>
          </div>
        </div>
        <div className="border shadow"></div>
      </div>
    )
  }
  