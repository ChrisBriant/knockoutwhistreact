import {useState} from 'react';
//import { animateScroll } from "react-scroll";
import Hand from './Hand';
import Table from './Table';
import sock from '../services/socket';



const Room = (props) => {
  console.log(props);

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
      <p>You are in {props.roomName}</p>
      <div>
        { props.otherMembers.length > 0
          ?
            <>
              <div>
                <p>Players:</p>
                {
                  props.otherMembers.map((member,i) => (
                    <p key={i}>{member.id === props.startPlayer ? '>' : null} {member.name}</p>
                  ))
                }
              </div>
              {
                props.hand.length === 0
                ?
                  <div>
                    <button onClick={startGame}>Start Game</button>
                  </div>
                :
                  <>
                    <Table
                      trump={props.trump}
                      trick={props.trick}
                    />
                    {
                      props.userId === props.startPlayer ?
                      <p>You go first, play a card!</p> :
                      <p></p>
                    }
                    <Hand
                      hand = {props.hand}
                      userId = {props.userId}
                      roomId = {props.roomName}
                    />
                  </>
              }
            </>
          :
            <div>
              <p>Waiting for others to join</p>
            </div>
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
