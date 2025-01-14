// Not Finished Yet
import Link from "next/link";

const Breadcrumbs = ({pageCategoryUrl, pageCategoryTitle, currentPage}) => {
    return (
        <div className="breadcrumbs_container">
            <Link href="/">Home</Link>
            {' > '}
            <Link href={pageCategoryUrl}>{pageCategoryTitle}</Link>
            {' > '}
            <span>{currentPage}</span>
          </div>
    );
}

export default Breadcrumbs;