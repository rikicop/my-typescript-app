interface AppProps {
  headerText: string;
  extraTexto?: string;
}

const Header = ({ headerText, extraTexto = "default text" }: AppProps) => {
  return (
    <div>
      <div>{headerText}</div>
      {extraTexto && <p> Si existo: {extraTexto} </p>}
    </div>
  );
};

export default Header;
