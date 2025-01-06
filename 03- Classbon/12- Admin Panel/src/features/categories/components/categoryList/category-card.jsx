import "./category-card.css";

const CategoryCard = ({ id, name, setShowDeleteModal }) => {
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleEdit = () => {};

  return (
    <div className="category-card-wrapper">
      <p className="name">{name}</p>
      <div className="actions">
        <button onClick={handleDelete}>حذف</button>
        <button onClick={handleEdit}>ویرایش</button>
      </div>
    </div>
  );
};

export default CategoryCard;
