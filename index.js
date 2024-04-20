let genderBox = document.querySelector('.genderbox');
let gameBox = document.querySelector('.gameSection');
let nextButton = document.querySelector('button');
let topPic = document.querySelector('.top');
let bottomPic = document.querySelector('.bottom');

let MaleArray = ['https://th.bing.com/th/id/OIP.rBG7cvTxxuXYgkCjBji3VwHaLC?w=186&h=278&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.NrSNp_XoK_RP2UfxVWdGTAHaLF?w=186&h=278&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.vamqF6l6tXrlYTqrVsImOgHaLG?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.o-fmBzwB3PUouQhCQlqcAgHaLL?pid=ImgDet&w=166&h=251&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.bXWllKd9BL26ElsYay5q9gHaHa?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.TMapqeVZ9hICKUPrNu0_PAHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.ELavGv-PyFA24ucQcJthawHaNc?w=185&h=336&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.I4HK-qEWSQmnCBzed8o70gHaJk?w=186&h=240&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.i6QBhYvBTEEZd7w7ZW-r3gHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.TCIlZMVSPItAp4l3gpOYUQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.o7542N1g9TGFpBIRog6NbgHaKL?w=186&h=256&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.qqPxKHIk6I45w78xoewfQQHaOd?w=178&h=349&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.cTRf8HPo0SIH_mNwgccqOwHaJH?w=186&h=229&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.3ojTIrOBUgjEZ2XkcDTMRAHaKZ?w=186&h=262&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.tL9RbFmxGcnDjHb0jSz4bgHaKF?w=186&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.B5Hs1k5NFpsiVSMR26RE1AHaJT?w=186&h=235&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.lMd3LNsH0m8nCXQo-xPpYAHaK8?w=186&h=275&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.KGNPfOnRKKng-MoG4sC2RAHaKQ?pid=ImgDet&w=166&h=230&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.78Fz7EF3ml3gs4nAtg3iTgAAAA?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.YR3ZGuxbvyL7ZJztlXj3vQHaLH?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.hXpwOzc-nvlVeacHqYf8gAHaKK?pid=ImgDet&w=166&h=228&c=7&dpr=1.3','https://www.bing.com/th?id=OIP.wITT9MehnZL4xZDXSvmVBQHaLG&w=150&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2','https://th.bing.com/th/id/OIP.0yU5ipTyhVnH7We80PQeIgHaJQ?w=186&h=233&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.nx_x5-0nD5rZziymNDetTQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.sLBKBxU3UDncRXfq-NxToAHaKX?w=186&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.lT6h6whvUhyr3LeSzcf7zAHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://th.bing.com/th/id/OIP.pBZlaxl6hk4Wkw9kV_rQEAHaKM?w=186&h=256&c=7&r=0&o=5&dpr=1.3&pid=1.7'];
let FemaleArray = ['https://th.bing.com/th/id/OIP.7fjPvtG7VbKD4aDPHam2RAHaKR?pid=ImgDet&w=166&h=230&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.8-ZOrynlZgpeN4eginD44AHaLH?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.TinVH52eQn24wgIp4dB02QHaJ-?pid=ImgDet&w=166&h=223&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.BngoxRCTk98EtvqO6n01yQAAAA?pid=ImgDet&w=166&h=221&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.n8ZoNzwvlR44ezYkFOxErwHaJQ?pid=ImgDet&w=166&h=207&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.7jODZzfMtgQoDq7GXjaD8QHaLI?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.ZoGfHnla6CBY38oF8PMaXwHaJ-?pid=ImgDet&w=166&h=223&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.KmZruxgiJq6pwdPwaejsqwHaJ9?pid=ImgDet&w=166&h=222&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.h3M9cvZZ98RRdMmhZKIfwgHaJ-?pid=ImgDet&w=166&h=223&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.DIaHmC4JXHrZbdfS7-5B6wHaLH?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.XBerFu46JK0ZxU_xEiXfdgHaJQ?pid=ImgDet&w=166&h=207&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.oAAFz_bLxQuFcV7v-uLMhwHaLK?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.owX91bsrQXIAZTVDwSY2oAHaLK?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.0E7fplPhd0aks9VOc_MuSQAAAA?pid=ImgDet&w=166&h=256&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.LxLK2_QWF3silhforwMTMgHaL9?pid=ImgDet&w=166&h=267&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.FEifTGONjq_p3S6qKpYDyQHaLX?pid=ImgDet&w=166&h=254&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.57OeIyLp2iGEpkuab2PlKQAAAA?pid=ImgDet&w=166&h=228&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.hovQ6wVP9NEICK1cAroPNgHaLH?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.1PS1nzkUMZRDAOYfKKOxpAHaKV?pid=ImgDet&w=166&h=230&c=7&dpr=1.3','https://th.bing.com/th/id/OIP._aI6ZAASH61nAIcSKTPiQAHaKn?pid=ImgDet&w=166&h=237&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.PQoZWx5ZWu1-GXM6noGGvAAAAA?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.ys5UrxJLgTU8VKVUlysTowHaKW?pid=ImgDet&w=166&h=230&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.YvvlHyF5C2GVGi7EItwCUwHaKv?pid=ImgDet&w=166&h=240&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.2T1cnWSGfEDu90QU746aigHaKb?pid=ImgDet&w=166&h=233&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.rxpTW0lHi4-Wto0xEXvW3gHaJo?pid=ImgDet&w=166&h=216&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.jqYLhTqEw5GAF7njsILEJAHaJ3?pid=ImgDet&w=166&h=221&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.7bOLG4WqLn_uG5Dk8PTVYwHaLH?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.-9fBQPoH4yY-MfmTmZ8uTAAAAA?pid=ImgDet&w=166&h=253&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.UlNbrQNLrOH8CZRwYHZ_8gHaLI?pid=ImgDet&w=166&h=249&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.2SgniDnL1HRG4VDXGjGkFADCEs?pid=ImgDet&w=166&h=255&c=7&dpr=1.3','https://th.bing.com/th/id/OIP.f212MwdmcWOz-pw3qZVC0QHaLY?pid=ImgDet&w=166&h=254&c=7&dpr=1.3'];

function getChoice() {
    let gender = document.getElementsByName('gender');
    for(i=0;i<gender.length;i++) {
        if(gender[i].checked) {
            genderBox.style.display = 'none';
            gameBox.style.display = 'block';
            if(gender[i].value === 'male') {
                gamePage(FemaleArray);
                topPic.innerHTML = '<img src="https://th.bing.com/th/id/OIP.U2P_qZTgJCRkOpFHxX72pwHaJ-?w=208&h=281&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Photos">';
                bottomPic.innerHTML = '<img src="https://th.bing.com/th/id/OIP.MlpWIFdHIgD7AgDxCv3coQHaLH?pid=ImgDet&w=166&h=249&c=7&dpr=1.3" alt="Photo">';
            }
            else if(gender[i].value === 'female') {
                gamePage(MaleArray);
                topPic.innerHTML = '<img src="https://th.bing.com/th/id/OIP.vamqF6l6tXrlYTqrVsImOgHaLG?pid=ImgDet&w=166&h=249&c=7&dpr=1.3" alt="Photos">';
                bottomPic.innerHTML = '<img src="https://th.bing.com/th/id/OIP.TMapqeVZ9hICKUPrNu0_PAHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Photo">';
            };
        };
    };
};

function gamePage(genderArray) {
    function picChange(side) {
        let randomNumber = Math.floor(Math.random() * genderArray.length);
        Picture = genderArray[randomNumber];
        if(side === 'top') {
            topPic.innerHTML = `<img src="${Picture}" alt="Photos">`;
        }
        else {
            bottomPic.innerHTML = `<img src="${Picture}" alt="Photos">`;
        };
    };

    topPic.addEventListener('click',function() {
        picChange('top');
    });

    bottomPic.addEventListener('click',function() {
        picChange('bottom');
    });
};

nextButton.addEventListener('click',function() {
    getChoice();
});