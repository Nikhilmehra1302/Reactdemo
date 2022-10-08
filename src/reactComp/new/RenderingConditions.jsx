function Inputt(props) {
  return (
    <form className="form">
      <input type={props.type} placeholder={props.typeHolder} />
    </form>
  );
}

export default function Login() {
  return (
    <div className="formContainer">
      <Inputt type="text" typeHolder="Username" />
      <Inputt type="text" typeHolder="password" />
      <button type="submit">Register</button>
    </div>
  );
}
