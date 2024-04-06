import React, { useState } from "react";
import LearnPaths from "./LearnPaths";
import Submission from "./Submission";
import Form from "./Form";

const Container = () => {
  const [submissionState, setSubmissionState] = useState(false);
  const [loading, setLoading] = useState(true);

  const onFormSubmit = () => {
    setSubmissionState(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="">
      {!submissionState && <Form onSubmit={onFormSubmit} />}
      {submissionState && !loading && <LearnPaths />}
      {submissionState && loading && <Submission />}
    </div>
  );
};

export default Container;
