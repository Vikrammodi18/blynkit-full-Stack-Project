const verifyEmailTemplate = ({name,url})=>{
    return `
    <p>Dear ${name} </p>
    <p> Thank you for registering blynkit. </p>
    <a href=${url} style="color: white;background: #49ad87; margin-top:10px; padding:20px"> 
    verify email 
    </a>
    `
}
export const otpLoginTemplate = ({ otp }) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      

      <p>You requested to log in or reset your password for your Blynkit account.</p>
      
      <p>Please use the following One-Time Password (OTP) to proceed:</p>
      
      <h2 style="background-color: #49ad87; color: white; padding: 10px 20px; display: inline-block; border-radius: 5px;">
        ${otp}
      </h2>

      <p>This OTP is valid for 10 minutes. Do not share this code with anyone.</p>

      <p>If you didn’t request this, you can safely ignore this email.</p>

      <p>Best regards,<br/>The Blynkit Team</p>
    </div>
  `;
};

export default verifyEmailTemplate