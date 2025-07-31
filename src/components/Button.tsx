type ButtonProps = {
  textoBtn: string;
  onClick: () => void;
};

function Button(props: ButtonProps) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.textoBtn}
    </button>
  );
}

export default Button;
