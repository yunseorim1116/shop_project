import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
interface IProps {
  totalPosts: number;
  postsPerPage: number;
  setPaginateNumber: (number: number) => void;
}
const Pagination = ({
  totalPosts,
  postsPerPage,
  setPaginateNumber,
}: IProps) => {
  let pageNumbers = [];
  const totalPageNumber = Math.ceil(totalPosts / postsPerPage);

  pageNumbers = Array.from(new Array(totalPageNumber), (x, i) => i + 1);

  return (
    <DivStyle>
      {pageNumbers.map((number) => {
        return (
          <Button key={number} onClick={() => setPaginateNumber(number)}>
            {number}
          </Button>
        );
      })}
    </DivStyle>
  );
};

const DivStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 28px;
  font-weight: 700;
  border-radius: 2px;
  cursor: pointer;
  background-color: #262626;
  color: white;
  margin: 5px;
`;

export default Pagination;
