const Category = ({ title, id, showCategory, styleCategory }) => {

  return (
    <li className={styleCategory === id ? "selectedCategories" : "categories"} onClick={() => {showCategory(id)}}>
      <h1>{title}</h1>
    </li>
  );
};



export default Category;
