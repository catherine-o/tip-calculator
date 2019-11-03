<template>
    <div class='all'>
        <h1>Tip Calculator</h1>
        <div class='container'>
            <form id='calculator-form'>
                <input type='text' placeholder='Total Bill'>
                <input type='text' placeholder='% of tip dropdown'>
                <input type='text' placeholder='Party Size'>
                <button>Calculate</button>
            </form>
            <div class='calculations'>
            <p>Tip:</p>
            <p>Total:</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.all {
    margin: 5% auto;
    width: 350px;
    h1 {
        text-align: center;
    }
    .container {
        background-color: rgb(239, 242, 243);
        border: 1px solid gray;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        margin: 25px;
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
        .calculations {
            margin: 0 0 30px 35px;
            font-size: 20px;
        }
    }
}
</style>