
const Contact = () =>{
    return`
   
    <div id="contact">
    <hr>
    <p id="pro">Contact</p>


    <form action="">
    <div class="form-row">
    <div class="fromba">

    <div class="frommot">
        <div class="form">
            <input id="name" type="text" required  placeholder="Your Name" >        
        </div>
        <br>  
        <div class="form">
            <input id="email" type="email" required  placeholder="Your Email">                  
          </div>
          <br>
          </div>
          <div class="fromhai">
          <div class="form">
            <input id="phone" type="number" required  placeholder="Your Phone">                          
        </div>
        <br>  
        <div class="form">
            <input id="subject" type="text" required  placeholder="Subject">                            
          </div>
          <br>  
          </div>
          </div>
          <div class="formto">
            <textarea  id="comment" required    placeholder="Write Something"></textarea>
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