'use client'
// import { useEffect, useRef, useState } from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { generateToken04 } from '../../zegoServerAssistant';

// const Room = () => {
//   const [userId, setUserId] = useState(null);
//   const roomId = "122"; 
//   const appId = 938543039;
//   const serverSecret = "66528b62db26bc4151ab8571f29e479c";
//   const userName = ""; 

//   const meetingRef = useRef(null); 

//   useEffect(() => {
//     const storedDoctor = localStorage.getItem('doctor');
//     if (storedDoctor) {
//       const { id } = JSON.parse(storedDoctor);
//       setUserId(id);
//     }
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       const setupMeeting = async () => {
//         const token = generateToken04(appId, userId, serverSecret, 36000, "");
//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(appId, token, roomId, userId, userName);
//         const zp = ZegoUIKitPrebuilt.create(kitToken);
//         zp.joinRoom({
//           container: meetingRef.current,
//           scenario: {
//             mode: ZegoUIKitPrebuilt.VideoConference
//           }
//         });
//       };
//       setupMeeting(); 
//     }
//   }, [userId]); // Only runs when userId is set

//   return (
//     <div ref={meetingRef} style={{ height: "100vh", width: '100vw' }}></div>
//   );
// }

// export default Room;
import React from 'react'

const Room = () => {
  return (
    <div>Room</div>
  )
}

export default Room