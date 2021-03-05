import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Button,
  ListGroup,
  Figure,
  Image,
  Caption,
} from "react-bootstrap";
import Favorites from "../containers/Favorites";

//Render 1 movie, NEED FORMAT

export default () => {
  const singleMovie = useSelector((state) => state.singleMovie);

  return (
    <div className="col-xs-2">
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={singleMovie.Poster}
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={singleMovie.Poster} />

        <Card.Body>
          <Card.Title>{singleMovie.Title}</Card.Title>
          <Card.Text>
            {singleMovie.Plot}

            <Favorites />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <ListGroup>
        <ListGroup.Item>{singleMovie.Directors}</ListGroup.Item>
        <ListGroup.Item>{singleMovie.Actors}</ListGroup.Item>
        <ListGroup.Item>{singleMovie.Year}</ListGroup.Item>
        <ListGroup.Item>{singleMovie.Genre}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
