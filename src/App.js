import React from "react"
import LinkButton from "./components/LinkButton" 
import TextBanner from "./components/TextBanner"
import ProfilePic from "./components/ProfilePic"
import picture from "./IMG_0209.jpg"
import Footer from "./components/Footer"
//Slack username: Yxng Shifu id=slack //


function App() {
  return (
    <div style={{'textAlign':'center'}}>
      <ProfilePic
      picture={picture} id='profile__img'
      />
      <TextBanner
      title='Yxng_Shifu'
      id='twitter'
      text='Web developer | cinematographer'
      />
      <LinkButton
       name='Twitter Link'
       link='https://twitter.com/Yxng_shifu'/>
       <LinkButton
       name='Zuri Team'
       id='btn__zuri'
       link='https://training.zuri.team/'
       />
       <LinkButton
       title='Zuri Books (Find Good books for Design and coding)'
       id='books'
       name='Zuri Books'
       link='https://books.zuri.team'
       />
       <LinkButton
       title='Purchase this book to start your journey in learning Python'
       id='book_python'
       name='Python Books'
       link='https://books.zuri.team/python-for-begginners?ref_id=Yxng_Shifu'
       />
       <LinkButton
       title='let us help you make sure your coder is good for the task'
       id='pitch'
       name='Background check for coders'
       link='https://background.zuri.team'
       />
       <LinkButton
       title='Your first step in design is on us, get this book for free'
       id='book__design'
       name='Design Books'
       link='https://books.zuri.team/design-rules'
       />
       <Footer
       text='HNG Internship 9 Frontend Design Task'
       
       />
      
    </div>
    
    
    
    
  );
}

export default App;
