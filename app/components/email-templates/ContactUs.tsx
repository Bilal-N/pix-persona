interface ContactUsProps {
  name: string;
  email: string;
  contactNumber: string;
}

export const ContactUs: React.FC<Readonly<ContactUsProps>> = ({
  name,
  email,
  contactNumber,
}) => (
  <div>
    <h1>Contact Informtion</h1>
    <p>
      <strong>Name: </strong>
      {name}
    </p>
    <p>
      <strong>Email: </strong>
      {email}
    </p>
    <p>
      <strong>Contact Number: </strong>
      {contactNumber}
    </p>

    <p>
      <em>This email is sent from pixelpersona.co</em>
    </p>
  </div>
);
