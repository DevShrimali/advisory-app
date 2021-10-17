import PropTypes from 'prop-types';
export const Btn = ({color, text, onClick}) => {
  return (
    <div>
      <button className="btn" style = {{ backgroundColor:color}} onClick = {onClick}>{text}</button>
    </div>
  )
}

Btn.propTypes = {
  color:PropTypes.string,
  text:PropTypes.string,
  onClick:PropTypes.func,
}
