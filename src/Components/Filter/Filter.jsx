import { useDispatch, useSelector } from "react-redux";
import { filterDiscount, filterPriceFrom, filterPriceTo, filterSortType} from "../../Actions/filterAction";
import { useState } from "react";
import arrowDown from "../../images/down-arrow-svgrepo-com.svg";
import arrowUp from "../../images/up-arrow-svgrepo-com.svg";

function Filter({pathname}) {

    const dispatch = useDispatch();

    const sortType = useSelector((state) => state.filter.sortType);

    const handleShowDiscount = (e) => {
        dispatch(filterDiscount(e.target.checked));
    }

    const handleSortType = (e) => {
            dispatch(filterSortType(e.target.value))
            
    }

    const [isFiltShowing, setFiltShowing] = useState(false);

  return (
    <>
    <div className="filter__toogle-btn" onClick={() => setFiltShowing(!isFiltShowing)}>
            Filter
            {isFiltShowing ? <img src={arrowUp} alt=""/> : <img src={arrowDown} alt="" />}
        
        
    </div>
    <div className={`filter-container ${isFiltShowing ? "show__filt" : "hide__filt"}`}>

        <div className="input-wrapper price-wrapper">
            <p>Price</p>
            <form className="price" onSubmit={(e) => e.preventDefault()}>
                <input type="number" placeholder="from" onChange={(e) => dispatch(filterPriceFrom(e.target.value))}/>
            </form>
            <form className="price"  > 
                <input type="number" placeholder="to" onChange={(e) => dispatch(filterPriceTo(e.target.value))}/>
            </form>
        </div>
        <div className={`input-wrapper discount-wrapper ${pathname === "/all-sales" ? "hide-block" : ""}`}>
            <p>Discount items</p>
            <form className="discount">
                <input type="checkbox" onClick={handleShowDiscount}/>    
            </form>
        </div>
        <div className="input-wrapper sorted-wrapper">
            <p>Sorted</p>
            <select value={sortType} onChange={handleSortType}>
                <option value="">by default</option>
                <option value="asc">Lowest price</option>
                <option value="desc">Highest price</option>
            </select>
        </div>

    </div>

        </>
  )
}

export default Filter;