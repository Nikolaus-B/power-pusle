import { forwardRef, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useAuth } from 'components/hooks/AuthHook';
//----------------------------------------
import {
  CalendarGlobalStyles,
  TitleWrapper,
} from './styles/StyledDatepicker.styled';
import { Button } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
// import Cal from '../../img/cal.svg';

const StyledDatepicker = () => {
  const { user } = useAuth();
  const calRef = useRef();
  const [selectedDate, setSelectedDate] = useState(user.birthday);

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper
        as={Button}
        justifyContent="space-between"
        type="button"
        onClick={onClick}
        ref={ref}
        rightIcon={<CalendarIcon />}
        h={{ base: '46px', md: '52px', xl: '52px' }}
        variant="outline"
      >
        {format(selectedDate, 'dd.MM.yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        ref={calRef}
        showIcon={false}
        dateFormat={'dd.MM.yyyy'}
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        calendarStartDay={1}
        formatWeekDay={day => day.substring(0, 2)}
        placeholderText="Weeks start on Monday"
        customInput={<CustomInput />}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
