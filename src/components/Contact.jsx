import React from 'react'
import Header from './Header'

const Contact = () => {
  return (
    <div>
      <div class="app">
      <Header/>
    </div>
    <div class="contact">
      <div class="contact-heading">
        <h1 class="heading1">About Me</h1>
        <h1 class="heading2">
          Hi i am <b Style={"color: rgb(0, 255, 251)"}>Ansh</b> a btech student
          and moon lover. <br />
          I created this page so that people could know how lovable the moon can
          be. <br />
          So to promote self love and moon love, i created this website. <br />
          If you have any questions, you can contact me anytime!
        </h1>
      </div>
      <footer>
      <div class="links">
        <ul>
          <li><a href="https://instagram.com/anshhkaushal">Instagram</a></li>
          <li><a href="https://github.com/AnshKaushal">Github</a></li>
          <li><a href="https://snapchat.com/add/anshhkaushal">Snapchat</a></li>
        </ul>
      </div>
      <p class="copyright">Copyright AnshKaushal 2022</p>
    </footer>
    </div>
    </div>
  )
}

export default Contact