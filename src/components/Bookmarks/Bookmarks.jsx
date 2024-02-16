import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css'
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4'>
            <h3 className='text-4xl text-center'>Reading Time : {readingTime}</h3>
            <h2 className='text-3xl text-center'>Bookmark Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark = {bookmark} />)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number.isRequired
}

export default Bookmarks;