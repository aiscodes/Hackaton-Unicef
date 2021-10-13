import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  roots:{
marginLeft:'35%',
  },
}));

export default function Card({ getBack }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='card_line3'>
      <div className={classes.root}>
        <AppBar position="static" className='card_line'>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Моя карта" {...a11yProps(0)} className={classes.roots}/>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className='card_line2'>
          <div className='card_line1'>
              <p>Смирнова Алина</p>
              <p>12.07.1987 года рождения</p>
              <p>Вид вакцины: Sinopharm </p>
              <p>Дата получения: 10.02.2021 год</p>
              <p>Место получения: медицинский центр 'Human'</p>
              <p>Идентификационный номер: NA0078156NA</p>
          </div>
          <button onClick={getBack} className="btn-hover color-1">Вернуться обратно</button>
        </TabPanel>
        
      </div>

      
    </div>
  );
}
