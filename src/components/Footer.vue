<template>

    <body>
        <div class="footer-dark" >
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item" >
                        <h3>About</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                          
      <h3>Policies</h3>
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Website Accessibility</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                                vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
                                pulvinar dictum vel in justo.</p>
                        </div>
                        <div class="col item social" ref="footerOnScreen">
<a href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />

                            </a><a href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />

                            </a><a href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />

                            </a><a href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />

                            </a>
                            <a href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" />

                            </a>
                        </div>
                    </div>
                    <p class="copyright">SoMedia © 2021. All rights reserved</p>
                </div>
            </footer>
        </div>

    </body>

</template>
<script>
    export default {
        name: "Footer",

        data() {
            return {
            }
        },

  mounted() {

      document.addEventListener('scroll', () => this.onScroll(this.$refs));
    },
    beforeUnmount() {

      document.removeEventListener('scroll', () => this.onScroll(this.$refs));
    },

methods: {
    
      onScroll(ref) {



            if (ref["footerOnScreen"] !== null) {


if (this.isElementInViewport(ref["footerOnScreen"])) {

  this.$store.dispatch("handleDisplayFunctions", {
            footerOnScreen: true,
            params: "footerOnScreen"
          });


    
}else{

  this.$store.dispatch("handleDisplayFunctions", {
            footerOnScreen:false,
            params: "footerOnScreen"
          });

}




          }




      },

      isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      },
},
    }
</script>
<style>
    .footer-dark {
        padding: 50px 0;
        color: #3aa1dd;
        background-color: #01022F;
border-top: 2px solid #e83e8c;
    }

    .footer-dark h3 {
        margin-top: 0;
        margin-bottom: 12px;
        font-weight: bold;
        font-size: 16px;
    }

    .footer-dark ul {
        padding: 0;
        list-style: none;
        line-height: 1.6;
        font-size: 14px;
        margin-bottom: 0;

    }

    .footer-dark ul a {
        color: inherit;
        text-decoration: none;
    }

    .footer-dark ul a:hover {
      color:#e83e8c ;
    }

    @media (max-width:767px) {
        .footer-dark .item:not(.social) {
            text-align: center;
            padding-bottom: 20px;
        }
    }

    .footer-dark .item.text {
        margin-bottom: 36px;
    }

    @media (max-width:767px) {
        .footer-dark .item.text {
            margin-bottom: 0;
        }
    }

    .footer-dark .item.text p {
        opacity: 0.6;
        margin-bottom: 0;
    }

    .footer-dark .item.social {
        text-align: center;
    }

    @media (max-width:991px) {
        .footer-dark .item.social {
            text-align: center;
            margin-top: 20px;
        }
    }

    .footer-dark .item.social>a {

        font-size: 20px;
        width: 36px;
        height: 36px;
        line-height: 36px;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
        /* box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4); */
        margin: 0 8px;
        color: #fff;
        opacity: 0.75;
border: 2px solid #e83e8c;

    }

    .footer-dark .item.social>a:hover {
        opacity: 0.9;
    }

    .footer-dark .copyright {
        text-align: center;
        padding-top: 24px;
        font-size: 13px;
        margin-bottom: 0;
color:#e83e8c  ;
    }
</style>
