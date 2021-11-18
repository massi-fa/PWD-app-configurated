import React, { useState } from 'react';
import styled from 'styled-components/macro';
import emailjs from 'emailjs-com';

const Container = styled.div`
  width: 80%;
  margin: 20px auto 20px auto;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 15px;
  border-color: white;
  @media only screen and (min-width: 500px) {
    width: 400px;
  };
`;

const StyledInput = styled.input`
  width: 80%;
  margin: 20px auto 10px auto;
  border-radius: 5px;
  border: none;
  height: 1.5rem;
`;

const FormText = styled.textarea`
  resize: none;
  width: 80%;
  height: 6rem;
  margin: 10px auto 10px auto;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  width: 50%;
  margin: 10px auto 10px auto;
  border: none;
  outline: none;
  height: 2.5rem;
  border: 1px solid;
  border-radius: 10px;
  border-color: white;
  background-color: #9f3645;
  color: white;
`;

const Hint = styled.span`
  visibility: ${(props) => (props.sent ? 'visible' : 'hidden')};
  display: ${(props) => (props.sent ? 'block' : 'none')};
  color: white;
  width: 70%;
  margin: auto;
  text-align: center;
`;

const ContactCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_s0k9jms';
      const templateId = 'template_34urifk';
      const userId = 'user_yUXulJlNWjRdYpaSR5X4x';
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
      setEmailSent(false);
    }
  };

  return (
    <Container>
      <StyledInput type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <StyledInput type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormText placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <Hint sent={emailSent}>Thank you for your message, we will be in touch in no time!</Hint>
      <Button onClick={submit}>Send Message</Button>
    </Container>
  );
};

export default ContactCard;
