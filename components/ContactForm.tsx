

export default function ContactForm () {
    return( 
        <>
        <form>
            <div>
                <label htmlFor="fullname">Full Name </label>
                <input type="text" id="fullname" placeholder="John Doe"/>
            </div>
            <div>
                <label htmlFor="email"> Email</label>
                <input type="text" id="email" placeholder="email@gmail.com"/>
            </div>

            <button type="submit">Send</button>
        </form>
        
        <div>
            <div>Error Message</div>
        </div>

        </>
    )
}