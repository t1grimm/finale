import React, { useState } from 'react';
import {Document, Page} from "react-pdf";
import {Button} from "@mui/material";


function Cv(props) {
    return (
      <div>
          <Button
              href="TitoRodda.pdf"
              color="red"
              target="_blank"
          >Sch</Button>
      </div>
  );
}

export default Cv