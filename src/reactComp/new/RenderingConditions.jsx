function Inputt(props) {
  return (
    <form className="form">
      <input type={props.type} placeholder={props.typeHolder} />
      <button type="submit">{props.message}</button>
    </form>
  );
}

var isRegistered = false;
export default function Login() {
  return (
    <div className="formContainer">
      <Inputt type="text" typeHolder="Username" />
      <Inputt type="text" typeHolder="password" />
    </div>
  );
}
