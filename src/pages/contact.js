import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.scss";

const TextInput = ({fieldName, name, placeholder, type}) => {
  const [active, setActive] = useState(false);
  const className = `field ${(active) ? "active" : ""}`;
  return (
    <div className={className}>
      <label htmlFor={name}>{fieldName}</label>
      <input type={type}
        className="field__input"
        id={name}
        name={name}
        placeholder={placeholder}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        required />
    </div>
  )
}

const TextArea = ({fieldName, name, placeholder}) => {
    const [active, setActive] = useState(false);
    const className = `field ${(active) ? "active" : ""}`;
  return (
    <div className={className}>
      <label htmlFor={name}>{fieldName}</label>
      <textarea
        className="field__input"
        rows="5"
        name={name}
        placeholder={placeholder}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        required
      ></textarea>
    </div>
  );
}

const Button = ({type, text}) => (
  <input className="btn" type={type} value={text}/>
);

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <div className="contact">
      <header className="contact__header">
        <h1>I Can't wait to learn more about you!</h1>
      </header>
      <p className="contact__text">
        Whether you just wanna say <span role="img" aria-label="Hi">🖐</span> ‘Hi’ or tell me about your next project,
        please do not hesitate to drop a line <span role="img" aria-label="Smiley Face">😊</span>
      </p>
      <form className="contact__form">
        {/* TODO: Add a topic drop down (stuff like general inquiry or work together or peep) */}
        <TextInput type="text" fieldName="Full Name" name="name" placeholder="You name" />
        <TextInput type="email" fieldName="Email" name="email" placeholder="your@email" />
        <TextArea fieldName="Message" name="message" placeholder="Write a Message!" />
        <Button type="submit" text="Send The Message" />
      </form>
    </div>
  </Layout>
)

export default ContactPage
