import { useState } from "react"; 

const isEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

const Form = () => {

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(!isEmail.test(e.target.email.value));
    }

    return (
        <div className="form-container">
            <div className="form-box">
                <div className="form-text-container">
                    <h1>Get early access today</h1>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input name="email" type="text" placeholder='email@example.com'/>
                    <button className="button button-form">Get Started For Free</button>
                </form>
                {error && (<p className="form-error-message">Please enter a valid email address</p>)}
            </div>
        </div>
    )
}

export default Form;