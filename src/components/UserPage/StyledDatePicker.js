import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { format, getMonth, getYear } from 'date-fns';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

//----------------------------------------
import {
  CalendarGlobalStyles,
  TitleWrapper,
} from './styles/StyledDatepicker.styled';
import { Button } from '@chakra-ui/react';
import { Icon } from 'components/Icon/Icon';

// import { defaultProps } from 'react-select/dist/declarations/src/Select';

//-----------------------------------------
const StyledDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  // const getYearsRange = document.querySelectorAll('#years');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const CustomInput = forwardRef(({ onClick, innerRef }, ref) => {
    return (
      <TitleWrapper
        ref={innerRef}
        as={Button}
        onClick={onClick}
        justifyContent="space-between"
        w="100%"
        h={['46px', '52px', '52px']}
        fontSize={[14, 16, 16]}
        lineHeight={['129%', '150%', '150%']}
        variant="outline"
      >
        {format(new Date(0o0, 0o0, 0o0), 'MM/dd/yyyy')}
        <Icon iconid="calendar" width="18" height="18" />
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        showIcon={false}
        dateFormat={'MM.dd.yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substring(0, 2)}
        placeholderText="Weeks start on Monday"
        startDate={startDate}
        endDate={getYear(new Date()) + 1}
        selectsRange={true}
        onChange={setStartDate}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>
            {/* <select
              id="years"
              value={getYearsRange[getYear(date)]}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              console.log(getYearsRange)
              {getYearsRange.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select> */}

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )}
        customInput={<CustomInput />}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
