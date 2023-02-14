import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Game(params) {
  return (
    <div key={params.id}>
      {/* {params.Tab == 'Capitals List' ? <> 1 </> : <> 0 </>} */}

      <Link to={`/${params.country.name}`}>
        <div className="image">
          <img
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "175px",
            }}
            src={require(`../images/${params.country.image}`)}
          />
        </div>
        <div className="content">
          <div className="header">{params.country.name}</div>
          {/* <div className="meta price"># {params.country.level}</div>
          <div className="meta">{params.country.similarName}</div> */}
        </div>
      </Link>
    </div>
  );
}
