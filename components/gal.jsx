import styles from "styled-components";
import Image from 'next/image'

function Cont() {
  return (
    <MainDiv>
      {
        [...new Array(4)].map((_,index)=>
        <div key={index} className="sing">
      <Image src={`/galImg${index + 1}.jpg`} alt="" layout="fill" className="bg"/>
        </div>
        )
      }
    </MainDiv>
  )
}

export default Cont

const MainDiv=styles.div`
position:relative;
width:100%;
height:300px;
display:flex;
.sing{
    position:relative;
    flex:1;
    height:100%;
    img{
        object-fit:cover;
    }
}
`;