// Components
import Aux from "../../../../hoc/Aux/Aux";

const footerItems = ({ abbrTitle, abbr, text, href }) => {
  let footer = null;

  if (href === undefined)
    footer = (
      <p>
        {text} <abbr title={abbrTitle}>{abbr}</abbr>.
      </p>
    );
  else
    footer = (
      <p>
        {text}{" "}
        <a href={href} target="_blank" rel="noreferrer noopener">
          <abbr title={abbrTitle}>{abbr}</abbr>
        </a>
      </p>
    );

  return <Aux>{footer}</Aux>;
};

export default footerItems;
