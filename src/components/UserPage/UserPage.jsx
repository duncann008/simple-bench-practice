import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const UserPage = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <>

      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
    </>
  );
};


// this allows us to use <App /> in index.js
export default UserPage;
