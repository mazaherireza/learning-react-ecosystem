import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

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
      <PageContent title={title}>
        <p>{messagae}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
