const verifyEmailTemplate = ({name,url})=>{
    return `
    <p>Dear ${name} </p>
    <p> Thank you for registering blynkit. </p>
    <a href=${url} style="color: white;background: #49ad87; margin-top:10px; padding:20px"> 
    verify email 
    </a>
    `
}

export default verifyEmailTemplate