let atmBalance = 10000
// Mainmenu
const withdraw = document.getElementById('withdraw');
const deposit = document.getElementById('deposit');
const balance = document.getElementById('chk_balance');
const result = document.getElementById('result');

withdraw.addEventListener('click', function () {
    func_withdraw();
});
deposit.addEventListener('click', function () {
    func_deposit();
});
balance.addEventListener('click', function () {
    result.textContent = `ATM Balance = ${atmBalance}`;
});
result.textContent = '';

function hide_btns() {
    withdraw.style.display = 'none';
    deposit.style.display = 'none';
    balance.style.display = 'none';
}

// withdraw
const cls_withdraw = document.getElementById('cls_withdraw');
const in_withdraw = document.getElementById('in_withdraw');
const btn_withdraw = document.getElementById('btn_withdraw');

btn_withdraw.addEventListener('click', function () {
    if (in_withdraw.value === "") {
        alert('Error: Amount cannot be empty.')
    } else if (in_withdraw.value >= 0) {
        if (in_withdraw.value % 500 != 0) {
            alert('Error: Amount must be divisible by 500! ')
        }
        else if (in_withdraw.value > atmBalance) {
            alert('Error: Not enough cash in ATM ')
        }
        else {
            atmBalance -= parseFloat(in_withdraw.value);
            result.textContent = `Transaction of amount ${in_withdraw.value} is successful! Remaining Balance = ${atmBalance}`
            in_withdraw.value = '';
        }
    } else {
        alert('Error: Number should be positive!')
    }
});

function func_withdraw() {
    hide_btns();
    cls_withdraw.style.display = 'block';
}

// deposit
const cls_deposit = document.getElementById('cls_deposit');
const in_deposit = document.getElementById('in_deposit');
const btn_deposit = document.getElementById('btn_deposit');

btn_deposit.addEventListener('click', function () {
    if (in_deposit.value === "") {
        alert('Error: Deposit amount cannot be empty.')
    } else {
        atmBalance += parseFloat(in_deposit.value);
        in_deposit.value = '';
        result.textContent = `ATM Balance after deposit = ${atmBalance}`;   
    }
});

function func_deposit() {
    hide_btns();
    cls_deposit.style.display = 'block';
    in_deposit.value = '';
    result.textContent = '';
}


// btn Main-menu
const btn_WmainMenu = document.getElementById('btn_WmainMenu');
btn_WmainMenu.addEventListener('click', function () {
    Menu();
});
const btn_DmainMenu = document.getElementById('btn_DmainMenu');
btn_DmainMenu.addEventListener('click', function () {
    Menu();
});

function Menu() {
    withdraw.style.display = 'block';
    deposit.style.display = 'block';
    balance.style.display = 'block';
    cls_deposit.style.display = 'none';
    cls_withdraw.style.display = 'none';
    result.textContent = '';
}
