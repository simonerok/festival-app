import Marquee from "react-fast-marquee";

//Marquee er react component som kører css animationer 
const Banner = ({bandData}) => {
    return (
        <div className="banner">
          {bandData.length > 0 && (
            <Marquee scrollamount="5" direction="left">
              {bandData.map((band,index) => (
                <span key={band.slug}> {band.name} </span>
              ))}
            </Marquee>
          )}
        </div>
      );
    };
    
    export default Banner;