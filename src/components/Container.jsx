import React, { useState } from "react";
import Submission from "./Submission";
import Form from "./Form";
import LearningPaths from "./LearningPaths";

const Container = () => {
  const [submissionState, setSubmissionState] = useState(false);
  const [loading, setLoading] = useState(true);

  const onFormSubmit = () => {
    setSubmissionState(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="">
      {!submissionState && <Form onSubmit={onFormSubmit} />}
      {submissionState && !loading && <LearningPaths />}
      {submissionState && loading && <Submission />}
    </div>
  );
};

export default Container;
