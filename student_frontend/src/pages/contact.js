import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  ContactWrapper,
} from "../elements" 
const contact = () => {
  return (
    <ContactWrapper>
    <Layout>
      <SEO title="Kontakt" description="Kontaktsidan" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>kontakta mig</h3>
          <form action="https://formspree.io/your_formspree_code" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="namn"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="epost"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="meddelande"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Kontakta mig
            </button>
          </form>
        </article>
      </section>
    </Layout>
    </ContactWrapper>
  )
}

export default contact
