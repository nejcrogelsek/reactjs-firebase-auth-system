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
        <div className='buttonContent'>
          <i className={`${iconType} ${iconName}`}></i>
          <span>{name}</span>
        </div>
      </button>
    </li>
  );
};

export default SocialButton;
