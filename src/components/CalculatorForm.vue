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
        margin: 20px 0px 0 35px;
    }
    button {
        font-size: 22px;
        padding: 5px;
        margin: 20px 0 20px 150px; //float right not working
        background-color: rgb(250, 251, 252);
        width: 110px;
    }
}
</style>