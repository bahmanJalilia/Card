<template>
  <div class="form">
      <div class="prices-wrapper">
       <PriceRow label="Fruit Cake" amount="59.99"/>
       <PriceRow label="Tax" amount="8"/>
       <PriceRow label="TOTAL" amount="67.99" bold="true" />

      </div>
      <div class="form-wrapper">
            <div class="form-row">
                <FormInput :error="cardError" maxlength="19"  placeholder="Card Number"  v-on:changeData="changeCard" />      
            </div>
           <div class="form-row">
                <FormInput :error="expError" maxlength="5" placeholder="MM/YY" inline="true" class="exp" v-on:changeData="changeExp" />
                <FormInput :error="cvcError"  placeholder="CVC" inline="true" class="cvc" type="number" v-on:changeData="changeCVC" />
            </div>
              <div>
                  <ErrorMsg  :msg="msg" />  
              </div>
                
            
            <div class="form-row">
                <input class="submit-btn input" type="submit" value="checkout" v-on:click="submit" />
            </div>
      </div>    
  </div>
</template>

<script>

import PriceRow from './PriceRow.vue'
import FormInput from './FormInput.vue'
import ErrorMsg from './ErrorMsg.vue'

export default {
  props: ['msg', 'cardError', 'expError', 'cvcError'],
  components: {
    PriceRow,
    FormInput,
    ErrorMsg
  },
  methods:{
      changeCard: function(value) {
          this.$emit('changeCard', value)
      },
      changeExp: function(value) {
          this.$emit('changeExp', value)
      },
      changeCVC: function(value) {
          this.$emit('changeCVC', value)
      },
      submit: function(value) {
          this.$emit('submit', value)
      }
  }
}

</script>

<style>
  .field-label {
        text-align: left;
        display: block;
        margin-left: 20px;
    }
    .prices-wrapper {
        margin: 40px;
    }
    .form-wrapper {
        margin: 40px;
        padding-bottom: 20px;
    }
    .form-row {
        width: 100%;
        margin: 15px 0;
    }

    .input {
        border-color: #CCC;
        border-radius: 4px;
        background-color: #FFF;
        width: 100%;
        min-height: 40px;
        font-size: 15px;
        padding: 5px 17px;
        border: 2px solid rgba(204, 204, 204, 0.3);
    }

    .submit-btn {
        background-color: #FF5F00;
        border-radius: 25px;
        color: #FFF;
        font-weight: bold;
        font-size: 17px;
        min-height: 40px;
        width: 60%;
        padding: 15px;
        margin: 20px 0;
        text-transform: uppercase;
        border: none;
        box-shadow: -1px 2px 12px #908383;
    }

</style>


    
 