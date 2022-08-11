// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import '@finastra/app-bar';
import '@finastra/button';
import '@finastra/user-profile';
import '@finastra/dialog';
import '@material/mwc-icon-button';
import '@finastra/sidenav';
import '@finastra/logo';
import '@material/mwc-list';
import '@finastra/logo';
import '@finastra/checkbox';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useState, useCallback } from 'react';
import Sheet from '../transaction-component/transaction-widget';
import QuickTransfer from '../quicktransfer-component/quick-transfer-widget';
import MyAdvisor from '../myadvisor-component/myadvisor-widget';
import Account from '../account-component/account-component';
import Chart from '../chart-component/chart-component';
import Carousel from '../carousel-component/carousel-component';
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export function App() {

  const serverUri = '';
  const serviceId1 = 'CONSUMER_PROFILE';
  const serviceId2 = 'ACCOUNT_INFORMATION_US';
  
  const target1 = `/profile`;
  const target2 = `/accounts/extended`;
  

  let [firstName, setFirstName] = useState("");
  let [email, setEmail] = useState("");
  let [fullName, setFullName] = useState("");
  let [accounts, setAccounts] = useState([]);
  
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 700,
        md: 1011,
        lg: 1350,
        xl: 1950,
        xll: 2000,
      },
    },
  });
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  const xll = useMediaQuery(theme.breakpoints.up('xll'));

  const getProfile = useCallback(async () => {
    try {
      const response = await fetch(`${serverUri}/proxy?serviceId=${serviceId1}&target=${target1}`);
      const data = await response.json();
      setFirstName(data.firstName);
      setFullName(data.firstName +" " + data.lastName);
      setEmail(data.emails[0].address);
    }
    catch (e) {
      console.log(e)
    }
})

const getAccounts = useCallback(async () => {
  try {
    const response = await fetch(`${serverUri}/proxy?serviceId=${serviceId2}&target=${target2}`);
    const data = await response.json();
    setAccounts(data);
  }
  catch (e) {
    console.log(e)
  }
})

  useEffect(() => {
    getProfile();
    getAccounts();
  }, [])

  return (
    <div className="App">
      <fds-sidenav type="modal">
      <div slot="sidenavContent">
        <div className="fds-sidenav-header">
          <fds-logo></fds-logo>
        </div>
        <div className="fds-sidenav-list">
          <mwc-list activatable="">
            <mwc-list-item selected="" activated="" graphic="icon">
              <span>Home</span>
              <mwc-icon slot="graphic">home</mwc-icon>
            </mwc-list-item>
            <mwc-list-item graphic="icon">
              <span>Applications</span>
              <mwc-icon slot="graphic">dashboard</mwc-icon>
            </mwc-list-item>
            <mwc-list-item graphic="icon">
              <span>Tools</span>
              <mwc-icon slot="graphic">extension</mwc-icon>
            </mwc-list-item>
            <mwc-list-item graphic="icon">
              <span>Settings</span>
              <mwc-icon slot="graphic">settings</mwc-icon>
            </mwc-list-item>
          </mwc-list>
        </div>
      </div>
      <div slot="appContent">
        <fds-app-bar logoredirecturi="">
          <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
          <mwc-icon-button icon="search" slot="actions"></mwc-icon-button>
          <mwc-icon-button icon="notifications_none" slot="actions"></mwc-icon-button>
          <mwc-icon-button icon="help_outline" slot="actions"></mwc-icon-button>
          <fds-user-profile slot="actions" username={fullName}>
          <div slot="userInfo">{email}</div>
          <div slot="actions">
            <fds-button fullwidth="" label="Logout" icon="logout"></fds-button>
            <fds-button text="" fullwidth="" label="View profile"></fds-button>
          </div>
          </fds-user-profile>
          <mwc-icon-button icon="more_vert" slot="actions"></mwc-icon-button>
        </fds-app-bar>
        <div className="header">
          <div className="header-title">
            <div className="header-icon">
              <img width={64} height={64} src={require("../assets/Header-Icon.png")}/>
            </div>
            <div className="app-title">
              <span>Retail app</span>
              <div className="welcome-msg">
                <span> Welcome Back, {firstName}</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <Carousel show={ !sm ? 1 : !md ? 2 : !lg ? 3 : !xl ? 4 : !xll ? 4 : 5}>
              {/*accounts.map(account => {
                return(
                <div className="card">
                  <Account title={account.nickname} balance={account.balances[0].amount} id={account.accountNumber}/>
                </div>)
              })*/}    
              <div className="card">
                <Account title={"account.nickname"} balance={"1"} id={"account.accountNumber"}/>
              </div>  
              <div className="card">
                <Account title={"account.nickname"} balance={"2"} id={"account.accountNumber"}/>
              </div>
              <div className="card">
                <Account title={"account.nickname"} balance={"3"} id={"account.accountNumber"}/>
              </div>
              <div className="card">
                <Account title={"account.nickname"} balance={"4"} id={"account.accountNumber"}/>
              </div>
              <div className="card">
                <Account title={"account.nickname"} balance={"5"} id={"account.accountNumber"}/>
              </div>
              <div className="card">
                <Account title={"account.nickname"} balance={"6"} id={"account.accountNumber"}/>
              </div>
              <div className="card">
                <Account title={"account.nickname"} balance={"7"} id={"account.accountNumber"}/>
              </div>
              <div className="card">
                <Account title={"account.nickname"} balance={"8"} id={"account.accountNumber"}/>
              </div>
              <div className="card">
                <Account title={"account.nickname"} balance={"9"} id={"account.accountNumber"}/>
              </div>    
            </Carousel>
          </div>
        </div>
        <div className="content">
          <div className="main-content">
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                  <Sheet/>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="side-content">
                  <QuickTransfer/>
                </div> 
                <div className="side-content">
                  <Chart/>
                </div> 
                <div className="side-content">
                  <MyAdvisor/>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      </fds-sidenav>
    </div>
  );
}

export default App;
