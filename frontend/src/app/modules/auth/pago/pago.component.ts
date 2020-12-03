import { Component, OnInit } from '@angular/core';
import { Stripe } from 'stripe';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss'],
})
export class PagoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*const stripe = Stripe("pk_test_51HsW6ND0onrjQj4P9FklT1fHyGyplPvNzHzeCKs2nyEZ2NgImtg3J80keFHX5xp5Z8jvTJXob7SJJPjaaxjiU71I00QsKhwQZ7");

        document.getElementById('checkout-button').addEventListener('click', () => {
            fetch("/create-session", {
                method: "POST",
            })
                .then(function (response) {
                    console.log(response);
                    return response.json();
                })
                .then(function (session) {

                    return stripe.redirectToCheckout({ sessionId: session.id });
                })
                .then(function (result) {
                    // If redirectToCheckout fails due to a browser or network
                    // error, you should display the localized error message to your
                    // customer using error.message.
                    if (result.error) {
                        alert(result.error.message);
                    }
                })
                .catch(function (error) {
                    console.error("Error:", error);
                });
        });*/
  }
}
