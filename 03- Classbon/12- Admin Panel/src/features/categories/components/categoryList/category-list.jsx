import "./category-list.css";
import CategoryCard from "./category-card";
import Pagination from "@components/pagination/pagination";

const CategoryList = ({ data, totalRecords }) => {
  return (
    <div className="category-list-wrapper">
      {data.length !== 0 &&
        data.map((item) => (
          <CategoryCard key={item.id} {...item}></CategoryCard>
        ))}
      <Pagination total={totalRecords}></Pagination>
    </div>
  );
};

export default CategoryList;
