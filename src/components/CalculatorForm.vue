<template>
    <form id='calculator-form'>
        <input type='text' placeholder='Total Bill'>
        <input type='text' placeholder='% of tip dropdown'>
        <input type='text' placeholder='Party Size'>
        <button>Calculate</button>
    </form>
</template>

<style lang="scss">
#calculator-form {
    input {
        font-size: 22px;
        padding: 5px;
        margin: 20px 0px 0 30px;
        width: 77%;
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