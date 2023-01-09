import axios from "axios";
import React, { useEffect, useState } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css'

const CardRick = ({ url }) => {
  const [ricks, setRicks] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setRicks(res.data));
  }, []);


const colors = ricks.status === 'Alive'?'#33ff00':ricks.status === 'Dead'? 'red': '#606e5c'

  return (
    
      <div className="sub_card">
        <img src={ricks.image} alt="" />
        <br />
        <div>
          <div className="tatus">
            <p><i className="fa-solid fa-circle" style={{color:`${colors}`}}>
            </i> {ricks.status}</p>
          </div>
          <p>Specie:</p>
          <p className="texts2">{ricks.species}</p>
          <p>Origin:</p>
          <p className="texts2">{ricks.origin?.name}</p>
          <p>Episode:</p>
          <p className="texts2">{ricks.episode?.length}</p>
        </div>
      </div>

  );
};

export default CardRick;
