
import styles from "styled-components";
import Link from "next/link";
import Image from "next/image";

function Cont() {
  
  return (
    <MainDiv>
        <img className="ring ring1" src="./icons/ring.svg" alt="" />
        <img className="ring ring2" src="./icons/ring.svg" alt="" />
        <div className="bg">
            {/* <span className="shadow"></span> */}
      <Image src="/sec4BgImg.png" alt="" layout="fill"/>
</div>
      <Image src="/beer1.png" alt="" width={250} height={750} className="leftBeer"/>
      <Image src="/beer2.png" alt="" width={300} height={950}   className="rightBeer"/>
      <div className="innerCont">
      <Image src="/dog.png" alt="" width={100} height={90} className="dog"/>
<div className="text">
    <span className="title">
    Come by. Try everything twice.
    </span>
    <div className="word">
    Love
    </div>
</div>

      </div>
      
    </MainDiv>
  );
}

export default Cont;

const MainDiv = styles.section`
width: 100%;
aspect-ratio:7/6.7;
position: relative;
display:flex;
.leftBeer, .rightBeer{
    object-fit:contain;
    position:absolute;
    right:0;
    top:30%;
    transform:translateY(-40%);
    z-index:99;
}
.leftBeer{
    left:0;
    transform:translateY(-30%);
}
.dog{
    object-fit:contain;
}
.innerCont{
    z-index:9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    .dog{
        margin-bottom:70px;
    }
.text{
    .title{
        font-size: 60px;
        margin: auto;
        -webkit-text-stroke: 1px white;
        font-family: sans-serif;
        color: transparent;
        display: inline-block;
    font-family:CustomFont;
    }
    .word{
        color: #CA9E67;
        text-align: center;
        font-size: 190px;
        font-weight: bolder;
    font-family:CustomFont;
    }
}
}
.bg{
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    height:60%;
    z-index:0;
    .shadow{
        position:absolute;
        z-index:9;
        width:100%;
        height:90%;
        top:0;
        left:0;
        background: linear-gradient(180deg, #121011 0%, rgba(18, 16, 17, 0) 100%);
    }
    img{
        opacity:0.6;
        filter: grayscale(100%);
    }
}
.ring{
    width:110px;
    height:110px;
    position:absolute;
    z-index:9;
}
.ring1{
    width:80px;
    height:80px;
    top:15%;
    left:10%;
}
.ring2{

    top:30%;
    right:15%;
}
`;
