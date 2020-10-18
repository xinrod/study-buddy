import React, { useEffect } from 'react';

import Form from 'react-bootstrap/Form';

const SignIn = () => {
    
    {/* CSS sold separately, in javascript a object */}
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        marginTop: "10px",
      };
    

    return (
        <>
            <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
            <header>
			<h1> Sign in to your account</h1>
		    </header>

{/* I did not change the labels/names in the html tags since there is not a CSS linked yet */ }
            <Form id="signInForm" class="pa4 black-80">
                    <div class="measure">
                        <label for="name" class="f6 b db mb2">Username/Email<span class="normal black-60"></span></label>
                        <input id='name' name='name' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                    <div class="measure">
                        <label for="classid" class="f6 b db mb2">Password<span class="normal black-60"></span></label>
                        <input id="classid" name='id' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="classid" />
                    </div>
                    <input style={mystyle} type="submit" value="Submit" />
            </Form>

            </section>

        </>
    );

}

export default SignIn;