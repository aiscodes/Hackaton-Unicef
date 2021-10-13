import React, { useState } from "react";
import BackgroundAnimation from "../../components/commonComponents/BackgroundAnimation";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "./Card";
import "./MyCardPage.css";

const card = {
  name: "",
  vaccinated: [
    {
      id: 1,
      vacInd: "",
      vacYear: "",
    },
    {},
  ],
};

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
  root1: {
    marginLeft: "15%",
    color: "white",
    fontSize: '15px',
    fontFamily: 'Lato',
    fontWeight:'500',
  },
  root2: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#00758e",
  },
}));

export default function MyCardPage() {
  const [login, setLogin] = useState(false);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <BackgroundAnimation>
        {login ? (
          <Card getBack={() => setLogin(!login)} />
        ) : (
          <div className="mycard_container">
            <div className="Sign_container">
              <div className={classes.root}>
                <AppBar className={classes.root2} position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab
                      className={classes.root1}
                      label="Войти"
                      {...a11yProps(0)}
                    />
                    <Tab
                      className={classes.root1}
                      label="Зарегистрироваться"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </AppBar>

                <TabPanel value={value} index={0}>
                  <div className="login_container">
                    <div className="login_first">
                      <h5>Логин</h5>
                      <input  className='login_input' type="text" placeholder="     Введите логин" />
                    </div>
                    <div className="login_first">
                      <h5>Пароль</h5>
                      <input className='login_input' 
                        type="password"
                        placeholder="     Введите пароль"
                      />
                    </div>
                    <button
                     className="btn-hover color-1"
                      onClick={() => setLogin(!login)}
                    >
                      Войти
                    </button>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="login_container">
                    <div className="login_first">
                      <h5>Логин</h5>
                      <input className='login_input'  type="text" placeholder="     Введите логин" />
                    </div>
                    <div className="login_first">
                      <h5>Пароль</h5>
                      <input className='login_input' 
                        type="password"
                        placeholder="     Введите пароль"
                      />
                    </div>
                    <div className="login_first">
                      <h5>Какой тип вакцины получали?</h5>
                      <input className='login_input'  type="text" placeholder="     Введите пароль" />
                    </div>
                    <div className="login_first">
                      <h5>Дата получения</h5>
                      <input className='login_input'  type="text" placeholder="     Введите пароль" />
                    </div>
                    <div className="login_first">
                      <h5>Индекс вакцины</h5>
                      <input className='login_input'  type="text" placeholder="     Введите пароль" />
                    </div>
                    <button
                      onClick={() => setLogin(!login)}
                      className="btn-hover color-1"
                    >
                      Зарегистрироваться
                    </button>
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        )}
      </BackgroundAnimation>
    </div>
  );
}
