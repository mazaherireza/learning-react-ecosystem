import { httpInterceptedService } from "@core/http-service";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const data = useLoaderData();
  return <div className="course-details-wrapper">{data.id}</div>;
};

export const courseDetailsLoader = async ({ params }) => {
  const { data } = httpInterceptedService.get(`/Course/by-id/${params.id}`);
  return data;
};

export default CourseDetails;
