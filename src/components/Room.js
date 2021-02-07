import {useState} from 'react';
import Hand from './Hand';
import Table from './Table';
import Tricks from './Tricks';
import sock from '../services/socket';
import PlayerBox from './PlayerBox';
import RoundResults from './RoundResults';
import GameOver from './GameOver';



const Room = (props) => {
  console.log('ROOM PROPS',props);

  const [message,setMessage] = useState('');
  const [pm,setPm] = useState(null);

  const exitRoom = async () => {
    let payload = {
      'type' : 'exit_room',
      'client_id' : props.userId,
      'name' : props.roomName
    }
    await sock.send(JSON.stringify(payload));
  }

  const startGame = async () => {
    let payload = {
      'type' : 'start_game',
      'name' : props.roomName
    }
    await sock.send(JSON.stringify(payload));
  }

  // const handleEditMessage = async (e) => {
  //   console.log('text ', e.target.value);
  //   setMessage(e.target.value);
  // }
  //
  // const sendRoomMessage = async () => {
  //   let payload = {
  //     'type' : 'message_room',
  //     'client_id' : props.userId,
  //     'name' : props.roomName,
  //     'message' : message
  //   }
  //   await sock.send(JSON.stringify(payload));
  // }
  //
  //
  // const sendMessage = async (e) => {
  //   //Check for the '@' symbol with a username
  //   let sendingPm = message.search(/@([^].)\w+/i);
  //   if (sendingPm == 0) {
  //     console.log('Sending private message')
  //     //Get the user and check exists
  //     let person = message.split(':')[0].split('@')[1]
  //     let personMember = props.otherMembers.filter((m) => (m.name === person));
  //     if(personMember.length > 0) {
  //       console.log('Person Exists',personMember);
  //       let payload = {
  //         'type' : 'room_pm',
  //         'client_id' : personMember[0].id,
  //         'message' : message,
  //         'sender' : props.name
  //       }
  //       console.log('SENDING', payload);
  //       await sock.send(JSON.stringify(payload));
  //       //Clear message
  //       setMessage('');
  //     } else {
  //       console.log('Person does not exist');
  //       sendRoomMessage();
  //       setMessage('');
  //     }
  //   } else {
  //     console.log('Sending room message');
  //     sendRoomMessage();
  //     setMessage('');
  //   }
  //
  //
  // }
  //
  // const pmMember = async (member) => {
  //   console.log('send a private message',member);
  //   setMessage(`@${member.name}: `);
  //   setPm(member);
  // }

  return (
    <>
      <div className="gameMain">
        { props.otherMembers.length > 0
          ?
            <>
              {
                !props.gameInProgress
                ?
                  <>
                    <p>You are in {props.roomName}</p>
                    <PlayerBox
                      otherMembers={props.otherMembers}
                      startPlayer={props.startPlayer}
                    />
                    <div>
                      <button id="startgame-btn" onClick={startGame}>Start Game</button>
                    </div>
                  </>
                :
                  <>
                    { props.winner && !props.tieBreaker
                      ?
                        <>
                          <GameOver
                            userId = {props.userId}
                            winner = {props.winner}
                          />
                        </>
                      :
                        <>
                        <div className="flex-container">
                          <div className="statsPanel">
                            <PlayerBox
                              otherMembers={props.otherMembers}
                              startPlayer={props.startPlayer}
                            />
                            <Tricks
                              userId = {props.userId}
                              completedTricks={props.completedTricks}
                              roundNumber={props.roundNumber}
                            />
                            <RoundResults
                              roundResults = {props.roundResults}
                            />
                          </div>
                          <div className="playArea">
                            <Table
                              userId={props.userId}
                              roomId={props.roomName}
                              trump={props.trump}
                              trick={props.trick}
                              tieBreaker={props.tieBreaker}
                              ties={props.ties}
                              tieBreakId={props.tieBreakId}
                              tieBreakerDeck={props.tieBreakerDeck}
                              tieBreakWinner={props.tieBreakWinner}
                              tieStartPlayer={props.tieStartPlayer}
                            />
                            {
                              props.userId === props.startPlayer ?
                              <p id="firstgo">Your turn, pick a card!</p> :
                              <p></p>
                            }
                            {
                              !props.tieBreaker
                              ?
                                <Hand
                                  hand = {props.hand}
                                  userId = {props.userId}
                                  roomId = {props.roomName}
                                  startRound={props.startRound}
                                  startPlayer={props.startPlayer}
                                  trick={props.trick}
                                />
                              : null
                            }
                          </div>
                        </div>
                      </>
                    }
                  </>
              }
            </>
          :
            <>
              <div>
                <p>Waiting for others to join</p>
              </div>
            </>
        }
      </div>

      <div>
        <button id="exit" onClick={exitRoom}>Exit</button>
      </div>
    </>
  );
}

export default Room;

//REMOVE for now
//<div className="editable-div" contentEditable="true" onChange={handleEditMessage}></div>
