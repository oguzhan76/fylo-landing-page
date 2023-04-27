const Form = () => {
    return (
        <div className="form-container">
            <div className="form-box">
                <div className="form-text-container">
                    <h1>Get early access today</h1>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='email@example.com'/>
                    <button className="button button-form">Get Started For Free</button>
                </form>
            </div>
        </div>
    )

}

export default Form;