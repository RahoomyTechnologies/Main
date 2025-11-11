export const DISPLAY=(ELEMENT,DATA)=>{

    if (ELEMENT) {

        ELEMENT.innerHTML=DATA;
        
    } else {
        
        BODY.innerHTML=DATA;

    }

};