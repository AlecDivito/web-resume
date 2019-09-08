import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.scss";
import Header from "../components/header";

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
      <Header text="Why not get in touch!" isCenter={true} />
      <p className="contact__text">
        Weather you want to ask me some questions or just tell me about a project
        your working on, don't hesitate to tell me what's up!
      </p>
      <form className="contact__form" action="https://formcarry.com/s/UArougfMt9W" method="POST" acceptCharset="UTF-8">
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
