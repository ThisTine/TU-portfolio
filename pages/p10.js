import Tag from "../components/Tag";
import Project from "../components/Project";
export default function p10() {
    const img1 = {folder:"short", file:[["1"],["2"],["3"],["4"]]}
    const img2 = {folder:"hist", file:[["1"],["2"],["3"],["4"],['5']]}
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">กิจกรรม/โปรเจ็ค</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"80%",width:"70%",marginTop:"15px"}}>
        <Project description="โปรเจกต์ open source สำหรับย่อลิงค์/กำหนดรหัสผ่าน และ
            สร้าง QR code พร้อมระบบ Admin จัดการข้อมูล" picConHeight="55%" framework={['php','jquery','mysql']} url="github.com/ThisTine/shorturl">
            {img1.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img1.folder}/${item[0]}.jpg`} className={item[1] ? item[1] : "pj-img"} />
            )})}
        </Project>

        <Project description="Worklist และพ Hist แอพพลิเคชั่นจดการบ้านพร้อมฟังก์ชั่นต่าง ๆ เช่นการเช็คการบ้าน
        การค้นหาการบ้านตามรายวิชา การเพิ่มลบรายวิชา และการใช้งานแบบ offline โดยแบ่งเป็น 2 แอพพลิเคชั่นคือ 
        worklist สำหรับจดการบ้านคนเดียว และ Hist สำหรับจดการบ้านทั้งห้อง(ใช้ข้อมูลการบ้านร่วมกัน)
" picConHeight="50%" framework={['react','firebase']} url="github.com/ThisTine/worklist">
            {img2.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img2.folder}/${item[0]}.png`} className={item[1] ? item[1] : "pj-img"} />
            )})}
            
        </Project>

        </div>
      </div>
    )
  }
  