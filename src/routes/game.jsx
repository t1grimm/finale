import React from 'react';
import '../index.css';
import Card from '@mui/material/Card';
import {
    Alert,
    Box,
    Button, ButtonGroup,
    CardActionArea,
    CardActions, Divider,
    Stack
} from '@mui/material';


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class GameMobius extends React.Component {

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const buttonStyle = {color: "#8868ad",
                         font: "Brush Script MT",
                         alignItems: "center"}

    const moves = history.map((step, move) => {
      const desc = move ?
          'Back to move ' + move :
          'RESTART GAME';
      return (
          <Box alignItems={"center"}
              sx={{display: 'flex',
                  '& > *': {m: 1,},
                  alignItems:"center",
              }}
          >
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
                key={move}
              >
                  <Button style={buttonStyle} onClick={() => this.jumpTo(move)}>{desc}</Button>
              </ButtonGroup>
          </Box>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
        <div class="container m-0 p-0">
            <Alert severity="error">Unfortunately my site is down - but you can still play some tic-tac-toe</Alert>
            <div className="container">
                <div className="d-flex justify-content-center p-md-5">
                    {status}
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                          <Board
                              squares={current.squares}
                              onClick={i => this.handleClick(i)}
                          />
                      </CardActionArea>
                    </Card>
                </div>
                <Stack divider={<Divider orientation="horizontal" flexItem />}>
                    {moves}
                </Stack>
            </div>
        </div>);
  }
}

class Game extends GameMobius {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
}
export default Game
// ========================================




function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
