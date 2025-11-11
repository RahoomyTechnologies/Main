const DISPLAYINFORMATION=(Element,Data)=>{

    let BODY=document.querySelector("body");

    if (Element) {
        
        Element.innerHTML=Data;
        
    } else {

        BODY.innerHTML=Data;
        
    };

};
