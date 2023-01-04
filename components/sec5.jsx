import styles from "styled-components";
import Link from 'next/link'
import Image from 'next/image'

function Cont() {
  return (
    <MainDiv>
      <div className="block1">
        <div className="innerCont">
            <p className="title">
            Want To purchase our  merchandise
            </p>
            <p className="para">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <div className="btn">
                <span>Shop Now</span>
                <img src="/icons/whiteRightArrow.svg" alt="" />
            </div>
        </div>
      </div>
      <div className="block2">
      <Image src="/sec5Bg.jpg" alt="" layout="fill" className="bg"/>
        <img className="cap" src="/cap.png" alt="" />
      </div>
    </MainDiv>
  )
}

export default Cont

const MainDiv=styles.div`
width: 100%;
aspect-ratio:7/3.7;
position: relative;
display:flex;
background: #CA9E67;
.block1{
    z-index:9;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .innerCont{
        width: 60%;
        transform: translate(0px, -60px);
.title{
    font-size: 70px;
    width: 143%;
    font-family:CustomFont2;
    line-height: 82px;
    margin-bottom: 35px;
}
.para{
    font-size: 17px;
    color: #F0F0F0;
    line-height: 135%;
    font-family:CustomFont2;
}
.btn{
    width: 165px;
    height: 50px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 22px;
    font-size: 17px;
    border-radius: 21px;
    span{
    font-family:CustomFont2;
    }
}
    }
}
.block2{
    width:50%;
    height:100%;
    position:relative;
    display: flex;
    .bg{
        mix-blend-mode: luminosity;

    }
    .cap{
        z-index: 9;
        width: 70%;
        object-fit: contain;
        transform: translate(60px, -70px);
    }
}
`;