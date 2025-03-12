import Categorys from '../category-list/category-list.component'
import './directory.styles.scss'
const Directory = ({ categoryList }) => {
    return (
        <div className="categories-container">
            {categoryList.map((category) => {
                return (
                    <Categorys key={category.id} category={category} />
                )
            })}
        </div>
    )
}

export default Directory;