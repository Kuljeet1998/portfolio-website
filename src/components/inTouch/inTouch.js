import React, { FC } from 'react';
import { InlineWidget } from "react-calendly";
import './inTouch.css'

function InTouch () {
   const ColoredLine = ({ color, wid }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 2,
              width: wid
          }}
      />
  );

   return (
      <div>
         <h1>GET IN TOUCH</h1>
         <table>
            <tr>
               <td style={{maxWidth: '400px', paddingLeft: '20%'}}>
               <h1><span style={{color:'rgb(122, 122, 255)'}}>Have a project for me?</span><br></br> 
               <span style={{color:'rgb(168, 168, 238)'}}>Think I'd be a good fit for your team?</span><br></br>
               <span style={{color:'lavender'}}>I'd love to hear from you, give me a shout by
               <span style={{color:'rgb(168, 168, 238)'}}> email</span>, via <span style={{color:'rgb(168, 168, 238)'}}> LinkedIn</span> or 
               call me on my <span style={{color:'rgb(168, 168, 238)'}}> cellphone.</span></span></h1>
               </td>
               <td>
               <h1>Schedule a <span style={{color:'rgb(168, 168, 238)'}}> meeting</span> with me</h1>
               <div>
                  <InlineWidget
                  styles={{
                     height: '400px',
                     width: '400px',
                     paddingLeft: '1%'
                  }}
                  url="https://calendly.com/kbhengura?background_color=ffffff&text_color=0c0c0c" />
               </div>
               </td>
            </tr>
         </table>
         <br></br><ColoredLine color="purple" wid="80%"/>
         <h4>Copyright © 2024 Kuljeet Singh Bhengura. All rights reserved.</h4>
         Developed by Kuljeet with "❤️"<br></br><br></br><br></br><br></br>
      </div>
   )
}

export default InTouch;