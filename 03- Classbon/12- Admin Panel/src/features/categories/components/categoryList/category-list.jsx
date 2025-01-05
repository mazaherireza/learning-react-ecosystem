import "./category-list.css";
import CategoryCard from "./category-card";

const CategoryList = ({ data, totalRecords }) => {
  return (
    <div className="category-list-wrapper">
      {data.length !== 0 &&
        data.map((item) => (
          <CategoryCard key={item.id} {...item}></CategoryCard>
        ))}
    </div>
  );
};

export default CategoryList;
