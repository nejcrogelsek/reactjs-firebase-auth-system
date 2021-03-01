const SocialButton = ({
  name,
  provider,
  handleOnClick,
  iconType,
  iconName,
  buttonClass,
}) => {
  return (
    <li>
      <button
        className={`${buttonClass}`}
        onClick={() => handleOnClick(provider)}>
        <i className={`${iconType} ${iconName}`}></i>
        <span>{name}</span>
      </button>
    </li>
  );
};

export default SocialButton;
