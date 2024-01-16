import React from "react";
import "../css/App.css";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox, Collapse } from "../components/Content";


function Other() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Card
          id="capacitorsPresentation"
          title="Capacitors in Guitars"
          imageURL="https://lh3.googleusercontent.com/pw/ABLVV8408tpm6kYwoHv3zTW9YWTL_gJHsItpRJu6pRvIbygNWNU1YZJdON7ncP__lrLIgRgQGU9w35N9BJv-7OX13kFVH5fZvbv7638apUrbISIwq5cjhChojNMwvp-3sr0dzQD_QD8itGf0Z4GjeFs69L5TKoEsk5VF3tS1yH9kLlANuk4c9q3LDhurQRWp-4_awfrbuN5_ASIDRY9i4uvAo61zpYGqaGQf0PuOXsUiTG9-GskgHtKI7RResFH_qKwZ1xTxd7DOW4YTgKSaT6f8EYBMjzjnDDpaclSRvoLgFLLBAJZBjlkM9gZ-J-QIOd98r7sCcNevXrgGf1Rcg8aL7xxhoDZ0xnYqt1LLVS5oOmNQPwJIo9olqElRRoyHt13Dv079HRm-qau7Oo_iWPzQTomxJlRd5bbVfz62_-WSeh1_cmm2G9PdHZT3E-ZzOtP8Sz6D7RHRzbXop1t1zxMqTFZBjWnMOBZJ-0AzeEpjVy4tScAkVanDW_i6zp_pqp9qWXQgdtZwSFA0UBEYzA_uW5OMOy8dMeioFaELfsgFy9c2xwoKdzBqBy9gj4XsXo4rXAWMbU1Upd-yF4YLnhHjyeuKYG-IMWKWXUjIyUp9uKO3VzvrQjozSIHccHwVdxB1IBy61DAJ0EWt1zicjGhpd2H_KFtK16gkVgYa64muvK8N7wUZ-oN-Ujtzh8qXyFHZ4onLXuAucjNGOLbNj3lP5Q0oJwaWtDBDNTULOixIzsoD7vs_zwj1ifSUTakmiBneSeBpQxnogQTc1bZ00irBb8Y2lB9OAw9Yo8MgS2Lei-JraIyLBLjj1g5xzxHxTtuyrnjqVOrOEbg81v53YYBjx68RzE6ItIkbENkZda_ZDkN2tvu9rEQckQ32QeFERhfCFQ=w1830-h917-s-no-gm?authuser=0"
          content="This was a presentation I gave in my high school physics class about the uses of capacitors in guitars and other guitar-related equipment equipment."
          redirectURL={"#capacitorsPresentation"}
        />
      </div>
      <Collapse
        title="Sheet Music"
        content={[
          "Here is the first paragraph.",
          "Here is the second paragraph.",
          "And another paragraph...",
        ]}
      />
      <br></br>
      <Footer />
    </div>
  );
}

export default Other;