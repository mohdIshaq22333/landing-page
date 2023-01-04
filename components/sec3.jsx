
import styles from "styled-components";
import Link from "next/link";
import Image from "next/image";

function Cont() {
  return (
    <MainDiv>
      <Image src="/sec3BgImg.png" alt="" layout="fill" className="bg"/>
      <div className="shadow"></div>
      <div className="innerCont">
        <div className="block1">
        <h2>About us</h2>
        <p>We are Toit.<br/>
You should be too…</p>
<p className="para">Toit is a brew pub, brewing a revolutionary culture.
We started out as a sweet little Bengaluru brewing culture with the promise of some bodacious brews, fabulous foods and a supreme brew-pub experience</p>
      <div className="explore">
        <span>Explore</span>
        <img src="/icons/explore.svg" alt="" />
      </div>
<div className="sec3Img">

      <Image src="/sec3Img.jpg" alt="" layout="fill" />
</div>
        </div>
        <span className="toit">TOIT BREWERY</span>
      
      </div>
    </MainDiv>
  );
}

export default Cont;

const MainDiv = styles.section`
width: 100%;
aspect-ratio:7/3.7;
position: relative;
display:flex;
background: linear-gradient(180deg, #121011 0%, rgba(28, 25, 25, 0) 100%);
.bg{
    opacity: 0.2;
}
.shadow{
    background: linear-gradient(180deg, #121011 0%, rgba(28, 25, 25, 0) 100%);
transform: rotate(-180deg);
position:absolute;
z-index:9;
width:100%;
height:90%;
bottom:0;
left:0;
}
.toit{
    margin-top: 100px;
  font-family:Roboto;
    display: block;
    text-align: center;
    font-size: 16px;
    color: #ADADAD;

}
.innerCont{
    z-index:9;
    width: 80%;
    margin: auto;
    position: relative;
img{
    object-fit:cover;
}

    .block1{
        position: relative;
        h2{
            font-size: 16px;
    z-index:9;
    font-family:CustomFont2;

        }
        p{
            font-size: 80px;
    width: 75%;
    margin-top: 28px;
    z-index:9;
    font-family:CustomFont2;

        }
        .para{
    width: 40%;
    color: #E0E0E0;
    line-height: 140%;
    font-size: 16px;
    z-index:9;
    font-family:CustomFont2;

        }
        .explore{
            width: fit-content;
        color: #CA9E67;
        display: flex;
        align-items: center;
        font-size: 16px;
        gap: 15px;
        margin-top: 30px;
        img{
        width:45px;
        height:32px;
        
        }
        span{
    font-family:CustomFont2;
        }
    }
   
    }
.sec3Img{
    width:58%;
    aspect-ratio:8/6;
    position:absolute;
    right:0;
    top:50%;
    transform:translateY(-50%);
    z-index: -1;
}
.
}
`;
