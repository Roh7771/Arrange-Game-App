import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { moveCell } from '../redux/actions/actions';
import Greating from './Greating';

const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  height: 60vw;
`;

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #bbb7b7;
  color: #bbb7b7;
  cursor: pointer;
  font-size: 35px;
  font-weight: bold;
`;

function ArrangeGame({
  field,
  cellsToClick,
  onClick,
  dimention,
  isStarted,
  isFinished,
}) {
  const cellsWidth = {
    three: '33%',
    four: '25%',
    five: '20%',
  };
  return (
    <>
      {!isStarted ? <Greating /> : null}
      {!isFinished && isStarted ? (
        <Field>
          {field.map((el, index) => (
            <Cell
              style={{ width: `${cellsWidth[dimention]}` }}
              onClick={
                cellsToClick.includes(index) ? () => onClick(index) : null
              }
            >
              {el}
            </Cell>
          ))}
        </Field>
      ) : null}
    </>
  );
}

// ExampleComponent.propTypes = {
//   property1: PropTypes.arrayOf(PropTypes.object).isRequired,
//   property2: PropTypes.number.isRequired,
//   property3: PropTypes.func.isRequired,
// }

function mapStateToProps(state) {
  return {
    field: state.appState.field,
    cellsToClick: state.appState.cellsToClick,
    dimention: state.appState.inputValue,
    isStarted: state.appState.isStarted,
    isFinished: state.appState.isFinished,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: index => dispatch(moveCell(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArrangeGame);
