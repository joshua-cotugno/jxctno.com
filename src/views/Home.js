import React from "react";
import "../css/App.css";
import TopBar from "../TopBar";
import Card from "../Card";
import Footer from "../Footer";

function Home() {
  return (
    <div className="Home">
      <TopBar />
      <div className="container">
        <div>
          <Card
            id="music"
            imgURL="https://lh3.googleusercontent.com/pw/ABLVV85J0qjs-eKgb3-w59BEIjAAw1RuvPeti0oLcx8kJW2o2HFasqP5lwEaafVyf61Oqwn0B36Pgk47frYQ0saNXCCdcyyXet2uSMcMEPZv3C9VjFi_P9BiamIDrGDKcqsYijzi-x4LCLK2qrvEWQwtbEp9HjzPOZTJhMl3uoIfSrx9j92npjYXb0kfauCk2CJ6EysooJgE9i0kfAvk34PukyPcBHLxYHWPXaRViOGqp9oczPOFATwR8sRoPJZEw9Qdyf7nCfNPx6ZdfJrHY-etJNRG6ABgwK0KMSrW0n5ZnTGVeb6VykDn5VJauGrl0K9j-2wJShIm2wDSIcefRGAR_PwbniuX10v8u8K9AaJ6jCLAIwXWTBskYuQTtTsieGLnQYHR_ndQPo3cW904K73fe3W3toIocS3VNCx8zgdqSJ4cOna8Q0XbrvunVxPMWMMVNokhKztXPA1ZDI8dQ02y4S9-A7pSRS5Ht0e5pVIAhROeZtJIiEDxgBuvvtU4BA5_rrhHCeL83JME-IVwDYI2vlAZoaKYjG-Vtk_KZAWanrBKJRPBUp_E1bKUXUjI1h0OvdZgI-uR5d7TZyF916NBlLq3CEXMcCsCU9kLnt-5ENg_R9EXHmq0q4DeLMRPcDSLt0j03aAh2Iq8guoo9Mvq29UAogryVZ7vYNp2DnFA2tJRNaMZof4aqxRcEkJAV15njeIwmy536Q5GncZ6v4uPWD52zzVlMfGz2o4I451GyUX-GfZD4QXb18J4ST9A-UuYwbjhP9zsq-aECcKEY-xADvvWxHWM_FuLlGygvpVFh7S654Gygpgc9OHAqHujxg--iPLIUWTeVGEWtG-2HW0wOUBN5T9UZZlgzFNPZsbhpMWjafy64z2RkmqyoZzcIBxZ9g=w1024-h576-s-no-gm?authuser=0"
            title="Music"
            content="Content related to music goes here..."
            redirectURL={"/music"}
          />
          <Card
            imgURL="https://lh3.googleusercontent.com/pw/ABLVV842yLuRb5K7KjRntSnYjBZz72zgJCcL31s1O4eP-xkSZt3vyLeeT-OfO5W1-niWq1S2FHUgpLNi_v_wNFcSKI1hRBH_R5CiYjoybP31FIyI42TqrHccSPwai-KTl0S5-Q_y1dzycMtlw2Tl2Zo_xz3AFoYDV2NTCtG1Lz3ja4DlqjDcc5RCP3LG0L4UAWbV9T5vYQ-xwJculIBn_MFc1d2bnYNfjoiL4jo-vduCvB3i7ofXpkQCfZlXMEEVSjV6Sl3Ki3JllVdGzYLclXlSEvtibYcz5vhkMxxRl-MXB2DKLO42bGkUAXpEnT27T3tujUdB72A-fV4P-ZO2V1j68Z1rNMi6FZ52UAJ_oKkZNFO3c4-ZiS7AFzsmevEDy-CeJVPfZyFij-ig1018_cy4JaiJ84-hDmkuEPC22axNbqhrLKdXGyjL8jgUEjNx-SEAbi0-vrTwFGMEsZ7W_tXxvs-oDIJoBRy0EU_vANG0C1IsQOvi9sei8XfNds8HdzB84CT59svL_RxcYrHU_3xo-asyDtxo2koLLQXQOuoqCftqBi5Ty4O6LzgP3oh96xmxfFoAljeu45emITQEStJnqF37pX84AINvPnTI059PKXweXa_pqOVJVLpL7_07xXIoe2dALORd9ovNc1b-JMQOXl2x5baAvHg8M2ntQHWlIhHQFS5dYtavfQQGBZcI-kawWhhHjzlPTWZwiLjUt7x5EDMAIwOzhZgVbRqYbYe0w6X3_8iDMH5-3SA2a4cyxEAK0lLvR4P0w8htY53Iyy_l964p_gUE8lpZXlSzHNTjVAv_rfuKVawDjCNuYDZXi2syH2nH28LQal5qjEkYatQwkDB43hMrsz288HD8Nty5101QgGCRF5Avv_l0SLDkqDuyzg=w1725-h923-s-no-gm?authuser=0"
            id="computer-science"
            title="Computer Science"
            content="Content related to computer science goes here..."
          />
          <Card
            id="other"
            imageURL="https://lh3.googleusercontent.com/pw/ABLVV8408tpm6kYwoHv3zTW9YWTL_gJHsItpRJu6pRvIbygNWNU1YZJdON7ncP__lrLIgRgQGU9w35N9BJv-7OX13kFVH5fZvbv7638apUrbISIwq5cjhChojNMwvp-3sr0dzQD_QD8itGf0Z4GjeFs69L5TKoEsk5VF3tS1yH9kLlANuk4c9q3LDhurQRWp-4_awfrbuN5_ASIDRY9i4uvAo61zpYGqaGQf0PuOXsUiTG9-GskgHtKI7RResFH_qKwZ1xTxd7DOW4YTgKSaT6f8EYBMjzjnDDpaclSRvoLgFLLBAJZBjlkM9gZ-J-QIOd98r7sCcNevXrgGf1Rcg8aL7xxhoDZ0xnYqt1LLVS5oOmNQPwJIo9olqElRRoyHt13Dv079HRm-qau7Oo_iWPzQTomxJlRd5bbVfz62_-WSeh1_cmm2G9PdHZT3E-ZzOtP8Sz6D7RHRzbXop1t1zxMqTFZBjWnMOBZJ-0AzeEpjVy4tScAkVanDW_i6zp_pqp9qWXQgdtZwSFA0UBEYzA_uW5OMOy8dMeioFaELfsgFy9c2xwoKdzBqBy9gj4XsXo4rXAWMbU1Upd-yF4YLnhHjyeuKYG-IMWKWXUjIyUp9uKO3VzvrQjozSIHccHwVdxB1IBy61DAJ0EWt1zicjGhpd2H_KFtK16gkVgYa64muvK8N7wUZ-oN-Ujtzh8qXyFHZ4onLXuAucjNGOLbNj3lP5Q0oJwaWtDBDNTULOixIzsoD7vs_zwj1ifSUTakmiBneSeBpQxnogQTc1bZ00irBb8Y2lB9OAw9Yo8MgS2Lei-JraIyLBLjj1g5xzxHxTtuyrnjqVOrOEbg81v53YYBjx68RzE6ItIkbENkZda_ZDkN2tvu9rEQckQ32QeFERhfCFQ=w1830-h917-s-no-gm?authuser=0"
            title="Other Projects"
            content="Other content goes here..."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
