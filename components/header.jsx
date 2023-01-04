import styles from "styled-components";
import Link from "next/link";

function Header() {
  return (
    <MainDiv>
      <div className="innerCont">
        <div className="menCont">
          <img src="./icons/menu.svg" alt="" />
          <span>Menu</span>
        </div>
        <nav>
          <Link href="/">kudix</Link>
          <Link href="/">Reservation</Link>
          <Link href="/">brewery tour</Link>
          <Link href="/">
            <span>Find My Beer</span>
            <img src="./icons/plane.svg" alt="" />
          </Link>
        </nav>
      </div>
    </MainDiv>
  );
}

export default Header;

const MainDiv = styles.div`
position:absolute;
width:100%;
top:0;
left:0;
z-index:99;
.menCont{
  display: flex;
  align-items: center;
  gap: 10px;
  font-family:Roboto Condensed;
  img{
    width: 30px;
    height: 30px;
  }
}
.innerCont{
  display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    margin: auto;
    font-size:18px;
    height:100px;
    font-size: 18px;
  }
 
  nav{
    display: flex;
    gap: 36px;
    align-items: center;
    font-family:CustomFont2;
    a{
      font-family:CustomFont2;

    }
    a:nth-child(4){
      width: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
      border: 2px solid;
      height: 40px;
      img{
        width:13px;
        height:13px;
      }
    }
  }
`;
