import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import loanTypes from '../Comp/loanTypes.json';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'LotaRegular',
      textTransform: 'none',
      fontSize: 16,
    },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: {
          backgroundColor: '#0075FF',
          color: 'white', 
        },
      },
    },
  },
});

const valuetext = (value) => {
  return `${value.toLocaleString()}`;
}

const calculateLoan = (type, loanAmount, term, setPrincipalAmount, setMonthlyAmortization, setInterest) => {
  const interestRate = loanTypes[type]; 
  const monthlyInterestRate = interestRate / 12;
  const totalTerms = term;
  const loanAmountValue = loanAmount;

  const monthlyPayment = (loanAmountValue * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalTerms));
  const totalPayment = monthlyPayment * totalTerms;
  const totalInterest = totalPayment - loanAmountValue;

  setPrincipalAmount(loanAmountValue);
  setMonthlyAmortization(parseFloat(monthlyPayment.toFixed(2)));
  setInterest(totalInterest.toFixed(2));
};

export default function LoanCalculator() {
  const [type, setType] = useState('');
  const [loanAmount, setLoanAmount] = useState(10000);
  const [term, setTerm] = useState(6);
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [monthlyAmortization, setMonthlyAmortization] = useState(0);
  const [interest, setInterest] = useState(0);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  React.useEffect(() => {
    if (type !== '' && loanAmount !== 0 && term !== 0) {
      calculateLoan(type, loanAmount, term, setPrincipalAmount, setMonthlyAmortization, setInterest);
    }
  }, [type, loanAmount, term]);

  return (
    <div className='mx-10 xl:mx-40 xl:my-20 mb-40'>
      <div>
        <h1 className='font-headline text-dark-blue text-4xl xl:text-6xl my-8'>Loan Calculator</h1>
        <h3 className='text-sm text-steel mb-10 my-4'>The loan calculation provided through this tool is intended solely for estimation purposes. Actual loan terms, including but not limited to amortization schedules, interest rates, service charges, deductions, and other relevant factors, may vary based on individual circumstances and cooperative policies. This tool provides a general overview and should not be considered a guarantee of loan approval or terms. <span className='font-semib'>For precise and personalized loan information, we encourage you to visit your nearest GSAC branch.</span></h3>
      </div>
      <div className='flex flex-col 2xl:flex-row'>
        <div className='w-full md:w-1/2 0 md:p-0'>
          <ThemeProvider theme={theme}>
            <div className='my-6'>
              <Box sx={{ minWidth: 220 }}>
                <FormControl fullWidth >
                  <InputLabel id="loan-type-select-label">Loan Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Loan Type"
                    onChange={handleChange}
                  >
                    <MenuItem value="regular">Regular Loan</MenuItem>
                    <MenuItem value="express">Express Loan</MenuItem>
                    <MenuItem value="salary">ATM Salary Loan</MenuItem>
                    <MenuItem value="apds">APDS</MenuItem>
                    <MenuItem value="housing">Housing Loan</MenuItem>

                  </Select>
                </FormControl>
              </Box>
            </div>
            

            <p className='text-blue my-2'>Loan Amount</p>
            <Box
              sx={{
                minWidth: {
                  xs: 300,  
                  sm: 500,  
                  md: 670,  
                },
              }}
            >
              <Slider
                aria-label="Loan Amount"
                defaultValue={10000} 
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10000}
                marks
                min={10000}
                max={300000}
                onChange={(event, newValue) => setLoanAmount(newValue)}
                valueLabelFormat={valuetext} 
              />
            </Box>

            <p className='text-blue my-2 mt-10'>Term (Months)</p>
            <Box
              sx={{
                minWidth: {
                  xs: 300,  
                  sm: 500,
                  md: 670,
                },
              }}
            >
              <Slider
                aria-label="Term"
                defaultValue={6} 
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={6}
                max={60}
                onChange={(event, newValue) => setTerm(newValue)}
                valueLabelFormat={valuetext}
              />
            </Box>
          </ThemeProvider>
        </div>


    {/* ------------------RIGHT-------------------- */}
        <div className='flex flex-col 2xl:pl-20 md:p-0 pt-10 xl:pt-2 gap-4'>
          <h1 className='my-2 text-lg text-dark-blue'>Principal Amount: 
            <p className='text-3xl text-blue'>{principalAmount.toLocaleString()}</p>
          </h1>
          <h1 className='my-2 text-lg text-dark-blue'>Total Monthly Amortization:
            <p className='text-3xl text-blue'>{monthlyAmortization.toLocaleString()}</p>
          </h1>
          <h1 className='my-2 text-lg text-white select-none'>Interest:
            <p className='text-3xl text-white select-none'>{interest.toLocaleString()}</p>
          </h1>
        </div>

      </div>
      

    </div>
  );
}
