import React from "react"
import LinkButton from "./components/LinkButton" 
import TextBanner from "./components/TextBanner"
import ProfilePic from "./components/ProfilePic";
function App() {
  return (
    <div>
      <TextBanner
      title='Yxng Shifu'
      text='Web developer | cinematographer'
      />
      <LinkButton
       name='Twitter Link'
       link='https://twitter.com/Yxng_shifu'/>
       <LinkButton
       name='Zuri Team'
       link='https://training.zuri.team/'
       />
       <LinkButton
       title='Zuri Books (Find Good books for Design and coding)'
       name='Zuri Books'
       link='https://books.zuri.team'
       />
       <LinkButton
       title='Purchase this book to start your journey in learning Python'
       name='Python Books'
       link='https://books.zuri.team/python-for-begginners?ref_id=Yxng_Shifu'
       />
       <LinkButton
       title='let us help you make sure your coder is good for the task'
       name='Background check for coders'
       link='https://background.zuri.team'
       />
       <LinkButton
       title='Your first step in design is on us, get this book for free'
       name='Design Books'
       link='https://books.zuri.team/design-rules'
       />
       
    </div>
  );
}

export default App;
