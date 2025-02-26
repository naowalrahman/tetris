import styled from 'styled-components';

export const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, ${props => (props.ghost ? 0.2 : 1)});
    border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
    border-color: rgba(${props => props.color}, ${props => (props.ghost ? 0.1 : 1)})
        rgba(${props => props.color}, ${props => (props.ghost ? 0.1 : 0.3)})
        rgba(${props => props.color}, ${props => (props.ghost ? 0.1 : 0.1)})
        rgba(${props => props.color}, ${props => (props.ghost ? 0.1 : 0.3)});
    box-shadow: ${props =>
        props.type !== 0 && !props.ghost ? 'inset 0px 0px 8px rgba(0, 0, 0, 0.5)' : 'none'};
`;
