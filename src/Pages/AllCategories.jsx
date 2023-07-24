import CategoryItem from '../Components/Category/CategoryItem';
import { useSelector } from "react-redux"


function Categories() {

    const categories = useSelector(state => state.categories.categories)


  return (
    <div className="container categories-container">
        <h1>Categories</h1>
        <div className="main__catalog-categories">
            {categories.map(category => (
                
                   <CategoryItem key={category.id} category={category}/>
                
            ))}
        </div>
    </div>
  )
}

export default Categories