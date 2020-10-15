import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {
  ErrorPageWrapper,
} from "../elements"
const Error = () => {
  return (
    
    <ErrorPageWrapper>
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Oj, Något gick fel</h1>
          <Link to="/" className="btn">
            Tillbaka Hem
          </Link>
        </div>
      </main>
    </Layout>
    </ErrorPageWrapper>
  )
}

export default Error
