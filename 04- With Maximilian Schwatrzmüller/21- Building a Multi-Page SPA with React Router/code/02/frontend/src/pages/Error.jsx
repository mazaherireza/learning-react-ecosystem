import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const { status, data } = useRouteError();
  let title = "An error occured.";
  let messagae = "Something went wrong.";

  if (status === 500) {
    messagae = JSON.parse(data).messagae;
  }
  if (status === 404) {
    title = "Not found!";
    messagae = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>
        <p>{messagae}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
