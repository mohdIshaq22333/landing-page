
import styles from "styled-components";
import Image from "next/image";

function Cont() {
    const data=[
        {
            title1:"BA",
            title2:"RS",
            para:"Lorem Ipsum Dollor Dummy Text should be here"
        },
        {
            title1:"BE",
            title2:"ERS",
            para:"Lorem Ipsum Dollor Dummy Text should be here"
        },
        {
            title1:"BREW",
            title2:"ERY",
            para:"Lorem Ipsum Dollor Dummy Text should be here"
        },
    ]
  return (
    <MainDiv>
      <div className="innerCont">
       {
        data.map((val,index)=>
        <div key={index} className="sing">
  <Image
          src={`/sec2Img${index + 1}.jpg`}
          alt=""
        layout="fill"
        />
        <div className="text">
            <div className="title">
                {val.title1}
                <span> {val.title2}</span>
            </div>
            <p>{val.para}</p>
        </div>
        </div>
        )
       }
      </div>
    </MainDiv>
  );
}

export default Cont;

const MainDiv = styles.section`
.innerCont{
    width: 100%;
aspect-ratio:7/3.7;
position: relative;
display:flex;
img{
    object-fit:cover;
}
.sing{
    position:relative;
    flex:1;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-end;
    .text{
        z-index:9;
        width: 75%;
        margin-bottom: 75px;
        p{
            font-size:18px;
            padding-left:4px;
    font-family:CustomFont2;

        }
        .title{
            font-size:60px;
    font-family:CustomFont;
    letter-spacing: 2px;
            span{
    font-family:CustomFont;
                font-size: 57px;
                  margin: auto;
                  -webkit-text-stroke: 1px white;
                  color: transparent;
                  display: inline-block;
              }
              
        }
    }
}
}
`;
