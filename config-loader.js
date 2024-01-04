
function existsLoader(){
    const loader = document.getElementById('loader');
    if(loader!==null && loader!==undefined){
        const config = getConfig();
        createBody(config);
    }  
}

function getConfig(){
    const lengths = loader.getAttribute('data-lengths')?.split('-').map(e=>e.trim()).slice(0,2);
    const width = lengths?.[0] || '100';
    const height = lengths?.[1] || '100';
    const text = loader.getAttribute('data-text')?.trim();
    const colors = loader.getAttribute('data-colors')?.split('-').map(e=>e.trim()).slice(0,4);
    return {
        lengths: {
            width: `${width}px`,
            height: `${height}px`,
        },
        text: ucfirst(text) || 'Procesando',
        colors: {
            left: colors?.[0] || 'rgb(86, 92, 244)',
            right: colors?.[1] || 'rgb(46, 70, 164)',
            top: colors?.[2] || 'rgba(63, 232, 227, 0.3)',
            bottom: colors?.[3] || 'rgba(63, 232, 227, 0.3)'
        }
    }
}

function ucfirst(text){
    if(text===null || text===undefined) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function createBody(config){
    loader.classList.add('visible-loader');
    const loaderBody = document.createElement('div');
    loaderBody.classList.add('loader-body');
    const loaderShape = document.createElement('div');
    loaderShape.classList.add('loader-shape');
    const loaderText = document.createElement('loader-text');
    loaderText.classList.add('loader-text');
    //Añadiendo Configuraciones
    loader.style.width = config.lengths.width;
    loader.style.height = config.lengths.height;
    loaderText.textContent = config.text;
    loaderShape.style.borderLeftColor = config.colors.left; 
    loaderShape.style.borderTopColor = config.colors.top;
    loaderShape.style.borderRightColor = config.colors.right;
    loaderShape.style.borderBottomColor = config.colors.bottom;
    //Agregando Cuerpo al Loader
    loaderBody.appendChild(loaderShape);
    loader.appendChild(loaderBody);
    loader.appendChild(loaderText);
}

existsLoader()
