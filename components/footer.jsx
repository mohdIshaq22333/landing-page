import styles from "styled-components";
import Link from 'next/link'
import Image from 'next/image'

function Cont() {
  return (
    <MainDiv>
      <Image src="/footerBgImg.png" alt="" layout="fill" className="bg"/>
      <img className="graphic" src="/footerGraphic.svg" alt="" />
      <img className="beer" src="/footerBeer.png" alt="" />
      <div className="innerCont">
        <div className="block1">
            <nav>
                <li>
<img src="/icons/rightArrow.svg" alt="" />
          <Link href="/">HOME</Link>
                </li>
                <li>
<img src="/icons/rightArrow.svg" alt="" />
          <Link href="/">BEER</Link>
                </li>
                <li>
<img src="/icons/rightArrow.svg" alt="" />
          <Link href="/">FOOD</Link>
                </li>
                <li>
<img src="/icons/rightArrow.svg" alt="" />
          <Link href="/">SHOP</Link>
                </li>
                <li>
<img src="/icons/rightArrow.svg" alt="" />
          <Link href="/">CONTACT</Link>
                </li>
            </nav>
            <span className="copyright">© Copyright 2021</span>
        </div>
        <div className="block2">
            <img src="/icons/upArrow.svg" alt="" />
            <span>Top</span>
        </div>
        <div className="block3">
            <div className="bl1">
                <span>298, 100 Ft Rd,
Indira Nagar II Stage,
Bengaluru 560038 Karnataka</span>
<span>+91 90197 13388</span>
<span>toitblr@toit.in</span>
            </div>
        <div className="bl2">
            <span className="rights">All Rights Reserved</span>
        </div>
        </div>
      </div>
    </MainDiv>
  )
}

export default Cont

const MainDiv=styles.div`
width: 100%;
aspect-ratio:7/3.7;
position: relative;
overflow: hidden;
.bg{
    opacity:0.4;
}
.graphic{
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
}
.beer{
    width: 32%;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}
.innerCont{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 80%;
    margin: auto;
    margin-top: 10%;
    color: #DC9696;
    font-size: 18px;
    list-style-type: none;  
    align-items: flex-start;
height:65%;
z-index:9;
    .block1{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height:100%;
img{
    width:19;
    height:auto;
    margin-right:25px;
}
li{
    margin-bottom:25px;
}
.copyright{
    font-size:15px;
}
    }
    .block2{
        display:flex;
        flex-direction:column;
        gap:15px;
        width:200px;
        align-items: end;
        transform: translateY(-96px);
        img{
            height:40px;
            width:auto;
        }
    }
    .block3{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:100%;
        gap:15px;
        max-width: 200px;
        line-height: 150%;
        .bl1{
            display:flex;
        flex-direction:column;
        gap:15px;
        }
        .rights{
            font-size:15px;
        }
    }
}

`;