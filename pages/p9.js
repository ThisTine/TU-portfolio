import Tag from "../components/Tag";
import Project from "../components/Project";

export default function p9() {
    const img0 = [{src:'/img/paalumnus/1.jpg'},'/img/paalumnus/2.jpg','/img/paalumnus/3.jpg']
    const img1 = {folder:"paalumnus", file:[["1"],["2"],["3","gone"]]}
    const img3 = {folder:"billdora", file:[["main"],["p4.1"],["p5"],["p4"],["p3","gone"]]}
    const img2 = {folder:"randomi", file:[["2"],["1"],["3","gone"]]}
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">กิจกรรม/โปรเจ็ค</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"80%",width:"70%",marginTop:"15px"}}>
        <Project description="เว็บไซต์ทำเนียบศิษย์เก่าโรงเรียนพนมอดุลวิทยาสำหรับเพิ่ม/ดู
            รายชื่อศิษย์เก่าที่จบจากโรงเรียน มีระบบเช็ครายชื่อซ้ำและอื่น ๆ" picConHeight="45%" framework={['react','nodejs','graphql','mongodb']} url="thistine.com/paalumnus/">
            
            { img1.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img1.folder}/${item[0]}.jpg`} className={item[1] ? `pj-img ${item[1]}` : "pj-img"} alt="test" />
            )})}
            
        </Project>
        <Project mode="small" description="แอพพลิเคชั่นหารค่าใช้จ่ายที่มีฟังก์ชั่นพื้นฐานหลากหลายเช่นการคำนวณค่าใช้จ่ายอัตโนมัติ 
        การติดตามผู้ใช้จ่ายเงิน รวมถึงการสร้างหน้าใบเสร็จรับเงินพร้อม QR Code สำหรับ Promptpay ใช้ในการจ่ายเงินได้ทันที และรวดเร็วปล่อยให้ดาวน์โหลดแบบฟรีที่
         Playstore" picConHeight="80%" framework={['flutter']} url="app.thistine.com/billdora/">
            
            { img3.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img3.folder}/${item[0]}.jpg`} className={item[1] ? `pj-img ${item[1]}` : "pj-img"} alt="test" />
            )})}
            
        </Project>
        {/* <Project description="RANDOMI แอพพลิชั่นสุ่มตัวเลขที่มีฟังก์ชั่นหลากหลายและ
ปรับแต่งโดยคำนึงถึงการใช้งานในชีวิตประจำวันให้ได้มากที่สุด
มีทั้งรูปแบบแอพพลิเคชั่น (Playstore) และ PWA (PROGRESSIVE WEB APPLICATION )" picConHeight="60%" mode="min" framework={['flutter','react']} url="app.thistine.com/randomi/">
            {img2.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img2.folder}/${item[0]}.jpg`} className={item[1] ? `pj-img ${item[1]}`: "pj-img"} />
            )})}
            
        </Project> */}

        </div>
      </div>
    )
  }
  