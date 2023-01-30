import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './../App.css';

import {useDispatch, useSelector} from 'react-redux'


const CalculatorApp = () => {

    // const dispatch = useDispatch()


    return (
    <React.Fragment>
        <section>
             <div className="app">
      
      <div className='container'>
        <div className='heading_text'>
          <h1 className='heading_one'>Savings Calculator</h1>
          {/* <p className='heading_two'>Calculate your simple interest Easily</p> */}
        </div>
        <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'></h3>
          {/* {savings} */}
          <p className='total_amount_para'>Total savings</p>
          </div>
        </div>
        <form>
            {/*  onSubmit={calcSum} */}
        <div className='input_area'>
            <div className='input_field'>
            <TextField type="number" id="outlined-basic" label="Enter amount" variant="outlined" />
            {/*  value={num || ""} onChange={(event) => setNum(event.target.value)} */}
            </div>
        </div>
        <div className='button_collection'>
          <Stack spacing={2} direction="row">       
          <Button className='btn_one' variant="contained">Withdraw</Button>
          {/* onClick={handleWithdraw} style={{backgroundColor: 'black'}}  */}
          <Button className='btn_one' variant="contained">Deposit</Button>
          {/* onClick={handleDeposit}  style={{backgroundColor: 'black'}} */}
          <Button className='btn_one' variant="outlined">Add Interest: 5%</Button>
          {/*  onClick={handleInterest}  */}
          <Button className='btn_one'  variant="outlined">Charges: 15%</Button>
          {/*  onClick={handleCharges}  */}
          </Stack>
        </div>
        </form>
      </div>      
    </div>
        </section>
    </React.Fragment>
    )
}

export default CalculatorApp