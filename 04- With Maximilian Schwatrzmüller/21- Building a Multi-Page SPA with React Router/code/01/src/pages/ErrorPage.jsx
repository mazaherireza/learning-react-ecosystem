import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <h2>An Error Occured!</h2>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
