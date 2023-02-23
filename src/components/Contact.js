import { useEffect } from "../lib";

const Contact = () =>{

    useEffect(()=>{
        (function () {
            emailjs.init("TYx_9e2fE7Z4qBXz3");
          })();
     
      
          const form = document.getElementById("contact-from");
          const usernameEle = document.getElementById("name");
          const emailEle = document.getElementById("email");
          const phoneEle = document.getElementById("phone");
          const subjectEle = document.getElementById("subject");
          const commentEle = document.getElementById("comment");
          // Truy cập vào các ô span
          const errorNameEle = document.getElementById("error-name");
          const errorPhoneEle = document.getElementById("error-phone");
          const errorEmailEle = document.getElementById("error-email");
          const errorSubjectEle = document.getElementById("error-subject");
          const errorCommentEle = document.getElementById("error-comment")
   
          function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              email
            );
          }
          function isPhone(number) {
            return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
          }
        form.addEventListener("submit", function (e)  {
            e.preventDefault();
            let usernameValue = usernameEle.value;
            let emailValue = emailEle.value;
            let phoneValue = phoneEle.value;
            let subjectValue = subjectEle.value;
            let commentValue = commentEle.value;
      
            //Function send email
            const sendEmail = () => {
              //send email
              let params = {
                from_name: usernameValue,
                phone_id: phoneValue,
                email_id: emailValue,
                message: commentValue,
              };
              emailjs
              .send("service_q7m4ab9", "template_c5vwrta", params)
                .then(function (res) {
                  console.log(`success` + res.status);
                });
            };
            
            // Validate dữ liệu trong các ô input và highlight
      // Kiểm tra trường username
      if (usernameValue.length == "") {
        errorNameEle.innerHTML = "Usename không được bỏ trống";
      } else {
        errorNameEle.innerHTML = "";
      }

      // Kiểm tra trường email
      if (emailValue.length == "") {
        errorEmailEle.innerHTML = "Email không được bỏ trống";
      } else if (!isEmail(emailValue)) {
        errorEmailEle.innerHTML = "Email không đúng định dạng";
      } else {
        errorEmailEle.innerHTML = "";
      }

      // Kiểm tra trường phone
      if (phoneValue.length == "") {
        errorPhoneEle.innerHTML = "Số điện thoại không được để trống";
      } else if (!isPhone(phoneValue)) {
        errorPhoneEle.innerHTML = "Số điện thoại không đúng định dạng";
      } else {
        errorPhoneEle.innerHTML = "";
      }

      // Kiểm tra trường subject
      if (subjectValue.length == "") {
        errorSubjectEle.innerHTML = "Chủ đề không được bỏ trống";
      } else {
        errorSubjectEle.innerHTML = "";
      }

      // Kiểm tra trường comment
      if (commentValue.length == "") {
        errorCommentEle.innerHTML = "Chủ đề không được bỏ trống";
      } else {
        errorCommentEle.innerHTML = "";
      }

      if (
        usernameValue !== "" &&
        phoneValue !== "" &&
        emailValue !== "" &&
        subjectValue !== "" &&
        commentValue !== ""
      ) {
        sendEmail();
      }
            
          });
    
    })

    return`
   
    <div id="contact">
    <hr>
    <p id="pro">Contact</p>


    <form action="" id="contact-from">
    <div class="form-row">
    <div class="fromba">

    <div class="frommot">
        <div class="form">

            <input id="name" type="text"   placeholder="Your Name" >  
            <span style="color:red;" id="error-name"> </span>      
        </div>
        <br>  

        <div class="form">
            <input id="email" type="email"   placeholder="Your Email"> 
            <span style="color:red;" id="error-email"> </span>                 
          </div>
          <br>

          </div>
          <div class="fromhai">
          <div class="form">
            <input id="phone" type="number"   placeholder="Your Phone">   
            <span style="color:red;" id="error-phone"> </span>                       
        </div>
        <br>  
        <div class="form">
            <input id="subject" type="text"   placeholder="Subject">   
            <span style="color:red;" id="error-subject"> </span>                         
          </div>
          <br>  
          </div>
          </div>
          <div class="formto">
            <textarea  id="comment"     placeholder="Write Something"></textarea>
            <span style="color:red;" id="error-comment"> </span>
          </div>
          <br>  
        <div class="form-group">
            <input type="submit" value="submit"">                  
        </div>

    </div>  
</form>

  




</div>



    `;
};
export default Contact;