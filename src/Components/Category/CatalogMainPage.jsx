import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { getCategories } from '../../Actions/categoriesAction';
import CategoryItem from '../Category/CategoryItem';

function CatalogMainPage() {
  const dispatch = useDispatch();
 
useEffect(() => {
    dispatch(getCategories());
}, [])

const categories = useSelector(state => state.categories.categories);

  return (
    <div>
      <div className="container main__catalog-block">
        <div className="main__catalog-header" id="catalog"> 
          <h2>Catalog</h2>
          <Link to="/categories">All categories</Link>
        </div>
        <div className="main__catalog-categories">
          {
            categories.slice(0,4).map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CatalogMainPage