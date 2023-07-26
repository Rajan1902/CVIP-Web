import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)"
  });

  return (
    <animated.div ref={ref} className="card" style={{ ...cardAnimation, border: "none", width: '18rem', height: "20rem", margin: "20px", boxShadow: '4px 4px 8px 8px rgba(0,0,0,0.1)' }}>

        <div className="card-content">
          <img className="card-img-top" src={props.image} alt="" style={{height: "10rem"}} />
          <div className="card-body" style={{height: "10rem"}}>
            <h5>{props.title}</h5>
            <p className="card-text" style={{ textAlign: "center"}}>
              {props.description}
            </p>
            <button className="btn btn-primary">Enroll</button>
          </div>
        </div>
     
    </animated.div>
  );
};

export default Card;
