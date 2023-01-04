import styles from "styled-components";
import Link from "next/link";
import Image from "next/image";

function Cont() {
  return (
    <MainDiv>
      <Image src="/sec1Img.jpg" alt="" layout="fill" />
      <div className="innerCont">
        <Image
          src="/logo.png"
          alt=""
          width={70}
          height={120}
        />
        <h1>TOIT</h1>
        <div className="beerCont">
          <span>BEER</span>
          <Image
            src="/bearText.png"
            alt=""
            width={135}
            height={40}
          />
        </div>
          <div className="scrollDown">
            <img src="/icons/downArrow.svg" alt="" />
            <span>Scroll Down</span>
          </div>
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
align-items:center;
justify-content: center;
z-index: 9;
img{
  object-fit:cover;
}
.innerCont{
  z-index:9;
  font-size:120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-size: 160px;
    line-height: 150px;
    font-family: CustomFont;
  }
  .beerCont{
    position:relative;
    margin-bottom: -45px;
span{
  font-family: CustomFont;
  font-size: 170px;
    margin: auto;
    -webkit-text-stroke: 2px white;
    color: transparent;
}
img{
  width: 255px;
  height: 218px;
  object-fit: contain;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateX(-18px);
}
  }
  .scrollDown{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 30px;
  font-family:Roboto;
    img{
      width:13px;
      height:auto;
    }
    span{
      font-size:16px;
    }
  }
}
`;
