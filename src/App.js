import { useEffect, useState } from "react";
import "./App.scss";
import WarningMessage from "./common/Warning/WarningMessage";
import Pages from "./pages/Pages";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_PROFILE } from "./store/actions/auth";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.authReducer.id);
  useEffect(() => {
    if (!id) {
      dispatch(AUTH_PROFILE());
    }
  }, []);

  return (
    <>
      {show && <WarningMessage clicked={() => setshow()} />}
      <Pages />
    </>
  );
}

export default App;
