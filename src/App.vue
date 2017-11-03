<template>
  <div id="app">
    <Header />
    <Form
     :msg="msg"
      v-on:changeCard="changeCard"
      v-on:changeExp="changeExp"
      v-on:changeCVC="changeCVC"
      v-on:submit="submit"
      :cardError="cardError"
      :expError = "expError"
      :cvcError = "cvcError"
    />
  </div>
</template>


<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";

export default {
  name: "app2",
  data() {
    return {
      msg: "sdf",
      card: "",
      cardError: false,
      exp: "",
      expError: false,
      cvc: "",
      cvcError: false
    };
  },
  components: {
    Header,
    Form
  },
  methods: {
    changeCard: function(value) {
      this.card = value;
    },
    changeExp: function(value) {
      this.exp = value;
    },
    changeCVC: function(value) {
      this.cvc = value;
    },
    submit: function(value) {
      this.msg = "";
      const expArray = this.exp.split("/");
      const cardArray = this.card.split("-");

      let a = false;
      for (var i = 0; i < cardArray.length; i++) {
        if (!Number(cardArray[i])) {
          a = true;
        }
      }

      const month = Number(expArray[0]);
      const year = Number(expArray[1]);

      if (!this.card) {
        this.cardError = true;
        this.msg = this.msg + "\nCard number is empty";
      } else if (this.card.length < 19) {
        this.cardError = true;
        this.msg = this.msg + "\nCard number is wrong";
      } else if (a === true) {
        this.cardError = true;
        this.msg = "\nPlease enter just Number";
      } else {
        this.cardError = false;
      }

      if (!this.exp) {
        this.expError = true;
        this.msg = this.msg + "\nExpiration date is empty";
      } else if (this.exp.length > 5) {
        this.expError = true;
        this.msg = this.msg + "\nExpiration Date is short";
      } else if (month < 1 || month > 12 || year < 17 || !month || !year) {
        this.expError = true;
        this.msg = this.msg + "\nExpiration Date is wrong";
      } else {
        this.expError = false;
      }

      if (!this.cvc) {
        this.cvcError = true;
        this.msg = this.msg + "\nCVC is empty";
      } else if (this.cvc.length < 3 || this.cvc.length > 3) {
        this.cvcError = true;
        this.msg = this.msg + "\nCVC is incorrect";
      } else {
        this.cvcError = false;
      }
    }
  }
};
</script>
