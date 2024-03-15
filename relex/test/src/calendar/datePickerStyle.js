import styled from "styled-components";
import {DARK_PRIMARY_COLOR} from "../styles/colors";

export const Div = styled.div`
    width: 777px;
    height: 359px;
    border-radius: 52px;
    background:#add8e661;
    margin: auto;
    padding-top: 32px;
    box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
`;
export const SevenColomnGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    margin-top: 36px;
    overflow: hidden;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const OtherMonth = styled.button`
    color: rgb(36 94 140 / 44%);
    text-align: center;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    &:hover {
        color: #61caba40;
    }
    cursor: pointer;
`;

export const CurrentMonth = styled.button`
    color:    ${DARK_PRIMARY_COLOR}    ;
    text-align: center;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    margin-right: 15px;
    cursor: pointer;
`;
export const Year = styled.button`
    text-align: center;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;

    cursor: pointer;
`;

export const DayOfWeek = styled.p`
    color: #444079;
    font-family: Roboto;
    font-size: 25px;
    font-weight: 600;
    color: ${(props) => (props.sel ? '#58a191' : '')};
`;

export const Button = styled.button`
    cursor: pointer;
    font-size: 25px;
    font-style: normal;
    font-weight:${(props) => (props.dayscurrent ? '500' : '300')} ;
    width: 99%;
    color: ${(props) => (props.dayscurrent ? 'none' : 'rgb(36 94 140 / 44%)')};
    color: ${(props) => (props.sel ? '#000' : 'none')};
    background-color: ${(props) => (props.sel ? '#61caba40' : 'none')};
    color: ${(props) => (props.day ? '#f1afc9' : 'none')};

    &:hover {
        color: rgb(176, 149, 227);
    }
`;

export const CountCont = styled.button`
    width: 913px;
    height: 184px;
    //background-color: #51347c;
    border-radius: 57px;
    z-index: -1;
    position: relative;
    margin-top: -129px;
    display: grid;
    align-items: end;
    justify-items: center;
`;
export const CountText = styled.p`
    font-family: Roboto;
    font-size: 30px;
    //font-weight: 600;
    color: #2b2e50;
    padding: 15px;

    &:hover {
        color:   ${DARK_PRIMARY_COLOR}    ;
    }
`;

export const PeriodText = styled.p`
    font-family: Roboto;
    font-size: 32px;
    font-weight: 400;
    padding: 48px;
    &:hover {
        color:   ${DARK_PRIMARY_COLOR}    ;
    }
`;

export const DateText = styled.span`
    font-family: Roboto;
    font-size: 32px;
    font-weight: 400;
    color:   ${DARK_PRIMARY_COLOR}    ;
`;

export const CalendarContainer = styled.div``;

export const Period = styled.p`
font-size: 0.5em;
`;
