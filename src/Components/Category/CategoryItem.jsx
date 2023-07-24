import React from 'react';
import { useNavigate } from 'react-router-dom';

function CategoryItem({category}) {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate(`/categories/${category.id}`)
    }

  return (
    <div> 
        <div className="main__catalog-category" onClick={handleCategoryClick}>
        <img src={`http://localhost:3333/${category.image}`} alt="" />
        <h3>{ category.title}</h3>
    </div>
</div>
  )
}

export default CategoryItem;