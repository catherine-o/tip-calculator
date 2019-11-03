<template>
    <form id='calculator-form'>
        <input type='text'  v-model='total' placeholder='Total Bill'>
        <select name='tip' v-model='tip' id='tip'>
            <option value='0' selected>Tip</option>
            <option value='0.10'>10%</option>
            <option value='0.15'>15%</option>
            <option value='0.18'>18%</option>
            <option value='0.20'>20%</option>
        </select>
        <input type='text' v-model='partySize' placeholder='Party Size'>
        <button>Calculate</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            total: null,
            tip: 0,
            partySize: null
        }
    }
}
</script>

<style lang="scss">
#calculator-form {
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