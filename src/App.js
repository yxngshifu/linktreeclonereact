import React from "react"
import LinkButton from "./components/LinkButton" 

function App() {
  return (
    <div>
      <LinkButton
       name='Twitter Link'
       link='https://twitter.com/Yxng_shifu'/>
       <LinkButton
       name='Zuri Team'
       link='https://training.zuri.team/'
       />
       <LinkButton
       name='Zuri Books'
       link='https://books.zuri.team'
       />
       <LinkButton
       name='Python Books'
       link='https://books.zuri.team/python-for-begginners?ref_id=Yxng_Shifu'
       />
       <LinkButton
       name='Background check for coders'
       link='https://background.zuri.team'
       />
       <LinkButton
       name='Design Books'
       link='https://books.zuri.team/design-rules'
       />
       
    </div>
  );
}

export default App;
