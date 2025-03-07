const getPageContext = (pagePath)=>{
    const commonVariables ={
        ...navigation
    }

    let pageVariables = {};
    console.log
    switch (pagePath){
        case 'index.html':
            
            break;
    }
    return {
        ...commonVariables,
        ...pageVariables
    }
}