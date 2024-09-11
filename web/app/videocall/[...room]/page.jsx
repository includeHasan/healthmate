'use client'

import React from 'react'
import { generateToken04 } from '../server-vcall/zegoServerAssistant';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = ({params}) => {
  
    const roomId = params.room[1]; // will set in session, roomid will be the appointment_sechedule_id from the db 

    const userId = '';   // userid from the db will be the userid coming from the backend

    const effectiveTimeInSeconds = 36000;
    
    const userName = ""; // it will be the patient or doctor name from the patient and doctor table or can be empty to user to input form the text field to join the call 
    // function to genrate the temperory token from our server and then verify from the zegocloud server 
    const Meeting = (element) => {
      const appId = 67942341; // genrated from zegocloud
      const serverSecret = "c22f223a94c74276d2dc4e56898a98ad"; // genrated from zegocloud
      const token = generateToken04(appId , userId , serverSecret ,effectiveTimeInSeconds , "");
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(appId,token,roomId , userId, userName);
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