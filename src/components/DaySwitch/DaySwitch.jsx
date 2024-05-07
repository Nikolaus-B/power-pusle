import React, { forwardRef, useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, format, isAfter, isBefore } from 'date-fns';

//------------------------------------------
import {
  Container,
  Wrapper,
  Wrap,
  Button,
  CalendarGlobalStyles,
  TitleWrapper,
} from './DaySwitch.styled';
import { Icon } from 'components/Icon/Icon';

//------------------------------------------
import { useDispatch } from 'react-redux';
import { useHook } from 'hooks/AuthHook';
import { clearData, setDate } from '../../redux/diary/diarySlice';
import { DaySwichIcons } from './DaySwichIcons';

export const DaySwitch = ({ media }) => {
  const dispatch = useDispatch();
  const { user } = useHook();
  const calRef = useRef();
  const [startDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(true);

  const formatDate = notFormatedDate => {
    return notFormatedDate
      .toISOString()
      .split('T', 1)[0]
      .split('-')
      .reverse()
      .join('-');
  };

  useEffect(() => {
    if (user.createdAt) {
      if (formatDate(new Date(user.createdAt)) === formatDate(new Date())) {
        setDisabledPrev(true);
      }
    }
  }, [user.createdAt, startDate]);

  const clearStore = () => dispatch(clearData());

  const goPrevDate = () => {
    const day = new Date(startDate);
    const prevDay = new Date(day.setDate(day.getDate() - 1));
    const prevRegistrationDate = new Date(
      new Date(user.createdAt).setDate(new Date(user.createdAt).getDate() - 1)
    );

    if (formatDate(new Date(user.createdAt)) === formatDate(prevDay)) {
      setDisabledPrev(true);
    }

    if (isBefore(prevRegistrationDate, prevDay)) {
      clearStore();
      setCurrentDate(prevDay);
      dispatch(setDate(formatDate(prevDay)));
      setDisabledNext(false);
    }
  };

  const goNextDate = () => {
    const day = new Date(startDate);
    const nextDay = new Date(day.setDate(day.getDate() + 1));

    if (formatDate(today) === formatDate(nextDay)) {
      setDisabledNext(true);
    }
    if (isAfter(today, nextDay)) {
      clearStore();
      setCurrentDate(nextDay);
      dispatch(setDate(formatDate(nextDay)));
      setDisabledPrev(false);
    }
  };

  const selectPickerDate = date => {
    clearStore();
    setCurrentDate(date);
    dispatch(setDate(formatDate(date)));
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <Wrapper>
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(startDate, 'dd/MM/yyyy')}
        </TitleWrapper>
        <Icon
          iconid="calendar"
          width={media ? 24 : 20}
          height={media ? 24 : 20}
        />
      </Wrapper>
    );
  });

  return (
    <Container>
      <DatePicker
        ref={calRef}
        dateFormat={'dd MM yyyy'}
        showIcon={false}
        selected={startDate}
        shouldCloseOnSelect={true}
        minDate={new Date(user.createdAt)}
        maxDate={addDays(new Date(), 0)}
        onChange={date => selectPickerDate(date)}
        customInput={<CustomInput />}
      />
      <Wrap>
        <Button disabled={disabledPrev} onClick={() => goPrevDate()}>
          <DaySwichIcons turn={'next'} disabled={disabledPrev} />
        </Button>
        <Button disabled={disabledNext} onClick={() => goNextDate()}>
          <DaySwichIcons turn={'back'} disabled={disabledNext} />
        </Button>
      </Wrap>
      <CalendarGlobalStyles />
    </Container>
  );
};
