const contactList = ({
  contactLink,
  listName,
  display,
  iconStyle,
  icon,
  iconAlt,
}) => (
  <li className={display}>
    <span className={iconStyle}>
      <img src={icon} alt={iconAlt} />
    </span>
    <a href={contactLink} target="_blank" rel="noopener noreferrer">
      {listName}
    </a>
  </li>
);

export default contactList;
