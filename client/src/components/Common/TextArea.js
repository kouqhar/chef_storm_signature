import PropTypes from "prop-types";

const TextArea = ({ name, placeholder, value, onChange, required }) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
