"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
  color: "#3b82f6",
};

const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      aria-label="Loading Spinner"
      cssOverride={override}
    />
  );
};

export default LoadingPage;
