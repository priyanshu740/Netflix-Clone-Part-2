import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } from "@material-ui/icons";
  import { useRef, useState } from "react";
import '../Styles/list.css'
import Listitem from "./Listitem";
  
export default function List({list}) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
    return (
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderarrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container2" ref={listRef}>
           {list.content.map((item,i) => (
             <Listitem index={i} item={item}/>
           ))}
          </div>
          <ArrowForwardIosOutlined
            className="sliderarrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
  }