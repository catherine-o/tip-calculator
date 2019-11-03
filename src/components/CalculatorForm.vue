<template>
    <div>
        <form id='calculator-form' @submit.prevent='calculateTotals'>
            <input type='text'  v-model='billTotal' placeholder='Total Bill'>
            <select name='tip' v-model='tipPercent' id='tip'>
                <option value='0' selected>Tip</option>
                <option value='0.10'>10%</option>
                <option value='0.15'>15%</option>
                <option value='0.18'>18%</option>
                <option value='0.20'>20%</option>
            </select>
            <input type='text' v-model='partySize' placeholder='Party Size'>
            <button>Calculate</button>
        </form>
        <Calculations :tip='tipAmount' :total='totalAmount'/>
    </div>
</template>

<script>
import Calculations from './Calculations'
export default {
    data() {
        return {
            billTotal: null,
            tipPercent: 0,
            partySize: null,
            tipAmount: 0,
            totalAmount: 0
        }
    },
    components: {
        Calculations
    },
    methods: {
        calculateTotals() {
            let tipAmount = (this.billTotal * this.tipPercent) / this.partySize
            let totalAmount = (+(this.billTotal) + +(tipAmount)) / this.partySize
            this.tipAmount = tipAmount.toFixed(2)
            this.totalAmount = totalAmount.toFixed(2)
        }
    }
}
</script>

<style lang="scss">
#calculator-form {
    margin-bottom: 90px;
    input {
        font-size: 22px;
        padding: 5px;
        margin: 20px 0px 0 30px;
        width: 77%;
    }
    #tip {
        width: 81%;
        height: 35px;
        margin: 20px 0px 0 30px;
        font-size: 20px;
    }
    button {
        font-size: 22px;
        padding: 5px;
        float: right;
        margin: 20px 30px;
        background-color: rgb(250, 251, 252);
        width: 110px;
    }
}
</style>