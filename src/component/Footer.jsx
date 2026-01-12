import CustomButton from "./CustomButton";

const Footer = ()=>{
  return(
    <div>
      <div>
        <p>Ready To Collaborate?</p>
      </div>
      <div>
           <CustomButton
                text="CONTACT ME"
                bgColor="bg-cyan-400"
                hover="hover:bg-blue-300"
              />
      </div>
      <div>
      </div>
    </div>
  )
}
export default Footer;