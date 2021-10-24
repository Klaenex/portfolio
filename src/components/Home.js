import React from "react"
import Menu from "./Menu"
import Project from "./Project"
import Footer from "./Footer"
export default class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <section className='section section-main'>
          <p>
            <span className='text_big'>
              hi i’m student
              <br />
              front-end developer
            </span>
          </p>
          <span className='separator'></span>
        </section>
        <Project />
        <Footer />
      </>
    )
  }
}
