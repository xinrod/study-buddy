import React from 'react';
import Link from 'react-router-dom/Link';

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SignIn = ({handleSubmit}) => {
    let history = useHistory()

    {/* CSS sold separately, in javascript a object */}
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        marginTop: "10px",
      };
    const handleSubmi = e => {
        e.preventDefault();
        handleSubmit(e);
        history.push('/');
    }

    return (
        <>
            <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
            <header>
			<h1>Sign in to your account</h1>
		    </header>

{/* I did not change the labels/names in the html tags since there is not a CSS linked yet */ }
            <Form id="signInForm" class="pa4 black-80" onSubmit={handleSubmi}>
                    <div class="measure">
                        <label for="username" class="f6 b db mb2">Username/Email<span class="normal black-60"></span></label>
                        <input id='username' name='username' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="username-desc" />
                    </div>
                    <div class="measure">
                        <label for="password" class="f6 b db mb2">Password<span class="normal black-60"></span></label>
                        <input id="password" name='id' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="password" />
                    </div> 
                    <Button form='signInForm' style={mystyle} type="submit" value="Submit">Submit</Button>
            </Form>

            </section>

        </>
    );

}

export default SignIn;