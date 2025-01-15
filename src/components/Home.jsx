import React from "react";
import Pirilla from "../Pages/Pirilla/Pirilla";
import Ishila from "../Pages/Ishila/Ishila";
import AsosiSaxifa from "../Pages/AsosiSaxifa/AsosiSaxifa";
import Ustun from "../Pages/Ustun/Ustun";
import QiganIshla from "../Pages/QiganIshla/QiganIshla";
import Bisetka from "../Pages/Bisetka/Bisetka";
import Skameyka from "../Pages/Skameyka/Skameyka";
import Category from "../Pages/Category/Category";
import Rishotka from "../Pages/Rishotka/Rishotka";

const Home = () => {
  return (
    <div>
      <AsosiSaxifa />
      <Pirilla />
      <Ustun />
      <Ishila />
      {/* <QiganIshla /> */}
      <Bisetka />
      <Category />
      <Rishotka />
      <Skameyka />
    </div>
  );
};

export default Home;
