import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export const contactAction = async ({ request }) => {
    //console.log(request);
    const data = await request.formData();

    const submission = {
        email: data.get("email"),
        message: data.get("message"),
    };

    //console.log(submission);

    // send the post request
    if (submission.message.length < 10) return { error: "Message must be atleast 10 characters" };

    // redirect the user
    return redirect("/careers");
};
const Contact = () => {
    const data = useActionData();
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="pb-3 mb-3 border-bottom border-2">Contact Us</h3>
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <Form method="POST" action="/help/contact" className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="emailId">Email</label>
                                    <input type="text" className="form-control" placeholder="Your Email..." name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailId">Message</label>

                                    <textarea placeholder="Your Message..." className="form-control" id="" cols="10" rows="5" name="message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </Form>

                            {data && data.error && (
                                <div class="alert alert-danger" role="alert">
                                    {data.error}!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
