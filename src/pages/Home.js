import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Masonry from "react-masonry-css";
import DisplayCard from "../components/DisplayCard";
import Navbar from "../components/Navbar";

export default function Notes() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {details.map((detail) => (
            <div key={detail.id}>
              <DisplayCard detail={detail} />
            </div>
          ))}
        </Masonry>
      </Container>
    </div>
  );
}
