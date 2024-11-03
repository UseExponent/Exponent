import { format } from "date-fns";
import styled from 'styled-components';

const SNowDate = styled.section`
    font-size: ${({ theme }) => theme.md};
    font-weight: bold;
`;

function NowDate() {
    const dateFns = new Date();

    return (
        <SNowDate>{format(dateFns,'yyyy-MM-dd')}</SNowDate>
    )
}

export default NowDate;