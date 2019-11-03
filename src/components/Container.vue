<template>
    <div class='container' :style='determineColor()'>
        <form id='calculator-form' @submit.prevent='validateInputs'>
            <input type='text' id='input-bill' v-model='billTotal' placeholder='Total Bill'>
            <select name='tip' v-model='tipPercent' id='tip'>
                <option value='0' selected>Tip</option>
                <option value='0.10'>10%</option>
                <option value='0.15'>15%</option>
                <option value='0.18'>18%</option>
                <option value='0.20'>20%</option>
            </select>
            <input type='text' id='party-size' v-model='partySize' placeholder='Party Size'>
            <div id='message'>{{ this.message }}</div>
            <div class='result-row'>
                <span id='emoji'>{{ this.emoji }}</span>
                <button>Calculate</button>
            </div>
        </form>
        <Calculations :tip='tipAmount' :total='totalAmount'/>
    </div>
</template>

<script>
import Cleave from 'cleave.js'
import Calculations from './Calculations'
export default {
    data() {
        return {
            billTotal: null,
            tipPercent: 0,
            partySize: null,
            tipAmount: 0,
            totalAmount: 0,
            message: '',
            emoji: null
        }
    },
    components: {
        Calculations
    },
    mounted() {
        new Cleave('#input-bill', {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
        })
        new Cleave('#party-size', {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 0
        })
    },
    methods: {
        validateInputs() {
            if (!this.billTotal) {
                this.message = 'please enter Total Bill amount'
            } else if (isNaN(this.billTotal) || this.billTotal < 0) {
                this.message = 'incorrect format in Total Bill'
            } else if (this.tipPercent == 0) {
                this.message = 'please select a Tip amount'
            } else if (!this.partySize) {
                this.message = 'please enter Party Size'
            } else if (isNaN(this.partySize) || this.partySize < 1) {
                this.message = 'incorrect format in Party Size'
            } else {
                this.message = ''
                this.calculateTotals()
            }
        },
        calculateTotals() {
            let tipAmount = (this.billTotal * this.tipPercent) / this.partySize
            let totalAmount = (+(this.billTotal) + +(tipAmount)) / this.partySize
            this.tipAmount = tipAmount.toFixed(2)
            this.totalAmount = totalAmount.toFixed(2)
        },
        determineColor() {
            if (this.tipPercent == 0) {
                this.emoji = null
                return {'background-color': 'rgb(239, 242, 243)'}
            } else if (this.tipPercent == 0.10) {
                this.emoji = '😬'
                return {'background-color': '#6093E0'}
            } else if (this.tipPercent == 0.15) {
                this.emoji = '🙂'
                return {'background-color': '#74A9F7'}
            } else if (this.tipPercent == 0.18) {
                this.emoji = '😁'
                return {'background-color': '#94BDFA'}
            } else if (this.tipPercent == 0.20) {
                this.emoji = '😍'
                return {'background-color': '#BAD7FF'}
            }
        }
    }
}
</script>


<style lang="scss">
.container {
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 25px;
    #calculator-form {
        margin-bottom: 20px;
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
        #message {
            text-align: center;
            margin: 10px 0 -5px 0;
        }
        .result-row {
            display: flex;
            justify-content: flex-end;
            align-content: space-between;
            #emoji {
                margin: 20px 37px 0 80px;
                font-size: 35px;
            }
            button {
                font-size: 22px;
                margin: 20px 30px 0 30px;
                background-color: rgb(250, 251, 252);
                width: 110px;
                height: 40px;
            }
        }
    }
}
</style>