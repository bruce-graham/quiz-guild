import { PropTypes } from 'prop-types'


export const CategoryOne = ({ setCurrentView }) => {
  
  return (
    <>
      <button onClick={() => setCurrentView('')}>Back</button>
      <div>Category One</div>
    </>
  )
}

CategoryOne.propTypes = {
  setCurrentView: PropTypes.func.isRequired
};