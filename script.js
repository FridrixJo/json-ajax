'use strict';

const person = {
    name: 'alex',
    tel: '+7444444444',
    parents: {
        mom: 'olga',
        dad: 'mike'
    }
};
const clone = JSON.parse(JSON.stringify(person));
      clone.parents.mom = 'ann';
      console.log(person);
      console.log(clone);

let btn = document.querySelector('button'),
    value = document.querySelector('[value]'),
    input = document.querySelectorAll('input'),
    placeholder = document.querySelector('[placeholder]');

    btn.addEventListener('click', () => {
        for ( let i = 0; i < input.length; i++){
            input[i].value = '';
            input[i].placeholder = 0;
        }
    });

    let inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector('#usd');
    
    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();
              //request.open(method, url, async, login, pass);
              request.open('GET', 'current.json');
              request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
              request.send();

              request.addEventListener('load', () => {
                  if (request.status === 200) {
                      const data = JSON.parse(request.response);
                      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
                    } else {
                      inputUsd.placeholder = 'something went wrong';
                    }
              });

              //status 100 200 404
              //statusText
              //response ответ
              //readyState 0 1 2 3 4

              
    })