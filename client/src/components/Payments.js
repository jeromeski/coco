import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Button} from 'react-bootstrap';


class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name='coco'
          description='$5 for 5 email credits' 
          amount={500}
          token={token => console.log(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <Button size='sm'>Add Credits</Button>
        </StripeCheckout>
      </div>
    );
  }
}

export default Payments;