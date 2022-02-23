type Button = {
  classes?: string;
  children: React.ReactChild | React.ReactChildren[];
  startIconProp?: React.ReactChild;
  endIconProp?: React.ReactChild;
};

type ButtonIcon = {
  children: React.ReactChild;
};

const ButtonIcon = ({ children }: ButtonIcon) => {
  return <i>{children}</i>;
};

const Button = ({ children, startIconProp, endIconProp }: Button) => {
  const startIcon = startIconProp && <ButtonIcon>{startIconProp}</ButtonIcon>;

  const endIcon = endIconProp && <ButtonIcon>{endIconProp}</ButtonIcon>;

  return (
    <button>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
