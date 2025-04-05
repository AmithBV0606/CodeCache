"use client";

type ErrorPageProps = {
  error: Error;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <p className="bg-red-200 p-2 rounded-md font-bold text-red-500">{error.message}</p>
    </div>
  );
};

export default ErrorPage;