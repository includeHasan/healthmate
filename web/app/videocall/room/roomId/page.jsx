'use client'

import { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { generateToken04 } from '../../zegoServerAssistant';

const Room = ({params}) => {

  const roomId = "122"; // You can set this dynamically, e.g., from session or DB
  const userId = JSON.parse(localStorage.getItem('doctor')).id; // Dynamically fetched from DB or backend
  const appId = 938543039;
  const serverSecret = "66528b62db26bc4151ab8571f29e479c";
  const userName = "Jayesh"; // Name from patient/doctor table or input field

  const meetingRef = useRef(null); // Using useRef to reference the div

  useEffect(() => {
    const setupMeeting = async () => {
      const token = generateToken04(appId, userId, serverSecret, 36000, "");

      // Generate kit token
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(appId, token, roomId, userId, userName);
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // Join the video call room
      zp.joinRoom({
        container: meetingRef.current, // Set the meeting container to the div
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference
        }
      });
    };

    setupMeeting(); // Call the setup function inside useEffect
  }, [appId, userId, roomId, userName, serverSecret]); // Dependencies to ensure re-execution if any changes

  return (
    <div ref={meetingRef} style={{ height: "100vh", width: '100vw' }}>
      {/* Zego UIKit Video Call will be rendered in this div */}
    </div>
  );
}

export default Room;
