import React from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PausePresentationIcon from '@mui/icons-material/PausePresentation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function Contact() {
  return (
    <div className='cont'>
      <div className='cont1'>
        <div className='c1'>
          <h1><b><CallIcon/>Contact</b></h1>
          <p><b>2000</b></p>
        </div>
        <div className='c1'>
          <h1><b><FollowTheSignsIcon/>Followers</b></h1>
          <p><b>5000</b></p>
        </div>
        <div className='c1'>
          <h1><b><ThumbUpAltIcon/>Likes</b></h1>
          <p><b>1000</b></p>
        </div>
      </div>
      <br/>
      <br/>
     
<hr/>

     
      <div className='contant'>
        <div className='con'>
          <h2 className='name'><b></b><BadgeIcon/>Name</h2>
          <h2 className='mail'><b></b><MailOutlineIcon/>Mail</h2>
          <h2 className='address'><b></b><ImportContactsIcon/>Address</h2>
          <h2 className='status'><b></b><PausePresentationIcon/>Status</h2>

        </div>
        <hr/>
      </div>

      <div className='child'>
        <p>jack<br/> 9999999999</p>
        <p>abcd@gmail.com</p>
        <p>Manali</p>
        <p3>active</p3>
      </div>
      <div className='child'>
        <p>james<br/> 9999999999</p>
        <p>abcd@gmail.com</p>
        <p>Kerala</p>
        <p3>active</p3>
      </div>
      <div className='child'>
        <p>joy<br/> 9999999999</p>
        <p>abcd@gmail.com</p>
        <p>Andhra Pradesh</p>
        <p3>active</p3>
      </div>
      <div className='child'>
        <p>jelly<br/> 9999999999</p>
        <p>abcd@gmail.com</p>
        <p>Tamail nadu</p>
        <p3>active</p3>
      </div>
      <div className='child'>
        <p>jasmin<br/> 9999999999</p>
        <p>abcd@gmail.com</p>
        <p>Meghalaya</p>
        <p3>active</p3>
      </div>
      <div className='web'>
        <h6><WhatsAppIcon/>whatApp......</h6>
        <h6><InstagramIcon/>Instragram......</h6>
        <h6><TwitterIcon/>Twitter......</h6>
        <h6><FacebookIcon/>Facebook......</h6>
      </div>



    </div>
 
    
  );
}

export default Contact;
