'use client'

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useEffect } from 'react';
import { generateToken04 } from '../../zegoServerAssistant';

const Room = ({params}) => {

    const roomId = params.roomId; // will set in session, roomid will be the appointment_sechedule_id from the db 

    const userId = "jadd";   // userid from the db will be the userid coming from the backend
    const appId = 938543039;
    const serverSecret = "66528b62db26bc4151ab8571f29e479c";
    const userName = "Jayesh"; // it will be the patient or doctor name from the patient and doctor table or can be empty to user to input form the text field to join the call 
    // function to genrate the temperory token from our server and then verify from the zegocloud server 
    const Meeting = async (element) => {
      // const appId // genrated from zegocloud
      // const serverSecret // genrated from zegocloud
      // const token = await fetch('/api/generatetoken', {
      //   method: "post",
      //   body: {
      //     userId:userId
      //   }
      // });
      const token = generateToken04(appId,userId,serverSecret,36000,"")
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(appId,token, roomId , userId,userName);
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // to join the call / room 
      zp.joinRoom({
        container:element,
        scenario:{
          mode:ZegoUIKitPrebuilt.VideoConference
        }
      })

    }
  return (
    <div ref={Meeting} style={{height:"100vh" , width: '100vw'}}>
        
    </div>
  );
}

export default Room;