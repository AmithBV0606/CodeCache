"use client";

type ErrorPageProps = {
  error: Error;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;