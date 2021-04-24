let preloading = false;
let endOfPageScrolledCounter = 0;

const getData = () => {
    if(!preloading) {
        showPreloader();
        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(response => response.json())
            .then(data => {
            
                let content = document.getElementById('content');
                content.appendChild(document.createElement('hr'));
    
                for (let user of data) {
                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');
    
                    pId.innerText = `User ID: ${user.id}`;
                    pName.innerText = `User Name: ${user.name}`;
                    pWebsite.innerHTML = `User URL: ${user.website}<br/>--------`;
    
                    content.appendChild(pId);
                    content.appendChild(pName);
                    content.appendChild(pWebsite);
                }
            
                hidePreloader();
            })
            .catch(err => {
                console.error(err);
            })
    }
}

const scrollToEndOfPage = () => {
    
    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;
    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    // console.log(`Scroll top: ${scrollTop}`);
    // console.log(`Scroll Height: ${scrollHeight}`);
    // console.log(`Client Height: ${clientHeight}`);
    // console.log(`Sum: ${sumScrollTopClientHeight}`);

    if (sumScrollTopClientHeight >= scrollHeight) {
        endOfPageScrolledCounter += 1;
        console.log(`przescrollowaned: ${endOfPageScrolledCounter} razy`);


        getData();
    }
}

const showPreloader = () => {
    preloading = true;
    let loader = document.getElementsByClassName('loader').item(0);
    loader.classList.add('show');
}

const hidePreloader = () => {
    preloading = false;
    let loader = document.getElementsByClassName('loader').item(0);
    loader.classList.remove('show');
}

document.addEventListener('scroll', scrollToEndOfPage);