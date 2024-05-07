import { createGlobalStyle, styled } from 'styled-components';

export const TitleWrapper = styled.button`
  width: 100%;
  height: 52px;

  color: #efede8;
  background: transparent;
  border-radius: 12px;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.3);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  text-transform: uppercase;
  padding: 14p;
  &:hover,
  &:focus {
    border-color: '#e6533c';
  }

  /* justify-content: space-between;
  align-items: center; */
`;

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50px, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 215px;
    height: auto;
    padding: 14px;
    background-color: #ef8964;
    font-family: inherit;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
    gap: 11px;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    margin-bottom: 14px;
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: center;
    color: #efede8;
  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: rgba(239,237,232,0.5);
  }
  .react-datepicker__navigation {
    margin-top: 16px;
    color: white;
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
  }

  .react-datepicker__navigation-icon {
    position: relative;
    top: -1px;
    font-size: 20px;
    width: 0;
  }

  .react-datepicker__aria-live {
    display: none;
  }

  .react-datepicker__navigation-icon:before {
    content: "";
    display: block;
    position: absolute;
    top: 6px;
    width: 6px;
    height: 6px;
    border-color: #efede8;
    border-style: solid;
    border-width: 1px 1px 0 0;
    transform: rotate(225deg);
  }

  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }

   .react-datepicker__navigation-icon--next:before {
    left: -7px;
    transform: rotate(45deg);
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: rgba(239, 237, 232, 0.5);
    opacity: 50%;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #efede8;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;
    flex-shrink: 0;
    margin: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: #efede8;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
    cursor: pointer;

  }
  .react-datepicker__month {
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 11px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #040404;
    color: #efede8;
  }
  .react-datepicker__day--selected:hover {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .react-datepicker__day:hover {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #040404;
    color: #efede8;
  }
  .react-datepicker__day--keyboard-selected {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #040404;
    color: #efede8;

  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;
