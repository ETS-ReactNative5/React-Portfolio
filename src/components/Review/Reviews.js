import PropTypes from 'prop-types'
import Review from './Review'



const Reviews = ({title, subtitle}) => {
  return (
    <section className="section-review">
        <div className="head-notes-review">
            <h3>{title} </h3>
            <h4>{subtitle}</h4>
            <div className="underline"></div>
        </div>
    
        <div>
            <Review />
        </div>
    </section>
  )
}

Reviews.defaultProps = {
    title: "We've work together",
    subtitle: "Reviews from co-workers"
}

Reviews.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Reviews