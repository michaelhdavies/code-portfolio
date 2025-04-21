import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  function handleInputChange(e) {
    const name = e.target.name;
    if (name === "name") {
      setFormData({...formData, name: e.target.value});
    } else if (name ==="email") {
      setFormData({...formData, email: e.target.value})
    } else if (name === "message" ) {
      setFormData({...formData, message: e.target.value})
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for your message");
    setFormData({name: "", email: "", message: ""});
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])

  return (
    <>
      <div className="page">
        <form onSubmit={handleSubmit} className="page">
          <input required name="name" placeholder="Please provide your name" onChange={handleInputChange} value={formData.name}></input>
          <input required name="email" placeholder="Please provide your email" type="email" onChange={handleInputChange} value={formData.email}></input>
          <textarea required name="message" placeholder="What is your message?" onChange={handleInputChange} value={formData.message}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
};