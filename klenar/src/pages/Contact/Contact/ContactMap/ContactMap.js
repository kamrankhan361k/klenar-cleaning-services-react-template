import React from 'react';

const ContactMap = () => {
   return (
      <>
         <div className="tp-map-area pt-120 pb-115">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-contact-map">
                               <iframe title='contact map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976383964465!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1636888514620!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>

   );
};

export default ContactMap;