import React from "react";

import SearchBar from "./SearchBar";

import { dataSet } from "./constants";


const App = () => {

  return (<>
          <SearchBar data={dataSet} />
        </>)
}

export default App;
