import Balance from "../../components/Balance";
import History from "../../components/History";
import Operation from "../../components/Operation";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Balance />
      <History />
      <Operation />
    </div>
  );
}

export default Home;
