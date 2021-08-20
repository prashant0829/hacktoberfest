import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const MyAccordian = ({data, sum}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <tr>
            <th>Capital</th>
            <th>Small</th>
            <th>Cost</th>
            <th>{sum && "sum"}</th>
          </tr>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {data.map((e, i) => {
            return (
              <tr>
                <td>{e[0]}</td>
                <td>{e[1]}</td>
                <td>{e[2]}</td>
                <td>{i === 0 && sum}</td>
              </tr>
            );
          })}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyAccordian;
