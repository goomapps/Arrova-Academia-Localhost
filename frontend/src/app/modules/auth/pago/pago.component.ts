import { Component, OnInit } from "@angular/core";

import { loadStripe } from "@stripe/stripe-js";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-pago",
  templateUrl: "./pago.component.html",
  styleUrls: ["./pago.component.scss"],
})
export class PagoComponent implements OnInit {
  stripePromise = loadStripe(environment.stripe_key);
  priceId = "price_1HuwWTD0onrjQj4PGBcBmMvU";
  quantity = 1;
  titulo = "";
  precio = 35;
  descriptcion = "";
  constructor() {}

  ngOnInit(): void {}

  async checkout() {
    const stripe = await this.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: this.priceId, quantity: this.quantity }],
      successUrl: "http://arrovacademia.es/usuario",
      cancelUrl: "http://arrovacademia.es",
    });
    if (error) {
      console.log(error);
    }
  }
}
