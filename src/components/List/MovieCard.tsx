import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCardStyled = styled(Link)`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  padding: ${(props) => props.theme.space.l};
  display: block;

  img {
    width: 100%;
    margin-bottom: ${(props) => props.theme.space.l};
  }
`;

export default (props: MovieListItem) => {
  return (
    <MovieCardStyled to={`/${props.imdbID}`}>
      <img src={props.Poster} alt={`${props.Title} poster`} />
      <h2>{props.Title}</h2>
      <span>{props.Year}</span>
    </MovieCardStyled>
  );
};
