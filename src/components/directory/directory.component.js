import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss'
const Directory = ({ categoryList }) => {
    return (
        <div className="categories-container">
            {categoryList.map((category) => {
                return (
                    <DirectoryItem key={category.id} category={category} />
                )
            })}
        </div>
    )
}

export default Directory;