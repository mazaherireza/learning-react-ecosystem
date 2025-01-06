import CategoryCard from "./category-card";
import Pagination from "@components/pagination/pagination";
import Modal from "@components/modal/modal";
import { useState } from "react";
import "./category-list.css";

const CategoryList = ({ data, totalRecords }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <>
      <div className="category-list-wrapper">
        {data.length !== 0 &&
          data.map((item) => (
            <CategoryCard
              setShowDeleteModal={setShowDeleteModal}
              key={item.id}
              {...item}
            ></CategoryCard>
          ))}
        <Pagination total={totalRecords}></Pagination>
      </div>

      <Modal
        isOpen={showDeleteModal}
        open={setShowDeleteModal}
        title="حذف"
        body="آیا از حذف اطمینان دارید؟"
      >
        <button onClick={() => setShowDeleteModal(false)}>خیر</button>
        <button>بله</button>
      </Modal>
    </>
  );
};

export default CategoryList;
