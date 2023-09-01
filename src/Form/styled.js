import styled from "styled-components";

export const FormContainer = styled.div`
    margin: 20px auto;
    max-width: 1100px;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.celeste};
    border-radius: 5px;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 5px;
`;

export const Information = styled.p`
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    padding-top: 10px;
    font-size: 20px;  
    font-weight: 700;
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    border-radius: 5px;
    border-color: ${({ theme }) => theme.color.darkTan};
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.silver};
    font-size: 17px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 0%;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    border-color: ${({ theme }) => theme.color.blackRussian};
    font-family: "Lato", sans-serif;
    font-size: 17px;
    font-weight: 1000;

    &hover {
        background-color: ${({ theme }) => theme.color.dirtyWhite};
    }

    &active {
        background-color: ${({ theme }) => theme.color.whiteline};
    }


`;

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
`;

export const FieldSum = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    max-width: 400px;
    width: 100%;

    &required {
        border-color:${({ theme }) => theme.color.killarney};
    }

    &invalid{
        background-color: ${({ theme }) => theme.color.white};
    }


`;
export const FieldCurrency = styled.select`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    max-width: 400px;
    width: 100%;

    &required {
        border-color: ${({ theme }) => theme.color.killarney};
    }

    &invalid{
        background-color: ${({ theme }) => theme.color.white};
    }


`;




