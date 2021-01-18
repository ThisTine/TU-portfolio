
export default function Certi({imgp}){
    return(

        <div className="award shadow" style={{height:"100%",position: "relative",width:"90%"}} >
        <img src={imgp}  style={{position:"absolute",height:"calc(100% - 30px)",margin:"auto"}} />
        </div>
    )
}