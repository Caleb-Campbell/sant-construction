import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export const NotifyAdmin = ({
    firstName,
    lastName,
    email,
    phone,
    message,
}: EmailTemplateProps) => (
    <div>
        <h1>Someone requested a bid. Here is the info:</h1>
        <p>
            <strong>Name:</strong> {firstName} {lastName}
        </p>
        <p>
            <strong>Email:</strong> {email}
        </p>
        <p>
            <strong>Phone:</strong> {phone}
        </p>
        <p>
            <strong>Message:</strong> {message}
        </p>
    </div>
);

export const NotifyUser = ({
    firstName,
    lastName,
    email,
    phone,
    message,
}: EmailTemplateProps) => (
    <div>
        <h1>Thank you for requesting an email from sant construction. Here is the information you filled out:</h1>
        <p>
            <strong>Name:</strong> {firstName} {lastName}
        </p>
        <p>
            <strong>Email:</strong> {email}
        </p>
        <p>
            <strong>Phone:</strong> {phone}
        </p>
        <p>
            <strong>Message:</strong> {message}
        </p>
    </div>
);
